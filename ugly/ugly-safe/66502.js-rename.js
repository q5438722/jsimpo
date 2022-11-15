"use strict";
  module.exports = function e(raccoon, hamster, chinchilla) {
    function chives(oryx) {
      var turtle; // r
      var cormorant; // a
      
          turtle = oryx.rules;
      {
        cormorant = 0;
        for (; cormorant < turtle.length; cormorant++)
          if (bean_sprout(turtle[cormorant]))
            return true;
      }
    }
    function bean_sprout(cattle) {
      return raccoon.schema[cattle.keyword] !== undefined || cattle.implements && broccoflower(cattle);
    }
    function broccoflower(tiger) {
      var lion; // r
      var frog; // a
      
          lion = tiger.implements;
      {
        frog = 0;
        for (; frog < lion.length; frog++)
          if (raccoon.schema[lion[frog]] !== undefined)
            return true;
      }
    }
      var ibex; // t
    var boar; // i
    var llama; // l
    var capybara; // o
    var mink; // f
    var prairie_dog; // n
    var mantis; // u
    var dogfish; // h
    var snail; // c
    var dunlin; // d
    var termite; // p
    var squid; // v
    var rook; // m
    var woodcock; // y
    var antelope; // g
    var goose; // w
    var baboon; // E
    var bat; // P
    var bison; // b
    var tarsier; // D
    var cat; // S
    var weasel; // R
    var beaver; // T
    var komodo_dragon; // k
    var armadillo; // $
    var woodpecker; // L
    var quelea; // j
    var butterfly; // A
    var oyster; // I
    var stingray; // U
    var dragonfly; // x
    var finch; // _
    var meerkat; // N
    var alligator; // V
    var kookabura; // O
    var human; // Q
    var reindeer; // C
    var elk; // J
    var ape; // K
    var dinosaur; // H
    var kouprey; // q
    var echidna; // z
    var owl; // B
    var gaur; // F
    var locust; // G
    var magpie; // M
    var snake; // W
    var hummingbird; // X
    var sheep; // Y
    var goldfinch; // Z
    var swan; // ee
    
      ibex = "";
    {
      boar = raccoon.schema.$async === true;
      llama = raccoon.util.schemaHasRulesExcept(raccoon.schema, raccoon.RULES.all, "$ref");
      capybara = raccoon.self._getId(raccoon.schema);
    }
    if (raccoon.opts.strictKeywords)
    {
      mink = raccoon.util.schemaUnknownRules(raccoon.schema, raccoon.RULES.keywords);
      if (mink)
      {
        prairie_dog = "unknown keyword: " + mink;
        if (raccoon.opts.strictKeywords === "log")
          raccoon.logger.warn(prairie_dog);
        else
          throw new Error(prairie_dog);
      }
    }
    if (raccoon.isTop)
    {
      ibex = ' var validate = ';
      if (boar)
      {
        raccoon.async = true;
        ibex = ' var validate = async ';
      }
      ibex = ibex + "function(data, dataPath, parentData, parentDataProperty, rootData) { 'use strict'; ";
      if (capybara && (raccoon.opts.sourceCode || raccoon.opts.processCode))
      {
        ibex = ibex + " " + ("/*# sourceURL=" + capybara + " */") + " ";
      }
    }
    if (typeof raccoon.schema == "boolean" || ! (llama || raccoon.schema.$ref))
    {
      mantis = raccoon.level;
      dogfish = raccoon.dataLevel;
      snail = raccoon.schema["false schema"];
      dunlin = raccoon.schemaPath + raccoon.util.getProperty("false schema");
      termite = raccoon.errSchemaPath + "/" + "false schema";
      squid = ! raccoon.opts.allErrors;
      woodcock = "data" + (dogfish || "");
      antelope = "valid" + mantis;
      if (raccoon.schema === false)
      {
        if (raccoon.isTop)
        {
          squid = true;
        }
        else
        {
          ibex = ibex + " var " + antelope + " = false; ";
        }
        goose = goose || [];
        goose.push(ibex);
        ibex = "";
        if (raccoon.createErrors !== false)
        {
          ibex = "" + " { keyword: '" + (rook || "false schema") + "' , dataPath: (dataPath || '') + " + raccoon.errorPath + " , schemaPath: " + raccoon.util.toQuotedString(termite) + " , params: {} ";
          if (raccoon.opts.messages !== false)
          {
            ibex = ibex + " , message: 'boolean schema is false' ";
          }
          if (raccoon.opts.verbose)
          {
            ibex = ibex + " , schema: false , parentSchema: validate.schema" + raccoon.schemaPath + " , data: " + woodcock + " ";
          }
          ibex = ibex + " } ";
        }
        else
        {
          ibex = ' {} ';
        }
        baboon = ibex;
        ibex = goose.pop();
        if (! raccoon.compositeRule && squid)
        {
          if (raccoon.async)
          {
            ibex = ibex + " throw new ValidationError([" + baboon + "]); ";
          }
          else
          {
            ibex = ibex + " validate.errors = [" + baboon + "]; return false; ";
          }
        }
        else
        {
          ibex = ibex + " var err = " + baboon + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
        }
      }
      else
      {
        if (raccoon.isTop)
        {
          if (boar)
          {
            ibex = ibex + " return data; ";
          }
          else
          {
            ibex = ibex + " validate.errors = null; return true; ";
          }
        }
        else
        {
          ibex = ibex + " var " + antelope + " = true; ";
        }
      }
      if (raccoon.isTop)
      {
        ibex = ibex + " }; return validate; ";
      }
      return ibex;
    }
    if (raccoon.isTop)
    {
      {
        bat = raccoon.isTop;
        mantis = raccoon.level = 0;
        dogfish = raccoon.dataLevel = 0;
        woodcock = "data";
      }
      raccoon.rootId = raccoon.resolve.fullPath(raccoon.self._getId(raccoon.root.schema));
      raccoon.baseId = raccoon.baseId || raccoon.rootId;
      delete raccoon.isTop;
      raccoon.dataPathArr = ["", ];
      if (raccoon.schema.default !== undefined && raccoon.opts.useDefaults && raccoon.opts.strictDefaults)
      {
        bison = "default is ignored in the schema root";
        if (raccoon.opts.strictDefaults === "log")
          raccoon.logger.warn("default is ignored in the schema root");
        else
          throw new Error("default is ignored in the schema root");
      }
      ibex = ibex + " var vErrors = null; ";
      ibex = ibex + " var errors = 0;     ";
      ibex = ibex + " if (rootData === undefined) rootData = data; ";
    }
    else
    {
      {
        mantis = raccoon.level;
        dogfish = raccoon.dataLevel;
        woodcock = "data" + (dogfish || "");
      }
      if (capybara)
        raccoon.baseId = raccoon.resolve.url(raccoon.baseId, capybara);
      if (boar && ! raccoon.async)
        throw new Error("async schema in sync schema");
      ibex = ibex + " var errs_" + mantis + " = errors;";
    }
    {
      antelope = "valid" + mantis;
      squid = ! raccoon.opts.allErrors;
      cat = "";
    }
    {
      weasel = raccoon.schema.type;
      beaver = Array.isArray(weasel);
    }
    if (weasel && raccoon.opts.nullable && raccoon.schema.nullable === true)
    {
      if (beaver)
      {
        if (weasel.indexOf("null") == -1)
          weasel = weasel.concat("null");
      }
      else
        if (weasel != "null")
        {
          weasel = [weasel, "null", ];
          beaver = true;
        }
    }
    if (beaver && weasel.length == 1)
    {
      weasel = weasel[0];
      beaver = false;
    }
    if (raccoon.schema.$ref && llama)
    {
      if (raccoon.opts.extendRefs == "fail")
      {
        throw new Error('$ref: validation keywords used in schema at path "' + raccoon.errSchemaPath + '" (see option extendRefs)');
      }
      else
        if (raccoon.opts.extendRefs !== true)
        {
          llama = false;
          raccoon.logger.warn('$ref: keywords ignored in schema at path "' + raccoon.errSchemaPath + '"');
        }
    }
    if (raccoon.schema.$comment && raccoon.opts.$comment)
    {
      ibex = ibex + " " + raccoon.RULES.all.$comment.code(raccoon, "$comment");
    }
    if (weasel)
    {
      if (raccoon.opts.coerceTypes)
      {
        komodo_dragon = raccoon.util.coerceToTypes(raccoon.opts.coerceTypes, weasel);
      }
      armadillo = raccoon.RULES.types[weasel];
      if (komodo_dragon || beaver || armadillo === true || armadillo && ! chives(armadillo))
      {
        {
          dunlin = raccoon.schemaPath + ".type";
          termite = raccoon.errSchemaPath + "/type";
        }
        {
          dunlin = raccoon.schemaPath + ".type";
          termite = raccoon.errSchemaPath + "/type";
          woodpecker = beaver ? "checkDataTypes" : "checkDataType";
        }
        ibex = ibex + " if (" + raccoon.util[woodpecker](weasel, woodcock, raccoon.opts.strictNumbers, true) + ") { ";
        if (komodo_dragon)
        {
          {
            quelea = "dataType" + mantis;
            butterfly = "coerced" + mantis;
          }
          ibex = ibex + " var " + quelea + " = typeof " + woodcock + "; var " + butterfly + " = undefined; ";
          if (raccoon.opts.coerceTypes == "array")
          {
            ibex = ibex + " if (" + quelea + " == 'object' && Array.isArray(" + woodcock + ") && " + woodcock + ".length == 1) { " + woodcock + " = " + woodcock + "[0]; " + quelea + " = typeof " + woodcock + "; if (" + raccoon.util.checkDataType(raccoon.schema.type, woodcock, raccoon.opts.strictNumbers) + ") " + butterfly + " = " + woodcock + "; } ";
          }
          ibex = ibex + " if (" + butterfly + " !== undefined) ; ";
          oyster = komodo_dragon;
          if (oyster)
          {
            {
              dragonfly = -1;
              finch = oyster.length - 1;
            }
            while (dragonfly < finch)
            {
              stingray = oyster[dragonfly += 1];
              if (stingray == "string")
              {
                ibex += " else if (" + quelea + " == 'number' || " + quelea + " == 'boolean') " + butterfly + " = '' + " + woodcock + "; else if (" + woodcock + " === null) " + butterfly + " = ''; ";
              }
              else
                if (stingray == "number" || stingray == "integer")
                {
                  ibex += " else if (" + quelea + " == 'boolean' || " + woodcock + " === null || (" + quelea + " == 'string' && " + woodcock + " && " + woodcock + " == +" + woodcock + " ";
                  if (stingray == "integer")
                  {
                    ibex += " && !(" + woodcock + " % 1)";
                  }
                  ibex += ")) " + butterfly + " = +" + woodcock + "; ";
                }
                else
                  if (stingray == "boolean")
                  {
                    ibex += " else if (" + woodcock + " === 'false' || " + woodcock + " === 0 || " + woodcock + " === null) " + butterfly + " = false; else if (" + woodcock + " === 'true' || " + woodcock + " === 1) " + butterfly + " = true; ";
                  }
                  else
                    if (stingray == "null")
                    {
                      ibex += " else if (" + woodcock + " === '' || " + woodcock + " === 0 || " + woodcock + " === false) " + butterfly + " = null; ";
                    }
                    else
                      if (raccoon.opts.coerceTypes == "array" && stingray == "array")
                      {
                        ibex += " else if (" + quelea + " == 'string' || " + quelea + " == 'number' || " + quelea + " == 'boolean' || " + woodcock + " == null) " + butterfly + " = [" + woodcock + "]; ";
                      }
            }
          }
          ibex = ibex + " else {   ";
          goose = goose || [];
          goose.push(ibex);
          ibex = "";
          if (raccoon.createErrors !== false)
          {
            ibex = "" + " { keyword: '" + (rook || "type") + "' , dataPath: (dataPath || '') + " + raccoon.errorPath + " , schemaPath: " + raccoon.util.toQuotedString(termite) + " , params: { type: '";
            if (beaver)
            {
              ibex = ibex + "" + weasel.join(",");
            }
            else
            {
              ibex = ibex + "" + weasel;
            }
            ibex = ibex + "' } ";
            if (raccoon.opts.messages !== false)
            {
              ibex = ibex + " , message: 'should be ";
              if (beaver)
              {
                ibex = ibex + "" + weasel.join(",");
              }
              else
              {
                ibex = ibex + "" + weasel;
              }
              ibex = ibex + "' ";
            }
            if (raccoon.opts.verbose)
            {
              ibex = ibex + " , schema: validate.schema" + dunlin + " , parentSchema: validate.schema" + raccoon.schemaPath + " , data: " + woodcock + " ";
            }
            ibex = ibex + " } ";
          }
          else
          {
            ibex = ' {} ';
          }
          baboon = ibex;
          ibex = goose.pop();
          if (! raccoon.compositeRule && squid)
          {
            if (raccoon.async)
            {
              ibex = ibex + " throw new ValidationError([" + baboon + "]); ";
            }
            else
            {
              ibex = ibex + " validate.errors = [" + baboon + "]; return false; ";
            }
          }
          else
          {
            ibex = ibex + " var err = " + baboon + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
          }
          ibex = ibex + " } if (" + butterfly + " !== undefined) {  ";
          {
            meerkat = dogfish ? "data" + (dogfish - 1 || "") : "parentData";
            alligator = dogfish ? raccoon.dataPathArr[dogfish] : "parentDataProperty";
          }
          ibex = ibex + " " + woodcock + " = " + butterfly + "; ";
          if (! dogfish)
          {
            ibex = ibex + "if (" + meerkat + " !== undefined)";
          }
          ibex = ibex + " " + meerkat + "[" + alligator + "] = " + butterfly + "; } ";
        }
        else
        {
          goose = goose || [];
          goose.push(ibex);
          ibex = "";
          if (raccoon.createErrors !== false)
          {
            ibex = "" + " { keyword: '" + (rook || "type") + "' , dataPath: (dataPath || '') + " + raccoon.errorPath + " , schemaPath: " + raccoon.util.toQuotedString(termite) + " , params: { type: '";
            if (beaver)
            {
              ibex = ibex + "" + weasel.join(",");
            }
            else
            {
              ibex = ibex + "" + weasel;
            }
            ibex = ibex + "' } ";
            if (raccoon.opts.messages !== false)
            {
              ibex = ibex + " , message: 'should be ";
              if (beaver)
              {
                ibex = ibex + "" + weasel.join(",");
              }
              else
              {
                ibex = ibex + "" + weasel;
              }
              ibex = ibex + "' ";
            }
            if (raccoon.opts.verbose)
            {
              ibex = ibex + " , schema: validate.schema" + dunlin + " , parentSchema: validate.schema" + raccoon.schemaPath + " , data: " + woodcock + " ";
            }
            ibex = ibex + " } ";
          }
          else
          {
            ibex = ' {} ';
          }
          baboon = ibex;
          ibex = goose.pop();
          if (! raccoon.compositeRule && squid)
          {
            if (raccoon.async)
            {
              ibex = ibex + " throw new ValidationError([" + baboon + "]); ";
            }
            else
            {
              ibex = ibex + " validate.errors = [" + baboon + "]; return false; ";
            }
          }
          else
          {
            ibex = ibex + " var err = " + baboon + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
          }
        }
        ibex = ibex + " } ";
      }
    }
    if (raccoon.schema.$ref && ! llama)
    {
      ibex = ibex + " " + raccoon.RULES.all.$ref.code(raccoon, "$ref") + " ";
      if (squid)
      {
        ibex = ibex + " } if (errors === ";
        if (bat)
        {
          ibex = ibex + "0";
        }
        else
        {
          ibex = ibex + "errs_" + mantis;
        }
        ibex = ibex + ") { ";
        cat = cat + "}";
      }
    }
    else
    {
      kookabura = raccoon.RULES;
      if (kookabura)
      {
        {
          reindeer = kookabura.length - 1;
        }
        while (human < reindeer)
        {
          armadillo = kookabura[];
          if (chives(armadillo))
          {
            if (armadillo.type)
            {
              ibex += " if (" + raccoon.util.checkDataType(armadillo.type, woodcock, raccoon.opts.strictNumbers) + ") { ";
            }
            if (raccoon.opts.useDefaults)
            {
              if (armadillo.type == "object" && raccoon.schema.properties)
              {
                {
                  snail = raccoon.schema.properties;
                  elk = Object.keys(snail);
                }
                ape = elk;
                if (ape)
                {
                  {
                    echidna = ape.length - 1;
                  }
                  while (kouprey < echidna)
                  {
                    dinosaur = ape[];
                    owl = snail[dinosaur];
                    if (owl.default !== undefined)
                    {
                      gaur = woodcock + raccoon.util.getProperty(dinosaur);
                      if (raccoon.compositeRule)
                      {
                        if (raccoon.opts.strictDefaults)
                        {
                          bison = "default is ignored for: " + gaur;
                          if (raccoon.opts.strictDefaults === "log")
                            raccoon.logger.warn(bison);
                          else
                            throw new Error(bison);
                        }
                      }
                      else
                      {
                        ibex += " if (" + gaur + " === undefined ";
                        if (raccoon.opts.useDefaults == "empty")
                        {
                          ibex += " || " + gaur + " === null || " + gaur + " === '' ";
                        }
                        ibex += " ) " + gaur + " = ";
                        if (raccoon.opts.useDefaults == "shared")
                        {
                          ibex += " " + raccoon.useDefault(owl.default) + " ";
                        }
                        else
                        {
                          ibex += " " + JSON.stringify(owl.default) + " ";
                        }
                        ibex += "; ";
                      }
                    }
                  }
                }
              }
              else
                if (armadillo.type == "array" && Array.isArray(raccoon.schema.items))
                {
                  locust = raccoon.schema.items;
                  if (locust)
                  {
                    {
                      dragonfly = -1;
                      magpie = locust.length - 1;
                    }
                    while (dragonfly < magpie)
                    {
                      owl = locust[dragonfly += 1];
                      if (owl.default !== undefined)
                      {
                        gaur = woodcock + "[" + dragonfly + "]";
                        if (raccoon.compositeRule)
                        {
                          if (raccoon.opts.strictDefaults)
                          {
                            bison = "default is ignored for: " + gaur;
                            if (raccoon.opts.strictDefaults === "log")
                              raccoon.logger.warn(bison);
                            else
                              throw new Error(bison);
                          }
                        }
                        else
                        {
                          ibex += " if (" + gaur + " === undefined ";
                          if (raccoon.opts.useDefaults == "empty")
                          {
                            ibex += " || " + gaur + " === null || " + gaur + " === '' ";
                          }
                          ibex += " ) " + gaur + " = ";
                          if (raccoon.opts.useDefaults == "shared")
                          {
                            ibex += " " + raccoon.useDefault(owl.default) + " ";
                          }
                          else
                          {
                            ibex += " " + JSON.stringify(owl.default) + " ";
                          }
                          ibex += "; ";
                        }
                      }
                    }
                  }
                }
            }
            snake = armadillo.rules;
            if (snake)
            {
              {
                goldfinch = snake.length - 1;
              }
              while (sheep < goldfinch)
              {
                hummingbird = snake[];
                if (bean_sprout(hummingbird))
                {
                  swan = hummingbird.code(raccoon, hummingbird.keyword, armadillo.type);
                  if (swan)
                  {
                    ibex += " " + swan + " ";
                    if (squid)
                    {
                      ;
                    }
                  }
                }
              }
            }
            if (squid)
            {
              ibex += " " + tarsier + " ";
            }
            if (armadillo.type)
            {
              ibex += " } ";
              if (weasel && weasel === armadillo.type && ! komodo_dragon)
              {
                ibex += " else { ";
                {
                  dunlin = raccoon.schemaPath + ".type";
                  termite = raccoon.errSchemaPath + "/type";
                }
                goose = goose || [];
                goose.push(ibex);
                ibex = "";
                if (raccoon.createErrors !== false)
                {
                  ibex += " { keyword: '" + (rook || "type") + "' , dataPath: (dataPath || '') + " + raccoon.errorPath + " , schemaPath: " + raccoon.util.toQuotedString(termite) + " , params: { type: '";
                  if (beaver)
                  {
                    ibex += "" + weasel.join(",");
                  }
                  else
                  {
                    ibex += "" + weasel;
                  }
                  ibex += "' } ";
                  if (raccoon.opts.messages !== false)
                  {
                    ibex += " , message: 'should be ";
                    if (beaver)
                    {
                      ibex += "" + weasel.join(",");
                    }
                    else
                    {
                      ibex += "" + weasel;
                    }
                    ibex += "' ";
                  }
                  if (raccoon.opts.verbose)
                  {
                    ibex += " , schema: validate.schema" + dunlin + " , parentSchema: validate.schema" + raccoon.schemaPath + " , data: " + woodcock + " ";
                  }
                  ibex += " } ";
                }
                else
                {
                  ibex += " {} ";
                }
                baboon = ibex;
                ibex = goose.pop();
                if (! raccoon.compositeRule && squid)
                {
                  if (raccoon.async)
                  {
                    ibex += " throw new ValidationError([" + baboon + "]); ";
                  }
                  else
                  {
                    ibex += " validate.errors = [" + baboon + "]; return false; ";
                  }
                }
                else
                {
                  ibex += " var err = " + baboon + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
                }
                ibex += " } ";
              }
            }
            if (squid)
            {
              ibex += " if (errors === ";
              if (bat)
              {
                ibex += "0";
              }
              else
              {
                ibex += "errs_" + mantis;
              }
              ibex += ") { ";
              cat += "}";
            }
          }
        }
      }
    }
    if (squid)
    {
      ibex = ibex + " " + cat + " ";
    }
    if (bat)
    {
      if (boar)
      {
        ibex = ibex + " if (errors === 0) return data;           ";
        ibex = ibex + " else throw new ValidationError(vErrors); ";
      }
      else
      {
        ibex = ibex + " validate.errors = vErrors; ";
        ibex = ibex + " return errors === 0;       ";
      }
      ibex = ibex + " }; return validate;";
    }
    else
    {
      ibex = ibex + " var " + antelope + " = errors === errs_" + mantis + ";";
    }
    return ibex;
  };
  