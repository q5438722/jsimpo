import { Meteor } from "meteor/meteor";import { check } from "meteor/check";import { FileUpload } from "../../app/file-upload";import { Messages } from "../../app/models";Meteor.methods({ deleteFileMessage(e) {
    check(e, String);const o = Messages.getMessageByFileId(e);
    if (o) {
      return Meteor.call("deleteMessage", o);
    }return FileUpload.getStore("Uploads").deleteById(e);
  } });
