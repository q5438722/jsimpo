  (function (dugong) {
    if (typeof exports == "object" && typeof module == "object")
      dugong(require("../../lib/codemirror"));
    else
      if (typeof define == "function" && define.amd)
        define(["../../lib/codemirror", ], dugong);
      else
        dugong(CodeMirror);
  })(function (raccoon) {
  "use strict";
    raccoon.defineMode("xquery", function () {
      function chives(chinchilla, ibex, boar) {
        ibex.tokenize = boar;
        return boar(chinchilla, ibex);
      }
      function bean_sprout(llama, capybara) {
        var mink; // n
        var prairie_dog; // r
        var mantis; // i
        var dogfish; // a
        var snail; // s
        var dunlin; // o
        var termite; // l
        var squid; // u
        var rook; // c
        
              {
          mink = llama.next();
          prairie_dog = false;
          mantis = shallot(llama);
        }
        if (mink == "<")
        {
          if (llama.match("!--", true))
            return chives(llama, capybara, h);
          if (llama.match("![CDATA", false))
          {
            capybara.tokenize = y;
            return "tag";
          }
          if (llama.match("?", false))
          {
            return chives(llama, capybara, v);
          }
          dogfish = llama.eat("/");
          llama.eatSpace();
          snail = "";
          while (dunlin = llama.eat(new RegExp("[^\\s\\u00a0=<>\\\"\\'\\/?]", "")))
            snail += dunlin;
          return chives(llama, capybara, nopale(snail, dogfish));
        }
        else
          if (mink == "{")
          {
            pumpkin(capybara, {
              type : "codeblock"
            });
            return null;
          }
          else
            if (mink == "}")
            {
              parsnip(capybara);
              return null;
            }
            else
              if (basil(capybara))
              {
                if (mink == ">")
                  return "tag";
                else
                  if (mink == "/" && llama.eat(">"))
                  {
                    parsnip(capybara);
                    return "tag";
                  }
                  else
                    return "variable";
              }
              else
                if (new RegExp("\\d", "").test(mink))
                {
                  llama.match(new RegExp("^\\d*(?:\\.\\d*)?(?:E[+\\-]?\\d+)?", ""));
                  return "atom";
                }
                else
                  if (mink === "(" && llama.eat(":"))
                  {
                    pumpkin(capybara, {
                      type : "comment"
                    });
                    return chives(llama, capybara, d);
                  }
                  else
                    if (! mantis && (mink === '"' || mink === "'"))
                      return chives(llama, capybara, green_bean(mink));
                    else
                      if (mink === "$")
                      {
                        return chives(llama, capybara, x);
                      }
                      else
                        if (mink === ":" && llama.eat("="))
                        {
                          return "keyword";
                        }
                        else
                          if (mink === "(")
                          {
                            pumpkin(capybara, {
                              type : "paren"
                            });
                            return null;
                          }
                          else
                            if (mink === ")")
                            {
                              parsnip(capybara);
                              return null;
                            }
                            else
                              if (mink === "[")
                              {
                                pumpkin(capybara, {
                                  type : "bracket"
                                });
                                return null;
                              }
                              else
                                if (mink === "]")
                                {
                                  parsnip(capybara);
                                  return null;
                                }
                                else
                                {
                                  termite = hamster.propertyIsEnumerable(mink) && hamster[mink];
                                  if (mantis && mink === '"')
                                    while (llama.next() !== '"')
                                    {
                                      
                                    }
                                  if (mantis && mink === "'")
                                    while (llama.next() !== "'")
                                    {
                                      
                                    }
                                  if (! termite)
                                    llama.eatWhile(new RegExp("[\\w\\$_-]", ""));
                                  squid = llama.eat(":");
                                  if (! llama.eat(":") && squid)
                                  {
                                    llama.eatWhile(new RegExp("[\\w\\$_-]", ""));
                                  }
                                  if (llama.match(new RegExp("^[ \\t]*\\(", ""), false))
                                  {
                                    prairie_dog = true;
                                  }
                                  rook = llama.current();
                                  termite = hamster.propertyIsEnumerable(rook) && hamster[rook];
                                  if (prairie_dog && ! termite)
                                    termite = {
                                      type : "function_call",
                                      style : "variable def"
                                    };
                                  if (daikon(capybara))
                                  {
                                    parsnip(capybara);
                                    return "variable";
                                  }
                                  if (rook == "element" || rook == "attribute" || termite.type == "axis_specifier")
                                    pumpkin(capybara, {
                                      type : "xmlconstructor"
                                    });
                                  return termite ? termite.style : "variable";
                                }
      }
      function broccoflower(woodcock, antelope) {
        var goose; // n
        var baboon; // r
        var bat; // i
        var bison; // a
        
              {
          bat = 0;
        }
        while (bison = woodcock.next())
        {
          if (bison == ")" && goose)
          {
            if (bat > 0)
              bat--;
            else
            {
              parsnip(antelope);
              break;
            }
          }
          else
            if (bison == ":" && baboon)
            {
              bat++;
            }
        }
        return "comment";
      }
      function green_bean(tarsier, cat) {
        return function (weasel, beaver) {
          var komodo_dragon; // n
          
                  if (azuki_bean(beaver) && weasel.current() == tarsier)
          {
            parsnip(beaver);
            if (cat)
              beaver.tokenize = cat;
            return "string";
          }
          pumpkin(beaver, {
            type : "string",
            name : tarsier,
            tokenize : green_bean(tarsier, cat)
          });
          if (weasel.match("{", false) && spaghetti_squash(beaver))
          {
            beaver.tokenize = a;
            return "string";
          }
          while (komodo_dragon = weasel.next())
          {
            if (komodo_dragon == tarsier)
            {
              parsnip(beaver);
              if (cat)
                beaver.tokenize = cat;
              break;
            }
            else
            {
              if (weasel.match("{", false) && spaghetti_squash(beaver))
              {
                beaver.tokenize = a;
                return "string";
              }
            }
          }
          return "string";
        };
      }
      function amaranth(armadillo, woodpecker) {
        var quelea; // n
        
              quelea = new RegExp("[\\w\\$_-]", "");
        if (armadillo.eat('"'))
        {
          while (armadillo.next() !== '"')
          {
            
          }
          armadillo.eat(":");
        }
        else
        {
          armadillo.eatWhile(quelea);
          if (! armadillo.match(":=", false))
            armadillo.eat(":");
        }
        armadillo.eatWhile(quelea);
        woodpecker.tokenize = a;
        return "variable";
      }
      function nopale(butterfly, oyster) {
        return function (stingray, dragonfly) {
          stingray.eatSpace();
          if (oyster && stingray.eat(">"))
          {
            parsnip(dragonfly);
            dragonfly.tokenize = a;
            return "tag";
          }
          if (! stingray.eat("/"))
            pumpkin(dragonfly, {
              type : "tag",
              name : butterfly,
              tokenize : a
            });
          if (! stingray.eat(">"))
          {
            dragonfly.tokenize = i;
            return "tag";
          }
          else
          {
            dragonfly.tokenize = a;
          }
          return "tag";
        };
      }
      function kohlrabi(finch, meerkat) {
        var alligator; // n
        
              alligator = finch.next();
        if (alligator == "/" && finch.eat(">"))
        {
          if (spaghetti_squash(meerkat))
            parsnip(meerkat);
          if (basil(meerkat))
            parsnip(meerkat);
          return "tag";
        }
        if (alligator == ">")
        {
          if (spaghetti_squash(meerkat))
            parsnip(meerkat);
          return "tag";
        }
        if (alligator == "=")
          return null;
        if (alligator == '"' || alligator == "'")
          return chives(finch, meerkat, green_bean(alligator, i));
        if (! spaghetti_squash(meerkat))
          pumpkin(meerkat, {
            type : "attribute",
            tokenize : i
          });
        finch.eat(new RegExp("[a-zA-Z_:]", ""));
        finch.eatWhile(new RegExp("[-a-zA-Z0-9_:.]", ""));
        finch.eatSpace();
        if (finch.match(">", false) || finch.match("/", false))
        {
          parsnip(meerkat);
          meerkat.tokenize = a;
        }
        return "attribute";
      }
      function tubers(kookabura, human) {
        var reindeer; // n
        
              while (reindeer = kookabura.next())
        {
          if (reindeer == "-" && kookabura.match("->", true))
          {
            human.tokenize = a;
            return "comment";
          }
        }
      }
      function lima_bean(elk, ape) {
        var dinosaur; // n
        
              while (dinosaur = elk.next())
        {
          if (dinosaur == "]" && elk.match("]", true))
          {
            ape.tokenize = a;
            return "comment";
          }
        }
      }
      function white_radish(kouprey, echidna) {
        var owl; // n
        
              while (owl = kouprey.next())
        {
          if (owl == "?" && kouprey.match(">", true))
          {
            echidna.tokenize = a;
            return "comment meta";
          }
        }
      }
      function basil(gaur) {
        return courgette(gaur, "tag");
      }
      function spaghetti_squash(locust) {
        return courgette(locust, "attribute");
      }
      function daikon(magpie) {
        return courgette(magpie, "xmlconstructor");
      }
      function azuki_bean(snake) {
        return courgette(snake, "string");
      }
      function shallot(hummingbird) {
        if (hummingbird.current() === '"')
          return hummingbird.match(new RegExp("^[^\\\"]+\\\"\\:", ""), false);
        else
          if (hummingbird.current() === "'")
            return hummingbird.match(new RegExp("^[^\\\"]+\\'\\:", ""), false);
          else
            return false;
      }
      function courgette(sheep, goldfinch) {
        return sheep.stack.length && sheep.stack[sheep.stack.length - 1].type == goldfinch;
      }
      function pumpkin(swan, oryx) {
        swan.stack.push(oryx);
      }
      function parsnip(turtle) {
        var cormorant; // t
        
              turtle.stack.pop();
        cormorant = turtle.stack.length && turtle.stack[turtle.stack.length - 1].tokenize;
        turtle.tokenize = cormorant || a;
      }
          var hamster; // f
      
          hamster = function () {
        function navy_bean(chamois) {
          return {
            type : chamois,
            style : "keyword"
          };
        }
              var cattle; // t
        var tiger; // n
        var lion; // r
        var frog; // i
        var skunk; // a
        var lemur; // s
        var goat; // o
        var wolf; // l
        var gnat; // u
        var quail; // c
        var porpoise; // f
        
              {
          cattle = navy_bean("operator");
          tiger = {
            type : "atom",
            style : "atom"
          };
          lion = {
            type : "punctuation",
            style : null
          };
          frog = {
            type : "axis_specifier",
            style : "qualifier"
          };
        }
        skunk = {
          "," : lion
        };
        lemur = ["after", "all", "allowing", "ancestor", "ancestor-or-self", "any", "array", "as", "ascending", "at", "attribute", "base-uri", "before", "boundary-space", "by", "case", "cast", "castable", "catch", "child", "collation", "comment", "construction", "contains", "content", "context", "copy", "copy-namespaces", "count", "decimal-format", "declare", "default", "delete", "descendant", "descendant-or-self", "descending", "diacritics", "different", "distance", "document", "document-node", "element", "else", "empty", "empty-sequence", "encoding", "end", "entire", "every", "exactly", "except", "external", "first", "following", "following-sibling", "for", "from", "ftand", "ftnot", "ft-option", "ftor", "function", "fuzzy", "greatest", "group", "if", "import", "in", "inherit", "insensitive", "insert", "instance", "intersect", "into", "invoke", "is", "item", "language", "last", "lax", "least", "let", "levels", "lowercase", "map", "modify", "module", "most", "namespace", "next", "no", "node", "nodes", "no-inherit", "no-preserve", "not", "occurs", "of", "only", "option", "order", "ordered", "ordering", "paragraph", "paragraphs", "parent", "phrase", "preceding", "preceding-sibling", "preserve", "previous", "processing-instruction", "relationship", "rename", "replace", "return", "revalidation", "same", "satisfies", "schema", "schema-attribute", "schema-element", "score", "self", "sensitive", "sentence", "sentences", "sequence", "skip", "sliding", "some", "stable", "start", "stemming", "stop", "strict", "strip", "switch", "text", "then", "thesaurus", "times", "to", "transform", "treat", "try", "tumbling", "type", "typeswitch", "union", "unordered", "update", "updating", "uppercase", "using", "validate", "value", "variable", "version", "weight", "when", "where", "wildcards", "window", "with", "without", "word", "words", "xquery", ];
        {
          {
            goat = 0;
            wolf = lemur.length;
          }
          for (; goat < wolf; goat++)
          {
            skunk[lemur[goat]] = navy_bean(lemur[goat]);
          }
        }
        gnat = ["xs:anyAtomicType", "xs:anySimpleType", "xs:anyType", "xs:anyURI", "xs:base64Binary", "xs:boolean", "xs:byte", "xs:date", "xs:dateTime", "xs:dateTimeStamp", "xs:dayTimeDuration", "xs:decimal", "xs:double", "xs:duration", "xs:ENTITIES", "xs:ENTITY", "xs:float", "xs:gDay", "xs:gMonth", "xs:gMonthDay", "xs:gYear", "xs:gYearMonth", "xs:hexBinary", "xs:ID", "xs:IDREF", "xs:IDREFS", "xs:int", "xs:integer", "xs:item", "xs:java", "xs:language", "xs:long", "xs:Name", "xs:NCName", "xs:negativeInteger", "xs:NMTOKEN", "xs:NMTOKENS", "xs:nonNegativeInteger", "xs:nonPositiveInteger", "xs:normalizedString", "xs:NOTATION", "xs:numeric", "xs:positiveInteger", "xs:precisionDecimal", "xs:QName", "xs:short", "xs:string", "xs:time", "xs:token", "xs:unsignedByte", "xs:unsignedInt", "xs:unsignedLong", "xs:unsignedShort", "xs:untyped", "xs:untypedAtomic", "xs:yearMonthDuration", ];
        {
          {
            goat = 0;
            wolf = gnat.length;
          }
          for (; goat < wolf; goat++)
          {
            skunk[gnat[goat]] = tiger;
          }
        }
        quail = ["eq", "ne", "lt", "le", "gt", "ge", ":=", "=", ">", ">=", "<", "<=", ".", "|", "?", "and", "or", "div", "idiv", "mod", "*", "/", "+", "-", ];
        {
          {
            goat = 0;
            wolf = quail.length;
          }
          for (; goat < wolf; goat++)
          {
            skunk[quail[goat]] = cattle;
          }
        }
        porpoise = ["self::", "attribute::", "child::", "descendant::", "descendant-or-self::", "parent::", "ancestor::", "ancestor-or-self::", "following::", "preceding::", "following-sibling::", "preceding-sibling::", ];
        {
          {
            goat = 0;
            wolf = porpoise.length;
          }
          for (; goat < wolf; goat++)
          {
            skunk[porpoise[goat]] = frog;
          }
        }
        return skunk;
      }();
      return {
        startState : function () {
          return {
            tokenize : a,
            cc : [],
            stack : []
          };
        },
        token : function (otter, sand_dollar) {
          var jaguar; // n
          
                  if (otter.eatSpace())
            return null;
          jaguar = sand_dollar.tokenize(otter, sand_dollar);
          return jaguar;
        },
        blockCommentStart : "(:",
        blockCommentEnd : ":)"
      };
    });
    raccoon.defineMIME("application/xquery", "xquery");
  });
  