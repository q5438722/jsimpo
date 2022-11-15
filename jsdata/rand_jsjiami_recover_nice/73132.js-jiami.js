'use strict';
const {
  addComment : addComment
} = require("./add-comment");
const {
  addLabels : addLabels
} = require("./add-labels");
const {
  closeOpen : closeOpen
} = require("./close-open");
const {
  labeler : labeler
} = require("./labeler");
module["exports"] = {
  "addComment" : addComment,
  "addLabels" : addLabels,
  "closeOpen" : closeOpen,
  "labeler" : labeler
};

