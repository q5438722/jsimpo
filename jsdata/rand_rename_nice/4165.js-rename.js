'use strict';
define(["jquery", "underscore", "backbone", "collections/todos", "views/todos", "text!templates/stats.html", "common"], function(canCreateDiscussions, _, RmcBackbone, Todos, SelectionView, NoteTemplate, Common) {
  var r = RmcBackbone.View.extend({
    el : ".todoapp",
    template : _.template(NoteTemplate),
    events : {
      "keypress .new-todo" : "createOnEnter",
      "click .clear-completed" : "clearCompleted",
      "click .toggle-all" : "toggleAllComplete"
    },
    initialize : function() {
      this.allCheckbox = this.$(".toggle-all")[0];
      this.$input = this.$(".new-todo");
      this.$footer = this.$(".footer");
      this.$main = this.$(".main");
      this.$todoList = this.$(".todo-list");
      this.listenTo(Todos, "add", this.addOne);
      this.listenTo(Todos, "reset", this.addAll);
      this.listenTo(Todos, "change:completed", this.filterOne);
      this.listenTo(Todos, "filter", this.filterAll);
      this.listenTo(Todos, "all", _.debounce(this.render, 0));
      Todos.fetch({
        reset : true
      });
    },
    render : function() {
      var completed = Todos.completed().length;
      var remaining = Todos.remaining().length;
      if (Todos.length) {
        this.$main.show();
        this.$footer.show();
        this.$footer.html(this.template({
          completed : completed,
          remaining : remaining
        }));
        this.$(".filters li a").removeClass("selected").filter('[href="#/' + (Common.TodoFilter || "") + '"]').addClass("selected");
      } else {
        this.$main.hide();
        this.$footer.hide();
      }
      this.allCheckbox.checked = !remaining;
    },
    addOne : function(e) {
      var view = new SelectionView({
        model : e
      });
      this.$todoList.append(view.render().el);
    },
    addAll : function() {
      this.$todoList.empty();
      Todos.each(this.addOne, this);
    },
    filterOne : function(todo) {
      todo.trigger("visible");
    },
    filterAll : function() {
      Todos.each(this.filterOne, this);
    },
    newAttributes : function() {
      return {
        title : this.$input.val().trim(),
        order : Todos.nextOrder(),
        completed : false
      };
    },
    createOnEnter : function(e) {
      if (e.which !== Common.ENTER_KEY || !this.$input.val().trim()) {
        return;
      }
      Todos.create(this.newAttributes());
      this.$input.val("");
    },
    clearCompleted : function() {
      _.invoke(Todos.completed(), "destroy");
      return false;
    },
    toggleAllComplete : function() {
      var completed = this.allCheckbox.checked;
      Todos.each(function(connection) {
        connection.save({
          completed : completed
        });
      });
    }
  });
  return r;
});

