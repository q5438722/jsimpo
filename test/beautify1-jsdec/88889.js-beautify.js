Facts={};var serverFactsCollection='meteor_Facts_server';if(Meteor.isServer){var userIdFilter=function(userId){return!!Package.autopublish};Facts.setUserIdFilter=function(filter){userIdFilter=filter};var factsByPackage={};var activeSubscriptions=[];Facts._factsByPackage=factsByPackage;Facts.incrementServerFact=function(pkg,fact,increment){if(!_.has(factsByPackage,pkg)){factsByPackage[pkg]={};factsByPackage[pkg][fact]=increment;_.each(activeSubscriptions,function(sub){sub.added(serverFactsCollection,pkg,factsByPackage[pkg])});return}var packageFacts=factsByPackage[pkg];if(!_.has(packageFacts,fact))factsByPackage[pkg][fact]=0;factsByPackage[pkg][fact]+=increment;var changedField={};changedField[fact]=factsByPackage[pkg][fact];_.each(activeSubscriptions,function(sub){sub.changed(serverFactsCollection,pkg,changedField)})};Meteor.defer(function(){Meteor.publish("meteor_facts",function(){var sub=this;if(!userIdFilter(this.userId)){sub.ready();return}activeSubscriptions.push(sub);_.each(factsByPackage,function(facts,pkg){sub.added(serverFactsCollection,pkg,facts)});sub.onStop(function(){activeSubscriptions=_.without(activeSubscriptions,sub)});sub.ready()},{is_auto:true})})}else{Facts.server=new Mongo.Collection(serverFactsCollection);Template.serverFacts.helpers({factsByPackage:function(){return Facts.server.find()},facts:function(){var factArray=[];_.each(this,function(value,name){if(name!=='_id')factArray.push({name:name,value:value})});return factArray}});Template.serverFacts.onCreated(function(){this._stopHandle=Meteor.subscribe("meteor_facts")});Template.serverFacts.onDestroyed(function(){if(this._stopHandle){this._stopHandle.stop();this._stopHandle=null}})}