import { Meteor } from "meteor/meteor";import { check } from "meteor/check";import { Subscriptions } from "../../app/models";import { hasPermission } from "../../app/authorization";import { settings } from "../../app/settings";import { loadMessageHistory } from "../../app/lib/server";Meteor.methods({ loadHistory(e, o, r = 20, s, t = true) {
    check(e, String);if (!Meteor.userId() && settings.get("Accounts_AllowAnonymousRead") === false) {
      throw new Meteor.Error("error-invalid-user", "Invalid user", { method: "loadHistory" });
    }const i = Meteor.userId();
    const n = Meteor.call("canAccessRoom", e, i);
    if (!n) {
      return false;
    }const m = settings.get("Accounts_AllowAnonymousRead");
    const a = hasPermission(i, "preview-c-room");
    if (n.t === "c" && !m && !a && !Subscriptions.findOneByRoomIdAndUserId(e, i, { fields: { _id: 1 } })) {
      return false;
    }return loadMessageHistory({ userId: i, rid: e, end: o, limit: r, ls: s, showThreadMessages: t });
  } });