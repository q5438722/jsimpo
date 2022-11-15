'use strict';
import{
  Meteor as Meteor
}from "meteor/meteor";
import{
  check as check
}from "meteor/check";
import{
  FileUpload as FileUpload
}from "../../app/file-upload";
import{
  Messages as Messages
}from "../../app/models";
Meteor.methods({
  deleteFileMessage(fileID) {
    check(fileID, String);
    const networkSlug = Messages.getMessageByFileId(fileID);
    if (networkSlug) {
      return Meteor.call("deleteMessage", networkSlug);
    }
    return FileUpload.getStore("Uploads").deleteById(fileID);
  }
});

