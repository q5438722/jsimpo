  define(['jquery', 'underscore', 'backbone', 'collections/todos', 'views/todos', 'text!templates/stats.html', 'common', ], 
  function (raccoon, hamster, chinchilla, ibex, boar, llama, capybara) {
  "use strict";
    var mink; // AppView
    
      mink = chinchilla.View.extend({
      el : '.todoapp',
      template : hamster.template(llama),
      events : {
        "keypress .new-todo" : 'createOnEnter',
        "click .clear-completed" : 'clearCompleted',
        "click .toggle-all" : 'toggleAllComplete'
      },
      initialize : function () {
        this.allCheckbox = this.$('.toggle-all')[+ []];
        this.$input = this.$('.new-todo');
        this.$footer = this.$('.footer');
        this.$main = this.$('.main');
        this.$todoList = this.$('.todo-list');
        this.listenTo(ibex, 'add', this.addOne);
        this.listenTo(ibex, 'reset', this.addAll);
        this.listenTo(ibex, 'change:completed', this.filterOne);
        this.listenTo(ibex, 'filter', this.filterAll);
        this.listenTo(ibex, 'all', hamster.debounce(this.render, + []));
        ibex.fetch({
          reset : ! ! []
        });
      },
      render : function () {
        var prairie_dog; // completed
        var mantis; // remaining
        
              prairie_dog = ibex.completed().length;
        mantis = ibex.remaining().length;
        if (ibex.length)
        {
          this.$main.show();
          this.$footer.show();
          this.$footer.html(this.template({
            completed : prairie_dog,
            remaining : mantis
          }));
          this.$('.filters li a').removeClass('selected').filter('[href="#/' + (capybara.TodoFilter || '') + '"]').addClass('selected');
        }
        else
        {
          this.$main.hide();
          this.$footer.hide();
        }
        this.allCheckbox.checked = ! mantis;
      },
      addOne : function (dogfish) {
        var snail; // view
        
              snail = new boar({
          model : dogfish
        });
        this.$todoList.append(snail.render().el);
      },
      addAll : function () {
        this.$todoList.empty();
        ibex.each(this.addOne, this);
      },
      filterOne : function (dunlin) {
        dunlin.trigger('visible');
      },
      filterAll : function () {
        ibex.each(this.filterOne, this);
      },
      newAttributes : function () {
        return {
          title : this.$input.val().trim(),
          order : ibex.nextOrder(),
          completed : ! []
        };
      },
      createOnEnter : function (termite) {
        if (termite.which !== capybara.ENTER_KEY || ! this.$input.val().trim())
        {
          return;
        }
        ibex.create(this.newAttributes());
        this.$input.val('');
      },
      clearCompleted : function () {
        hamster.invoke(ibex.completed(), 'destroy');
        return ! [];
      },
      toggleAllComplete : function () {
        var squid; // completed
        
              squid = this.allCheckbox.checked;
        ibex.each(function (rook) {
          rook.save({
            completed : squid
          });
        });
      }
    });
    return mink;
  });
  