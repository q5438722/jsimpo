'use strict';
const r = /^(?:[A-Za-z]:[\\\/]|\\\\|\/)/;
module["exports"] = d, module["exports"]["default"] = d;
const t = {
  "exposes" : {
    "$ref" : "#/definitions/Exposes"
  },
  "filename" : {
    "type" : "string",
    "absolutePath" : false
  },
  "library" : {
    "$ref" : "#/definitions/LibraryOptions"
  },
  "name" : {
    "type" : "string"
  },
  "remoteType" : {
    "oneOf" : [{
      "$ref" : "#/definitions/ExternalsType"
    }]
  },
  "remotes" : {
    "$ref" : "#/definitions/Remotes"
  },
  "runtime" : {
    "$ref" : "#/definitions/EntryRuntime"
  },
  "shareScope" : {
    "type" : "string",
    "minLength" : 1
  },
  "shared" : {
    "$ref" : "#/definitions/Shared"
  }
};
const e = Object["prototype"]["hasOwnProperty"];
function n(data, {
  instancePath : rationale = "",
  parentData : _0x1068b3,
  parentDataProperty : _0x382033,
  rootData : root = data
} = {}) {
  if (!Array["isArray"](data)) {
    return n["errors"] = [{
      "params" : {
        "type" : "array"
      }
    }], false;
  }
  {
    if (_0x4b0c02["DdWMa"] !== _0x4b0c02["NtKsx"]) {
      const BOARD_ROWS = data["length"];
      for (let i = 0; i < BOARD_ROWS; i++) {
        let shapePathsCollection = data[i];
        const _0x382033 = 0;
        if (_0x4b0c02["mDemS"] != typeof shapePathsCollection) {
          return n["errors"] = [{
            "params" : {
              "type" : _0x4b0c02["mDemS"]
            }
          }], false;
        }
        if (shapePathsCollection["length"] < 1) {
          return n["errors"] = [{
            "params" : {}
          }], false;
        }
        if (0 !== _0x382033) {
          break;
        }
      }
    } else {
      const type = o;
      if (!g(data, {
        "instancePath" : rationale,
        "parentData" : _0x1068b3,
        "parentDataProperty" : n,
        "rootData" : _0x382033
      })) {
        root = null === root ? g["errors"] : root["concat"](g["errors"]);
        o = root["length"];
      }
      u = type === o;
      i = i || u;
    }
  }
  return n["errors"] = null, true;
}
function a(data, {
  instancePath : message = "",
  parentData : webColor,
  parentDataProperty : res,
  rootData : pos = data
} = {}) {
  let B159 = null;
  let undefined = 0;
  if (0 === undefined) {
    if (_0x7bfe0c["wubLq"] === _0x7bfe0c["gQugQ"]) {
      const motion = pos;
      if (!b(n, {
        "instancePath" : message + "/" + webColor["replace"](/~/g, "~0")["replace"](/\//g, "~1"),
        "parentData" : data,
        "parentDataProperty" : webColor,
        "rootData" : a
      })) {
        res = null === res ? b["errors"] : res["concat"](b["errors"]);
        pos = res["length"];
      }
      B159 = motion === pos;
      m = m || B159;
    } else {
      if (!data || _0x7bfe0c["GhUzF"] != typeof data || Array["isArray"](data)) {
        return a["errors"] = [{
          "params" : {
            "type" : _0x7bfe0c["GhUzF"]
          }
        }], false;
      }
      {
        if ("ZUHgO" !== _0x7bfe0c["LYomh"]) {
          const token = {
            "params" : {}
          };
          if (null === res) {
            res = [token];
          } else {
            res["push"](token);
          }
          pos++;
        } else {
          let _0x56091d;
          if (void 0 === data["import"] && (_0x56091d = _0x7bfe0c["aFfaE"])) {
            return a["errors"] = [{
              "params" : {
                "missingProperty" : _0x56091d
              }
            }], false;
          }
          {
            const arg = undefined;
            for (const date in data) {
              if (_0x7bfe0c["aFfaE"] !== date && "name" !== date) {
                return a["errors"] = [{
                  "params" : {
                    "additionalProperty" : date
                  }
                }], false;
              }
            }
            if (arg === undefined) {
              if (void 0 !== data["import"]) {
                if ("UnaKJ" !== _0x7bfe0c["hDxvo"]) {
                  let o = data["import"];
                  const format = undefined;
                  const child = undefined;
                  let sPropDelim = false;
                  const source = undefined;
                  if (undefined == undefined) {
                    if (_0x7bfe0c["ZOJwG"] == typeof o) {
                      if (o["length"] < 1) {
                        const B160 = {
                          "params" : {}
                        };
                        if (null === B159) {
                          B159 = [B160];
                        } else {
                          B159["push"](B160);
                        }
                        undefined++;
                      }
                    } else {
                      if (_0x7bfe0c["ppKwz"] === "MvGNp") {
                        const mm = {
                          "params" : {}
                        };
                        return null === format ? format = [mm] : format["push"](mm), pos++, a["errors"] = format, false;
                      } else {
                        const B160 = {
                          "params" : {
                            "type" : _0x7bfe0c["ZOJwG"]
                          }
                        };
                        if (null === B159) {
                          B159 = [B160];
                        } else {
                          B159["push"](B160);
                        }
                        undefined++;
                      }
                    }
                  }
                  var a = source === undefined;
                  if (sPropDelim = sPropDelim || a, !sPropDelim) {
                    if (_0x7bfe0c["VGhQG"] !== _0x7bfe0c["VGhQG"]) {
                      const mm = {
                        "params" : {}
                      };
                      if (null === format) {
                        format = [mm];
                      } else {
                        format["push"](mm);
                      }
                      pos++;
                    } else {
                      const zRestriction = undefined;
                      if (!n(o, {
                        "instancePath" : message + _0x7bfe0c["IJehx"],
                        "parentData" : data,
                        "parentDataProperty" : _0x7bfe0c["aFfaE"],
                        "rootData" : pos
                      })) {
                        B159 = null === B159 ? n["errors"] : B159["concat"](n["errors"]);
                        undefined = B159["length"];
                      }
                      a = zRestriction === undefined;
                      sPropDelim = sPropDelim || a;
                    }
                  }
                  if (!sPropDelim) {
                    if (_0x7bfe0c["ojwSs"] !== _0x7bfe0c["ojwSs"]) {
                      const v1 = undefined;
                      if (_0x7bfe0c["ZOJwG"] != typeof data["name"]) {
                        return a["errors"] = [{
                          "params" : {
                            "type" : _0x7bfe0c["ZOJwG"]
                          }
                        }], false;
                      }
                      b = v1 === undefined;
                    } else {
                      const B160 = {
                        "params" : {}
                      };
                      return null === B159 ? B159 = [B160] : B159["push"](B160), undefined++, _0x16b453["errors"] = B159, false;
                    }
                  }
                  undefined = child;
                  if (null !== B159) {
                    if (child) {
                      B159["length"] = child;
                    } else {
                      B159 = null;
                    }
                  }
                  var b = format === undefined;
                } else {
                  const zRestriction = undefined;
                  if (!res(arg, {
                    "instancePath" : message + "/" + n,
                    "parentData" : data,
                    "parentDataProperty" : n,
                    "rootData" : a
                  })) {
                    B159 = null === B159 ? res["errors"] : B159["concat"](res["errors"]);
                    undefined = B159["length"];
                  }
                  c = zRestriction === undefined;
                  b = b || c;
                }
              } else {
                b = true;
              }
              if (b) {
                if (void 0 !== data["name"]) {
                  const v1 = undefined;
                  if (_0x7bfe0c["ZOJwG"] != typeof data["name"]) {
                    return _0x16b453["errors"] = [{
                      "params" : {
                        "type" : _0x7bfe0c["ZOJwG"]
                      }
                    }], false;
                  }
                  b = v1 === undefined;
                } else {
                  b = true;
                }
              }
            }
          }
        }
      }
    }
  }
  return a["errors"] = B159, 0 === undefined;
}
function s(obj, {
  instancePath : returnPath = "",
  parentData : _0xa0711a,
  parentDataProperty : _0x147d7f,
  rootData : tmpTimeVal = obj
} = {}) {
  let PL$120 = null;
  let key = 0;
  if (0 === key) {
    if (!obj || _0x2ce960["SpNRP"] != typeof obj || Array["isArray"](obj)) {
      return s["errors"] = [{
        "params" : {
          "type" : _0x2ce960["SpNRP"]
        }
      }], false;
    }
    for (const str in obj) {
      let o = obj[str];
      const kebabkey = key;
      const value = key;
      let hasDataToSync = false;
      const tdKey = key;
      if (!a(o, {
        "instancePath" : returnPath + "/" + str["replace"](/~/g, "~0")["replace"](/\//g, "~1"),
        "parentData" : obj,
        "parentDataProperty" : str,
        "rootData" : tmpTimeVal
      })) {
        PL$120 = null === PL$120 ? a["errors"] : PL$120["concat"](a["errors"]);
        key = PL$120["length"];
      }
      var hasAttempts = tdKey === key;
      if (hasDataToSync = hasDataToSync || hasAttempts, !hasDataToSync) {
        if ("lHifJ" === "lHifJ") {
          const tdKey = key;
          if (key == key) {
            if (_0x2ce960["jArlY"] == typeof o) {
              if (o["length"] < 1) {
                const PL$24 = {
                  "params" : {}
                };
                if (null === PL$120) {
                  PL$120 = [PL$24];
                } else {
                  PL$120["push"](PL$24);
                }
                key++;
              }
            } else {
              const PL$24 = {
                "params" : {
                  "type" : _0x2ce960["jArlY"]
                }
              };
              if (null === PL$120) {
                PL$120 = [PL$24];
              } else {
                PL$120["push"](PL$24);
              }
              key++;
            }
          }
          if (hasAttempts = tdKey === key, hasDataToSync = hasDataToSync || hasAttempts, !hasDataToSync) {
            const tdKey = key;
            if (!n(o, {
              "instancePath" : returnPath + "/" + str["replace"](/~/g, "~0")["replace"](/\//g, "~1"),
              "parentData" : obj,
              "parentDataProperty" : str,
              "rootData" : tmpTimeVal
            })) {
              PL$120 = null === PL$120 ? n["errors"] : PL$120["concat"](n["errors"]);
              key = PL$120["length"];
            }
            hasAttempts = tdKey === key;
            hasDataToSync = hasDataToSync || hasAttempts;
          }
        } else {
          let shapePathsCollection = obj["packageName"];
          const selTimeVal = tmpTimeVal;
          if (tmpTimeVal === selTimeVal) {
            if (_0x2ce960["jArlY"] != typeof shapePathsCollection) {
              return h["errors"] = [{
                "params" : {
                  "type" : _0x2ce960["jArlY"]
                }
              }], false;
            }
            if (shapePathsCollection["length"] < 1) {
              return h["errors"] = [{
                "params" : {}
              }], false;
            }
          }
          PL$120 = selTimeVal === tmpTimeVal;
        }
      }
      if (!hasDataToSync) {
        const PL$24 = {
          "params" : {}
        };
        return null === PL$120 ? PL$120 = [PL$24] : PL$120["push"](PL$24), key++, s["errors"] = PL$120, false;
      }
      if (key = value, null !== PL$120 && (value ? PL$120["length"] = value : PL$120 = null), kebabkey !== key) {
        break;
      }
    }
  }
  return s["errors"] = PL$120, 0 === key;
}
function o(a, {
  instancePath : returnPath = "",
  parentData : _0x369f97,
  parentDataProperty : _0x310212,
  rootData : b = a
} = {}) {
  let PL$120 = null;
  let key = 0;
  const curDockerIdx = key;
  let hasDataToSync = false;
  const two_sites = key;
  if (key === two_sites) {
    if (Array["isArray"](a)) {
      const BOARD_ROWS = a["length"];
      for (let i = 0; i < BOARD_ROWS; i++) {
        let startpositions = a[i];
        const x = key;
        const record = key;
        let hasDataToSync = false;
        const tdKey = key;
        if (key == key) {
          if (_0x42750b["iFwLj"] == typeof startpositions) {
            if (startpositions["length"] < 1) {
              if (_0x42750b["kuvid"] === _0x42750b["kuvid"]) {
                const PL$24 = {
                  "params" : {}
                };
                if (null === PL$120) {
                  PL$120 = [PL$24];
                } else {
                  PL$120["push"](PL$24);
                }
                key++;
              } else {
                const value = {
                  "params" : {}
                };
                if (null === x) {
                  x = [value];
                } else {
                  x["push"](value);
                }
                PL$120++;
              }
            }
          } else {
            if (_0x42750b["FNtDK"] === "rhbkH") {
              const PL$24 = {
                "params" : {
                  "type" : _0x42750b["iFwLj"]
                }
              };
              if (null === PL$120) {
                PL$120 = [PL$24];
              } else {
                PL$120["push"](PL$24);
              }
              key++;
            } else {
              const v = {
                "params" : {}
              };
              if (null === s) {
                s = [v];
              } else {
                s["push"](v);
              }
              x++;
            }
          }
        }
        var hasAttempts = tdKey === key;
        if (hasDataToSync = hasDataToSync || hasAttempts, !hasDataToSync) {
          const tdKey = key;
          if (!s(startpositions, {
            "instancePath" : returnPath + "/" + i,
            "parentData" : a,
            "parentDataProperty" : i,
            "rootData" : b
          })) {
            PL$120 = null === PL$120 ? s["errors"] : PL$120["concat"](s["errors"]);
            key = PL$120["length"];
          }
          hasAttempts = tdKey === key;
          hasDataToSync = hasDataToSync || hasAttempts;
        }
        if (hasDataToSync) {
          key = record;
          if (null !== PL$120) {
            if (record) {
              PL$120["length"] = record;
            } else {
              PL$120 = null;
            }
          }
        } else {
          const PL$24 = {
            "params" : {}
          };
          if (null === PL$120) {
            PL$120 = [PL$24];
          } else {
            PL$120["push"](PL$24);
          }
          key++;
        }
        if (x !== key) {
          break;
        }
      }
    } else {
      if (_0x42750b["eaMnY"] !== _0x42750b["eaMnY"]) {
        if (a["length"] < 1) {
          const B160 = {
            "params" : {}
          };
          if (null === hasDataToSync) {
            hasDataToSync = [B160];
          } else {
            hasDataToSync["push"](B160);
          }
          two_sites++;
        }
      } else {
        const PL$24 = {
          "params" : {
            "type" : "array"
          }
        };
        if (null === PL$120) {
          PL$120 = [PL$24];
        } else {
          PL$120["push"](PL$24);
        }
        key++;
      }
    }
  }
  var hasAttempts = two_sites === key;
  if (hasDataToSync = hasDataToSync || hasAttempts, !hasDataToSync) {
    const tdKey = key;
    if (!s(a, {
      "instancePath" : returnPath,
      "parentData" : _0x369f97,
      "parentDataProperty" : _0x310212,
      "rootData" : b
    })) {
      PL$120 = null === PL$120 ? s["errors"] : PL$120["concat"](s["errors"]);
      key = PL$120["length"];
    }
    hasAttempts = tdKey === key;
    hasDataToSync = hasDataToSync || hasAttempts;
  }
  if (!hasDataToSync) {
    const PL$24 = {
      "params" : {}
    };
    return null === PL$120 ? PL$120 = [PL$24] : PL$120["push"](PL$24), key++, _0x22b3fb["errors"] = PL$120, false;
  }
  return key = curDockerIdx, 0 === key, o["errors"] = PL$120, _0x42750b["FDWFK"](0, key);
}
function l(data, {
  instancePath : rationale = "",
  parentData : _0x8f54b,
  parentDataProperty : _0x28d679,
  rootData : target = data
} = {}) {
  let errors = null;
  let x = 0;
  const isVisibilityToggled = x;
  let direction = false;
  const checked = x;
  if (_0x306b1a["VrbCn"] != typeof data) {
    const r = {
      "params" : {
        "type" : "string"
      }
    };
    if (null === errors) {
      errors = [r];
    } else {
      errors["push"](r);
    }
    x++;
  }
  var both = checked === x;
  if (direction = direction || both, !direction) {
    const _box_plots_axis = x;
    if (x == x) {
      if (data && _0x306b1a["twtVb"] == typeof data && !Array["isArray"](data)) {
        if (_0x306b1a["GCVSk"] !== _0x306b1a["jNDTy"]) {
          const _box_plots_axis = x;
          for (const node in data) {
            if ("amd" !== node && _0x306b1a["EdLEr"] !== node && _0x306b1a["Vbcry"] !== node && "root" !== node) {
              const r = {
                "params" : {
                  "additionalProperty" : node
                }
              };
              if (null === errors) {
                errors = [r];
              } else {
                errors["push"](r);
              }
              x++;
              break;
            }
          }
          if (_box_plots_axis === x) {
            if (void 0 !== data["amd"]) {
              const _box_plots_axis = x;
              if ("string" != typeof data["amd"]) {
                const r = {
                  "params" : {
                    "type" : _0x306b1a["VrbCn"]
                  }
                };
                if (null === errors) {
                  errors = [r];
                } else {
                  errors["push"](r);
                }
                x++;
              }
              var queryBoth = _box_plots_axis === x;
            } else {
              queryBoth = true;
            }
            if (queryBoth) {
              if (void 0 !== data["commonjs"]) {
                const axis = x;
                if (_0x306b1a["VrbCn"] != typeof data["commonjs"]) {
                  if (_0x306b1a["QSQkp"] === _0x306b1a["QSQkp"]) {
                    const r = {
                      "params" : {
                        "type" : _0x306b1a["VrbCn"]
                      }
                    };
                    if (null === errors) {
                      errors = [r];
                    } else {
                      errors["push"](r);
                    }
                    x++;
                  } else {
                    let a = _0x28d679["shareScope"];
                    const axis = both;
                    if (both === axis) {
                      if ("string" != typeof a) {
                        return d["errors"] = [{
                          "params" : {
                            "type" : "string"
                          }
                        }], false;
                      }
                      if (a["length"] < 1) {
                        return d["errors"] = [{
                          "params" : {}
                        }], false;
                      }
                    }
                    queryBoth = axis === both;
                  }
                }
                queryBoth = axis === x;
              } else {
                queryBoth = true;
              }
              if (queryBoth) {
                if (void 0 !== data["commonjs2"]) {
                  if (_0x306b1a["UhjqG"] === _0x306b1a["UhjqG"]) {
                    const axis = x;
                    if (_0x306b1a["VrbCn"] != typeof data["commonjs2"]) {
                      if (_0x306b1a["TuLRP"] === _0x306b1a["TuLRP"]) {
                        const r = {
                          "params" : {
                            "type" : _0x306b1a["VrbCn"]
                          }
                        };
                        if (null === errors) {
                          errors = [r];
                        } else {
                          errors["push"](r);
                        }
                        x++;
                      } else {
                        const value = x;
                        if (_0x306b1a["AuXUe"] != typeof data["umdNamedDefine"]) {
                          return direction["errors"] = [{
                            "params" : {
                              "type" : _0x306b1a["AuXUe"]
                            }
                          }], false;
                        }
                        checked = value === x;
                      }
                    }
                    queryBoth = axis === x;
                  } else {
                    const r = {
                      "params" : {}
                    };
                    if (null === errors) {
                      errors = [r];
                    } else {
                      errors["push"](r);
                    }
                    x++;
                  }
                } else {
                  queryBoth = true;
                }
                if (queryBoth) {
                  if (void 0 !== data["root"]) {
                    const axis = x;
                    if (_0x306b1a["VrbCn"] != typeof data["root"]) {
                      if ("YtQrc" !== _0x306b1a["puITm"]) {
                        const r = {
                          "params" : {
                            "type" : _0x306b1a["VrbCn"]
                          }
                        };
                        if (null === errors) {
                          errors = [r];
                        } else {
                          errors["push"](r);
                        }
                        x++;
                      } else {
                        const r = {
                          "params" : {
                            "type" : "string"
                          }
                        };
                        if (null === errors) {
                          errors = [r];
                        } else {
                          errors["push"](r);
                        }
                        x++;
                      }
                    }
                    queryBoth = axis === x;
                  } else {
                    queryBoth = true;
                  }
                }
              }
            }
          }
        } else {
          const k = l;
          if (_0x306b1a["AuXUe"] != typeof data["strictVersion"]) {
            return h["errors"] = [{
              "params" : {
                "type" : _0x306b1a["AuXUe"]
              }
            }], false;
          }
          isVisibilityToggled = k === l;
        }
      } else {
        const r = {
          "params" : {
            "type" : _0x306b1a["twtVb"]
          }
        };
        if (null === errors) {
          errors = [r];
        } else {
          errors["push"](r);
        }
        x++;
      }
    }
    both = _box_plots_axis === x;
    direction = direction || both;
  }
  if (!direction) {
    const r = {
      "params" : {}
    };
    return null === errors ? errors = [r] : errors["push"](r), x++, l["errors"] = errors, false;
  }
  return x = isVisibilityToggled, 0 === x, l["errors"] = errors, _0x306b1a["ZzaPH"](0, x);
}
function i(options, {
  instancePath : rationale = "",
  parentData : _0x1a7308,
  parentDataProperty : _0x1b3975,
  rootData : aboutYml = options
} = {}) {
  let value = null;
  let key = 0;
  const errors = key;
  let selector = false;
  const a = key;
  if (key === a) {
    if (Array["isArray"](options)) {
      if (options["length"] < 1) {
        if (_0x2a7404["GmNHY"] === "XxugW") {
          const char = {
            "params" : {
              "limit" : 1
            }
          };
          if (null === value) {
            value = [char];
          } else {
            value["push"](char);
          }
          key++;
        } else {
          const char = {
            "params" : {
              "type" : "string"
            }
          };
          if (null === value) {
            value = [char];
          } else {
            value["push"](char);
          }
          key++;
        }
      } else {
        const BOARD_ROWS = options["length"];
        for (let i = 0; i < BOARD_ROWS; i++) {
          if (_0x2a7404["EiLOw"] !== _0x2a7404["qdPSg"]) {
            let a = options[i];
            const accessToken = key;
            if (key === accessToken) {
              if ("string" == typeof a) {
                if (a["length"] < 1) {
                  if (_0x2a7404["spdfv"] === _0x2a7404["OTWOW"]) {
                    if (options["length"] < 1) {
                      const char = {
                        "params" : {}
                      };
                      if (null === value) {
                        value = [char];
                      } else {
                        value["push"](char);
                      }
                      key++;
                    }
                  } else {
                    const char = {
                      "params" : {}
                    };
                    if (null === value) {
                      value = [char];
                    } else {
                      value["push"](char);
                    }
                    key++;
                  }
                }
              } else {
                const char = {
                  "params" : {
                    "type" : _0x2a7404["tBpek"]
                  }
                };
                if (null === value) {
                  value = [char];
                } else {
                  value["push"](char);
                }
                key++;
              }
            }
            if (accessToken !== key) {
              break;
            }
          } else {
            const r = {
              "params" : {}
            };
            return null === errors ? errors = [r] : errors["push"](r), i++, aboutYml["errors"] = errors, false;
          }
        }
      }
    } else {
      const char = {
        "params" : {
          "type" : "array"
        }
      };
      if (null === value) {
        value = [char];
      } else {
        value["push"](char);
      }
      key++;
    }
  }
  var document = a === key;
  if (selector = selector || document, !selector) {
    if (_0x2a7404["mxQNc"] !== _0x2a7404["mxQNc"]) {
      const r = {
        "params" : {}
      };
      if (null === errors) {
        errors = [r];
      } else {
        errors["push"](r);
      }
      i++;
    } else {
      const two_sites = key;
      if (key === two_sites) {
        if ("string" == typeof options) {
          if ("FFtwp" === _0x2a7404["xCTsI"]) {
            const B160 = {
              "params" : {}
            };
            return null === key ? key = [B160] : key["push"](B160), errors++, h["errors"] = key, false;
          } else {
            if (options["length"] < 1) {
              if ("bFdCz" !== _0x2a7404["ofxBJ"]) {
                const char = {
                  "params" : {}
                };
                return null === value ? value = [char] : value["push"](char), key++, g["errors"] = value, false;
              } else {
                const char = {
                  "params" : {}
                };
                if (null === value) {
                  value = [char];
                } else {
                  value["push"](char);
                }
                key++;
              }
            }
          }
        } else {
          const char = {
            "params" : {
              "type" : "string"
            }
          };
          if (null === value) {
            value = [char];
          } else {
            value["push"](char);
          }
          key++;
        }
      }
      if (document = two_sites === key, selector = selector || document, !selector) {
        if ("NMEJn" !== _0x2a7404["uGDTU"]) {
          const tdKey = key;
          if (key == key) {
            if (options && _0x2a7404["cuczz"] == typeof options && !Array["isArray"](options)) {
              if (_0x2a7404["cFdqw"] === "SsgYN") {
                const tdKey = key;
                for (const node in options) {
                  if (_0x2a7404["tePmY"] !== node && "commonjs" !== node && "root" !== node) {
                    if (_0x2a7404["NxYZY"] === _0x2a7404["NxYZY"]) {
                      const char = {
                        "params" : {
                          "additionalProperty" : node
                        }
                      };
                      if (null === value) {
                        value = [char];
                      } else {
                        value["push"](char);
                      }
                      key++;
                      break;
                    } else {
                      const B160 = {
                        "params" : {}
                      };
                      if (null === key) {
                        key = [B160];
                      } else {
                        key["push"](B160);
                      }
                      errors++;
                    }
                  }
                }
                if (tdKey === key) {
                  if (_0x2a7404["yUvUp"] === _0x2a7404["yNiee"]) {
                    const char = {
                      "params" : {
                        "type" : "string"
                      }
                    };
                    if (null === value) {
                      value = [char];
                    } else {
                      value["push"](char);
                    }
                    key++;
                  } else {
                    if (void 0 !== options["amd"]) {
                      let shapePathsCollection = options["amd"];
                      const two_sites = key;
                      if (key === two_sites) {
                        if (_0x2a7404["tBpek"] == typeof shapePathsCollection) {
                          if (shapePathsCollection["length"] < 1) {
                            const char = {
                              "params" : {}
                            };
                            if (null === value) {
                              value = [char];
                            } else {
                              value["push"](char);
                            }
                            key++;
                          }
                        } else {
                          const char = {
                            "params" : {
                              "type" : _0x2a7404["tBpek"]
                            }
                          };
                          if (null === value) {
                            value = [char];
                          } else {
                            value["push"](char);
                          }
                          key++;
                        }
                      }
                      var data = two_sites === key;
                    } else {
                      data = true;
                    }
                    if (data) {
                      if (void 0 !== options["commonjs"]) {
                        let shapePathsCollection = options["commonjs"];
                        const two_sites = key;
                        if (key === two_sites) {
                          if (_0x2a7404["tBpek"] == typeof shapePathsCollection) {
                            if (shapePathsCollection["length"] < 1) {
                              const char = {
                                "params" : {}
                              };
                              if (null === value) {
                                value = [char];
                              } else {
                                value["push"](char);
                              }
                              key++;
                            }
                          } else {
                            const char = {
                              "params" : {
                                "type" : "string"
                              }
                            };
                            if (null === value) {
                              value = [char];
                            } else {
                              value["push"](char);
                            }
                            key++;
                          }
                        }
                        data = two_sites === key;
                      } else {
                        data = true;
                      }
                      if (data) {
                        if (void 0 !== options["root"]) {
                          let PL$13 = options["root"];
                          const id = key;
                          const tag = key;
                          let hasDataToSync = false;
                          const res = key;
                          if (key === res) {
                            if (Array["isArray"](PL$13)) {
                              if ("ZcMTS" === "ZcMTS") {
                                const nClasses = PL$13["length"];
                                for (let classCode = 0; classCode < nClasses; classCode++) {
                                  let shapePathsCollection = PL$13[classCode];
                                  const value = key;
                                  if (key === value) {
                                    if (_0x2a7404["tBpek"] == typeof shapePathsCollection) {
                                      if ("oODMa" !== _0x2a7404["YSjaF"]) {
                                        if (shapePathsCollection["length"] < 1) {
                                          if (_0x2a7404["iDLgH"] !== _0x2a7404["yeRBl"]) {
                                            const char = {
                                              "params" : {}
                                            };
                                            if (null === value) {
                                              value = [char];
                                            } else {
                                              value["push"](char);
                                            }
                                            key++;
                                          } else {
                                            const minuteNow = i;
                                            if (!value(classCode, {
                                              "instancePath" : PL$13 + "/import",
                                              "parentData" : shapePathsCollection,
                                              "parentDataProperty" : "import",
                                              "rootData" : key
                                            })) {
                                              res = null === res ? value["errors"] : res["concat"](value["errors"]);
                                              i = res["length"];
                                            }
                                            selector = minuteNow === i;
                                            data = data || selector;
                                          }
                                        }
                                      } else {
                                        if (key["length"] < 1) {
                                          const id = {
                                            "params" : {}
                                          };
                                          if (null === i) {
                                            i = [id];
                                          } else {
                                            i["push"](id);
                                          }
                                          selector++;
                                        }
                                      }
                                    } else {
                                      const char = {
                                        "params" : {
                                          "type" : _0x2a7404["tBpek"]
                                        }
                                      };
                                      if (null === value) {
                                        value = [char];
                                      } else {
                                        value["push"](char);
                                      }
                                      key++;
                                    }
                                  }
                                  if (value !== key) {
                                    break;
                                  }
                                }
                              } else {
                                const b = {
                                  "params" : {}
                                };
                                if (null === a) {
                                  a = [b];
                                } else {
                                  a["push"](b);
                                }
                                document++;
                              }
                            } else {
                              if (_0x2a7404["WSYkq"] === "GmdWC") {
                                const tdKey = key;
                                if (!data(id, {
                                  "instancePath" : PL$13 + "/" + tag,
                                  "parentData" : options,
                                  "parentDataProperty" : tag,
                                  "rootData" : hasDataToSync
                                })) {
                                  value = null === value ? data["errors"] : value["concat"](data["errors"]);
                                  key = value["length"];
                                }
                                a = tdKey === key;
                                selector = selector || a;
                              } else {
                                const char = {
                                  "params" : {
                                    "type" : "array"
                                  }
                                };
                                if (null === value) {
                                  value = [char];
                                } else {
                                  value["push"](char);
                                }
                                key++;
                              }
                            }
                          }
                          var hasAttempts = res === key;
                          if (hasDataToSync = hasDataToSync || hasAttempts, !hasDataToSync) {
                            const two_sites = key;
                            if (key === two_sites) {
                              if (_0x2a7404["tBpek"] == typeof PL$13) {
                                if (PL$13["length"] < 1) {
                                  const char = {
                                    "params" : {}
                                  };
                                  if (null === value) {
                                    value = [char];
                                  } else {
                                    value["push"](char);
                                  }
                                  key++;
                                }
                              } else {
                                const char = {
                                  "params" : {
                                    "type" : _0x2a7404["tBpek"]
                                  }
                                };
                                if (null === value) {
                                  value = [char];
                                } else {
                                  value["push"](char);
                                }
                                key++;
                              }
                            }
                            hasAttempts = two_sites === key;
                            hasDataToSync = hasDataToSync || hasAttempts;
                          }
                          if (hasDataToSync) {
                            key = tag;
                            if (null !== value) {
                              if (tag) {
                                value["length"] = tag;
                              } else {
                                value = null;
                              }
                            }
                          } else {
                            if (_0x2a7404["RdzXF"] === _0x2a7404["zHCci"]) {
                              const format = res;
                              if ("boolean" != typeof options["singleton"]) {
                                return h["errors"] = [{
                                  "params" : {
                                    "type" : _0x2a7404["NsfMP"]
                                  }
                                }], false;
                              }
                              i = format === res;
                            } else {
                              const char = {
                                "params" : {}
                              };
                              if (null === value) {
                                value = [char];
                              } else {
                                value["push"](char);
                              }
                              key++;
                            }
                          }
                          data = id === key;
                        } else {
                          data = true;
                        }
                      }
                    }
                  }
                }
              } else {
                const char = {
                  "params" : {
                    "type" : _0x2a7404["cuczz"]
                  }
                };
                if (null === value) {
                  value = [char];
                } else {
                  value["push"](char);
                }
                key++;
              }
            } else {
              const char = {
                "params" : {
                  "type" : _0x2a7404["cuczz"]
                }
              };
              if (null === value) {
                value = [char];
              } else {
                value["push"](char);
              }
              key++;
            }
          }
          document = tdKey === key;
          selector = selector || document;
        } else {
          const char = {
            "params" : {
              "type" : _0x2a7404["tBpek"]
            }
          };
          if (null === value) {
            value = [char];
          } else {
            value["push"](char);
          }
          key++;
        }
      }
    }
  }
  if (!selector) {
    const char = {
      "params" : {}
    };
    return null === value ? value = [char] : value["push"](char), key++, i["errors"] = value, false;
  }
  return key = errors, 0 === key, i["errors"] = value, _0x2a7404["mYNuI"](0, key);
}
function p(data, {
  instancePath : path = "",
  parentData : _0x5e6590,
  parentDataProperty : _0x4d0ca6,
  rootData : cacheGroup = data
} = {}) {
  let PL$120 = null;
  let key = 0;
  if (0 === key) {
    if (!data || _0x25deec["tQKbD"] != typeof data || Array["isArray"](data)) {
      return p["errors"] = [{
        "params" : {
          "type" : _0x25deec["tQKbD"]
        }
      }], false;
    }
    {
      let rProp;
      if (void 0 === data["type"] && (rProp = "type")) {
        return p["errors"] = [{
          "params" : {
            "missingProperty" : rProp
          }
        }], false;
      }
      {
        const tdKey = key;
        for (const item in data) {
          if (_0x25deec["BVmHt"] !== item && _0x25deec["jdhSE"] !== item && _0x25deec["sGPld"] !== item && _0x25deec["JIQZq"] !== item && _0x25deec["itBMT"] !== item) {
            return p["errors"] = [{
              "params" : {
                "additionalProperty" : item
              }
            }], false;
          }
        }
        if (tdKey === key) {
          if (_0x25deec["jgofz"] === _0x25deec["FuwjM"]) {
            const s = key;
            if (key === s) {
              if (_0x25deec["YwgnP"] == typeof path) {
                if (path["length"] < 1) {
                  const PL$24 = {
                    "params" : {}
                  };
                  if (null === PL$120) {
                    PL$120 = [PL$24];
                  } else {
                    PL$120["push"](PL$24);
                  }
                  key++;
                }
              } else {
                const PL$24 = {
                  "params" : {
                    "type" : "string"
                  }
                };
                if (null === PL$120) {
                  PL$120 = [PL$24];
                } else {
                  PL$120["push"](PL$24);
                }
                key++;
              }
            }
            m = s === key;
            cacheGroup = cacheGroup || m;
          } else {
            if (void 0 !== data["auxiliaryComment"]) {
              const tdKey = key;
              if (!l(data["auxiliaryComment"], {
                "instancePath" : path + _0x25deec["NMgSu"],
                "parentData" : data,
                "parentDataProperty" : _0x25deec["BVmHt"],
                "rootData" : cacheGroup
              })) {
                PL$120 = null === PL$120 ? l["errors"] : PL$120["concat"](l["errors"]);
                key = PL$120["length"];
              }
              var root = tdKey === key;
            } else {
              root = true;
            }
            if (root) {
              if (void 0 !== data["export"]) {
                let components = data["export"];
                const tdKey = key;
                const record = key;
                let originalValue = false;
                const two_sites = key;
                if (key === two_sites) {
                  if (Array["isArray"](components)) {
                    const BOARD_ROWS = components["length"];
                    for (let i = 0; i < BOARD_ROWS; i++) {
                      let a = components[i];
                      const data = key;
                      if (key === data) {
                        if ("string" == typeof a) {
                          if (a["length"] < 1) {
                            if (_0x25deec["MYBkA"] !== "jaCDc") {
                              const key = two_sites;
                              if (_0x25deec["tUSXg"] != typeof a["eager"]) {
                                return h["errors"] = [{
                                  "params" : {
                                    "type" : _0x25deec["tUSXg"]
                                  }
                                }], false;
                              }
                              var increase = key === two_sites;
                            } else {
                              const PL$24 = {
                                "params" : {}
                              };
                              if (null === PL$120) {
                                PL$120 = [PL$24];
                              } else {
                                PL$120["push"](PL$24);
                              }
                              key++;
                            }
                          }
                        } else {
                          if ("nSBaf" !== _0x25deec["PZNcF"]) {
                            const stripedItem = value;
                            if (!m(data["remotes"], {
                              "instancePath" : originalValue + "/remotes",
                              "parentData" : data,
                              "parentDataProperty" : _0x25deec["bAxnD"],
                              "rootData" : i
                            })) {
                              root = null === root ? m["errors"] : root["concat"](m["errors"]);
                              value = root["length"];
                            }
                            hasFinished = stripedItem === value;
                          } else {
                            const PL$24 = {
                              "params" : {
                                "type" : "string"
                              }
                            };
                            if (null === PL$120) {
                              PL$120 = [PL$24];
                            } else {
                              PL$120["push"](PL$24);
                            }
                            key++;
                          }
                        }
                      }
                      if (data !== key) {
                        break;
                      }
                    }
                  } else {
                    const PL$24 = {
                      "params" : {
                        "type" : "array"
                      }
                    };
                    if (null === PL$120) {
                      PL$120 = [PL$24];
                    } else {
                      PL$120["push"](PL$24);
                    }
                    key++;
                  }
                }
                var value = two_sites === key;
                if (originalValue = originalValue || value, !originalValue) {
                  const name = key;
                  if (key === name) {
                    if (_0x25deec["YwgnP"] == typeof components) {
                      if (_0x25deec["WnHFy"] === _0x25deec["zgYvs"]) {
                        if ("string" != typeof name) {
                          return d["errors"] = [{
                            "params" : {
                              "type" : _0x25deec["YwgnP"]
                            }
                          }], false;
                        }
                        if (name["length"] < 1) {
                          return d["errors"] = [{
                            "params" : {}
                          }], false;
                        }
                      } else {
                        if (components["length"] < 1) {
                          const PL$24 = {
                            "params" : {}
                          };
                          if (null === PL$120) {
                            PL$120 = [PL$24];
                          } else {
                            PL$120["push"](PL$24);
                          }
                          key++;
                        }
                      }
                    } else {
                      const PL$24 = {
                        "params" : {
                          "type" : _0x25deec["YwgnP"]
                        }
                      };
                      if (null === PL$120) {
                        PL$120 = [PL$24];
                      } else {
                        PL$120["push"](PL$24);
                      }
                      key++;
                    }
                  }
                  value = name === key;
                  originalValue = originalValue || value;
                }
                if (!originalValue) {
                  const PL$24 = {
                    "params" : {}
                  };
                  return null === PL$120 ? PL$120 = [PL$24] : PL$120["push"](PL$24), key++, p["errors"] = PL$120, false;
                }
                key = record;
                if (null !== PL$120) {
                  if (record) {
                    PL$120["length"] = record;
                  } else {
                    PL$120 = null;
                  }
                }
                root = tdKey === key;
              } else {
                root = true;
              }
              if (root) {
                if ("NnJIp" !== _0x25deec["dzBfT"]) {
                  if ("string" != typeof path) {
                    return value["errors"] = [{
                      "params" : {
                        "type" : _0x25deec["YwgnP"]
                      }
                    }], false;
                  }
                  if (path["length"] < 1) {
                    return value["errors"] = [{
                      "params" : {}
                    }], false;
                  }
                } else {
                  if (void 0 !== data["name"]) {
                    if (_0x25deec["Cgiej"] === _0x25deec["tCIzX"]) {
                      if (path["length"] < 1) {
                        const PL$24 = {
                          "params" : {}
                        };
                        if (null === PL$120) {
                          PL$120 = [PL$24];
                        } else {
                          PL$120["push"](PL$24);
                        }
                        key++;
                      }
                    } else {
                      const tdKey = key;
                      if (!i(data["name"], {
                        "instancePath" : path + _0x25deec["fxrFb"],
                        "parentData" : data,
                        "parentDataProperty" : "name",
                        "rootData" : cacheGroup
                      })) {
                        PL$120 = null === PL$120 ? i["errors"] : PL$120["concat"](i["errors"]);
                        key = PL$120["length"];
                      }
                      root = tdKey === key;
                    }
                  } else {
                    root = true;
                  }
                  if (root) {
                    if (void 0 !== data["type"]) {
                      let a = data["type"];
                      const tdKey = key;
                      const record = key;
                      let hasDataToSync = false;
                      const aliasOrFieldName = key;
                      if (_0x25deec["lKCMD"] !== a && _0x25deec["iKkUk"] !== a && _0x25deec["LnVyF"] !== a && _0x25deec["zYJea"] !== a && _0x25deec["FHZDX"] !== a && _0x25deec["IGblX"] !== a && _0x25deec["JvOvG"] !== a && _0x25deec["PJkJH"] !== a && "commonjs" !== a && _0x25deec["uQsIB"] !== a && _0x25deec["EPClF"] !== a && "amd" !== a && "amd-require" !== a && _0x25deec["cCcdJ"] !== a && _0x25deec["aJqcP"] !== a && "jsonp" !== a && _0x25deec["htsNp"] !== a) {
                        const PL$24 = {
                          "params" : {}
                        };
                        if (null === PL$120) {
                          PL$120 = [PL$24];
                        } else {
                          PL$120["push"](PL$24);
                        }
                        key++;
                      }
                      var hasFinished = aliasOrFieldName === key;
                      if (hasDataToSync = hasDataToSync || hasFinished, !hasDataToSync) {
                        const tdKey = key;
                        if (_0x25deec["YwgnP"] != typeof a) {
                          if (_0x25deec["vrDOu"] !== "DtUSy") {
                            const PL$24 = {
                              "params" : {
                                "type" : _0x25deec["YwgnP"]
                              }
                            };
                            if (null === PL$120) {
                              PL$120 = [PL$24];
                            } else {
                              PL$120["push"](PL$24);
                            }
                            key++;
                          } else {
                            if (a["length"] < 1) {
                              const PL$24 = {
                                "params" : {}
                              };
                              if (null === PL$120) {
                                PL$120 = [PL$24];
                              } else {
                                PL$120["push"](PL$24);
                              }
                              key++;
                            }
                          }
                        }
                        hasFinished = tdKey === key;
                        hasDataToSync = hasDataToSync || hasFinished;
                      }
                      if (!hasDataToSync) {
                        const PL$24 = {
                          "params" : {}
                        };
                        return null === PL$120 ? PL$120 = [PL$24] : PL$120["push"](PL$24), key++, p["errors"] = PL$120, false;
                      }
                      key = record;
                      if (null !== PL$120) {
                        if (record) {
                          PL$120["length"] = record;
                        } else {
                          PL$120 = null;
                        }
                      }
                      root = tdKey === key;
                    } else {
                      root = true;
                    }
                    if (root) {
                      if (void 0 !== data["umdNamedDefine"]) {
                        const tdKey = key;
                        if ("boolean" != typeof data["umdNamedDefine"]) {
                          return p["errors"] = [{
                            "params" : {
                              "type" : _0x25deec["tUSXg"]
                            }
                          }], false;
                        }
                        root = tdKey === key;
                      } else {
                        root = true;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  return p["errors"] = PL$120, 0 === key;
}
function f(arr, {
  instancePath : rationale = "",
  parentData : _0x478125,
  parentDataProperty : _0x5accae,
  rootData : xOrY = arr
} = {}) {
  if (!Array["isArray"](arr)) {
    return f["errors"] = [{
      "params" : {
        "type" : _0x59ad45["KYCVn"]
      }
    }], false;
  }
  {
    const BOARD_ROWS = arr["length"];
    for (let i = 0; i < BOARD_ROWS; i++) {
      if ("TGCkb" !== _0x59ad45["ZQoRq"]) {
        let shapePathsCollection = arr[i];
        const _0x5accae = 0;
        if (_0x59ad45["cDnRy"] != typeof shapePathsCollection) {
          return f["errors"] = [{
            "params" : {
              "type" : _0x59ad45["cDnRy"]
            }
          }], false;
        }
        if (shapePathsCollection["length"] < 1) {
          return f["errors"] = [{
            "params" : {}
          }], false;
        }
        if (0 !== _0x5accae) {
          break;
        }
      } else {
        const type = o;
        if (_0x59ad45["cDnRy"] != typeof arr["commonjs2"]) {
          const v = {
            "params" : {
              "type" : "string"
            }
          };
          if (null === s) {
            s = [v];
          } else {
            s["push"](v);
          }
          o++;
        }
        c = type === o;
      }
    }
  }
  return f["errors"] = null, true;
}
function u(arr, {
  instancePath : data = "",
  parentData : _0x138d63,
  parentDataProperty : _0x3108b0,
  rootData : unit = arr
} = {}) {
  let PL$120 = null;
  let key = 0;
  if (0 === key) {
    if (!arr || _0x57551e["LOAwF"] != typeof arr || Array["isArray"](arr)) {
      return u["errors"] = [{
        "params" : {
          "type" : _0x57551e["LOAwF"]
        }
      }], false;
    }
    {
      if (_0x57551e["LMvLY"] !== _0x57551e["LMvLY"]) {
        const PL$24 = {
          "params" : {}
        };
        return null === PL$120 ? PL$120 = [PL$24] : PL$120["push"](PL$24), key++, u["errors"] = PL$120, false;
      } else {
        let _0x138d63;
        if (void 0 === arr["external"] && (_0x138d63 = _0x57551e["uUHFC"])) {
          return u["errors"] = [{
            "params" : {
              "missingProperty" : _0x138d63
            }
          }], false;
        }
        {
          const shapePathsCollection = key;
          for (const i in arr) {
            if (_0x57551e["uUHFC"] !== i && _0x57551e["chTsM"] !== i) {
              return u["errors"] = [{
                "params" : {
                  "additionalProperty" : i
                }
              }], false;
            }
          }
          if (shapePathsCollection === key) {
            if (void 0 !== arr["external"]) {
              if ("VTBhz" === _0x57551e["nxvZj"]) {
                let b = arr["external"];
                const side = key;
                const record = key;
                let hasDataToSync = false;
                const tdKey = key;
                if (key == key) {
                  if (_0x57551e["AoVSP"] == typeof b) {
                    if (_0x57551e["iKUXv"] === "FMzDx") {
                      const PL$24 = {
                        "params" : {}
                      };
                      if (null === PL$120) {
                        PL$120 = [PL$24];
                      } else {
                        PL$120["push"](PL$24);
                      }
                      key++;
                    } else {
                      if (b["length"] < 1) {
                        const PL$24 = {
                          "params" : {}
                        };
                        if (null === PL$120) {
                          PL$120 = [PL$24];
                        } else {
                          PL$120["push"](PL$24);
                        }
                        key++;
                      }
                    }
                  } else {
                    const PL$24 = {
                      "params" : {
                        "type" : "string"
                      }
                    };
                    if (null === PL$120) {
                      PL$120 = [PL$24];
                    } else {
                      PL$120["push"](PL$24);
                    }
                    key++;
                  }
                }
                var hasAttempts = tdKey === key;
                if (hasDataToSync = hasDataToSync || hasAttempts, !hasDataToSync) {
                  const tdKey = key;
                  if (!f(b, {
                    "instancePath" : data + _0x57551e["VcpYp"],
                    "parentData" : arr,
                    "parentDataProperty" : "external",
                    "rootData" : unit
                  })) {
                    PL$120 = null === PL$120 ? f["errors"] : PL$120["concat"](f["errors"]);
                    key = PL$120["length"];
                  }
                  hasAttempts = tdKey === key;
                  hasDataToSync = hasDataToSync || hasAttempts;
                }
                if (!hasDataToSync) {
                  if (_0x57551e["TKbWS"] !== _0x57551e["PvgRh"]) {
                    const PL$24 = {
                      "params" : {}
                    };
                    return null === PL$120 ? PL$120 = [PL$24] : PL$120["push"](PL$24), key++, u["errors"] = PL$120, false;
                  } else {
                    const two_sites = key;
                    if (key === two_sites) {
                      if ("string" == typeof data) {
                        if (data["length"] < 1) {
                          const PL$24 = {
                            "params" : {}
                          };
                          if (null === PL$120) {
                            PL$120 = [PL$24];
                          } else {
                            PL$120["push"](PL$24);
                          }
                          key++;
                        }
                      } else {
                        const PL$24 = {
                          "params" : {
                            "type" : _0x57551e["AoVSP"]
                          }
                        };
                        if (null === PL$120) {
                          PL$120 = [PL$24];
                        } else {
                          PL$120["push"](PL$24);
                        }
                        key++;
                      }
                    }
                    u = two_sites === key;
                    unit = unit || u;
                  }
                }
                key = record;
                if (null !== PL$120) {
                  if (record) {
                    PL$120["length"] = record;
                  } else {
                    PL$120 = null;
                  }
                }
                var isKeySide = side === key;
              } else {
                const PL$24 = {
                  "params" : {}
                };
                if (null === PL$120) {
                  PL$120 = [PL$24];
                } else {
                  PL$120["push"](PL$24);
                }
                key++;
              }
            } else {
              isKeySide = true;
            }
            if (isKeySide) {
              if (void 0 !== arr["shareScope"]) {
                if (_0x57551e["MdDof"] === "yCYPi") {
                  let shapePathsCollection = arr["shareScope"];
                  const two_sites = key;
                  if (key === two_sites) {
                    if (_0x57551e["AoVSP"] != typeof shapePathsCollection) {
                      return u["errors"] = [{
                        "params" : {
                          "type" : _0x57551e["AoVSP"]
                        }
                      }], false;
                    }
                    if (shapePathsCollection["length"] < 1) {
                      return u["errors"] = [{
                        "params" : {}
                      }], false;
                    }
                  }
                  isKeySide = two_sites === key;
                } else {
                  if (shapePathsCollection["length"] < 1) {
                    const PL$24 = {
                      "params" : {}
                    };
                    if (null === PL$120) {
                      PL$120 = [PL$24];
                    } else {
                      PL$120["push"](PL$24);
                    }
                    key++;
                  }
                }
              } else {
                isKeySide = true;
              }
            }
          }
        }
      }
    }
  }
  return u["errors"] = PL$120, 0 === key;
}
function c(data, {
  instancePath : returnPath = "",
  parentData : _0x1faa6f,
  parentDataProperty : _0xc06c5b,
  rootData : target = data
} = {}) {
  let PL$120 = null;
  let handler = 0;
  if (0 === handler) {
    if (!data || _0x31e32a["eTzvM"] != typeof data || Array["isArray"](data)) {
      return c["errors"] = [{
        "params" : {
          "type" : _0x31e32a["eTzvM"]
        }
      }], false;
    }
    for (const str in data) {
      if (_0x31e32a["mCDsT"] === _0x31e32a["mCDsT"]) {
        let nodes = data[str];
        const event = handler;
        const modifiedHandler = handler;
        let hasDataToSync = false;
        const ownHandler = handler;
        if (!u(nodes, {
          "instancePath" : returnPath + "/" + str["replace"](/~/g, "~0")["replace"](/\//g, "~1"),
          "parentData" : data,
          "parentDataProperty" : str,
          "rootData" : target
        })) {
          PL$120 = null === PL$120 ? u["errors"] : PL$120["concat"](u["errors"]);
          handler = PL$120["length"];
        }
        var hasAttempts = ownHandler === handler;
        if (hasDataToSync = hasDataToSync || hasAttempts, !hasDataToSync) {
          const ownHandler = handler;
          if (handler == handler) {
            if (_0x31e32a["IlGdO"] == typeof nodes) {
              if (nodes["length"] < 1) {
                if (_0x31e32a["LMYOc"] === "zEfbR") {
                  const PL$24 = {
                    "params" : {}
                  };
                  if (null === PL$120) {
                    PL$120 = [PL$24];
                  } else {
                    PL$120["push"](PL$24);
                  }
                  handler++;
                } else {
                  if (str["length"] < 1) {
                    const B160 = {
                      "params" : {}
                    };
                    if (null === hasAttempts) {
                      hasAttempts = [B160];
                    } else {
                      hasAttempts["push"](B160);
                    }
                    ownHandler++;
                  }
                }
              }
            } else {
              if (_0x31e32a["SqjWD"] === "MxcSj") {
                const PL$24 = {
                  "params" : {
                    "type" : _0x31e32a["IlGdO"]
                  }
                };
                if (null === PL$120) {
                  PL$120 = [PL$24];
                } else {
                  PL$120["push"](PL$24);
                }
                handler++;
              } else {
                const PL$24 = {
                  "params" : {
                    "type" : _0x31e32a["bmJel"]
                  }
                };
                if (null === PL$120) {
                  PL$120 = [PL$24];
                } else {
                  PL$120["push"](PL$24);
                }
                handler++;
              }
            }
          }
          if (hasAttempts = ownHandler === handler, hasDataToSync = hasDataToSync || hasAttempts, !hasDataToSync) {
            const ownHandler = handler;
            if (!f(nodes, {
              "instancePath" : returnPath + "/" + str["replace"](/~/g, "~0")["replace"](/\//g, "~1"),
              "parentData" : data,
              "parentDataProperty" : str,
              "rootData" : target
            })) {
              PL$120 = null === PL$120 ? f["errors"] : PL$120["concat"](f["errors"]);
              handler = PL$120["length"];
            }
            hasAttempts = ownHandler === handler;
            hasDataToSync = hasDataToSync || hasAttempts;
          }
        }
        if (!hasDataToSync) {
          const PL$24 = {
            "params" : {}
          };
          return null === PL$120 ? PL$120 = [PL$24] : PL$120["push"](PL$24), handler++, c["errors"] = PL$120, false;
        }
        if (handler = modifiedHandler, event !== handler, _0x31e32a["JbGCT"](event, handler)) {
          break;
        }
      } else {
        let a = data["commonjs"];
        const _handler = handler;
        if (handler === _handler) {
          if ("string" == typeof a) {
            if (a["length"] < 1) {
              const PL$24 = {
                "params" : {}
              };
              if (null === PL$120) {
                PL$120 = [PL$24];
              } else {
                PL$120["push"](PL$24);
              }
              handler++;
            }
          } else {
            const PL$24 = {
              "params" : {
                "type" : "string"
              }
            };
            if (null === PL$120) {
              PL$120 = [PL$24];
            } else {
              PL$120["push"](PL$24);
            }
            handler++;
          }
        }
        c = _handler === handler;
      }
    }
  }
  return c["errors"] = PL$120, 0 === handler;
}
function m(data, {
  instancePath : script = "",
  parentData : _0x20e326,
  parentDataProperty : _0x5bccaf,
  rootData : target = data
} = {}) {
  let arr = null;
  let key = 0;
  const curDockerIdx = key;
  let hasDataToSync = false;
  const two_sites = key;
  if (key === two_sites) {
    if (Array["isArray"](data)) {
      if (_0x439893["VQZfG"] !== _0x439893["VQZfG"]) {
        const value = {
          "params" : {
            "type" : _0x439893["wRISY"]
          }
        };
        if (null === arr) {
          arr = [value];
        } else {
          arr["push"](value);
        }
        key++;
      } else {
        const BOARD_ROWS = data["length"];
        for (let i = 0; i < BOARD_ROWS; i++) {
          let results = data[i];
          const kebabkey = key;
          const word = key;
          let hasDataToSync = false;
          const tdKey = key;
          if (key == key) {
            if (_0x439893["wRISY"] == typeof results) {
              if (results["length"] < 1) {
                const value = {
                  "params" : {}
                };
                if (null === arr) {
                  arr = [value];
                } else {
                  arr["push"](value);
                }
                key++;
              }
            } else {
              const value = {
                "params" : {
                  "type" : _0x439893["wRISY"]
                }
              };
              if (null === arr) {
                arr = [value];
              } else {
                arr["push"](value);
              }
              key++;
            }
          }
          var hasAttempts = tdKey === key;
          if (hasDataToSync = hasDataToSync || hasAttempts, !hasDataToSync) {
            const tdKey = key;
            if (!c(results, {
              "instancePath" : script + "/" + i,
              "parentData" : data,
              "parentDataProperty" : i,
              "rootData" : target
            })) {
              arr = null === arr ? c["errors"] : arr["concat"](c["errors"]);
              key = arr["length"];
            }
            hasAttempts = tdKey === key;
            hasDataToSync = hasDataToSync || hasAttempts;
          }
          if (hasDataToSync) {
            key = word;
            if (null !== arr) {
              if (word) {
                arr["length"] = word;
              } else {
                arr = null;
              }
            }
          } else {
            const value = {
              "params" : {}
            };
            if (null === arr) {
              arr = [value];
            } else {
              arr["push"](value);
            }
            key++;
          }
          if (kebabkey !== key) {
            break;
          }
        }
      }
    } else {
      const value = {
        "params" : {
          "type" : _0x439893["BcZmY"]
        }
      };
      if (null === arr) {
        arr = [value];
      } else {
        arr["push"](value);
      }
      key++;
    }
  }
  var hasAttempts = two_sites === key;
  if (hasDataToSync = hasDataToSync || hasAttempts, !hasDataToSync) {
    if (_0x439893["UzGnV"] === "swvYs") {
      const tdKey = key;
      if (!c(data, {
        "instancePath" : script,
        "parentData" : _0x20e326,
        "parentDataProperty" : _0x5bccaf,
        "rootData" : target
      })) {
        arr = null === arr ? c["errors"] : arr["concat"](c["errors"]);
        key = arr["length"];
      }
      hasAttempts = tdKey === key;
      hasDataToSync = hasDataToSync || hasAttempts;
    } else {
      if (script["length"] < 1) {
        const value = {
          "params" : {}
        };
        if (null === arr) {
          arr = [value];
        } else {
          arr["push"](value);
        }
        key++;
      }
    }
  }
  if (!hasDataToSync) {
    const value = {
      "params" : {}
    };
    return null === arr ? arr = [value] : arr["push"](value), key++, m["errors"] = arr, false;
  }
  return key = curDockerIdx, 0 === key, m["errors"] = arr, _0x439893["mdnll"](0, key);
}
const y = {
  "eager" : {
    "type" : "boolean"
  },
  "import" : {
    "anyOf" : [{
      "enum" : [false]
    }, {
      "$ref" : "#/definitions/SharedItem"
    }]
  },
  "packageName" : {
    "type" : "string",
    "minLength" : 1
  },
  "requiredVersion" : {
    "anyOf" : [{
      "enum" : [false]
    }, {
      "type" : "string"
    }]
  },
  "shareKey" : {
    "type" : "string",
    "minLength" : 1
  },
  "shareScope" : {
    "type" : "string",
    "minLength" : 1
  },
  "singleton" : {
    "type" : "boolean"
  },
  "strictVersion" : {
    "type" : "boolean"
  },
  "version" : {
    "anyOf" : [{
      "enum" : [false]
    }, {
      "type" : "string"
    }]
  }
};
function h(item, {
  instancePath : rationale = "",
  parentData : customImports,
  parentDataProperty : combined,
  rootData : B159 = item
} = {}) {
  let key = null;
  let undefined = 0;
  if (0 === undefined) {
    if (_0x3fd397["qtvto"] !== _0x3fd397["rsEOs"]) {
      if (!item || "object" != typeof item || Array["isArray"](item)) {
        return h["errors"] = [{
          "params" : {
            "type" : "object"
          }
        }], false;
      }
      {
        const data = undefined;
        for (const id in item) {
          if (!e["call"](y, id)) {
            return h["errors"] = [{
              "params" : {
                "additionalProperty" : id
              }
            }], false;
          }
        }
        if (data === undefined) {
          if (void 0 !== item["eager"]) {
            if (_0x3fd397["sgBCJ"] === "RAoxB") {
              const format = undefined;
              if (_0x3fd397["dUTMI"] != typeof item["eager"]) {
                return h["errors"] = [{
                  "params" : {
                    "type" : _0x3fd397["dUTMI"]
                  }
                }], false;
              }
              var b = format === undefined;
            } else {
              const tdKey = key;
              if (_0x3fd397["vDQBQ"] != typeof data) {
                const B160 = {
                  "params" : {
                    "type" : _0x3fd397["vDQBQ"]
                  }
                };
                if (null === B159) {
                  B159 = [B160];
                } else {
                  B159["push"](B160);
                }
                key++;
              }
              c = tdKey === key;
              combined = combined || c;
            }
          } else {
            b = true;
          }
          if (b) {
            if (_0x3fd397["qVBhB"] === _0x3fd397["qVBhB"]) {
              if (void 0 !== item["import"]) {
                let a = item["import"];
                const C = undefined;
                const value = undefined;
                let dataType = false;
                const x = undefined;
                if (false !== a) {
                  const B160 = {
                    "params" : {}
                  };
                  if (null === key) {
                    key = [B160];
                  } else {
                    key["push"](B160);
                  }
                  undefined++;
                }
                var success = x === undefined;
                if (dataType = dataType || success, !dataType) {
                  if (_0x3fd397["HGIrs"] === "Nelec") {
                    const res = undefined;
                    if (undefined == undefined) {
                      if ("string" == typeof a) {
                        if (a["length"] < 1) {
                          if ("peAnl" !== "peAnl") {
                            if (_0x3fd397["vDQBQ"] != typeof a) {
                              return h["errors"] = [{
                                "params" : {
                                  "type" : _0x3fd397["vDQBQ"]
                                }
                              }], false;
                            }
                            if (a["length"] < 1) {
                              return h["errors"] = [{
                                "params" : {}
                              }], false;
                            }
                          } else {
                            const B160 = {
                              "params" : {}
                            };
                            if (null === key) {
                              key = [B160];
                            } else {
                              key["push"](B160);
                            }
                            undefined++;
                          }
                        }
                      } else {
                        if ("oRIIr" === "ydGWR") {
                          const tdKey = key;
                          if (!data(C, {
                            "instancePath" : a + _0x3fd397["ZIAUE"],
                            "parentData" : res,
                            "parentDataProperty" : _0x3fd397["aMFqV"],
                            "rootData" : dataType
                          })) {
                            x = null === x ? data["errors"] : x["concat"](data["errors"]);
                            key = x["length"];
                          }
                          undefined = tdKey === key;
                          c = c || undefined;
                        } else {
                          const B160 = {
                            "params" : {
                              "type" : "string"
                            }
                          };
                          if (null === key) {
                            key = [B160];
                          } else {
                            key["push"](B160);
                          }
                          undefined++;
                        }
                      }
                    }
                    success = res === undefined;
                    dataType = dataType || success;
                  } else {
                    const y = {
                      "params" : {}
                    };
                    return null === x ? x = [y] : x["push"](y), key++, undefined["errors"] = x, false;
                  }
                }
                if (!dataType) {
                  if ("oeKJY" === "VVwzO") {
                    const x = {
                      "params" : {}
                    };
                    if (null === b) {
                      b = [x];
                    } else {
                      b["push"](x);
                    }
                    success++;
                  } else {
                    const B160 = {
                      "params" : {}
                    };
                    return null === key ? key = [B160] : key["push"](B160), undefined++, h["errors"] = key, false;
                  }
                }
                undefined = value;
                if (null !== key) {
                  if (value) {
                    key["length"] = value;
                  } else {
                    key = null;
                  }
                }
                b = C === undefined;
              } else {
                b = true;
              }
              if (b) {
                if (void 0 !== item["packageName"]) {
                  let a = item["packageName"];
                  const newRect = undefined;
                  if (undefined === newRect) {
                    if ("string" != typeof a) {
                      return h["errors"] = [{
                        "params" : {
                          "type" : _0x3fd397["vDQBQ"]
                        }
                      }], false;
                    }
                    if (a["length"] < 1) {
                      return h["errors"] = [{
                        "params" : {}
                      }], false;
                    }
                  }
                  b = newRect === undefined;
                } else {
                  b = true;
                }
                if (b) {
                  if (void 0 !== item["requiredVersion"]) {
                    if (_0x3fd397["XMHsw"] === _0x3fd397["XMHsw"]) {
                      let _text = item["requiredVersion"];
                      const v1 = undefined;
                      const value = undefined;
                      let stackedData = false;
                      const res = undefined;
                      if (false !== _text) {
                        const B160 = {
                          "params" : {}
                        };
                        if (null === key) {
                          key = [B160];
                        } else {
                          key["push"](B160);
                        }
                        undefined++;
                      }
                      var data = res === undefined;
                      if (stackedData = stackedData || data, !stackedData) {
                        const zRestriction = undefined;
                        if ("string" != typeof _text) {
                          if ("UEdGW" === _0x3fd397["yVlku"]) {
                            const B160 = {
                              "params" : {
                                "type" : _0x3fd397["vDQBQ"]
                              }
                            };
                            if (null === key) {
                              key = [B160];
                            } else {
                              key["push"](B160);
                            }
                            undefined++;
                          } else {
                            const token = {
                              "params" : {}
                            };
                            if (null === res) {
                              res = [token];
                            } else {
                              res["push"](token);
                            }
                            key++;
                          }
                        }
                        data = zRestriction === undefined;
                        stackedData = stackedData || data;
                      }
                      if (!stackedData) {
                        if (_0x3fd397["sxwWb"] !== "hvQmO") {
                          const token = {
                            "params" : {
                              "type" : _0x3fd397["vDQBQ"]
                            }
                          };
                          if (null === res) {
                            res = [token];
                          } else {
                            res["push"](token);
                          }
                          key++;
                        } else {
                          const B160 = {
                            "params" : {}
                          };
                          return null === key ? key = [B160] : key["push"](B160), undefined++, h["errors"] = key, false;
                        }
                      }
                      undefined = value;
                      if (null !== key) {
                        if (value) {
                          key["length"] = value;
                        } else {
                          key = null;
                        }
                      }
                      b = v1 === undefined;
                    } else {
                      const motion = pos;
                      if (!success(customImports["library"], {
                        "instancePath" : combined + _0x3fd397["Zyzpk"],
                        "parentData" : customImports,
                        "parentDataProperty" : _0x3fd397["OvjzE"],
                        "rootData" : b
                      })) {
                        data = null === data ? success["errors"] : data["concat"](success["errors"]);
                        pos = data["length"];
                      }
                      c = motion === pos;
                    }
                  } else {
                    b = true;
                  }
                  if (b) {
                    if (void 0 !== item["shareKey"]) {
                      let shapePathsCollection = item["shareKey"];
                      const newRect = undefined;
                      if (undefined === newRect) {
                        if (_0x3fd397["vDQBQ"] != typeof shapePathsCollection) {
                          return h["errors"] = [{
                            "params" : {
                              "type" : _0x3fd397["vDQBQ"]
                            }
                          }], false;
                        }
                        if (shapePathsCollection["length"] < 1) {
                          return h["errors"] = [{
                            "params" : {}
                          }], false;
                        }
                      }
                      b = newRect === undefined;
                    } else {
                      b = true;
                    }
                    if (b) {
                      if (_0x3fd397["ECpmG"] !== _0x3fd397["ECpmG"]) {
                        const tdKey = key;
                        if (_0x3fd397["vDQBQ"] != typeof item["root"]) {
                          const B160 = {
                            "params" : {
                              "type" : _0x3fd397["vDQBQ"]
                            }
                          };
                          if (null === B159) {
                            B159 = [B160];
                          } else {
                            B159["push"](B160);
                          }
                          key++;
                        }
                        c = tdKey === key;
                      } else {
                        if (void 0 !== item["shareScope"]) {
                          if (_0x3fd397["eAAhW"] === _0x3fd397["eAAhW"]) {
                            let shapePathsCollection = item["shareScope"];
                            const newRect = undefined;
                            if (undefined === newRect) {
                              if (_0x3fd397["jfApn"] === _0x3fd397["htjeT"]) {
                                const s = b;
                                if (!B159(item, {
                                  "instancePath" : shapePathsCollection,
                                  "parentData" : newRect,
                                  "parentDataProperty" : customImports,
                                  "rootData" : combined
                                })) {
                                  undefined = null === undefined ? B159["errors"] : undefined["concat"](B159["errors"]);
                                  b = undefined["length"];
                                }
                                m = s === b;
                                data = data || m;
                              } else {
                                if (_0x3fd397["vDQBQ"] != typeof shapePathsCollection) {
                                  return h["errors"] = [{
                                    "params" : {
                                      "type" : _0x3fd397["vDQBQ"]
                                    }
                                  }], false;
                                }
                                if (shapePathsCollection["length"] < 1) {
                                  return h["errors"] = [{
                                    "params" : {}
                                  }], false;
                                }
                              }
                            }
                            b = newRect === undefined;
                          } else {
                            const B160 = {
                              "params" : {}
                            };
                            return null === key ? key = [B160] : key["push"](B160), undefined++, h["errors"] = key, false;
                          }
                        } else {
                          b = true;
                        }
                        if (b) {
                          if (void 0 !== item["singleton"]) {
                            if (_0x3fd397["ilcAP"] !== _0x3fd397["ilcAP"]) {
                              const key = undefined;
                              if ("string" != typeof data) {
                                const B160 = {
                                  "params" : {
                                    "type" : _0x3fd397["vDQBQ"]
                                  }
                                };
                                if (null === key) {
                                  key = [B160];
                                } else {
                                  key["push"](B160);
                                }
                                undefined++;
                              }
                              pos = key === undefined;
                              combined = combined || pos;
                            } else {
                              const v1 = undefined;
                              if (_0x3fd397["dUTMI"] != typeof item["singleton"]) {
                                return h["errors"] = [{
                                  "params" : {
                                    "type" : "boolean"
                                  }
                                }], false;
                              }
                              b = v1 === undefined;
                            }
                          } else {
                            b = true;
                          }
                          if (b) {
                            if (void 0 !== item["strictVersion"]) {
                              if (_0x3fd397["wqkEh"] === _0x3fd397["RrNRq"]) {
                                const B160 = {
                                  "params" : {}
                                };
                                return null === B159 ? B159 = [B160] : B159["push"](B160), key++, m["errors"] = B159, false;
                              } else {
                                const v1 = undefined;
                                if (_0x3fd397["dUTMI"] != typeof item["strictVersion"]) {
                                  return h["errors"] = [{
                                    "params" : {
                                      "type" : _0x3fd397["dUTMI"]
                                    }
                                  }], false;
                                }
                                b = v1 === undefined;
                              }
                            } else {
                              b = true;
                            }
                            if (b) {
                              if (void 0 !== item["version"]) {
                                let _text = item["version"];
                                const v1 = undefined;
                                const prefix = undefined;
                                let myPos = false;
                                const PL$24 = undefined;
                                if (false !== _text) {
                                  if (_0x3fd397["GzSRt"] !== _0x3fd397["GzSRt"]) {
                                    let undefined = prefix["remoteType"];
                                    const motion = pos;
                                    const value = pos;
                                    let okval = false;
                                    let func = null;
                                    const testPos = pos;
                                    if (_0x3fd397["RyFyc"] !== undefined && _0x3fd397["IuiRA"] !== undefined && "assign" !== undefined && _0x3fd397["nkkFR"] !== undefined && _0x3fd397["xrMlM"] !== undefined && _0x3fd397["nqqMt"] !== undefined && _0x3fd397["frVxV"] !== undefined && _0x3fd397["qtfbi"] !== undefined && _0x3fd397["XCOxV"] !== undefined && _0x3fd397["hCSwG"] !== undefined && _0x3fd397["PhmyX"] !== undefined && "amd-require" !== undefined && _0x3fd397["BBVuR"] !== undefined && _0x3fd397["AMPDD"] !== 
                                    undefined && _0x3fd397["Fherj"] !== undefined && _0x3fd397["BvmtH"] !== undefined && _0x3fd397["vBZAD"] !== undefined && _0x3fd397["CLcud"] !== undefined && _0x3fd397["xeoVq"] !== undefined && _0x3fd397["qMSgh"] !== undefined) {
                                      const value = {
                                        "params" : {}
                                      };
                                      if (null === data) {
                                        data = [value];
                                      } else {
                                        data["push"](value);
                                      }
                                      pos++;
                                    }
                                    if (testPos === pos && (okval = true, func = 0), !okval) {
                                      const value = {
                                        "params" : {
                                          "passingSchemas" : func
                                        }
                                      };
                                      return null === data ? data = [value] : data["push"](value), pos++, d["errors"] = data, false;
                                    }
                                    pos = value;
                                    if (null !== data) {
                                      if (value) {
                                        data["length"] = value;
                                      } else {
                                        data = null;
                                      }
                                    }
                                    c = motion === pos;
                                  } else {
                                    const B160 = {
                                      "params" : {}
                                    };
                                    if (null === key) {
                                      key = [B160];
                                    } else {
                                      key["push"](B160);
                                    }
                                    undefined++;
                                  }
                                }
                                var pos = PL$24 === undefined;
                                if (myPos = myPos || pos, !myPos) {
                                  const key = undefined;
                                  if ("string" != typeof _text) {
                                    const B160 = {
                                      "params" : {
                                        "type" : "string"
                                      }
                                    };
                                    if (null === key) {
                                      key = [B160];
                                    } else {
                                      key["push"](B160);
                                    }
                                    undefined++;
                                  }
                                  pos = key === undefined;
                                  myPos = myPos || pos;
                                }
                                if (!myPos) {
                                  if (_0x3fd397["MpinG"] !== _0x3fd397["MpinG"]) {
                                    const side = key;
                                    if (_0x3fd397["vDQBQ"] != typeof _0x44f403["amd"]) {
                                      const PL$60 = {
                                        "params" : {
                                          "type" : _0x3fd397["vDQBQ"]
                                        }
                                      };
                                      if (null === PL$24) {
                                        PL$24 = [PL$60];
                                      } else {
                                        PL$24["push"](PL$60);
                                      }
                                      key++;
                                    }
                                    var isKeySide = side === key;
                                  } else {
                                    const B160 = {
                                      "params" : {}
                                    };
                                    return null === key ? key = [B160] : key["push"](B160), undefined++, h["errors"] = key, false;
                                  }
                                }
                                undefined = prefix;
                                if (null !== key) {
                                  if (prefix) {
                                    key["length"] = prefix;
                                  } else {
                                    key = null;
                                  }
                                }
                                b = v1 === undefined;
                              } else {
                                b = true;
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            } else {
              const B160 = {
                "params" : {}
              };
              if (null === B159) {
                B159 = [B160];
              } else {
                B159["push"](B160);
              }
              key++;
            }
          }
        }
      }
    } else {
      if (rationale["length"] < 1) {
        const B160 = {
          "params" : {}
        };
        if (null === B159) {
          B159 = [B160];
        } else {
          B159["push"](B160);
        }
        key++;
      }
    }
  }
  return h["errors"] = key, 0 === undefined;
}
function g(data, {
  instancePath : returnPath = "",
  parentData : _0x537d90,
  parentDataProperty : _0x483639,
  rootData : target = data
} = {}) {
  let res = null;
  let key = 0;
  if (0 === key) {
    if ("KDxJJ" !== _0x4168d5["sGQyi"]) {
      if (!data || _0x4168d5["lWRlw"] != typeof data || Array["isArray"](data)) {
        return g["errors"] = [{
          "params" : {
            "type" : "object"
          }
        }], false;
      }
      for (const str in data) {
        let value = data[str];
        const kebabkey = key;
        const tag = key;
        let collection = false;
        const handler = key;
        if (!h(value, {
          "instancePath" : returnPath + "/" + str["replace"](/~/g, "~0")["replace"](/\//g, "~1"),
          "parentData" : data,
          "parentDataProperty" : str,
          "rootData" : target
        })) {
          res = null === res ? h["errors"] : res["concat"](h["errors"]);
          key = res["length"];
        }
        var obj = handler === key;
        if (collection = collection || obj, !collection) {
          const tdKey = key;
          if (key == key) {
            if ("string" == typeof value) {
              if (value["length"] < 1) {
                if ("dzUfe" === _0x4168d5["nwJlb"]) {
                  if (void 0 !== value["shareScope"]) {
                    let a = value["shareScope"];
                    const _handler = handler;
                    if (handler === _handler) {
                      if ("string" != typeof a) {
                        return d["errors"] = [{
                          "params" : {
                            "type" : _0x4168d5["DCMEJ"]
                          }
                        }], false;
                      }
                      if (a["length"] < 1) {
                        return d["errors"] = [{
                          "params" : {}
                        }], false;
                      }
                    }
                    c = _handler === handler;
                  } else {
                    c = true;
                  }
                  if (c) {
                    if (void 0 !== value["shared"]) {
                      const ownHandler = handler;
                      if (!D(value["shared"], {
                        "instancePath" : target + _0x4168d5["ihsQf"],
                        "parentData" : value,
                        "parentDataProperty" : _0x4168d5["qLetl"],
                        "rootData" : kebabkey
                      })) {
                        collection = null === collection ? D["errors"] : collection["concat"](D["errors"]);
                        handler = collection["length"];
                      }
                      c = ownHandler === handler;
                    } else {
                      c = true;
                    }
                  }
                } else {
                  const token = {
                    "params" : {}
                  };
                  if (null === res) {
                    res = [token];
                  } else {
                    res["push"](token);
                  }
                  key++;
                }
              }
            } else {
              if ("LgoAf" !== _0x4168d5["kFEJR"]) {
                const curObject = obj;
                if (_0x4168d5["DCMEJ"] != typeof returnPath) {
                  const B160 = {
                    "params" : {
                      "type" : _0x4168d5["DCMEJ"]
                    }
                  };
                  if (null === key) {
                    key = [B160];
                  } else {
                    key["push"](B160);
                  }
                  obj++;
                }
                collection = curObject === obj;
                target = target || collection;
              } else {
                const token = {
                  "params" : {
                    "type" : _0x4168d5["DCMEJ"]
                  }
                };
                if (null === res) {
                  res = [token];
                } else {
                  res["push"](token);
                }
                key++;
              }
            }
          }
          obj = tdKey === key;
          collection = collection || obj;
        }
        if (!collection) {
          const token = {
            "params" : {}
          };
          return null === res ? res = [token] : res["push"](token), key++, g["errors"] = res, false;
        }
        if (key = tag, null !== res && (tag ? res["length"] = tag : res = null), kebabkey !== key) {
          break;
        }
      }
    } else {
      const token = {
        "params" : {
          "type" : "string"
        }
      };
      if (null === res) {
        res = [token];
      } else {
        res["push"](token);
      }
      key++;
    }
  }
  return g["errors"] = res, 0 === key;
}
function D(data, {
  instancePath : returnPath = "",
  parentData : _0x5d4a13,
  parentDataProperty : _0x1114a9,
  rootData : target = data
} = {}) {
  let PL$120 = null;
  let key = 0;
  const curDockerIdx = key;
  let hasDataToSync = false;
  const two_sites = key;
  if (key === two_sites) {
    if (Array["isArray"](data)) {
      const BOARD_ROWS = data["length"];
      for (let i = 0; i < BOARD_ROWS; i++) {
        let b = data[i];
        const kebabkey = key;
        const record = key;
        let hasDataToSync = false;
        const tdKey = key;
        if (key == key) {
          if ("string" == typeof b) {
            if (b["length"] < 1) {
              const PL$24 = {
                "params" : {}
              };
              if (null === PL$120) {
                PL$120 = [PL$24];
              } else {
                PL$120["push"](PL$24);
              }
              key++;
            }
          } else {
            if (_0xab7a31["RHXtW"] !== _0xab7a31["RHXtW"]) {
              const PL$24 = {
                "params" : {}
              };
              return null === PL$120 ? PL$120 = [PL$24] : PL$120["push"](PL$24), key++, hasDataToSync["errors"] = PL$120, false;
            } else {
              const PL$24 = {
                "params" : {
                  "type" : "string"
                }
              };
              if (null === PL$120) {
                PL$120 = [PL$24];
              } else {
                PL$120["push"](PL$24);
              }
              key++;
            }
          }
        }
        var hasAttempts = tdKey === key;
        if (hasDataToSync = hasDataToSync || hasAttempts, !hasDataToSync) {
          const tdKey = key;
          if (!g(b, {
            "instancePath" : returnPath + "/" + i,
            "parentData" : data,
            "parentDataProperty" : i,
            "rootData" : target
          })) {
            PL$120 = null === PL$120 ? g["errors"] : PL$120["concat"](g["errors"]);
            key = PL$120["length"];
          }
          hasAttempts = tdKey === key;
          hasDataToSync = hasDataToSync || hasAttempts;
        }
        if (hasDataToSync) {
          key = record;
          if (null !== PL$120) {
            if (record) {
              PL$120["length"] = record;
            } else {
              PL$120 = null;
            }
          }
        } else {
          const PL$24 = {
            "params" : {}
          };
          if (null === PL$120) {
            PL$120 = [PL$24];
          } else {
            PL$120["push"](PL$24);
          }
          key++;
        }
        if (kebabkey !== key) {
          break;
        }
      }
    } else {
      if (_0xab7a31["QDwCx"] !== _0xab7a31["OZRJx"]) {
        const PL$24 = {
          "params" : {
            "type" : _0xab7a31["WyJXF"]
          }
        };
        if (null === PL$120) {
          PL$120 = [PL$24];
        } else {
          PL$120["push"](PL$24);
        }
        key++;
      } else {
        const B160 = {
          "params" : {
            "type" : _0xab7a31["zUGzo"]
          }
        };
        if (null === key) {
          key = [B160];
        } else {
          key["push"](B160);
        }
        curDockerIdx++;
      }
    }
  }
  var hasAttempts = two_sites === key;
  if (hasDataToSync = hasDataToSync || hasAttempts, !hasDataToSync) {
    const tdKey = key;
    if (!g(data, {
      "instancePath" : returnPath,
      "parentData" : _0x5d4a13,
      "parentDataProperty" : _0x1114a9,
      "rootData" : target
    })) {
      PL$120 = null === PL$120 ? g["errors"] : PL$120["concat"](g["errors"]);
      key = PL$120["length"];
    }
    hasAttempts = tdKey === key;
    hasDataToSync = hasDataToSync || hasAttempts;
  }
  if (!hasDataToSync) {
    const PL$24 = {
      "params" : {}
    };
    return null === PL$120 ? PL$120 = [PL$24] : PL$120["push"](PL$24), key++, D["errors"] = PL$120, false;
  }
  return key = curDockerIdx, 0 === key, D["errors"] = PL$120, _0xab7a31["PsMTr"](0, key);
}
function d(data, {
  instancePath : path = "",
  parentData : _0x408ac1,
  parentDataProperty : res,
  rootData : target = data
} = {}) {
  let root = null;
  let key = 0;
  if (0 === key) {
    if (!data || _0x229432["HKMpn"] != typeof data || Array["isArray"](data)) {
      return d["errors"] = [{
        "params" : {
          "type" : _0x229432["HKMpn"]
        }
      }], false;
    }
    {
      const arr = key;
      for (const PL$3 in data) {
        if (!e["call"](t, PL$3)) {
          return d["errors"] = [{
            "params" : {
              "additionalProperty" : PL$3
            }
          }], false;
        }
      }
      if (arr === key) {
        if ("SPbcV" !== _0x229432["RwyVt"]) {
          if (void 0 !== data["exposes"]) {
            const side = key;
            if (!o(data["exposes"], {
              "instancePath" : path + "/exposes",
              "parentData" : data,
              "parentDataProperty" : _0x229432["qxrSc"],
              "rootData" : target
            })) {
              root = null === root ? o["errors"] : root["concat"](o["errors"]);
              key = root["length"];
            }
            var isVisibilityToggled = side === key;
          } else {
            isVisibilityToggled = true;
          }
          if (isVisibilityToggled) {
            if ("rEYXx" === _0x229432["sLMZv"]) {
              if (data["length"] < 1) {
                const value = {
                  "params" : {}
                };
                if (null === arr) {
                  arr = [value];
                } else {
                  arr["push"](value);
                }
                o++;
              }
            } else {
              if (void 0 !== data["filename"]) {
                let chr = data["filename"];
                const k = key;
                if (key === k) {
                  if (_0x229432["LrKyc"] != typeof chr) {
                    return d["errors"] = [{
                      "params" : {
                        "type" : "string"
                      }
                    }], false;
                  }
                  if (chr["includes"]("!") || false !== _0x590829["test"](chr)) {
                    return d["errors"] = [{
                      "params" : {}
                    }], false;
                  }
                }
                isVisibilityToggled = k === key;
              } else {
                isVisibilityToggled = true;
              }
              if (isVisibilityToggled) {
                if ("yqLpM" === _0x229432["ZWURQ"]) {
                  const value = {
                    "params" : {
                      "type" : "string"
                    }
                  };
                  if (null === arr) {
                    arr = [value];
                  } else {
                    arr["push"](value);
                  }
                  o++;
                } else {
                  if (void 0 !== data["library"]) {
                    if (_0x229432["TcOWR"] !== _0x229432["sLynu"]) {
                      const k = key;
                      if (!p(data["library"], {
                        "instancePath" : path + "/library",
                        "parentData" : data,
                        "parentDataProperty" : _0x229432["qMjUH"],
                        "rootData" : target
                      })) {
                        root = null === root ? p["errors"] : root["concat"](p["errors"]);
                        key = root["length"];
                      }
                      isVisibilityToggled = k === key;
                    } else {
                      if (e["length"] < 1) {
                        const value = {
                          "params" : {}
                        };
                        if (null === arr) {
                          arr = [value];
                        } else {
                          arr["push"](value);
                        }
                        o++;
                      }
                    }
                  } else {
                    isVisibilityToggled = true;
                  }
                  if (isVisibilityToggled) {
                    if (void 0 !== data["name"]) {
                      const k = key;
                      if ("string" != typeof data["name"]) {
                        return d["errors"] = [{
                          "params" : {
                            "type" : _0x229432["LrKyc"]
                          }
                        }], false;
                      }
                      isVisibilityToggled = k === key;
                    } else {
                      isVisibilityToggled = true;
                    }
                    if (isVisibilityToggled) {
                      if (_0x229432["nIdQK"] !== _0x229432["hwhnH"]) {
                        if (void 0 !== data["remoteType"]) {
                          let undefined = data["remoteType"];
                          const k = key;
                          const value = key;
                          let valueDim = false;
                          let dataType = null;
                          const aliasOrFieldName = key;
                          if ("var" !== undefined && _0x229432["CIRVI"] !== undefined && "assign" !== undefined && _0x229432["RLeWn"] !== undefined && "window" !== undefined && "self" !== undefined && _0x229432["dHhRU"] !== undefined && _0x229432["iNzCi"] !== undefined && _0x229432["jkSlI"] !== undefined && _0x229432["vHhrB"] !== undefined && _0x229432["WSCVg"] !== undefined && "amd-require" !== undefined && "umd" !== undefined && _0x229432["gQKnH"] !== undefined && "jsonp" !== undefined && _0x229432["RdDDr"] !== 
                          undefined && _0x229432["bYdAt"] !== undefined && "import" !== undefined && _0x229432["EmNeI"] !== undefined && _0x229432["VYlJs"] !== undefined) {
                            const selector = {
                              "params" : {}
                            };
                            if (null === root) {
                              root = [selector];
                            } else {
                              root["push"](selector);
                            }
                            key++;
                          }
                          if (aliasOrFieldName === key && (valueDim = true, dataType = 0), !valueDim) {
                            if (_0x229432["MzPSH"] === _0x229432["MzPSH"]) {
                              const container = {
                                "params" : {
                                  "passingSchemas" : dataType
                                }
                              };
                              return null === root ? root = [container] : root["push"](container), key++, d["errors"] = root, false;
                            } else {
                              const value = {
                                "params" : {}
                              };
                              if (null === dataType) {
                                dataType = [value];
                              } else {
                                dataType["push"](value);
                              }
                              aliasOrFieldName++;
                            }
                          }
                          key = value;
                          if (null !== root) {
                            if (value) {
                              root["length"] = value;
                            } else {
                              root = null;
                            }
                          }
                          isVisibilityToggled = k === key;
                        } else {
                          isVisibilityToggled = true;
                        }
                        if (isVisibilityToggled) {
                          if ("vOkgC" === _0x229432["PIJen"]) {
                            const selector = {
                              "params" : {
                                "type" : _0x229432["LrKyc"]
                              }
                            };
                            if (null === root) {
                              root = [selector];
                            } else {
                              root["push"](selector);
                            }
                            key++;
                          } else {
                            if (void 0 !== data["remotes"]) {
                              const k = key;
                              if (!m(data["remotes"], {
                                "instancePath" : path + "/remotes",
                                "parentData" : data,
                                "parentDataProperty" : _0x229432["UucDg"],
                                "rootData" : target
                              })) {
                                root = null === root ? m["errors"] : root["concat"](m["errors"]);
                                key = root["length"];
                              }
                              isVisibilityToggled = k === key;
                            } else {
                              isVisibilityToggled = true;
                            }
                            if (isVisibilityToggled) {
                              if ("pqftr" === _0x229432["IEgDe"]) {
                                const k = key;
                                if (!D(data["shared"], {
                                  "instancePath" : path + _0x229432["tUdXd"],
                                  "parentData" : data,
                                  "parentDataProperty" : "shared",
                                  "rootData" : target
                                })) {
                                  root = null === root ? D["errors"] : root["concat"](D["errors"]);
                                  key = root["length"];
                                }
                                isVisibilityToggled = k === key;
                              } else {
                                if (void 0 !== data["runtime"]) {
                                  let a = data["runtime"];
                                  const k = key;
                                  const value = key;
                                  let hasDataToSync = false;
                                  const arr = key;
                                  if (false !== a) {
                                    if (_0x229432["BJXyg"] !== _0x229432["rKCED"]) {
                                      const selector = {
                                        "params" : {}
                                      };
                                      if (null === root) {
                                        root = [selector];
                                      } else {
                                        root["push"](selector);
                                      }
                                      key++;
                                    } else {
                                      const value = {
                                        "params" : {
                                          "type" : "array"
                                        }
                                      };
                                      if (null === arr) {
                                        arr = [value];
                                      } else {
                                        arr["push"](value);
                                      }
                                      _0x13deab++;
                                    }
                                  }
                                  var hasAttempts = arr === key;
                                  if (hasDataToSync = hasDataToSync || hasAttempts, !hasDataToSync) {
                                    if ("SkkxR" !== _0x229432["zbYDD"]) {
                                      const two_sites = key;
                                      if (key === two_sites) {
                                        if ("string" == typeof a) {
                                          if (a["length"] < 1) {
                                            if (_0x229432["urdLN"] === _0x229432["urdLN"]) {
                                              const selector = {
                                                "params" : {}
                                              };
                                              if (null === root) {
                                                root = [selector];
                                              } else {
                                                root["push"](selector);
                                              }
                                              key++;
                                            } else {
                                              const value = {
                                                "params" : {
                                                  "type" : _0x229432["LrKyc"]
                                                }
                                              };
                                              if (null === arr) {
                                                arr = [value];
                                              } else {
                                                arr["push"](value);
                                              }
                                              _0x13deab++;
                                            }
                                          }
                                        } else {
                                          if ("kUgMC" === _0x229432["PVDlr"]) {
                                            const value = {
                                              "params" : {
                                                "type" : _0x229432["LrKyc"]
                                              }
                                            };
                                            if (null === arr) {
                                              arr = [value];
                                            } else {
                                              arr["push"](value);
                                            }
                                            _0x13deab++;
                                          } else {
                                            const selector = {
                                              "params" : {
                                                "type" : _0x229432["LrKyc"]
                                              }
                                            };
                                            if (null === root) {
                                              root = [selector];
                                            } else {
                                              root["push"](selector);
                                            }
                                            key++;
                                          }
                                        }
                                      }
                                      hasAttempts = two_sites === key;
                                      hasDataToSync = hasDataToSync || hasAttempts;
                                    } else {
                                      const side = key;
                                      if (!_0x13deab(data["exposes"], {
                                        "instancePath" : hasDataToSync + _0x229432["FNkPT"],
                                        "parentData" : data,
                                        "parentDataProperty" : "exposes",
                                        "rootData" : target
                                      })) {
                                        root = null === root ? _0x13deab["errors"] : root["concat"](_0x13deab["errors"]);
                                        key = root["length"];
                                      }
                                      var isKeySide = side === key;
                                    }
                                  }
                                  if (!hasDataToSync) {
                                    if (_0x229432["aZpBM"] === _0x229432["rWqLd"]) {
                                      const container = {
                                        "params" : {
                                          "passingSchemas" : arr
                                        }
                                      };
                                      return null === root ? root = [container] : root["push"](container), key++, d["errors"] = root, false;
                                    } else {
                                      const container = {
                                        "params" : {}
                                      };
                                      return null === root ? root = [container] : root["push"](container), key++, d["errors"] = root, false;
                                    }
                                  }
                                  key = value;
                                  if (null !== root) {
                                    if (value) {
                                      root["length"] = value;
                                    } else {
                                      root = null;
                                    }
                                  }
                                  isVisibilityToggled = k === key;
                                } else {
                                  isVisibilityToggled = true;
                                }
                                if (isVisibilityToggled) {
                                  if (_0x229432["qSCWW"] === _0x229432["CyBCJ"]) {
                                    const value = {
                                      "params" : {
                                        "type" : _0x229432["pNkJy"]
                                      }
                                    };
                                    if (null === arr) {
                                      arr = [value];
                                    } else {
                                      arr["push"](value);
                                    }
                                    o++;
                                  } else {
                                    if (void 0 !== data["shareScope"]) {
                                      let a = data["shareScope"];
                                      const k = key;
                                      if (key === k) {
                                        if ("string" != typeof a) {
                                          return d["errors"] = [{
                                            "params" : {
                                              "type" : _0x229432["LrKyc"]
                                            }
                                          }], false;
                                        }
                                        if (a["length"] < 1) {
                                          return d["errors"] = [{
                                            "params" : {}
                                          }], false;
                                        }
                                      }
                                      isVisibilityToggled = k === key;
                                    } else {
                                      isVisibilityToggled = true;
                                    }
                                    if (isVisibilityToggled) {
                                      if (void 0 !== data["shared"]) {
                                        const k = key;
                                        if (!D(data["shared"], {
                                          "instancePath" : path + "/shared",
                                          "parentData" : data,
                                          "parentDataProperty" : _0x229432["iaTwU"],
                                          "rootData" : target
                                        })) {
                                          root = null === root ? D["errors"] : root["concat"](D["errors"]);
                                          key = root["length"];
                                        }
                                        isVisibilityToggled = k === key;
                                      } else {
                                        isVisibilityToggled = true;
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      } else {
                        const value = {
                          "params" : {
                            "type" : "string"
                          }
                        };
                        if (null === arr) {
                          arr = [value];
                        } else {
                          arr["push"](value);
                        }
                        o++;
                      }
                    }
                  }
                }
              }
            }
          }
        } else {
          const token = {
            "params" : {}
          };
          return null === res ? res = [token] : res["push"](token), target++, o["errors"] = res, false;
        }
      }
    }
  }
  return d["errors"] = root, 0 === key;
}
;
