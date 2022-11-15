"use strict";
  module.exports = function r(raccoon, hamster, chinchilla) {
    var ibex; // s
    var boar; // o
    var llama; // i
    var capybara; // h
    var mink; // l
    var prairie_dog; // p
    var mantis; // f
    var dogfish; // d
    var snail; // v
    var dunlin; // u
    var termite; // n
    var squid; // c
    var rook; // m
    var woodcock; // y
    var antelope; // g
    var goose; // E
    var baboon; // w
    var bat; // q
    var bison; // b
    var tarsier; // S
    var cat; // j
    var weasel; // D
    var beaver; // O
    var komodo_dragon; // Q
    var armadillo; // _
    var woodpecker; // k
    var quelea; // R
    var butterfly; // A
    var oyster; // x
    var stingray; // $
    var dragonfly; // L
    var finch; // V
    var meerkat; // H
    
      ibex = " ";
    boar = raccoon.level;
    llama = raccoon.dataLevel;
    capybara = raccoon.schema[hamster];
    mink = raccoon.schemaPath + raccoon.util.getProperty(hamster);
    prairie_dog = raccoon.errSchemaPath + "/" + hamster;
    mantis = ! raccoon.opts.allErrors;
    dogfish = "data" + (llama || "");
    snail = "valid" + boar;
    dunlin = raccoon.opts.$data && capybara && capybara.$data;
    if (dunlin)
    {
      ibex = " " + " var schema" + boar + " = " + raccoon.util.getData(capybara.$data, llama, raccoon.dataPathArr) + "; ";
    }
    else
    {
      ;
    }
    termite = "schema" + boar;
    if (! dunlin)
    {
      if (capybara.length < raccoon.opts.loopRequired && raccoon.schema.properties && Object.keys(raccoon.schema.properties).length)
      {
        squid = [];
        rook = capybara;
        if (rook)
        {
          {
            goose = rook.length - 1;
          }
          while (antelope < goose)
          {
            woodcock = rook[];
            baboon = raccoon.schema.properties[woodcock];
            if (! (baboon && (raccoon.opts.strictKeywords ? typeof baboon == "object" && Object.keys(baboon).length > 0 || baboon === false : raccoon.util.schemaHasRules(baboon, raccoon.RULES.all))))
            {
              squid[squid.length] = woodcock;
            }
          }
        }
      }
      else
      {
        squid = capybara;
      }
    }
    if (dunlin || squid.length)
    {
      {
        bat = raccoon.errorPath;
        bison = dunlin || squid.length >= raccoon.opts.loopRequired;
        tarsier = raccoon.opts.ownProperties;
      }
      if (mantis)
      {
        ibex = ibex + " var missing" + boar + "; ";
        if (bison)
        {
          if (! dunlin)
          {
            ibex = ibex + " var " + termite + " = validate.schema" + mink + "; ";
          }
          {
            cat = "i" + boar;
            weasel = "schema" + boar + "[" + cat + "]";
            beaver = "' + " + weasel + " + '";
          }
          if (raccoon.opts._errorDataPathProperty)
          {
            raccoon.errorPath = raccoon.util.getPathExpr(bat, weasel, raccoon.opts.jsonPointers);
          }
          ibex = ibex + " var " + snail + " = true; ";
          if (dunlin)
          {
            ibex = ibex + " if (schema" + boar + " === undefined) " + snail + " = true; else if (!Array.isArray(schema" + boar + ")) " + snail + " = false; else {";
          }
          ibex = ibex + " for (var " + cat + " = 0; " + cat + " < " + termite + ".length; " + cat + "++) { " + snail + " = " + dogfish + "[" + termite + "[" + cat + "]] !== undefined ";
          if (tarsier)
          {
            ibex = ibex + " &&   Object.prototype.hasOwnProperty.call(" + dogfish + ", " + termite + "[" + cat + "]) ";
          }
          ibex = ibex + "; if (!" + snail + ") break; } ";
          if (dunlin)
          {
            ibex = ibex + "  }  ";
          }
          ibex = ibex + "  if (!" + snail + ") {   ";
          komodo_dragon = komodo_dragon || [];
          komodo_dragon.push(ibex);
          ibex = "";
          if (raccoon.createErrors !== false)
          {
            ibex = "" + ' { keyword: \'required\' , dataPath: (dataPath || \'\') + ' + raccoon.errorPath + " , schemaPath: " + raccoon.util.toQuotedString(prairie_dog) + " , params: { missingProperty: '" + beaver + "' } ";
            if (raccoon.opts.messages !== false)
            {
              ibex = ibex + " , message: '";
              if (raccoon.opts._errorDataPathProperty)
              {
                ibex = ibex + "is a required property";
              }
              else
              {
                ibex = ibex + "should have required property \\'" + beaver + "\\'";
              }
              ibex = ibex + "' ";
            }
            if (raccoon.opts.verbose)
            {
              ibex = ibex + " , schema: validate.schema" + mink + " , parentSchema: validate.schema" + raccoon.schemaPath + " , data: " + dogfish + " ";
            }
            ibex = ibex + " } ";
          }
          else
          {
            ibex = ' {} ';
          }
          armadillo = ibex;
          ibex = komodo_dragon.pop();
          if (! raccoon.compositeRule && mantis)
          {
            if (raccoon.async)
            {
              ibex = ibex + " throw new ValidationError([" + armadillo + "]); ";
            }
            else
            {
              ibex = ibex + " validate.errors = [" + armadillo + "]; return false; ";
            }
          }
          else
          {
            ibex = ibex + " var err = " + armadillo + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
          }
          ibex = ibex + " } else { ";
        }
        else
        {
          ibex = ibex + " if ( ";
          woodpecker = squid;
          if (woodpecker)
          {
            {
              cat = -1;
              butterfly = woodpecker.length - 1;
            }
            while (cat < butterfly)
            {
              quelea = woodpecker[cat += 1];
              if (cat)
              {
                ibex += " || ";
              }
              {
                oyster = raccoon.util.getProperty(quelea);
                stingray = dogfish + oyster;
              }
              ibex += " ( ( " + stingray + " === undefined ";
              if (tarsier)
              {
                ibex += " || ! Object.prototype.hasOwnProperty.call(" + dogfish + ", '" + raccoon.util.escapeQuotes(quelea) + "') ";
              }
              ibex += ") && (missing" + boar + " = " + raccoon.util.toQuotedString(raccoon.opts.jsonPointers ? quelea : oyster) + ") ) ";
            }
          }
          ibex = ibex + ") {  ";
          {
            weasel = "missing" + boar;
            beaver = "' + " + weasel + " + '";
          }
          if (raccoon.opts._errorDataPathProperty)
          {
            raccoon.errorPath = raccoon.opts.jsonPointers ? raccoon.util.getPathExpr(bat, weasel, true) : bat + " + " + weasel;
          }
          komodo_dragon = komodo_dragon || [];
          komodo_dragon.push(ibex);
          ibex = "";
          if (raccoon.createErrors !== false)
          {
            ibex = "" + ' { keyword: \'required\' , dataPath: (dataPath || \'\') + ' + raccoon.errorPath + " , schemaPath: " + raccoon.util.toQuotedString(prairie_dog) + " , params: { missingProperty: '" + beaver + "' } ";
            if (raccoon.opts.messages !== false)
            {
              ibex = ibex + " , message: '";
              if (raccoon.opts._errorDataPathProperty)
              {
                ibex = ibex + "is a required property";
              }
              else
              {
                ibex = ibex + "should have required property \\'" + beaver + "\\'";
              }
              ibex = ibex + "' ";
            }
            if (raccoon.opts.verbose)
            {
              ibex = ibex + " , schema: validate.schema" + mink + " , parentSchema: validate.schema" + raccoon.schemaPath + " , data: " + dogfish + " ";
            }
            ibex = ibex + " } ";
          }
          else
          {
            ibex = ' {} ';
          }
          armadillo = ibex;
          ibex = komodo_dragon.pop();
          if (! raccoon.compositeRule && mantis)
          {
            if (raccoon.async)
            {
              ibex = ibex + " throw new ValidationError([" + armadillo + "]); ";
            }
            else
            {
              ibex = ibex + " validate.errors = [" + armadillo + "]; return false; ";
            }
          }
          else
          {
            ibex = ibex + " var err = " + armadillo + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
          }
          ibex = ibex + " } else { ";
        }
      }
      else
      {
        if (bison)
        {
          if (! dunlin)
          {
            ibex = ibex + " var " + termite + " = validate.schema" + mink + "; ";
          }
          {
            cat = "i" + boar;
            weasel = "schema" + boar + "[" + cat + "]";
            beaver = "' + " + weasel + " + '";
          }
          if (raccoon.opts._errorDataPathProperty)
          {
            raccoon.errorPath = raccoon.util.getPathExpr(bat, weasel, raccoon.opts.jsonPointers);
          }
          if (dunlin)
          {
            ibex = ibex + " if (" + termite + " && !Array.isArray(" + termite + ")) {  var err =   ";
            if (raccoon.createErrors !== false)
            {
              ibex = ibex + ' { keyword: \'required\' , dataPath: (dataPath || \'\') + ' + raccoon.errorPath + " , schemaPath: " + raccoon.util.toQuotedString(prairie_dog) + " , params: { missingProperty: '" + beaver + "' } ";
              if (raccoon.opts.messages !== false)
              {
                ibex = ibex + " , message: '";
                if (raccoon.opts._errorDataPathProperty)
                {
                  ibex = ibex + "is a required property";
                }
                else
                {
                  ibex = ibex + "should have required property \\'" + beaver + "\\'";
                }
                ibex = ibex + "' ";
              }
              if (raccoon.opts.verbose)
              {
                ibex = ibex + " , schema: validate.schema" + mink + " , parentSchema: validate.schema" + raccoon.schemaPath + " , data: " + dogfish + " ";
              }
              ibex = ibex + " } ";
            }
            else
            {
              ibex = ibex + " {} ";
            }
            ibex = ibex + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } else if (" + termite + " !== undefined) { ";
          }
          ibex = ibex + " for (var " + cat + " = 0; " + cat + " < " + termite + ".length; " + cat + "++) { if (" + dogfish + "[" + termite + "[" + cat + "]] === undefined ";
          if (tarsier)
          {
            ibex = ibex + " || ! Object.prototype.hasOwnProperty.call(" + dogfish + ", " + termite + "[" + cat + "]) ";
          }
          ibex = ibex + ") {  var err =   ";
          if (raccoon.createErrors !== false)
          {
            ibex = ibex + ' { keyword: \'required\' , dataPath: (dataPath || \'\') + ' + raccoon.errorPath + " , schemaPath: " + raccoon.util.toQuotedString(prairie_dog) + " , params: { missingProperty: '" + beaver + "' } ";
            if (raccoon.opts.messages !== false)
            {
              ibex = ibex + " , message: '";
              if (raccoon.opts._errorDataPathProperty)
              {
                ibex = ibex + "is a required property";
              }
              else
              {
                ibex = ibex + "should have required property \\'" + beaver + "\\'";
              }
              ibex = ibex + "' ";
            }
            if (raccoon.opts.verbose)
            {
              ibex = ibex + " , schema: validate.schema" + mink + " , parentSchema: validate.schema" + raccoon.schemaPath + " , data: " + dogfish + " ";
            }
            ibex = ibex + " } ";
          }
          else
          {
            ibex = ibex + " {} ";
          }
          ibex = ibex + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } } ";
          if (dunlin)
          {
            ibex = ibex + "  }  ";
          }
        }
        else
        {
          dragonfly = squid;
          if (dragonfly)
          {
            {
              meerkat = dragonfly.length - 1;
            }
            while (finch < meerkat)
            {
              quelea = dragonfly[];
              {
                oyster = raccoon.util.getProperty(quelea);
                beaver = raccoon.util.escapeQuotes(quelea);
                stingray = dogfish + oyster;
              }
              if (raccoon.opts._errorDataPathProperty)
              {
                raccoon.errorPath = raccoon.util.getPath(bat, quelea, raccoon.opts.jsonPointers);
              }
              ibex += " if ( " + stingray + " === undefined ";
              if (tarsier)
              {
                ibex += " || ! Object.prototype.hasOwnProperty.call(" + dogfish + ", '" + raccoon.util.escapeQuotes(quelea) + "') ";
              }
              ibex += ") {  var err =   ";
              if (raccoon.createErrors !== false)
              {
                ibex += ' { keyword: \'required\' , dataPath: (dataPath || \'\') + ' + raccoon.errorPath + " , schemaPath: " + raccoon.util.toQuotedString(prairie_dog) + " , params: { missingProperty: '" + beaver + "' } ";
                if (raccoon.opts.messages !== false)
                {
                  ibex += " , message: '";
                  if (raccoon.opts._errorDataPathProperty)
                  {
                    ibex += "is a required property";
                  }
                  else
                  {
                    ibex += "should have required property \\'" + beaver + "\\'";
                  }
                  ibex += "' ";
                }
                if (raccoon.opts.verbose)
                {
                  ibex += " , schema: validate.schema" + mink + " , parentSchema: validate.schema" + raccoon.schemaPath + " , data: " + dogfish + " ";
                }
                ibex += " } ";
              }
              else
              {
                ibex += " {} ";
              }
              ibex += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } ";
            }
          }
        }
      }
      raccoon.errorPath = bat;
    }
    else
      if (mantis)
      {
        ibex = ibex + " if (true) {";
      }
    return ibex;
  };
  