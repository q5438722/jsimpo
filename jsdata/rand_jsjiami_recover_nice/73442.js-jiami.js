'use strict';
QUnit["test"]("Testing loopTop:true", function(docs) {
  var callbackVals = _0x69b0e2["gspMd"]["split"]("|");
  var callbackCount = 0;
  for (; !![];) {
    switch(callbackVals[callbackCount++]) {
      case "0":
        nstx["moveSectionUp"]();
        continue;
      case "1":
        var nstx = initFullpageNew(doc, {
          "loopTop" : !![]
        });
        continue;
      case "2":
        docs["equal"]($(doc)["find"](SECTION_ACTIVE_SEL)["index"](), 3, "We expect section 4 to be active");
        continue;
      case "3":
        docs["equal"]($(doc)["find"](SECTION_ACTIVE_SEL)["index"](), 0, _0x69b0e2["lrYUB"]);
        continue;
      case "4":
        var doc = _0x69b0e2["vDFBz"];
        continue;
    }
    break;
  }
});
QUnit["test"]("Testing loopTop:false", function(docs) {
  var callbackVals = _0x21d2fe["IeuXT"]["split"]("|");
  var callbackCount = 0;
  for (; !![];) {
    switch(callbackVals[callbackCount++]) {
      case "0":
        docs["equal"]($(that)["find"](SECTION_ACTIVE_SEL)["index"](), 0, _0x21d2fe["okxPp"]);
        continue;
      case "1":
        var traversalHandler = initFullpageNew(that, {
          "loopTop" : ![]
        });
        continue;
      case "2":
        docs["equal"]($(that)["find"](SECTION_ACTIVE_SEL)["index"](), 0, "We expect section 0 to be active");
        continue;
      case "3":
        traversalHandler["moveSectionUp"]();
        continue;
      case "4":
        var that = "#fullpage";
        continue;
    }
    break;
  }
});

