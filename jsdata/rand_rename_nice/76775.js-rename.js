'use strict';
import{
  Meteor as Meteor
}from "meteor/meteor";
import{
  check as check
}from "meteor/check";
import{
  Subscriptions as Subscriptions
}from "../../app/models";
import{
  hasPermission as hasPermission
}from "../../app/authorization";
import{
  settings as settings
}from "../../app/settings";
import{
  loadMessageHistory as loadMessageHistory
}from "../../app/lib/server";
Meteor.methods({
  loadHistory(rid, callback, maxApiRequestSize = 20, ls, t = true) {
    check(rid, String);
    if (!Meteor.userId() && settings.get("Accounts_AllowAnonymousRead") === false) {
      throw new Meteor.Error("error-invalid-user", "Invalid user", {
        method : "loadHistory"
      });
    }
    const userId = Meteor.userId();
    const tp = Meteor.call("canAccessRoom", rid, userId);
    if (!tp) {
      return false;
    }
    const b = settings.get("Accounts_AllowAnonymousRead");
    const a = hasPermission(userId, "preview-c-room");
    if (tp.t === "c" && !b && !a && !Subscriptions.findOneByRoomIdAndUserId(rid, userId, {
      fields : {
        _id : 1
      }
    })) {
      return false;
    }
    return loadMessageHistory({
      userId : userId,
      rid : rid,
      end : callback,
      limit : maxApiRequestSize,
      ls : ls,
      showThreadMessages : t
    });
  }
});

