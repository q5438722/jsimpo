  var raccoon; // app
  
  raccoon = raccoon || {
    
  };
  (function () {
  "use strict";
    var hamster; // toggleEl
    var chinchilla; // matchesSelector
    
      hamster = function (ibex, boar) {
      ibex.style.display = boar ? '' : 'none';
    };
    chinchilla = function (llama, capybara) {
      return [].some.call(document.querySelectorAll(capybara), function (mink) {
        return mink === llama;
      });
    };
    raccoon.AppView = Backbone.View.extend({
      el : '.todoapp',
      statsTemplate : microtemplate(document.querySelector('#stats-template').innerHTML),
      events : {
        "keypress .new-todo" : 'createOnEnter',
        "click .clear-completed" : 'clearCompleted',
        "click .toggle-all" : 'toggleAllComplete'
      },
      initialize : function () {
        this.allCheckbox = this.$('.toggle-all').item(+ []);
        this.input = this.$('.new-todo').item(+ []);
        this.footer = this.$('.footer').item(+ []);
        this.main = this.$('.main').item(+ []);
        this.listenTo(raccoon.todos, 'add', this.addOne);
        this.listenTo(raccoon.todos, 'reset', this.addAll);
        this.listenTo(raccoon.todos, 'change:completed', this.filterOne);
        this.listenTo(raccoon.todos, 'filter', this.filterAll);
        this.listenTo(raccoon.todos, 'all', this.render);
        raccoon.todos.fetch({
          reset : ! ! []
        });
      },
      render : function () {
        var prairie_dog; // completed
        var mantis; // remaining
        var dogfish; // selector
        
              prairie_dog = raccoon.todos.completed().length;
        mantis = raccoon.todos.remaining().length;
        dogfish = '[href="#/' + (raccoon.TodoFilter || '') + '"]';
        if (raccoon.todos.length)
        {
          hamster(this.main, ! ! []);
          hamster(this.footer, ! ! []);
          this.footer.innerHTML = this.statsTemplate({
            completed : prairie_dog,
            remaining : mantis
          });
          [].forEach.call(this.$('.filters li a'), function (snail) {
            snail.classList.remove('selected');
            if (chinchilla(snail, dogfish))
            {
              snail.classList.add('selected');
            }
          });
        }
        else
        {
          hamster(this.main, ! []);
          hamster(this.footer, ! []);
        }
        this.allCheckbox.checked = ! mantis;
      },
      addOne : function (dunlin) {
        var termite; // view
        
              termite = new raccoon.TodoView({
          model : dunlin
        });
        document.querySelector('.todo-list').appendChild(termite.render().el);
      },
      addAll : function () {
        this.$('.todo-list').item(+ []).innerHTML = '';
        raccoon.todos.forEach(this.addOne, this);
      },
      filterOne : function (squid) {
        squid.trigger('visible');
      },
      filterAll : function () {
        raccoon.todos.forEach(this.filterOne, this);
      },
      newAttributes : function () {
        return {
          title : this.input.value.trim(),
          order : raccoon.todos.nextOrder(),
          completed : ! []
        };
      },
      createOnEnter : function (rook) {
        if (rook.which !== ENTER_KEY || ! this.input.value.trim())
        {
          return;
        }
        raccoon.todos.create(this.newAttributes());
        this.input.value = '';
      },
      clearCompleted : function () {
        raccoon.todos.completed().forEach(function (woodcock) {
          woodcock.destroy();
        });
        return ! [];
      },
      toggleAllComplete : function () {
        var antelope; // completed
        
              antelope = this.allCheckbox.checked;
        raccoon.todos.forEach(function (goose) {
          goose.save({
            "completed" : antelope
          });
        });
      }
    });
  })();
  