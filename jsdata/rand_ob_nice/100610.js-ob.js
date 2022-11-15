'use strict';
const URL_AVATAR_ICONS = ["length", "getIdentifier", "Invalid token in FormCalc expression at position ", "getString", "charCodeAt", "ffgVT", "substring", "push", "mRzIa", "fromCharCode", "agePl", "MFPoy", "glzdn", "usNAM", "join", "getNumber", "ygRVL", "UmUGj", "mTzOO", "getCompOperator", "GxhLd", "getLower", "sFEbk", "getSlash", "rNJwU", "skipUntilEOL", "getDot", "iSIYJ", "dotDot", "sxNfy", "DDzjW", "kyCXp", "VkBJY", "ouuzL", "dot", "leftParen", "rightParen", "times", "plus", "comma", "minus", 
"divide", "assign", "leftBracket", "rightBracket", "126998ySDuTe", "4IOfYnY", "90zXGfIX", "4077BMIbEq", "19643WWDGlf", "5701LKwAEB", "25ktUoYx", "195348CiVKjG", "547911QYKJaq", "1077142ImQzDu", "and", "break", "continue", "elseif", "end", "endfunc", "endif", "endwhile", "exit", "foreach", "nan", "not", "return", "step", "then", "this", "throw", "upto", "var", "while", "string", "infinity", "create", "ycLau", "hOnCk", "number", "FWVYC", "entries", "has", "data", "pos", "len", "strBuf", "slice", "match", 
"index"];
function m(b, i) {
  return m = function(value, i) {
    value = value - (-1 * -9649 + -8117 * -1 + -17496);
    let d = URL_AVATAR_ICONS[value];
    return d;
  }, m(b, i);
}
const URL_ICON_BACK = m;
(function(data, val) {
  const toMonths = m;
  for (; !![];) {
    try {
      const nodeval = -parseInt(toMonths(270)) * -parseInt(toMonths(271)) + -parseInt(toMonths(272)) * -parseInt(toMonths(273)) + parseInt(toMonths(274)) + -parseInt(toMonths(275)) * parseInt(toMonths(276)) + parseInt(toMonths(277)) + parseInt(toMonths(278)) + -parseInt(toMonths(279));
      if (nodeval === val) {
        break;
      } else {
        data["push"](data["shift"]());
      }
    } catch (_0x290a8f) {
      data["push"](data["shift"]());
    }
  }
})(URL_AVATAR_ICONS, -537679 + 19939 * -1 + 975775);
const leon_construct = new Set([URL_ICON_BACK(280), URL_ICON_BACK(281), URL_ICON_BACK(282), "do", "downto", "else", URL_ICON_BACK(283), URL_ICON_BACK(284), "endfor", URL_ICON_BACK(285), URL_ICON_BACK(286), URL_ICON_BACK(287), "eq", URL_ICON_BACK(288), "for", URL_ICON_BACK(289), "func", "ge", "gt", "if", "in", "infinity", "le", "lt", URL_ICON_BACK(290), "ne", URL_ICON_BACK(291), "null", "or", URL_ICON_BACK(292), URL_ICON_BACK(293), URL_ICON_BACK(294), URL_ICON_BACK(295), URL_ICON_BACK(296), URL_ICON_BACK(297), 
URL_ICON_BACK(298), URL_ICON_BACK(299)]);
const target = {
  "and" : 0,
  "divide" : 1,
  "dot" : 2,
  "dotDot" : 3,
  "dotHash" : 4,
  "dotStar" : 5,
  "eq" : 6,
  "ge" : 7,
  "gt" : 8,
  "le" : 9,
  "leftBracket" : 10,
  "leftParen" : 11,
  "lt" : 12,
  "minus" : 13,
  "ne" : 14,
  "not" : 15,
  "null" : 16,
  "number" : 17,
  "or" : 18,
  "plus" : 19,
  "rightBracket" : 20,
  "rightParen" : 21,
  "string" : 22,
  "this" : 23,
  "times" : 24,
  "identifier" : 25,
  "break" : 26,
  "continue" : 27,
  "do" : 28,
  "for" : 29,
  "foreach" : 30,
  "func" : 31,
  "if" : 32,
  "var" : 33,
  "while" : 34,
  "assign" : 35,
  "comma" : 36,
  "downto" : 37,
  "else" : 38,
  "elseif" : 39,
  "end" : 40,
  "endif" : 41,
  "endfor" : 42,
  "endfunc" : 43,
  "endwhile" : 44,
  "eof" : 45,
  "exit" : 46,
  "in" : 47,
  "infinity" : 48,
  "nan" : 49,
  "return" : 50,
  "step" : 51,
  "then" : 52,
  "throw" : 53,
  "upto" : 54
};
const URL_ICON_DRIVE_DOCUMENT = /^[uU]([0-9a-fA-F]{4,8})/;
const URL_ICON_DRIVE_SPREADSHEET = /^[0-9]*(?:\.[0-9]*)?(?:[Ee][+-]?[0-9]+)?/;
const URL_ICON_GRID = /^[0-9]*(?:[Ee][+-]?[0-9]+)?/;
const URL_ICON_FOLDER = /[\r\n]+/;
const URL_ICON_INFO = new RegExp("^[\\p{L}_$!][\\p{L}\\p{N}_$]*", "u");
class Token {
  constructor(tokens, calldata = null) {
    this["id"] = tokens;
    this["value"] = calldata;
  }
}
const op = function() {
  const randInt = URL_ICON_BACK;
  const weight = {
    "ycLau" : "identifier",
    "hOnCk" : randInt(300),
    "FWVYC" : randInt(301)
  };
  const array = Object[randInt(302)](null);
  const indexMap = new Set([weight[randInt(303)], weight[randInt(304)], randInt(305), randInt(290), weight[randInt(306)]]);
  for (const [i, str] of Object[randInt(307)](target)) {
    if (!indexMap[randInt(308)](i)) {
      array[i] = new Token(str);
    }
  }
  return array[randInt(290)] = new Token(target[randInt(305)], NaN), array["infinity"] = new Token(target[randInt(305)], Infinity), array;
}();
class Lexer {
  constructor(options) {
    const ChromosomeInfo = URL_ICON_BACK;
    this[ChromosomeInfo(309)] = options;
    this[ChromosomeInfo(310)] = 24 * -26 + 7959 + -7335;
    this[ChromosomeInfo(311)] = options["length"];
    this[ChromosomeInfo(312)] = [];
  }
  ["skipUntilEOL"]() {
    const rel2Mstr = URL_ICON_BACK;
    const same = this[rel2Mstr(309)][rel2Mstr(313)](this[rel2Mstr(310)])[rel2Mstr(314)](URL_ICON_FOLDER);
    if (same) {
      this[rel2Mstr(310)] += same[rel2Mstr(315)] + same[3803 + 1938 * -3 + 2011][rel2Mstr(316)];
    } else {
      this["pos"] = this[rel2Mstr(311)];
    }
  }
  [URL_ICON_BACK(317)]() {
    const getAttr = URL_ICON_BACK;
    this[getAttr(310)]--;
    const data = this[getAttr(309)]["slice"](this[getAttr(310)])[getAttr(314)](URL_ICON_INFO);
    if (!data) {
      throw new Error(getAttr(318) + this["pos"] + ".");
    }
    const startOffset = this[getAttr(309)][getAttr(313)](this[getAttr(310)], this[getAttr(310)] + data[-2065 + -736 * 6 + 6481][getAttr(316)]);
    this[getAttr(310)] += data[2633 + -1327 * -6 + -10595]["length"];
    const name = startOffset["toLowerCase"]();
    if (!leon_construct[getAttr(308)](name)) {
      return new Token(target["identifier"], startOffset);
    }
    return op[name];
  }
  [URL_ICON_BACK(319)]() {
    const exposedName = URL_ICON_BACK;
    const frame_parser = {
      "FAhqA" : function(progressOld, progressNew) {
        return progressOld < progressNew;
      },
      "ffgVT" : function(name, initialValue) {
        return name === initialValue;
      },
      "mRzIa" : function(connectNumber, concurency) {
        return connectNumber - concurency;
      },
      "usNAM" : function(name, initialValue) {
        return name === initialValue;
      },
      "agePl" : function(value, joiner) {
        return value !== joiner;
      },
      "MFPoy" : function(require, load, callback) {
        return require(load, callback);
      },
      "glzdn" : function(require, load, callback) {
        return require(load, callback);
      }
    };
    const allBindings = this[exposedName(312)];
    const command_codes = this[exposedName(309)];
    let data = this[exposedName(310)];
    for (; frame_parser["FAhqA"](this["pos"], this[exposedName(311)]);) {
      const frame = command_codes[exposedName(320)](this["pos"]++);
      if (frame === 1669 * 1 + -356 * 24 + 6909) {
        if (frame_parser[exposedName(321)](command_codes[exposedName(320)](this["pos"]), 298 + 4612 + 53 * -92)) {
          allBindings["push"](command_codes[exposedName(313)](data, this["pos"]++));
          data = this[exposedName(310)];
          continue;
        }
        break;
      }
      if (frame_parser[exposedName(321)](frame, 1 * 929 + -8771 + 2 * 3967)) {
        const _0x198480 = command_codes[exposedName(322)](this[exposedName(310)], this[exposedName(310)] + (9451 + 404 + 11 * -895))[exposedName(314)](URL_ICON_DRIVE_DOCUMENT);
        if (!_0x198480) {
          continue;
        }
        allBindings[exposedName(323)](command_codes["slice"](data, frame_parser[exposedName(324)](this["pos"], -6982 * -1 + 1644 + -8625)));
        const buffer = _0x198480[-5687 + 4 * 644 + 2 * 1556];
        if (frame_parser["usNAM"](buffer[exposedName(316)], 5647 * 1 + -3305 + -2 * 1169)) {
          allBindings[exposedName(323)](String[exposedName(325)](parseInt(buffer, -426 * 8 + 834 + -2 * -1295)));
          data = this[exposedName(310)] += 7759 + -1 * 1337 + 3 * -2139;
        } else {
          if (frame_parser[exposedName(326)](buffer[exposedName(316)], 988 + 5704 + -3 * 2228)) {
            allBindings["push"](String[exposedName(325)](frame_parser[exposedName(327)](parseInt, buffer["slice"](2241 + -1 * 2603 + -362 * -1, 6796 + -4784 + -2008 * 1), 7 * 506 + 8939 + -12465)));
            data = this[exposedName(310)] += -1 * -9047 + -5296 + -3746 * 1;
          } else {
            allBindings[exposedName(323)](String["fromCharCode"](frame_parser[exposedName(328)](parseInt, buffer, 2276 * 2 + 1951 * 1 + -6487 * 1)));
            data = this[exposedName(310)] += -692 + 3040 + -2339;
          }
        }
      }
    }
    const value = command_codes[exposedName(313)](data, this["pos"] - (-3 * 1589 + -1 * 2593 + 7361));
    if (frame_parser[exposedName(329)](allBindings[exposedName(316)], 9050 + 3408 + -12458)) {
      return new Token(target[exposedName(300)], value);
    }
    allBindings[exposedName(323)](value);
    const startOffset = allBindings[exposedName(330)]("");
    return allBindings[exposedName(316)] = -8803 + -2 * 2997 + 14797, new Token(target["string"], startOffset);
  }
  [URL_ICON_BACK(331)](data) {
    const exposedName = URL_ICON_BACK;
    const command_codes = {
      "ygRVL" : function(connectNumber, concurency) {
        return connectNumber - concurency;
      },
      "UmUGj" : function(saveNotifs, notifications) {
        return saveNotifs(notifications);
      },
      "mTzOO" : function(formatters, customFormatters) {
        return formatters + customFormatters;
      }
    };
    const names = this["data"][exposedName(322)](this["pos"])[exposedName(314)](URL_ICON_DRIVE_SPREADSHEET);
    if (!names) {
      return command_codes[exposedName(332)](data, 2272 + -4883 + 2659);
    }
    const startOffset = command_codes[exposedName(333)](parseFloat, this[exposedName(309)][exposedName(322)](command_codes[exposedName(332)](this["pos"], 5275 + -212 * 9 + -3366), command_codes[exposedName(334)](this[exposedName(310)], names[97 * 91 + -1801 * -5 + -24 * 743][exposedName(316)])));
    return this[exposedName(310)] += names[233 * -27 + -4253 * 1 + 10544]["length"], new Token(target[exposedName(305)], startOffset);
  }
  [URL_ICON_BACK(335)](canCreateDiscussions, isSlidingUp) {
    const now = URL_ICON_BACK;
    const rpm_traffic = {
      "GxhLd" : function(name, initialValue) {
        return name === initialValue;
      }
    };
    if (rpm_traffic[now(336)](this["data"]["charCodeAt"](this[now(310)]), 2665 + -4399 + 1795)) {
      return this[now(310)]++, canCreateDiscussions;
    }
    return isSlidingUp;
  }
  [URL_ICON_BACK(337)]() {
    const now = URL_ICON_BACK;
    const command_codes = {
      "sFEbk" : function(name, initialValue) {
        return name === initialValue;
      }
    };
    const data = this["data"][now(320)](this["pos"]);
    if (command_codes[now(338)](data, 1450 + -1049 * 7 + 5954)) {
      return this[now(310)]++, op["le"];
    }
    if (data === 4838 + 4735 + 1 * -9511) {
      return this["pos"]++, op["ne"];
    }
    return op["lt"];
  }
  [URL_ICON_BACK(339)]() {
    const now = URL_ICON_BACK;
    const rpm_traffic = {
      "rNJwU" : function(name, initialValue) {
        return name === initialValue;
      }
    };
    if (rpm_traffic[now(340)](this[now(309)][now(320)](this[now(310)]), 6308 + 3437 + -9698)) {
      return this[now(341)](), ![];
    }
    return !![];
  }
  [URL_ICON_BACK(342)]() {
    const exposedName = URL_ICON_BACK;
    const PL$55 = {
      "iSIYJ" : function(name, initialValue) {
        return name === initialValue;
      },
      "sxNfy" : function(name, initialValue) {
        return name === initialValue;
      },
      "fEqYB" : function(mid_OR_high, high_OR_null) {
        return mid_OR_high <= high_OR_null;
      },
      "DDzjW" : function(_num1, _num2) {
        return _num1 / _num2;
      },
      "kyCXp" : function(connectNumber, concurency) {
        return connectNumber - concurency;
      },
      "VkBJY" : function(formatters, customFormatters) {
        return formatters + customFormatters;
      },
      "ENpOz" : function(saveNotifs, notifications) {
        return saveNotifs(notifications);
      },
      "ouuzL" : function(connectNumber, concurency) {
        return connectNumber - concurency;
      }
    };
    const PL$51 = this[exposedName(309)][exposedName(320)](this[exposedName(310)]);
    if (PL$55[exposedName(343)](PL$51, -47 * -125 + 2993 + -802 * 11)) {
      return this[exposedName(310)]++, op[exposedName(344)];
    }
    if (PL$55[exposedName(345)](PL$51, 103 * 73 + -39 * 106 + 3343 * -1)) {
      return this[exposedName(310)]++, op["dotStar"];
    }
    if (PL$55[exposedName(345)](PL$51, -1 * -1489 + -1572 + 118)) {
      return this["pos"]++, op["dotHash"];
    }
    if (3596 + -8602 + 5054 <= PL$51 && PL$55["fEqYB"](PL$51, -1 * -3507 + 4572 + -8022)) {
      this[exposedName(310)]++;
      const parserData = this[exposedName(309)][exposedName(322)](this[exposedName(310)])["match"](URL_ICON_GRID);
      if (!parserData) {
        return new Token(target["number"], PL$55[exposedName(346)](PL$55[exposedName(347)](PL$51, -5881 + 370 * -26 + 15549), -1706 * 2 + 1 * 6599 + -3177));
      }
      const cases__2759 = PL$55[exposedName(348)](this[exposedName(310)], parserData[-971 * -5 + -359 * -26 + -7 * 2027]["length"]);
      const startOffset = PL$55["ENpOz"](parseFloat, this[exposedName(309)][exposedName(322)](PL$55[exposedName(349)](this[exposedName(310)], -4996 + -5468 + 1 * 10466), cases__2759));
      return this[exposedName(310)] = cases__2759, new Token(target[exposedName(305)], startOffset);
    }
    return op[exposedName(350)];
  }
  ["next"]() {
    const gotoNewOfflinePage = URL_ICON_BACK;
    const _0x249398 = {
      "PWouC" : function(progressOld, progressNew) {
        return progressOld < progressNew;
      }
    };
    for (; _0x249398["PWouC"](this[gotoNewOfflinePage(310)], this[gotoNewOfflinePage(311)]);) {
      const artistTrack = this[gotoNewOfflinePage(309)][gotoNewOfflinePage(320)](this["pos"]++);
      switch(artistTrack) {
        case 2324 + 3786 + -6101:
        case 1 * -9571 + 9383 + -22 * -9:
        case -3706 + -10 * 63 + 4347:
        case 5315 + -6191 + 1 * 888:
        case 3590 * -1 + -878 * 9 + -3 * -3835:
        case 5 * 77 + 3842 + 839 * -5:
          break;
        case -430 * -9 + -9471 + 115 * 49:
          return this[gotoNewOfflinePage(319)]();
        case -5545 + 8127 + -2544:
          return op[gotoNewOfflinePage(280)];
        case -3078 + 2 * 826 + -1 * -1466:
          return op[gotoNewOfflinePage(351)];
        case -5100 + -7027 * 1 + 12168:
          return op[gotoNewOfflinePage(352)];
        case -7849 * -1 + -3722 * -2 + 101 * -151:
          return op[gotoNewOfflinePage(353)];
        case -3103 + 7344 + -2099 * 2:
          return op[gotoNewOfflinePage(354)];
        case -4910 + 4 * 813 + 1702:
          return op[gotoNewOfflinePage(355)];
        case -2 * 4888 + 4015 + 5806:
          return op[gotoNewOfflinePage(356)];
        case 219 + 7190 + 1 * -7363:
          return this["getDot"]();
        case -435 + -269 + 751 * 1:
          if (this[gotoNewOfflinePage(339)]()) {
            return op[gotoNewOfflinePage(357)];
          }
          break;
        case -1175 * -2 + -1 * -3503 + -215 * 27:
        case -6887 * 1 + 7 * -1196 + 15308:
        case 6571 * 1 + 1 * -4226 + -2295:
        case 4948 + -578 * 1 + -4319 * 1:
        case 1177 * -3 + -269 * 9 + 6004:
        case 298 * 17 + -7391 * -1 + -12404:
        case -1 * -9182 + 3850 + -12978:
        case -1 * -7349 + -1 * -4958 + -12252:
        case 1 * 5797 + -9559 + 3818 * 1:
        case -4031 * -1 + -3597 + 377 * -1:
          return this[gotoNewOfflinePage(331)](artistTrack);
        case 57 * -106 + -5601 + 11702 * 1:
          this[gotoNewOfflinePage(341)]();
          break;
        case 1421 * -5 + 7506 * 1 + -341 * 1:
          return this["getLower"]();
        case -160 + -681 * 8 + 1 * 5669:
          return this[gotoNewOfflinePage(335)](op["eq"], op[gotoNewOfflinePage(358)]);
        case 2115 + 13 * -717 + 92 * 79:
          return this[gotoNewOfflinePage(335)](op["ge"], op["gt"]);
        case 811 * 7 + 6454 + -12040:
          return op[gotoNewOfflinePage(359)];
        case 9338 + -6819 + -2426:
          return op[gotoNewOfflinePage(360)];
        case -6650 + -9238 + -4003 * -4:
          return op["or"];
        default:
          return this[gotoNewOfflinePage(317)]();
      }
    }
    return op["eof"];
  }
}
export{
  Lexer as Lexer,
  Token as Token,
  target as TOKEN
};

