  var raccoon; // app
  
  raccoon = raccoon || {
    
  };
  (function () {
  "use strict";
    var hamster; // o
    var chinchilla; // l
    
      hamster = function (ibex, boar) {
      ibex.style.display = boar ? "" : "none";
    };
    chinchilla = function (llama, capybara) {
      return [].some.call(document.querySelectorAll(capybara), function (mink) {
        return mink === llama;
      });
    };
    raccoon.AppView = Backbone.View.extend({
      el : ".todoapp",
      statsTemplate : microtemplate(document.querySelector("#stats-template").innerHTML),
      events : {
        "keypress .new-todo" : "createOnEnter",
        "click .clear-completed" : "clearCompleted",
        "click .toggle-all" : "toggleAllComplete"
      },
      initialize : function () {
        this.allCheckbox = this.$(".toggle-all").item(0);
        this.input = this.$(".new-todo").item(0);
        this.footer = this.$(".footer").item(0);
        this.main = this.$(".main").item(0);
        this.listenTo(raccoon.todos, "add", this.addOne);
        this.listenTo(raccoon.todos, "reset", this.addAll);
        this.listenTo(raccoon.todos, "change:completed", this.filterOne);
        this.listenTo(raccoon.todos, "filter", this.filterAll);
        this.listenTo(raccoon.todos, "all", this.render);
        raccoon.todos.fetch({
          reset : true
        });
      },
      render : function () {
        var prairie_dog; // t
        var mantis; // e
        var dogfish; // i
        
              prairie_dog = raccoon.todos.completed().length;
        mantis = raccoon.todos.remaining().length;
        dogfish = '[href="#/' + (raccoon.TodoFilter || "") + '"]';
        if (raccoon.todos.length)
        {
          hamster(this.main, true);
          hamster(this.footer, true);
          this.footer.innerHTML = this.statsTemplate({
            completed : prairie_dog,
            remaining : mantis
          });
          [].forEach.call(this.$(".filters li a"), function (snail) {
            snail.classList.remove("selected");
            if (chinchilla(snail, dogfish))
            {
              snail.classList.add("selected");
            }
          });
        }
        else
        {
          hamster(this.main, false);
          hamster(this.footer, false);
        }
        this.allCheckbox.checked = ! mantis;
      },
      addOne : function (dunlin) {
        var termite; // e
        
              termite = new raccoon.TodoView({
          model : dunlin
        });
        document.querySelector(".todo-list").appendChild(termite.render().el);
      },
      addAll : function () {
        this.$(".todo-list").item(0).innerHTML = "";
        raccoon.todos.forEach(this.addOne, this);
      },
      filterOne : function (squid) {
        squid.trigger("visible");
      },
      filterAll : function () {
        raccoon.todos.forEach(this.filterOne, this);
      },
      newAttributes : function () {
        return {
          title : this.input.value.trim(),
          order : raccoon.todos.nextOrder(),
          completed : false
        };
      },
      createOnEnter : function (rook) {
        if (rook.which !== ENTER_KEY || ! this.input.value.trim())
        {
          return;
        }
        raccoon.todos.create(this.newAttributes());
        this.input.value = "";
      },
      clearCompleted : function () {
        raccoon.todos.completed().forEach(function (woodcock) {
          woodcock.destroy();
        });
        return false;
      },
      toggleAllComplete : function () {
        var antelope; // e
        
              antelope = this.allCheckbox.checked;
        raccoon.todos.forEach(function (goose) {
          goose.save({
            completed : antelope
          });
        });
      }
    });
  })();
  