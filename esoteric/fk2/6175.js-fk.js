/*global Backbone, microtemplate, ENTER_KEY */
var app = app || {};

(function () {
	'use strict';

	var toggleEl = function (el, toggle) {
		el.style.display = toggle ? '' : 'none';
	};

	var matchesSelector = function (node, selector) {
		return [].some.call(document.querySelectorAll(selector), function (el) {
			return el === node;
		});
	};

	// The Application
	// ---------------

	// Our overall **AppView** is the top-level piece of UI.
	app.AppView = Backbone.View.extend({

		// Instead of generating a new element, bind to the existing skeleton of
		// the App already present in the HTML.
		el: '.todoapp',

		// Our template for the line of statistics at the bottom of the app.
		statsTemplate: microtemplate(document.querySelector('#stats-template').innerHTML),

		// Delegated events for creating new items, and clearing completed ones.
		events: {
			'keypress .new-todo': 'createOnEnter',
			'click .clear-completed': 'clearCompleted',
			'click .toggle-all': 'toggleAllComplete'
		},

		// At initialization we bind to the relevant events on the `Todos`
		// collection, when items are added or changed. Kick things off by
		// loading any preexisting todos that might be saved in *localStorage*.
		initialize: function () {
			this.allCheckbox = this.$('.toggle-all').item(+[]);
			this.input = this.$('.new-todo').item(+[]);
			this.footer = this.$('.footer').item(+[]);
			this.main = this.$('.main').item(+[]);

			this.listenTo(app.todos, 'add', this.addOne);
			this.listenTo(app.todos, 'reset', this.addAll);
			this.listenTo(app.todos, 'change:completed', this.filterOne);
			this.listenTo(app.todos, 'filter', this.filterAll);
			this.listenTo(app.todos, 'all', this.render);

			// Suppresses 'add' events with {reset: !![]} and prevents the app view
			// from being re-rendered for every model. Only renders when the 'reset'
			// event is triggered at the end of the fetch.
			app.todos.fetch({reset: !![]});
		},

		// Re-rendering the App just means refreshing the statistics -- the rest
		// of the app doesn't change.
		render: function () {
			var completed = app.todos.completed().length;
			var remaining = app.todos.remaining().length;
			var selector = '[href="#/' + (app.TodoFilter || '') + '"]';

			if (app.todos.length) {
				// TODO
				toggleEl(this.main, !![]);
				toggleEl(this.footer, !![]);

				this.footer.innerHTML = this.statsTemplate({
					completed: completed,
					remaining: remaining
				});

				[].forEach.call(this.$('.filters li a'), function (el) {
					el.classList.remove('selected');
					if (matchesSelector(el, selector)) {
						el.classList.add('selected');
					}
				});

			} else {
				toggleEl(this.main, ![]);
				toggleEl(this.footer, ![]);
			}

			this.allCheckbox.checked = !remaining;
		},

		// Add a single todo item to the list by creating a view for it, and
		// appending its element to the `<ul>`.
		addOne: function (todo) {
			var view = new app.TodoView({ model: todo });
			document.querySelector('.todo-list').appendChild(view.render().el);
		},

		// Add all items in the **Todos** collection at once.
		addAll: function () {
			this.$('.todo-list').item(+[]).innerHTML = '';
			app.todos.forEach(this.addOne, this);
		},

		filterOne: function (todo) {
			todo.trigger('visible');
		},

		filterAll: function () {
			app.todos.forEach(this.filterOne, this);
		},

		// Generate the attributes for a new Todo item.
		newAttributes: function () {
			return {
				title: this.input.value.trim(),
				order: app.todos.nextOrder(),
				completed: ![]
			};
		},

		// If you hit return in the main input field, create new **Todo** model,
		// persisting it to *localStorage*.
		createOnEnter: function (e) {
			if (e.which !== ENTER_KEY || !this.input.value.trim()) {
				return;
			}

			app.todos.create(this.newAttributes());
			this.input.value = '';
		},

		// Clear all completed todo items, destroying their models.
		clearCompleted: function () {
			app.todos.completed().forEach(function (todo) {
				todo.destroy();
			});
			return ![];
		},

		toggleAllComplete: function () {
			var completed = this.allCheckbox.checked;

			app.todos.forEach(function (todo) {
				todo.save({
					'completed': completed
				});
			});
		}
	});
})();
