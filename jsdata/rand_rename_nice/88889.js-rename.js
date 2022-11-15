'use strict';
Facts = {};
var serverFactsCollection = "meteor_Facts_server";
if (Meteor.isServer) {
  var userIdFilter = function(canCreateDiscussions) {
    return !!Package.autopublish;
  };
  Facts.setUserIdFilter = function(canCreateDiscussions) {
    userIdFilter = canCreateDiscussions;
  };
  var factsByPackage = {};
  var activeSubscriptions = [];
  Facts._factsByPackage = factsByPackage;
  Facts.incrementServerFact = function(id, k, v) {
    if (!_.has(factsByPackage, id)) {
      factsByPackage[id] = {};
      factsByPackage[id][k] = v;
      _.each(activeSubscriptions, function(self) {
        self.added(serverFactsCollection, id, factsByPackage[id]);
      });
      return;
    }
    var receiptItem = factsByPackage[id];
    if (!_.has(receiptItem, k)) {
      factsByPackage[id][k] = 0;
    }
    factsByPackage[id][k] += v;
    var changed = {};
    changed[k] = factsByPackage[id][k];
    _.each(activeSubscriptions, function(_) {
      _.changed(serverFactsCollection, id, changed);
    });
  };
  Meteor.defer(function() {
    Meteor.publish("meteor_facts", function() {
      var view = this;
      if (!userIdFilter(this.userId)) {
        view.ready();
        return;
      }
      activeSubscriptions.push(view);
      _.each(factsByPackage, function(fields, id) {
        view.added(serverFactsCollection, id, fields);
      });
      view.onStop(function() {
        activeSubscriptions = _.without(activeSubscriptions, view);
      });
      view.ready();
    }, {
      is_auto : true
    });
  });
} else {
  Facts.server = new Mongo.Collection(serverFactsCollection);
  Template.serverFacts.helpers({
    factsByPackage : function() {
      return Facts.server.find();
    },
    facts : function() {
      var a = [];
      _.each(this, function(command_module_id, propName) {
        if (propName !== "_id") {
          a.push({
            name : propName,
            value : command_module_id
          });
        }
      });
      return a;
    }
  });
  Template.serverFacts.onCreated(function() {
    this._stopHandle = Meteor.subscribe("meteor_facts");
  });
  Template.serverFacts.onDestroyed(function() {
    if (this._stopHandle) {
      this._stopHandle.stop();
      this._stopHandle = null;
    }
  });
}
;
