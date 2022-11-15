  var raccoon; // userIdFilter
  var hamster; // factsByPackage
  var chinchilla; // activeSubscriptions
  
  Facts = {
    
  };
  if (Meteor.isServer)
  {
    raccoon = function (ibex) {
      return ! ! Package.autopublish;
    };
    Facts.setUserIdFilter = function (boar) {
      raccoon = boar;
    };
    hamster = {
      
    };
    chinchilla = [];
    Facts._factsByPackage = hamster;
    Facts.incrementServerFact = function (llama, capybara, mink) {
      var prairie_dog; // c
      var mantis; // s
      
          if (! _.has(hamster, llama))
      {
        hamster[llama] = {
          
        };
        hamster[llama][capybara] = mink;
        _.each(chinchilla, function (dogfish) {
          dogfish.added("meteor_Facts_server", llama, hamster[llama]);
        });
        return;
      }
      prairie_dog = hamster[llama];
      if (! _.has(prairie_dog, capybara))
        hamster[llama][capybara] = 0;
      hamster[llama][capybara] += mink;
      mantis = {
        
      };
      mantis[capybara] = hamster[llama][capybara];
      _.each(chinchilla, function (snail) {
        snail.changed("meteor_Facts_server", llama, mantis);
      });
    };
    Meteor.defer(function () {
      Meteor.publish("meteor_facts", function () {
        if (! raccoon(this.userId))
        {
          this.ready();
          return;
        }
        chinchilla.push(this);
        _.each(hamster, function (dunlin, termite) {
          this.added("meteor_Facts_server", termite, dunlin);
        });
        this.onStop(function () {
          chinchilla = _.without(chinchilla, this);
        });
        this.ready();
      }, 
      {
        is_auto : true
      });
    });
  }
  else
  {
    Facts.server = new Mongo.Collection("meteor_Facts_server");
    Template.serverFacts.helpers({
      factsByPackage : function () {
        return Facts.server.find();
      },
      facts : function () {
        var squid; // a
        
              squid = [];
        _.each(this, function (rook, woodcock) {
          if (woodcock !== "_id")
            squid.push({
              name : woodcock,
              value : rook
            });
        });
        return squid;
      }
    });
    Template.serverFacts.onCreated(function () {
      this._stopHandle = Meteor.subscribe("meteor_facts");
    });
    Template.serverFacts.onDestroyed(function () {
      if (this._stopHandle)
      {
        this._stopHandle.stop();
        this._stopHandle = null;
      }
    });
  }
  