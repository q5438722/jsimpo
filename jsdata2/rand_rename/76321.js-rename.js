import{Meteor}from"meteor/meteor";import{Tracker}from"meteor/tracker";class Notifications{constructor(...e){this.logged=Meteor.userId()!==null;this.loginCb=[];Tracker.autorun(()=>{if(Meteor.userId()!==null&&this.logged===false){this.loginCb.forEach(e=>e())}this.logged=Meteor.userId()!==null});this.debug=false;this.streamAll=new Meteor.Streamer("notify-all");this.streamLogged=new Meteor.Streamer("notify-logged");this.streamRoom=new Meteor.Streamer("notify-room");this.streamRoomUsers=new Meteor.Streamer("notify-room-users");this.streamUser=new Meteor.Streamer("notify-user");if(this.debug===true){this.onAll(function(){return console.log("RocketChat.Notifications: onAll",e)});this.onUser(function(){return console.log("RocketChat.Notifications: onAll",e)})}}onLogin(e){this.loginCb.push(e);if(this.logged){return e()}}notifyRoom(e,t,...o){if(this.debug===true){console.log("RocketChat.Notifications: notifyRoom",[e,t,...o])}o.unshift(`${e}/${t}`);return this.streamRoom.emit.apply(this.streamRoom,o)}notifyUser(e,t,...o){if(this.debug===true){console.log("RocketChat.Notifications: notifyUser",[e,t,...o])}o.unshift(`${e}/${t}`);return this.streamUser.emit.apply(this.streamUser,o)}notifyUsersOfRoom(e,t,...o){if(this.debug===true){console.log("RocketChat.Notifications: notifyUsersOfRoom",[e,t,...o])}o.unshift(`${e}/${t}`);return this.streamRoomUsers.emit.apply(this.streamRoomUsers,o)}onAll(e,t){return this.streamAll.on(e,t)}onLogged(e,t){return this.onLogin(()=>this.streamLogged.on(e,t))}onRoom(e,t,o){if(this.debug===true){this.streamRoom.on(e,function(){return console.log(`RocketChat.Notifications: onRoom ${e}`,[e,t,o])})}return this.streamRoom.on(`${e}/${t}`,o)}async onUser(e,t){await this.streamUser.on(`${Meteor.userId()}/${e}`,t);return()=>this.unUser(e,t)}unAll(e){return this.streamAll.removeListener("notify",e)}unLogged(e){return this.streamLogged.removeListener("notify",e)}unRoom(e,t,o){return this.streamRoom.removeListener(`${e}/${t}`,o)}unUser(e,t){return this.streamUser.removeListener(`${Meteor.userId()}/${e}`,t)}}export default new Notifications;