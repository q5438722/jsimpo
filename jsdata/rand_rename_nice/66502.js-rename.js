'use strict';
module.exports = function generate_validate(it, $keyword, $native) {
  function $shouldUseGroup($rulesGroup) {
    var styles = $rulesGroup.rules;
    var i = 0;
    for (; i < styles.length; i++) {
      if ($shouldUseRule(styles[i])) {
        return true;
      }
    }
  }
  function $shouldUseRule(node) {
    return it.schema[node.keyword] !== undefined || node.implements && hasSpread(node);
  }
  function hasSpread(node) {
    var raw = node.implements;
    var key = 0;
    for (; key < raw.length; key++) {
      if (it.schema[raw[key]] !== undefined) {
        return true;
      }
    }
  }
  var out = "";
  var i = it.schema.$async === true;
  var res = it.util.schemaHasRulesExcept(it.schema, it.RULES.all, "$ref");
  var key = it.self._getId(it.schema);
  if (it.opts.strictKeywords) {
    var f = it.util.schemaUnknownRules(it.schema, it.RULES.keywords);
    if (f) {
      var r = "unknown keyword: " + f;
      if (it.opts.strictKeywords === "log") {
        it.logger.warn(r);
      } else {
        throw new Error(r);
      }
    }
  }
  if (it.isTop) {
    out = out + " var validate = ";
    if (i) {
      it.async = true;
      out = out + "async ";
    }
    out = out + "function(data, dataPath, parentData, parentDataProperty, rootData) { 'use strict'; ";
    if (key && (it.opts.sourceCode || it.opts.processCode)) {
      out = out + (" " + ("/*# sourceURL=" + key + " */") + " ");
    }
  }
  if (typeof it.schema == "boolean" || !(res || it.schema.$ref)) {
    $keyword = "false schema";
    var $lvl = it.level;
    var $dataLvl = it.dataLevel;
    var $schema = it.schema[$keyword];
    var d = it.schemaPath + it.util.getProperty($keyword);
    var $errSchemaPath = it.errSchemaPath + "/" + $keyword;
    var v = !it.opts.allErrors;
    var error;
    var $data = "data" + ($dataLvl || "");
    var $valid = "valid" + $lvl;
    if (it.schema === false) {
      if (it.isTop) {
        v = true;
      } else {
        out = out + (" var " + $valid + " = false; ");
      }
      var $$outStack = $$outStack || [];
      $$outStack.push(out);
      out = "";
      if (it.createErrors !== false) {
        out = out + (" { keyword: '" + (error || "false schema") + "' , dataPath: (dataPath || '') + " + it.errorPath + " , schemaPath: " + it.util.toQuotedString($errSchemaPath) + " , params: {} ");
        if (it.opts.messages !== false) {
          out = out + " , message: 'boolean schema is false' ";
        }
        if (it.opts.verbose) {
          out = out + (" , schema: false , parentSchema: validate.schema" + it.schemaPath + " , data: " + $data + " ");
        }
        out = out + " } ";
      } else {
        out = out + " {} ";
      }
      var __err = out;
      out = $$outStack.pop();
      if (!it.compositeRule && v) {
        if (it.async) {
          out = out + (" throw new ValidationError([" + __err + "]); ");
        } else {
          out = out + (" validate.errors = [" + __err + "]; return false; ");
        }
      } else {
        out = out + (" var err = " + __err + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ");
      }
    } else {
      if (it.isTop) {
        if (i) {
          out = out + " return data; ";
        } else {
          out = out + " validate.errors = null; return true; ";
        }
      } else {
        out = out + (" var " + $valid + " = true; ");
      }
    }
    if (it.isTop) {
      out = out + " }; return validate; ";
    }
    return out;
  }
  if (it.isTop) {
    var $top = it.isTop;
    $lvl = it.level = 0;
    $dataLvl = it.dataLevel = 0;
    $data = "data";
    it.rootId = it.resolve.fullPath(it.self._getId(it.root.schema));
    it.baseId = it.baseId || it.rootId;
    delete it.isTop;
    it.dataPathArr = [""];
    if (it.schema.default !== undefined && it.opts.useDefaults && it.opts.strictDefaults) {
      var errMsg = "default is ignored in the schema root";
      if (it.opts.strictDefaults === "log") {
        it.logger.warn(errMsg);
      } else {
        throw new Error(errMsg);
      }
    }
    out = out + " var vErrors = null; ";
    out = out + " var errors = 0;     ";
    out = out + " if (rootData === undefined) rootData = data; ";
  } else {
    $lvl = it.level;
    $dataLvl = it.dataLevel;
    $data = "data" + ($dataLvl || "");
    if (key) {
      it.baseId = it.resolve.url(it.baseId, key);
    }
    if (i && !it.async) {
      throw new Error("async schema in sync schema");
    }
    out = out + (" var errs_" + $lvl + " = errors;");
  }
  $valid = "valid" + $lvl;
  v = !it.opts.allErrors;
  var factor_text = "";
  var pix_color = "";
  var name = it.schema.type;
  var $typeIsArray = Array.isArray(name);
  if (name && it.opts.nullable && it.schema.nullable === true) {
    if ($typeIsArray) {
      if (name.indexOf("null") == -1) {
        name = name.concat("null");
      }
    } else {
      if (name != "null") {
        name = [name, "null"];
        $typeIsArray = true;
      }
    }
  }
  if ($typeIsArray && name.length == 1) {
    name = name[0];
    $typeIsArray = false;
  }
  if (it.schema.$ref && res) {
    if (it.opts.extendRefs == "fail") {
      throw new Error('$ref: validation keywords used in schema at path "' + it.errSchemaPath + '" (see option extendRefs)');
    } else {
      if (it.opts.extendRefs !== true) {
        res = false;
        it.logger.warn('$ref: keywords ignored in schema at path "' + it.errSchemaPath + '"');
      }
    }
  }
  if (it.schema.$comment && it.opts.$comment) {
    out = out + (" " + it.RULES.all.$comment.code(it, "$comment"));
  }
  if (name) {
    if (it.opts.coerceTypes) {
      var handle = it.util.coerceToTypes(it.opts.coerceTypes, name);
    }
    var $rulesGroup = it.RULES.types[name];
    if (handle || $typeIsArray || $rulesGroup === true || $rulesGroup && !$shouldUseGroup($rulesGroup)) {
      d = it.schemaPath + ".type";
      $errSchemaPath = it.errSchemaPath + "/type";
      d = it.schemaPath + ".type";
      $errSchemaPath = it.errSchemaPath + "/type";
      var $method = $typeIsArray ? "checkDataTypes" : "checkDataType";
      out = out + (" if (" + it.util[$method](name, $data, it.opts.strictNumbers, true) + ") { ");
      if (handle) {
        var $dataType = "dataType" + $lvl;
        var $coerced = "coerced" + $lvl;
        out = out + (" var " + $dataType + " = typeof " + $data + "; var " + $coerced + " = undefined; ");
        if (it.opts.coerceTypes == "array") {
          out = out + (" if (" + $dataType + " == 'object' && Array.isArray(" + $data + ") && " + $data + ".length == 1) { " + $data + " = " + $data + "[0]; " + $dataType + " = typeof " + $data + "; if (" + it.util.checkDataType(it.schema.type, $data, it.opts.strictNumbers) + ") " + $coerced + " = " + $data + "; } ");
        }
        out = out + (" if (" + $coerced + " !== undefined) ; ");
        var arr1 = handle;
        if (arr1) {
          var $type;
          var $i = -1;
          var l1 = arr1.length - 1;
          for (; $i < l1;) {
            $type = arr1[$i = $i + 1];
            if ($type == "string") {
              out = out + (" else if (" + $dataType + " == 'number' || " + $dataType + " == 'boolean') " + $coerced + " = '' + " + $data + "; else if (" + $data + " === null) " + $coerced + " = ''; ");
            } else {
              if ($type == "number" || $type == "integer") {
                out = out + (" else if (" + $dataType + " == 'boolean' || " + $data + " === null || (" + $dataType + " == 'string' && " + $data + " && " + $data + " == +" + $data + " ");
                if ($type == "integer") {
                  out = out + (" && !(" + $data + " % 1)");
                }
                out = out + (")) " + $coerced + " = +" + $data + "; ");
              } else {
                if ($type == "boolean") {
                  out = out + (" else if (" + $data + " === 'false' || " + $data + " === 0 || " + $data + " === null) " + $coerced + " = false; else if (" + $data + " === 'true' || " + $data + " === 1) " + $coerced + " = true; ");
                } else {
                  if ($type == "null") {
                    out = out + (" else if (" + $data + " === '' || " + $data + " === 0 || " + $data + " === false) " + $coerced + " = null; ");
                  } else {
                    if (it.opts.coerceTypes == "array" && $type == "array") {
                      out = out + (" else if (" + $dataType + " == 'string' || " + $dataType + " == 'number' || " + $dataType + " == 'boolean' || " + $data + " == null) " + $coerced + " = [" + $data + "]; ");
                    }
                  }
                }
              }
            }
          }
        }
        out = out + " else {   ";
        $$outStack = $$outStack || [];
        $$outStack.push(out);
        out = "";
        if (it.createErrors !== false) {
          out = out + (" { keyword: '" + (error || "type") + "' , dataPath: (dataPath || '') + " + it.errorPath + " , schemaPath: " + it.util.toQuotedString($errSchemaPath) + " , params: { type: '");
          if ($typeIsArray) {
            out = out + ("" + name.join(","));
          } else {
            out = out + ("" + name);
          }
          out = out + "' } ";
          if (it.opts.messages !== false) {
            out = out + " , message: 'should be ";
            if ($typeIsArray) {
              out = out + ("" + name.join(","));
            } else {
              out = out + ("" + name);
            }
            out = out + "' ";
          }
          if (it.opts.verbose) {
            out = out + (" , schema: validate.schema" + d + " , parentSchema: validate.schema" + it.schemaPath + " , data: " + $data + " ");
          }
          out = out + " } ";
        } else {
          out = out + " {} ";
        }
        __err = out;
        out = $$outStack.pop();
        if (!it.compositeRule && v) {
          if (it.async) {
            out = out + (" throw new ValidationError([" + __err + "]); ");
          } else {
            out = out + (" validate.errors = [" + __err + "]; return false; ");
          }
        } else {
          out = out + (" var err = " + __err + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ");
        }
        out = out + (" } if (" + $coerced + " !== undefined) {  ");
        var $parentData = $dataLvl ? "data" + ($dataLvl - 1 || "") : "parentData";
        var $parentDataProperty = $dataLvl ? it.dataPathArr[$dataLvl] : "parentDataProperty";
        out = out + (" " + $data + " = " + $coerced + "; ");
        if (!$dataLvl) {
          out = out + ("if (" + $parentData + " !== undefined)");
        }
        out = out + (" " + $parentData + "[" + $parentDataProperty + "] = " + $coerced + "; } ");
      } else {
        $$outStack = $$outStack || [];
        $$outStack.push(out);
        out = "";
        if (it.createErrors !== false) {
          out = out + (" { keyword: '" + (error || "type") + "' , dataPath: (dataPath || '') + " + it.errorPath + " , schemaPath: " + it.util.toQuotedString($errSchemaPath) + " , params: { type: '");
          if ($typeIsArray) {
            out = out + ("" + name.join(","));
          } else {
            out = out + ("" + name);
          }
          out = out + "' } ";
          if (it.opts.messages !== false) {
            out = out + " , message: 'should be ";
            if ($typeIsArray) {
              out = out + ("" + name.join(","));
            } else {
              out = out + ("" + name);
            }
            out = out + "' ";
          }
          if (it.opts.verbose) {
            out = out + (" , schema: validate.schema" + d + " , parentSchema: validate.schema" + it.schemaPath + " , data: " + $data + " ");
          }
          out = out + " } ";
        } else {
          out = out + " {} ";
        }
        __err = out;
        out = $$outStack.pop();
        if (!it.compositeRule && v) {
          if (it.async) {
            out = out + (" throw new ValidationError([" + __err + "]); ");
          } else {
            out = out + (" validate.errors = [" + __err + "]; return false; ");
          }
        } else {
          out = out + (" var err = " + __err + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ");
        }
      }
      out = out + " } ";
    }
  }
  if (it.schema.$ref && !res) {
    out = out + (" " + it.RULES.all.$ref.code(it, "$ref") + " ");
    if (v) {
      out = out + " } if (errors === ";
      if ($top) {
        out = out + "0";
      } else {
        out = out + ("errs_" + $lvl);
      }
      out = out + ") { ";
      pix_color = pix_color + "}";
    }
  } else {
    var arr2 = it.RULES;
    if (arr2) {
      var $i = -1;
      var l1 = arr2.length - 1;
      for (; $i < l1;) {
        $rulesGroup = arr2[$i = $i + 1];
        if ($shouldUseGroup($rulesGroup)) {
          if ($rulesGroup.type) {
            out = out + (" if (" + it.util.checkDataType($rulesGroup.type, $data, it.opts.strictNumbers) + ") { ");
          }
          if (it.opts.useDefaults) {
            if ($rulesGroup.type == "object" && it.schema.properties) {
              $schema = it.schema.properties;
              var $schemaKeys = Object.keys($schema);
              var arr1 = $schemaKeys;
              if (arr1) {
                var $propertyKey;
                var $i = -1;
                var l1 = arr1.length - 1;
                for (; $i < l1;) {
                  $propertyKey = arr1[$i = $i + 1];
                  var $sch = $schema[$propertyKey];
                  if ($sch.default !== undefined) {
                    var $18 = $data + it.util.getProperty($propertyKey);
                    if (it.compositeRule) {
                      if (it.opts.strictDefaults) {
                        errMsg = "default is ignored for: " + $18;
                        if (it.opts.strictDefaults === "log") {
                          it.logger.warn(errMsg);
                        } else {
                          throw new Error(errMsg);
                        }
                      }
                    } else {
                      out = out + (" if (" + $18 + " === undefined ");
                      if (it.opts.useDefaults == "empty") {
                        out = out + (" || " + $18 + " === null || " + $18 + " === '' ");
                      }
                      out = out + (" ) " + $18 + " = ");
                      if (it.opts.useDefaults == "shared") {
                        out = out + (" " + it.useDefault($sch.default) + " ");
                      } else {
                        out = out + (" " + JSON.stringify($sch.default) + " ");
                      }
                      out = out + "; ";
                    }
                  }
                }
              }
            } else {
              if ($rulesGroup.type == "array" && Array.isArray(it.schema.items)) {
                var arr4 = it.schema.items;
                if (arr4) {
                  $i = -1;
                  var l1 = arr4.length - 1;
                  for (; $i < l1;) {
                    $sch = arr4[$i = $i + 1];
                    if ($sch.default !== undefined) {
                      $18 = $data + "[" + $i + "]";
                      if (it.compositeRule) {
                        if (it.opts.strictDefaults) {
                          errMsg = "default is ignored for: " + $18;
                          if (it.opts.strictDefaults === "log") {
                            it.logger.warn(errMsg);
                          } else {
                            throw new Error(errMsg);
                          }
                        }
                      } else {
                        out = out + (" if (" + $18 + " === undefined ");
                        if (it.opts.useDefaults == "empty") {
                          out = out + (" || " + $18 + " === null || " + $18 + " === '' ");
                        }
                        out = out + (" ) " + $18 + " = ");
                        if (it.opts.useDefaults == "shared") {
                          out = out + (" " + it.useDefault($sch.default) + " ");
                        } else {
                          out = out + (" " + JSON.stringify($sch.default) + " ");
                        }
                        out = out + "; ";
                      }
                    }
                  }
                }
              }
            }
          }
          var arr5 = $rulesGroup.rules;
          if (arr5) {
            var $rule;
            var i5 = -1;
            var l5 = arr5.length - 1;
            for (; i5 < l5;) {
              $rule = arr5[i5 = i5 + 1];
              if ($shouldUseRule($rule)) {
                var result = $rule.code(it, $rule.keyword, $rulesGroup.type);
                if (result) {
                  out = out + (" " + result + " ");
                  if (v) {
                    factor_text = factor_text + "}";
                  }
                }
              }
            }
          }
          if (v) {
            out = out + (" " + factor_text + " ");
            factor_text = "";
          }
          if ($rulesGroup.type) {
            out = out + " } ";
            if (name && name === $rulesGroup.type && !handle) {
              out = out + " else { ";
              d = it.schemaPath + ".type";
              $errSchemaPath = it.errSchemaPath + "/type";
              $$outStack = $$outStack || [];
              $$outStack.push(out);
              out = "";
              if (it.createErrors !== false) {
                out = out + (" { keyword: '" + (error || "type") + "' , dataPath: (dataPath || '') + " + it.errorPath + " , schemaPath: " + it.util.toQuotedString($errSchemaPath) + " , params: { type: '");
                if ($typeIsArray) {
                  out = out + ("" + name.join(","));
                } else {
                  out = out + ("" + name);
                }
                out = out + "' } ";
                if (it.opts.messages !== false) {
                  out = out + " , message: 'should be ";
                  if ($typeIsArray) {
                    out = out + ("" + name.join(","));
                  } else {
                    out = out + ("" + name);
                  }
                  out = out + "' ";
                }
                if (it.opts.verbose) {
                  out = out + (" , schema: validate.schema" + d + " , parentSchema: validate.schema" + it.schemaPath + " , data: " + $data + " ");
                }
                out = out + " } ";
              } else {
                out = out + " {} ";
              }
              __err = out;
              out = $$outStack.pop();
              if (!it.compositeRule && v) {
                if (it.async) {
                  out = out + (" throw new ValidationError([" + __err + "]); ");
                } else {
                  out = out + (" validate.errors = [" + __err + "]; return false; ");
                }
              } else {
                out = out + (" var err = " + __err + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ");
              }
              out = out + " } ";
            }
          }
          if (v) {
            out = out + " if (errors === ";
            if ($top) {
              out = out + "0";
            } else {
              out = out + ("errs_" + $lvl);
            }
            out = out + ") { ";
            pix_color = pix_color + "}";
          }
        }
      }
    }
  }
  if (v) {
    out = out + (" " + pix_color + " ");
  }
  if ($top) {
    if (i) {
      out = out + " if (errors === 0) return data;           ";
      out = out + " else throw new ValidationError(vErrors); ";
    } else {
      out = out + " validate.errors = vErrors; ";
      out = out + " return errors === 0;       ";
    }
    out = out + " }; return validate;";
  } else {
    out = out + (" var " + $valid + " = errors === errs_" + $lvl + ";");
  }
  return out;
};

