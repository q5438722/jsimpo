import { Meteor } from "meteor/meteor";import { Blaze } from "meteor/blaze";import { roomTypes } from "../../utils/client";import { Rooms, Subscriptions } from "../../models";import { MessageAction } from "../../ui-utils";import { messageArgs } from "../../ui-utils/client/lib/messageArgs";import { EmojiPicker } from "../../emoji";import { tooltip } from "../../ui/client/components/tooltip";export const EmojiEvents = { "click .add-reaction"(e) {
    e.preventDefault();e.stopPropagation();const t = Blaze.getData(e.currentTarget);
    var { msg: { rid: o, _id: r, private: i } } = messageArgs(t);
    const s = Meteor.user();
    const a = Rooms.findOne({ _id: o });
    if (!a) {
      return false;
    }if (!Subscriptions.findOne({ rid: o })) {
      return false;
    }if (i) {
      return false;
    }if (roomTypes.readOnly(a._id, s._id) && !a.reactWhenReadOnly) {
      return false;
    }EmojiPicker.open(e.currentTarget, e => {
      Meteor.call("setReaction", `:${e}:`, r);
    });
  }, "click .reactions > li:not(.add-reaction)"(e) {
    e.preventDefault();const t = Blaze.getData(e.currentTarget);
    var { msg: { _id: o } } = messageArgs(t);
    Meteor.call("setReaction", $(e.currentTarget).attr("data-emoji"), o, () => {
      tooltip.hide();
    });
  }, "mouseenter .reactions > li:not(.add-reaction)"(e) {
    e.stopPropagation();tooltip.showElement($(e.currentTarget).find(".people").get(0), e.currentTarget);
  }, "mouseleave .reactions > li:not(.add-reaction)"(e) {
    e.stopPropagation();tooltip.hide();
  } };Meteor.startup(function () {
  MessageAction.addButton({ id: "reaction-message", icon: "add-reaction", label: "Add_Reaction", context: ["message", "message-mobile", "threads"], action(e) {
      e.stopPropagation();var { msg: t } = messageArgs(this);
      EmojiPicker.open(e.currentTarget, e => Meteor.call("setReaction", `:${e}:`, t._id));
    }, condition({ msg: e, u: t, room: o, subscription: r }) {
      if (!o) {
        return false;
      }if (!r) {
        return false;
      }if (e.private) {
        return false;
      }if (roomTypes.readOnly(o._id, t._id) && !o.reactWhenReadOnly) {
        return false;
      }const i = roomTypes.isLivechatRoom(o.t);
      if (i) {
        return false;
      }return true;
    }, order: -2, group: ["message", "menu"] });
});
