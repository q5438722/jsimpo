'use strict';
var app = app || {};
(function() {
  var toggleEl = function(el, toggle) {
    el.style.display = toggle ? "" : "none";
  };
  var query = function(n, elem) {
    return [].some.call(document.querySelectorAll(elem), function(deep) {
      return deep === n;
    });
  };
  app.AppView = Backbone.View.extend({
    el : ".todoapp",
    statsTemplate : microtemplate(document.querySelector("#stats-template").innerHTML),
    events : {
      "keypress .new-todo" : "createOnEnter",
      "click .clear-completed" : "clearCompleted",
      "click .toggle-all" : "toggleAllComplete"
    },
    initialize : function() {
      this.allCheckbox = this.$(".toggle-all").item(0);
      this.input = this.$(".new-todo").item(0);
      this.footer = this.$(".footer").item(0);
      this.main = this.$(".main").item(0);
      this.listenTo(app.todos, "add", this.addOne);
      this.listenTo(app.todos, "reset", this.addAll);
      this.listenTo(app.todos, "change:completed", this.filterOne);
      this.listenTo(app.todos, "filter", this.filterAll);
      this.listenTo(app.todos, "all", this.render);
      app.todos.fetch({
        reset : true
      });
    },
    render : function() {
      var completed = app.todos.completed().length;
      var remaining = app.todos.remaining().length;
      var legend = '[href="#/' + (app.TodoFilter || "") + '"]';
      if (app.todos.length) {
        toggleEl(this.main, true);
        toggleEl(this.footer, true);
        this.footer.innerHTML = this.statsTemplate({
          completed : completed,
          remaining : remaining
        });
        [].forEach.call(this.$(".filters li a"), function(inner) {
          inner.classList.remove("selected");
          if (query(inner, legend)) {
            inner.classList.add("selected");
          }
        });
      } else {
        toggleEl(this.main, false);
        toggleEl(this.footer, false);
      }
      this.allCheckbox.checked = !remaining;
    },
    addOne : function(dirent) {
      var mipAd = new app.TodoView({
        model : dirent
      });
      document.querySelector(".todo-list").appendChild(mipAd.render().el);
    },
    addAll : function() {
      this.$(".todo-list").item(0).innerHTML = "";
      app.todos.forEach(this.addOne, this);
    },
    filterOne : function(todo) {
      todo.trigger("visible");
    },
    filterAll : function() {
      app.todos.forEach(this.filterOne, this);
    },
    newAttributes : function() {
      return {
        title : this.input.value.trim(),
        order : app.todos.nextOrder(),
        completed : false
      };
    },
    createOnEnter : function(event) {
      if (event.which !== ENTER_KEY || !this.input.value.trim()) {
        return;
      }
      app.todos.create(this.newAttributes());
      this.input.value = "";
    },
    clearCompleted : function() {
      app.todos.completed().forEach(function(anAlertDialog) {
        anAlertDialog.destroy();
      });
      return false;
    },
    toggleAllComplete : function() {
      var completed = this.allCheckbox.checked;
      app.todos.forEach(function(connection) {
        connection.save({
          completed : completed
        });
      });
    }
  });
})();

