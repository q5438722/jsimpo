'use strict';
var ATrue;
(function(canCreateDiscussions) {
  canCreateDiscussions[canCreateDiscussions["IsTrue"] = 1] = "IsTrue";
  canCreateDiscussions[canCreateDiscussions["IsFalse"] = 0] = "IsFalse";
})(ATrue || (ATrue = {}));
if (false) {
  console.info("unreachable");
} else {
  if (true) {
    throw Error("throw early");
  } else {
    console.info("unreachable");
  }
}
;
