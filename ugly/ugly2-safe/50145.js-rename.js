  (function (meerkat) {
    if (typeof exports == "object" && typeof module == "object")
      meerkat(require("../../lib/codemirror"));
    else
      if (typeof define == "function" && define.amd)
        define(["../../lib/codemirror", ], meerkat);
      else
        meerkat(CodeMirror);
  })(function (raccoon) {
  "use strict";
    function chives(hamster) {
      var chinchilla; // t
      var ibex; // n
      var boar; // T
      
          {
        chinchilla = {
          
        };
        ibex = hamster.split(" ");
      }
      {
        boar = 0;
        for (; boar < ibex.length; ++ boar)
          chinchilla[ibex[boar]] = true;
      }
      return chinchilla;
    }
      raccoon.defineMode("ttcn-cfg", function (llama, capybara) {
      function bean_sprout(prairie_dog, mantis) {
        var dogfish; // n
        var snail; // T
        
              dogfish = prairie_dog.next();
        if (dogfish == '"' || dogfish == "'")
        {
          mantis.tokenize = broccoflower(dogfish);
          return mantis.tokenize(prairie_dog, mantis);
        }
        if (new RegExp("[:=]", "").test(dogfish))
        {
          return "punctuation";
        }
        if (dogfish == "#")
        {
          prairie_dog.skipToEnd();
          return "comment";
        }
        if (new RegExp("\\d", "").test(dogfish))
        {
          prairie_dog.eatWhile(new RegExp("[\\w\\.]", ""));
          return "number";
        }
        if (o.test(dogfish))
        {
          prairie_dog.eatWhile(o);
          return "operator";
        }
        if (dogfish == "[")
        {
          prairie_dog.eatWhile(new RegExp("[\\w_\\]]", ""));
          return "number sectionTitle";
        }
        prairie_dog.eatWhile(new RegExp("[\\w\\$_]", ""));
        snail = prairie_dog.current();
        if (E.propertyIsEnumerable(snail))
          return "keyword";
        if (i.propertyIsEnumerable(snail))
          return "negative fileNCtrlMaskOptions";
        if (r.propertyIsEnumerable(snail))
          return "negative externalCommands";
        return "variable";
      }
      function broccoflower(dunlin) {
        return function (termite, squid) {
          var rook; // n
          var woodcock; // T
          var antelope; // E
          var goose; // i
          
                  {
            rook = false;
            antelope = false;
          }
          while ((woodcock = termite.next()) != null)
          {
            if (woodcock == dunlin && ! rook)
            {
              goose = termite.peek();
              if (goose)
              {
                goose = goose.toLowerCase();
                if (goose == "b" || goose == "h" || goose == "o")
                  termite.next();
              }
              antelope = true;
              break;
            }
            rook = ! rook && woodcock == "\\";
          }
          if (antelope || ! (rook || C))
            squid.tokenize = null;
          return "string";
        };
      }
      function green_bean(baboon, bat, bison, tarsier, cat) {
        this.indented = baboon;
        this.column = bat;
        this.type = bison;
        this.align = tarsier;
        this.prev = cat;
      }
      function amaranth(weasel, beaver, komodo_dragon) {
        var armadillo; // T
        
              armadillo = weasel.indented;
        if (weasel.context && weasel.context.type == "statement")
          armadillo = weasel.context.indented;
        return weasel.context = new green_bean(armadillo, beaver, komodo_dragon, null, weasel.context);
      }
      function nopale(woodpecker) {
        var quelea; // t
        
              quelea = woodpecker.context.type;
        if (quelea == ")" || quelea == "]" || quelea == "}")
          woodpecker.indented = woodpecker.context.indented;
        return woodpecker.context = woodpecker.context.prev;
      }
          var mink; // n
      
          {
        mink = llama.indentUnit;
      }
      return {
        startState : function (butterfly) {
          return {
            tokenize : null,
            context : new green_bean((butterfly || 0) - mink, 0, "top", false),
            indented : 0,
            startOfLine : true
          };
        },
        token : function (oyster, stingray) {
          var dragonfly; // n
          var finch; // T
          
                  dragonfly = stingray.context;
          if (oyster.sol())
          {
            if (dragonfly.align == null)
              dragonfly.align = false;
            stingray.indented = oyster.indentation();
            stingray.startOfLine = true;
          }
          if (oyster.eatSpace())
            return null;
          finch = (stingray.tokenize || l)(oyster, stingray);
          if (finch == "comment")
            return finch;
          if (dragonfly.align == null)
            dragonfly.align = true;
          if (null == dragonfly.type)
            nopale(stingray);
          stingray.startOfLine = false;
          return finch;
        },
        electricChars : "{}",
        lineComment : "#",
        fold : "brace"
      };
    });
    raccoon.defineMIME("text/x-ttcn-cfg", {
      name : "ttcn-cfg",
      keywords : chives('Yes No LogFile FileMask ConsoleMask AppendFile TimeStampFormat LogEventTypes SourceInfoFormat LogEntityName LogSourceInfo DiskFullAction LogFileNumber LogFileSize MatchingHints Detailed Compact SubCategories Stack Single None Seconds DateTime Time Stop Error Retry Delete TCPPort KillTimer NumHCs UnixSocketsEnabled LocalAddress'),
      fileNCtrlMaskOptions : chives('TTCN_EXECUTOR TTCN_ERROR TTCN_WARNING TTCN_PORTEVENT TTCN_TIMEROP TTCN_VERDICTOP TTCN_DEFAULTOP TTCN_TESTCASE TTCN_ACTION TTCN_USER TTCN_FUNCTION TTCN_STATISTICS TTCN_PARALLEL TTCN_MATCHING TTCN_DEBUG EXECUTOR ERROR WARNING PORTEVENT TIMEROP VERDICTOP DEFAULTOP TESTCASE ACTION USER FUNCTION STATISTICS PARALLEL MATCHING DEBUG LOG_ALL LOG_NOTHING ACTION_UNQUALIFIED DEBUG_ENCDEC DEBUG_TESTPORT DEBUG_UNQUALIFIED DEFAULTOP_ACTIVATE DEFAULTOP_DEACTIVATE DEFAULTOP_EXIT DEFAULTOP_UNQUALIFIED ERROR_UNQUALIFIED EXECUTOR_COMPONENT EXECUTOR_CONFIGDATA EXECUTOR_EXTCOMMAND EXECUTOR_LOGOPTIONS EXECUTOR_RUNTIME EXECUTOR_UNQUALIFIED FUNCTION_RND FUNCTION_UNQUALIFIED MATCHING_DONE MATCHING_MCSUCCESS MATCHING_MCUNSUCC MATCHING_MMSUCCESS MATCHING_MMUNSUCC MATCHING_PCSUCCESS MATCHING_PCUNSUCC MATCHING_PMSUCCESS MATCHING_PMUNSUCC MATCHING_PROBLEM MATCHING_TIMEOUT MATCHING_UNQUALIFIED PARALLEL_PORTCONN PARALLEL_PORTMAP PARALLEL_PTC PARALLEL_UNQUALIFIED PORTEVENT_DUALRECV PORTEVENT_DUALSEND PORTEVENT_MCRECV PORTEVENT_MCSEND PORTEVENT_MMRECV PORTEVENT_MMSEND PORTEVENT_MQUEUE PORTEVENT_PCIN PORTEVENT_PCOUT PORTEVENT_PMIN PORTEVENT_PMOUT PORTEVENT_PQUEUE PORTEVENT_STATE PORTEVENT_UNQUALIFIED STATISTICS_UNQUALIFIED STATISTICS_VERDICT TESTCASE_FINISH TESTCASE_START TESTCASE_UNQUALIFIED TIMEROP_GUARD TIMEROP_READ TIMEROP_START TIMEROP_STOP TIMEROP_TIMEOUT TIMEROP_UNQUALIFIED USER_UNQUALIFIED VERDICTOP_FINAL VERDICTOP_GETVERDICT VERDICTOP_SETVERDICT VERDICTOP_UNQUALIFIED WARNING_UNQUALIFIED'),
      externalCommands : chives('BeginControlPart EndControlPart BeginTestCase EndTestCase'),
      multiLineStrings : true
    });
  });
  