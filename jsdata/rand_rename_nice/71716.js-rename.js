'use strict';
const r = /^(?:[A-Za-z]:[\\/]|\\\\|\/)/;
module.exports = d, module.exports.default = d;
const t = {
  exposes : {
    $ref : "#/definitions/Exposes"
  },
  filename : {
    type : "string",
    absolutePath : false
  },
  library : {
    $ref : "#/definitions/LibraryOptions"
  },
  name : {
    type : "string"
  },
  remoteType : {
    oneOf : [{
      $ref : "#/definitions/ExternalsType"
    }]
  },
  remotes : {
    $ref : "#/definitions/Remotes"
  },
  runtime : {
    $ref : "#/definitions/EntryRuntime"
  },
  shareScope : {
    type : "string",
    minLength : 1
  },
  shared : {
    $ref : "#/definitions/Shared"
  }
};
const e = Object.prototype.hasOwnProperty;
function n(b, {
  instancePath : rationale = "",
  parentData : t,
  parentDataProperty : s,
  rootData : a = b
} = {}) {
  if (!Array.isArray(b)) {
    return n.errors = [{
      params : {
        type : "array"
      }
    }], false;
  }
  {
    const pixCount = b.length;
    for (let i = 0; i < pixCount; i++) {
      let sGroup = b[i];
      const a = 0;
      if ("string" != typeof sGroup) {
        return n.errors = [{
          params : {
            type : "string"
          }
        }], false;
      }
      if (sGroup.length < 1) {
        return n.errors = [{
          params : {}
        }], false;
      }
      if (0 !== a) {
        break;
      }
    }
  }
  return n.errors = null, true;
}
function a(obj, {
  instancePath : directory = "",
  parentData : t,
  parentDataProperty : i,
  rootData : p = obj
} = {}) {
  let result = null;
  let b = 0;
  if (0 === b) {
    if (!obj || "object" != typeof obj || Array.isArray(obj)) {
      return a.errors = [{
        params : {
          type : "object"
        }
      }], false;
    }
    {
      let kind;
      if (void 0 === obj.import && (kind = "import")) {
        return a.errors = [{
          params : {
            missingProperty : kind
          }
        }], false;
      }
      {
        const a = b;
        for (const date in obj) {
          if ("import" !== date && "name" !== date) {
            return a.errors = [{
              params : {
                additionalProperty : date
              }
            }], false;
          }
        }
        if (a === b) {
          if (void 0 !== obj.import) {
            let c = obj.import;
            const a = b;
            const bytes = b;
            let hasDataToSync = false;
            const turn = b;
            if (b == b) {
              if ("string" == typeof c) {
                if (c.length < 1) {
                  const newline = {
                    params : {}
                  };
                  if (null === result) {
                    result = [newline];
                  } else {
                    result.push(newline);
                  }
                  b++;
                }
              } else {
                const newline = {
                  params : {
                    type : "string"
                  }
                };
                if (null === result) {
                  result = [newline];
                } else {
                  result.push(newline);
                }
                b++;
              }
            }
            var hasAttempts = turn === b;
            if (hasDataToSync = hasDataToSync || hasAttempts, !hasDataToSync) {
              const a = b;
              if (!n(c, {
                instancePath : directory + "/import",
                parentData : obj,
                parentDataProperty : "import",
                rootData : p
              })) {
                result = null === result ? n.errors : result.concat(n.errors);
                b = result.length;
              }
              hasAttempts = a === b;
              hasDataToSync = hasDataToSync || hasAttempts;
            }
            if (!hasDataToSync) {
              const newline = {
                params : {}
              };
              return null === result ? result = [newline] : result.push(newline), b++, a.errors = result, false;
            }
            b = bytes;
            if (null !== result) {
              if (bytes) {
                result.length = bytes;
              } else {
                result = null;
              }
            }
            var m = a === b;
          } else {
            m = true;
          }
          if (m) {
            if (void 0 !== obj.name) {
              const s = b;
              if ("string" != typeof obj.name) {
                return a.errors = [{
                  params : {
                    type : "string"
                  }
                }], false;
              }
              m = s === b;
            } else {
              m = true;
            }
          }
        }
      }
    }
  }
  return a.errors = result, 0 === b;
}
function s(item, {
  instancePath : returnPath = "",
  parentData : f,
  parentDataProperty : r,
  rootData : subPrefix = item
} = {}) {
  let ret = null;
  let m = 0;
  if (0 === m) {
    if (!item || "object" != typeof item || Array.isArray(item)) {
      return s.errors = [{
        params : {
          type : "object"
        }
      }], false;
    }
    for (const key in item) {
      let b = item[key];
      const mode = m;
      const s = m;
      let hasDataToSync = false;
      const abbrForce = m;
      if (!a(b, {
        instancePath : returnPath + "/" + key.replace(/~/g, "~0").replace(/\//g, "~1"),
        parentData : item,
        parentDataProperty : key,
        rootData : subPrefix
      })) {
        ret = null === ret ? a.errors : ret.concat(a.errors);
        m = ret.length;
      }
      var hasAttempts = abbrForce === m;
      if (hasDataToSync = hasDataToSync || hasAttempts, !hasDataToSync) {
        const abbrForce = m;
        if (m == m) {
          if ("string" == typeof b) {
            if (b.length < 1) {
              const i = {
                params : {}
              };
              if (null === ret) {
                ret = [i];
              } else {
                ret.push(i);
              }
              m++;
            }
          } else {
            const i = {
              params : {
                type : "string"
              }
            };
            if (null === ret) {
              ret = [i];
            } else {
              ret.push(i);
            }
            m++;
          }
        }
        if (hasAttempts = abbrForce === m, hasDataToSync = hasDataToSync || hasAttempts, !hasDataToSync) {
          const abbrForce = m;
          if (!n(b, {
            instancePath : returnPath + "/" + key.replace(/~/g, "~0").replace(/\//g, "~1"),
            parentData : item,
            parentDataProperty : key,
            rootData : subPrefix
          })) {
            ret = null === ret ? n.errors : ret.concat(n.errors);
            m = ret.length;
          }
          hasAttempts = abbrForce === m;
          hasDataToSync = hasDataToSync || hasAttempts;
        }
      }
      if (!hasDataToSync) {
        const i = {
          params : {}
        };
        return null === ret ? ret = [i] : ret.push(i), m++, s.errors = ret, false;
      }
      if (m = s, null !== ret && (s ? ret.length = s : ret = null), mode !== m) {
        break;
      }
    }
  }
  return s.errors = ret, 0 === m;
}
function o(str, {
  instancePath : returnPath = "",
  parentData : r,
  parentDataProperty : t,
  rootData : stat = str
} = {}) {
  let data = null;
  let b = 0;
  const out = b;
  let cacheGroup = false;
  const a = b;
  if (b === a) {
    if (Array.isArray(str)) {
      const pixCount = str.length;
      for (let i = 0; i < pixCount; i++) {
        let a = str[i];
        const bull = b;
        const out = b;
        let hasDataToSync = false;
        const turn = b;
        if (b == b) {
          if ("string" == typeof a) {
            if (a.length < 1) {
              const about = {
                params : {}
              };
              if (null === data) {
                data = [about];
              } else {
                data.push(about);
              }
              b++;
            }
          } else {
            const about = {
              params : {
                type : "string"
              }
            };
            if (null === data) {
              data = [about];
            } else {
              data.push(about);
            }
            b++;
          }
        }
        var hasAttempts = turn === b;
        if (hasDataToSync = hasDataToSync || hasAttempts, !hasDataToSync) {
          const turn = b;
          if (!s(a, {
            instancePath : returnPath + "/" + i,
            parentData : str,
            parentDataProperty : i,
            rootData : stat
          })) {
            data = null === data ? s.errors : data.concat(s.errors);
            b = data.length;
          }
          hasAttempts = turn === b;
          hasDataToSync = hasDataToSync || hasAttempts;
        }
        if (hasDataToSync) {
          b = out;
          if (null !== data) {
            if (out) {
              data.length = out;
            } else {
              data = null;
            }
          }
        } else {
          const about = {
            params : {}
          };
          if (null === data) {
            data = [about];
          } else {
            data.push(about);
          }
          b++;
        }
        if (bull !== b) {
          break;
        }
      }
    } else {
      const about = {
        params : {
          type : "array"
        }
      };
      if (null === data) {
        data = [about];
      } else {
        data.push(about);
      }
      b++;
    }
  }
  var m = a === b;
  if (cacheGroup = cacheGroup || m, !cacheGroup) {
    const turn = b;
    if (!s(str, {
      instancePath : returnPath,
      parentData : r,
      parentDataProperty : t,
      rootData : stat
    })) {
      data = null === data ? s.errors : data.concat(s.errors);
      b = data.length;
    }
    m = turn === b;
    cacheGroup = cacheGroup || m;
  }
  if (!cacheGroup) {
    const about = {
      params : {}
    };
    return null === data ? data = [about] : data.push(about), b++, o.errors = data, false;
  }
  return b = out, null !== data && (out ? data.length = out : data = null), o.errors = data, 0 === b;
}
function l(data, {
  instancePath : rationale = "",
  parentData : e,
  parentDataProperty : n,
  rootData : target = data
} = {}) {
  let args = null;
  let x = 0;
  const value = x;
  let hasDataToSync = false;
  const _box_plots_axis = x;
  if ("string" != typeof data) {
    const firstRow = {
      params : {
        type : "string"
      }
    };
    if (null === args) {
      args = [firstRow];
    } else {
      args.push(firstRow);
    }
    x++;
  }
  var hasAttempts = _box_plots_axis === x;
  if (hasDataToSync = hasDataToSync || hasAttempts, !hasDataToSync) {
    const _box_plots_axis = x;
    if (x == x) {
      if (data && "object" == typeof data && !Array.isArray(data)) {
        const type = x;
        for (const node in data) {
          if ("amd" !== node && "commonjs" !== node && "commonjs2" !== node && "root" !== node) {
            const firstRow = {
              params : {
                additionalProperty : node
              }
            };
            if (null === args) {
              args = [firstRow];
            } else {
              args.push(firstRow);
            }
            x++;
            break;
          }
        }
        if (type === x) {
          if (void 0 !== data.amd) {
            const value = x;
            if ("string" != typeof data.amd) {
              const firstRow = {
                params : {
                  type : "string"
                }
              };
              if (null === args) {
                args = [firstRow];
              } else {
                args.push(firstRow);
              }
              x++;
            }
            var done = value === x;
          } else {
            done = true;
          }
          if (done) {
            if (void 0 !== data.commonjs) {
              const type = x;
              if ("string" != typeof data.commonjs) {
                const firstRow = {
                  params : {
                    type : "string"
                  }
                };
                if (null === args) {
                  args = [firstRow];
                } else {
                  args.push(firstRow);
                }
                x++;
              }
              done = type === x;
            } else {
              done = true;
            }
            if (done) {
              if (void 0 !== data.commonjs2) {
                const type = x;
                if ("string" != typeof data.commonjs2) {
                  const firstRow = {
                    params : {
                      type : "string"
                    }
                  };
                  if (null === args) {
                    args = [firstRow];
                  } else {
                    args.push(firstRow);
                  }
                  x++;
                }
                done = type === x;
              } else {
                done = true;
              }
              if (done) {
                if (void 0 !== data.root) {
                  const type = x;
                  if ("string" != typeof data.root) {
                    const firstRow = {
                      params : {
                        type : "string"
                      }
                    };
                    if (null === args) {
                      args = [firstRow];
                    } else {
                      args.push(firstRow);
                    }
                    x++;
                  }
                  done = type === x;
                } else {
                  done = true;
                }
              }
            }
          }
        }
      } else {
        const firstRow = {
          params : {
            type : "object"
          }
        };
        if (null === args) {
          args = [firstRow];
        } else {
          args.push(firstRow);
        }
        x++;
      }
    }
    hasAttempts = _box_plots_axis === x;
    hasDataToSync = hasDataToSync || hasAttempts;
  }
  if (!hasDataToSync) {
    const firstRow = {
      params : {}
    };
    return null === args ? args = [firstRow] : args.push(firstRow), x++, l.errors = args, false;
  }
  return x = value, null !== args && (value ? args.length = value : args = null), l.errors = args, 0 === x;
}
function i(data, {
  instancePath : rationale = "",
  parentData : t,
  parentDataProperty : a,
  rootData : target = data
} = {}) {
  let result = null;
  let b = 0;
  const bytes = b;
  let err = false;
  const a = b;
  if (b === a) {
    if (Array.isArray(data)) {
      if (data.length < 1) {
        const newline = {
          params : {
            limit : 1
          }
        };
        if (null === result) {
          result = [newline];
        } else {
          result.push(newline);
        }
        b++;
      } else {
        const pixCount = data.length;
        for (let i = 0; i < pixCount; i++) {
          let linkheader = data[i];
          const a = b;
          if (b === a) {
            if ("string" == typeof linkheader) {
              if (linkheader.length < 1) {
                const newline = {
                  params : {}
                };
                if (null === result) {
                  result = [newline];
                } else {
                  result.push(newline);
                }
                b++;
              }
            } else {
              const newline = {
                params : {
                  type : "string"
                }
              };
              if (null === result) {
                result = [newline];
              } else {
                result.push(newline);
              }
              b++;
            }
          }
          if (a !== b) {
            break;
          }
        }
      }
    } else {
      const newline = {
        params : {
          type : "array"
        }
      };
      if (null === result) {
        result = [newline];
      } else {
        result.push(newline);
      }
      b++;
    }
  }
  var passed = a === b;
  if (err = err || passed, !err) {
    const a = b;
    if (b === a) {
      if ("string" == typeof data) {
        if (data.length < 1) {
          const newline = {
            params : {}
          };
          if (null === result) {
            result = [newline];
          } else {
            result.push(newline);
          }
          b++;
        }
      } else {
        const newline = {
          params : {
            type : "string"
          }
        };
        if (null === result) {
          result = [newline];
        } else {
          result.push(newline);
        }
        b++;
      }
    }
    if (passed = a === b, err = err || passed, !err) {
      const t = b;
      if (b == b) {
        if (data && "object" == typeof data && !Array.isArray(data)) {
          const a = b;
          for (const node in data) {
            if ("amd" !== node && "commonjs" !== node && "root" !== node) {
              const newline = {
                params : {
                  additionalProperty : node
                }
              };
              if (null === result) {
                result = [newline];
              } else {
                result.push(newline);
              }
              b++;
              break;
            }
          }
          if (a === b) {
            if (void 0 !== data.amd) {
              let linkheader = data.amd;
              const a = b;
              if (b === a) {
                if ("string" == typeof linkheader) {
                  if (linkheader.length < 1) {
                    const newline = {
                      params : {}
                    };
                    if (null === result) {
                      result = [newline];
                    } else {
                      result.push(newline);
                    }
                    b++;
                  }
                } else {
                  const newline = {
                    params : {
                      type : "string"
                    }
                  };
                  if (null === result) {
                    result = [newline];
                  } else {
                    result.push(newline);
                  }
                  b++;
                }
              }
              var passed = a === b;
            } else {
              passed = true;
            }
            if (passed) {
              if (void 0 !== data.commonjs) {
                let linkheader = data.commonjs;
                const a = b;
                if (b === a) {
                  if ("string" == typeof linkheader) {
                    if (linkheader.length < 1) {
                      const newline = {
                        params : {}
                      };
                      if (null === result) {
                        result = [newline];
                      } else {
                        result.push(newline);
                      }
                      b++;
                    }
                  } else {
                    const newline = {
                      params : {
                        type : "string"
                      }
                    };
                    if (null === result) {
                      result = [newline];
                    } else {
                      result.push(newline);
                    }
                    b++;
                  }
                }
                passed = a === b;
              } else {
                passed = true;
              }
              if (passed) {
                if (void 0 !== data.root) {
                  let exts = data.root;
                  const t = b;
                  const bytes = b;
                  let host = false;
                  const val = b;
                  if (b === val) {
                    if (Array.isArray(exts)) {
                      const pixCount = exts.length;
                      for (let i = 0; i < pixCount; i++) {
                        let linkheader = exts[i];
                        const a = b;
                        if (b === a) {
                          if ("string" == typeof linkheader) {
                            if (linkheader.length < 1) {
                              const newline = {
                                params : {}
                              };
                              if (null === result) {
                                result = [newline];
                              } else {
                                result.push(newline);
                              }
                              b++;
                            }
                          } else {
                            const newline = {
                              params : {
                                type : "string"
                              }
                            };
                            if (null === result) {
                              result = [newline];
                            } else {
                              result.push(newline);
                            }
                            b++;
                          }
                        }
                        if (a !== b) {
                          break;
                        }
                      }
                    } else {
                      const newline = {
                        params : {
                          type : "array"
                        }
                      };
                      if (null === result) {
                        result = [newline];
                      } else {
                        result.push(newline);
                      }
                      b++;
                    }
                  }
                  var ret = val === b;
                  if (host = host || ret, !host) {
                    const a = b;
                    if (b === a) {
                      if ("string" == typeof exts) {
                        if (exts.length < 1) {
                          const newline = {
                            params : {}
                          };
                          if (null === result) {
                            result = [newline];
                          } else {
                            result.push(newline);
                          }
                          b++;
                        }
                      } else {
                        const newline = {
                          params : {
                            type : "string"
                          }
                        };
                        if (null === result) {
                          result = [newline];
                        } else {
                          result.push(newline);
                        }
                        b++;
                      }
                    }
                    ret = a === b;
                    host = host || ret;
                  }
                  if (host) {
                    b = bytes;
                    if (null !== result) {
                      if (bytes) {
                        result.length = bytes;
                      } else {
                        result = null;
                      }
                    }
                  } else {
                    const newline = {
                      params : {}
                    };
                    if (null === result) {
                      result = [newline];
                    } else {
                      result.push(newline);
                    }
                    b++;
                  }
                  passed = t === b;
                } else {
                  passed = true;
                }
              }
            }
          }
        } else {
          const newline = {
            params : {
              type : "object"
            }
          };
          if (null === result) {
            result = [newline];
          } else {
            result.push(newline);
          }
          b++;
        }
      }
      passed = t === b;
      err = err || passed;
    }
  }
  if (!err) {
    const newline = {
      params : {}
    };
    return null === result ? result = [newline] : result.push(newline), b++, i.errors = result, false;
  }
  return b = bytes, null !== result && (bytes ? result.length = bytes : result = null), i.errors = result, 0 === b;
}
function p(body, {
  instancePath : t = "",
  parentData : a,
  parentDataProperty : s,
  rootData : selector = body
} = {}) {
  let data = null;
  let b = 0;
  if (0 === b) {
    if (!body || "object" != typeof body || Array.isArray(body)) {
      return p.errors = [{
        params : {
          type : "object"
        }
      }], false;
    }
    {
      let rProp;
      if (void 0 === body.type && (rProp = "type")) {
        return p.errors = [{
          params : {
            missingProperty : rProp
          }
        }], false;
      }
      {
        const a = b;
        for (const field_name in body) {
          if ("auxiliaryComment" !== field_name && "export" !== field_name && "name" !== field_name && "type" !== field_name && "umdNamedDefine" !== field_name) {
            return p.errors = [{
              params : {
                additionalProperty : field_name
              }
            }], false;
          }
        }
        if (a === b) {
          if (void 0 !== body.auxiliaryComment) {
            const val = b;
            if (!l(body.auxiliaryComment, {
              instancePath : t + "/auxiliaryComment",
              parentData : body,
              parentDataProperty : "auxiliaryComment",
              rootData : selector
            })) {
              data = null === data ? l.errors : data.concat(l.errors);
              b = data.length;
            }
            var ret = val === b;
          } else {
            ret = true;
          }
          if (ret) {
            if (void 0 !== body.export) {
              let exts = body.export;
              const a = b;
              const out = b;
              let hasDataToSync = false;
              const max = b;
              if (b === max) {
                if (Array.isArray(exts)) {
                  const pixCount = exts.length;
                  for (let i = 0; i < pixCount; i++) {
                    let linkheader = exts[i];
                    const a = b;
                    if (b === a) {
                      if ("string" == typeof linkheader) {
                        if (linkheader.length < 1) {
                          const about = {
                            params : {}
                          };
                          if (null === data) {
                            data = [about];
                          } else {
                            data.push(about);
                          }
                          b++;
                        }
                      } else {
                        const about = {
                          params : {
                            type : "string"
                          }
                        };
                        if (null === data) {
                          data = [about];
                        } else {
                          data.push(about);
                        }
                        b++;
                      }
                    }
                    if (a !== b) {
                      break;
                    }
                  }
                } else {
                  const about = {
                    params : {
                      type : "array"
                    }
                  };
                  if (null === data) {
                    data = [about];
                  } else {
                    data.push(about);
                  }
                  b++;
                }
              }
              var hasAttempts = max === b;
              if (hasDataToSync = hasDataToSync || hasAttempts, !hasDataToSync) {
                const a = b;
                if (b === a) {
                  if ("string" == typeof exts) {
                    if (exts.length < 1) {
                      const about = {
                        params : {}
                      };
                      if (null === data) {
                        data = [about];
                      } else {
                        data.push(about);
                      }
                      b++;
                    }
                  } else {
                    const about = {
                      params : {
                        type : "string"
                      }
                    };
                    if (null === data) {
                      data = [about];
                    } else {
                      data.push(about);
                    }
                    b++;
                  }
                }
                hasAttempts = a === b;
                hasDataToSync = hasDataToSync || hasAttempts;
              }
              if (!hasDataToSync) {
                const about = {
                  params : {}
                };
                return null === data ? data = [about] : data.push(about), b++, p.errors = data, false;
              }
              b = out;
              if (null !== data) {
                if (out) {
                  data.length = out;
                } else {
                  data = null;
                }
              }
              ret = a === b;
            } else {
              ret = true;
            }
            if (ret) {
              if (void 0 !== body.name) {
                const a = b;
                if (!i(body.name, {
                  instancePath : t + "/name",
                  parentData : body,
                  parentDataProperty : "name",
                  rootData : selector
                })) {
                  data = null === data ? i.errors : data.concat(i.errors);
                  b = data.length;
                }
                ret = a === b;
              } else {
                ret = true;
              }
              if (ret) {
                if (void 0 !== body.type) {
                  let undefined = body.type;
                  const a = b;
                  const out = b;
                  let cacheGroup = false;
                  const turn = b;
                  if ("var" !== undefined && "module" !== undefined && "assign" !== undefined && "assign-properties" !== undefined && "this" !== undefined && "window" !== undefined && "self" !== undefined && "global" !== undefined && "commonjs" !== undefined && "commonjs2" !== undefined && "commonjs-module" !== undefined && "amd" !== undefined && "amd-require" !== undefined && "umd" !== undefined && "umd2" !== undefined && "jsonp" !== undefined && "system" !== undefined) {
                    const about = {
                      params : {}
                    };
                    if (null === data) {
                      data = [about];
                    } else {
                      data.push(about);
                    }
                    b++;
                  }
                  var m = turn === b;
                  if (cacheGroup = cacheGroup || m, !cacheGroup) {
                    const s = b;
                    if ("string" != typeof undefined) {
                      const about = {
                        params : {
                          type : "string"
                        }
                      };
                      if (null === data) {
                        data = [about];
                      } else {
                        data.push(about);
                      }
                      b++;
                    }
                    m = s === b;
                    cacheGroup = cacheGroup || m;
                  }
                  if (!cacheGroup) {
                    const about = {
                      params : {}
                    };
                    return null === data ? data = [about] : data.push(about), b++, p.errors = data, false;
                  }
                  b = out;
                  if (null !== data) {
                    if (out) {
                      data.length = out;
                    } else {
                      data = null;
                    }
                  }
                  ret = a === b;
                } else {
                  ret = true;
                }
                if (ret) {
                  if (void 0 !== body.umdNamedDefine) {
                    const a = b;
                    if ("boolean" != typeof body.umdNamedDefine) {
                      return p.errors = [{
                        params : {
                          type : "boolean"
                        }
                      }], false;
                    }
                    ret = a === b;
                  } else {
                    ret = true;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  return p.errors = data, 0 === b;
}
function f(a, {
  instancePath : rationale = "",
  parentData : t,
  parentDataProperty : n,
  rootData : b = a
} = {}) {
  if (!Array.isArray(a)) {
    return f.errors = [{
      params : {
        type : "array"
      }
    }], false;
  }
  {
    const pixCount = a.length;
    for (let i = 0; i < pixCount; i++) {
      let sGroup = a[i];
      const n = 0;
      if ("string" != typeof sGroup) {
        return f.errors = [{
          params : {
            type : "string"
          }
        }], false;
      }
      if (sGroup.length < 1) {
        return f.errors = [{
          params : {}
        }], false;
      }
      if (0 !== n) {
        break;
      }
    }
  }
  return f.errors = null, true;
}
function u(obj, {
  instancePath : baseUrl = "",
  parentData : t,
  parentDataProperty : o,
  rootData : l = obj
} = {}) {
  let data = null;
  let b = 0;
  if (0 === b) {
    if (!obj || "object" != typeof obj || Array.isArray(obj)) {
      return u.errors = [{
        params : {
          type : "object"
        }
      }], false;
    }
    {
      let linkType;
      if (void 0 === obj.external && (linkType = "external")) {
        return u.errors = [{
          params : {
            missingProperty : linkType
          }
        }], false;
      }
      {
        const a = b;
        for (const undefined in obj) {
          if ("external" !== undefined && "shareScope" !== undefined) {
            return u.errors = [{
              params : {
                additionalProperty : undefined
              }
            }], false;
          }
        }
        if (a === b) {
          if (void 0 !== obj.external) {
            let err = obj.external;
            const val = b;
            const out = b;
            let hasDataToSync = false;
            const turn = b;
            if (b == b) {
              if ("string" == typeof err) {
                if (err.length < 1) {
                  const about = {
                    params : {}
                  };
                  if (null === data) {
                    data = [about];
                  } else {
                    data.push(about);
                  }
                  b++;
                }
              } else {
                const about = {
                  params : {
                    type : "string"
                  }
                };
                if (null === data) {
                  data = [about];
                } else {
                  data.push(about);
                }
                b++;
              }
            }
            var hasAttempts = turn === b;
            if (hasDataToSync = hasDataToSync || hasAttempts, !hasDataToSync) {
              const a = b;
              if (!f(err, {
                instancePath : baseUrl + "/external",
                parentData : obj,
                parentDataProperty : "external",
                rootData : l
              })) {
                data = null === data ? f.errors : data.concat(f.errors);
                b = data.length;
              }
              hasAttempts = a === b;
              hasDataToSync = hasDataToSync || hasAttempts;
            }
            if (!hasDataToSync) {
              const about = {
                params : {}
              };
              return null === data ? data = [about] : data.push(about), b++, u.errors = data, false;
            }
            b = out;
            if (null !== data) {
              if (out) {
                data.length = out;
              } else {
                data = null;
              }
            }
            var ret = val === b;
          } else {
            ret = true;
          }
          if (ret) {
            if (void 0 !== obj.shareScope) {
              let sGroup = obj.shareScope;
              const a = b;
              if (b === a) {
                if ("string" != typeof sGroup) {
                  return u.errors = [{
                    params : {
                      type : "string"
                    }
                  }], false;
                }
                if (sGroup.length < 1) {
                  return u.errors = [{
                    params : {}
                  }], false;
                }
              }
              ret = a === b;
            } else {
              ret = true;
            }
          }
        }
      }
    }
  }
  return u.errors = data, 0 === b;
}
function c(item, {
  instancePath : returnPath = "",
  parentData : l,
  parentDataProperty : r,
  rootData : subPrefix = item
} = {}) {
  let p = null;
  let k = 0;
  if (0 === k) {
    if (!item || "object" != typeof item || Array.isArray(item)) {
      return c.errors = [{
        params : {
          type : "object"
        }
      }], false;
    }
    for (const key in item) {
      let a = item[key];
      const __proto__ = k;
      const n = k;
      let hasDataToSync = false;
      const abbrForce = k;
      if (!u(a, {
        instancePath : returnPath + "/" + key.replace(/~/g, "~0").replace(/\//g, "~1"),
        parentData : item,
        parentDataProperty : key,
        rootData : subPrefix
      })) {
        p = null === p ? u.errors : p.concat(u.errors);
        k = p.length;
      }
      var hasAttempts = abbrForce === k;
      if (hasDataToSync = hasDataToSync || hasAttempts, !hasDataToSync) {
        const abbrForce = k;
        if (k == k) {
          if ("string" == typeof a) {
            if (a.length < 1) {
              const name = {
                params : {}
              };
              if (null === p) {
                p = [name];
              } else {
                p.push(name);
              }
              k++;
            }
          } else {
            const name = {
              params : {
                type : "string"
              }
            };
            if (null === p) {
              p = [name];
            } else {
              p.push(name);
            }
            k++;
          }
        }
        if (hasAttempts = abbrForce === k, hasDataToSync = hasDataToSync || hasAttempts, !hasDataToSync) {
          const abbrForce = k;
          if (!f(a, {
            instancePath : returnPath + "/" + key.replace(/~/g, "~0").replace(/\//g, "~1"),
            parentData : item,
            parentDataProperty : key,
            rootData : subPrefix
          })) {
            p = null === p ? f.errors : p.concat(f.errors);
            k = p.length;
          }
          hasAttempts = abbrForce === k;
          hasDataToSync = hasDataToSync || hasAttempts;
        }
      }
      if (!hasDataToSync) {
        const i = {
          params : {}
        };
        return null === p ? p = [i] : p.push(i), k++, c.errors = p, false;
      }
      if (k = n, null !== p && (n ? p.length = n : p = null), __proto__ !== k) {
        break;
      }
    }
  }
  return c.errors = p, 0 === k;
}
function m(input, {
  instancePath : offset = "",
  parentData : r,
  parentDataProperty : t,
  rootData : type = input
} = {}) {
  let data = null;
  let l = 0;
  const depth = l;
  let position = false;
  const i = l;
  if (l === i) {
    if (Array.isArray(input)) {
      const rown = input.length;
      for (let j = 0; j < rown; j++) {
        let value = input[j];
        const i = l;
        const depth = l;
        let position = false;
        const next = l;
        if (l == l) {
          if ("string" == typeof value) {
            if (value.length < 1) {
              const about = {
                params : {}
              };
              if (null === data) {
                data = [about];
              } else {
                data.push(about);
              }
              l++;
            }
          } else {
            const about = {
              params : {
                type : "string"
              }
            };
            if (null === data) {
              data = [about];
            } else {
              data.push(about);
            }
            l++;
          }
        }
        var last = next === l;
        if (position = position || last, !position) {
          const i = l;
          if (!c(value, {
            instancePath : offset + "/" + j,
            parentData : input,
            parentDataProperty : j,
            rootData : type
          })) {
            data = null === data ? c.errors : data.concat(c.errors);
            l = data.length;
          }
          last = i === l;
          position = position || last;
        }
        if (position) {
          l = depth;
          if (null !== data) {
            if (depth) {
              data.length = depth;
            } else {
              data = null;
            }
          }
        } else {
          const about = {
            params : {}
          };
          if (null === data) {
            data = [about];
          } else {
            data.push(about);
          }
          l++;
        }
        if (i !== l) {
          break;
        }
      }
    } else {
      const about = {
        params : {
          type : "array"
        }
      };
      if (null === data) {
        data = [about];
      } else {
        data.push(about);
      }
      l++;
    }
  }
  var last = i === l;
  if (position = position || last, !position) {
    const i = l;
    if (!c(input, {
      instancePath : offset,
      parentData : r,
      parentDataProperty : t,
      rootData : type
    })) {
      data = null === data ? c.errors : data.concat(c.errors);
      l = data.length;
    }
    last = i === l;
    position = position || last;
  }
  if (!position) {
    const about = {
      params : {}
    };
    return null === data ? data = [about] : data.push(about), l++, m.errors = data, false;
  }
  return l = depth, null !== data && (depth ? data.length = depth : data = null), m.errors = data, 0 === l;
}
const y = {
  eager : {
    type : "boolean"
  },
  import : {
    anyOf : [{
      enum : [false]
    }, {
      $ref : "#/definitions/SharedItem"
    }]
  },
  packageName : {
    type : "string",
    minLength : 1
  },
  requiredVersion : {
    anyOf : [{
      enum : [false]
    }, {
      type : "string"
    }]
  },
  shareKey : {
    type : "string",
    minLength : 1
  },
  shareScope : {
    type : "string",
    minLength : 1
  },
  singleton : {
    type : "boolean"
  },
  strictVersion : {
    type : "boolean"
  },
  version : {
    anyOf : [{
      enum : [false]
    }, {
      type : "string"
    }]
  }
};
function h(obj, {
  instancePath : rationale = "",
  parentData : a,
  parentDataProperty : t,
  rootData : s = obj
} = {}) {
  let args = null;
  let number = 0;
  if (0 === number) {
    if (!obj || "object" != typeof obj || Array.isArray(obj)) {
      return h.errors = [{
        params : {
          type : "object"
        }
      }], false;
    }
    {
      const ordert = number;
      for (const i in obj) {
        if (!e.call(y, i)) {
          return h.errors = [{
            params : {
              additionalProperty : i
            }
          }], false;
        }
      }
      if (ordert === number) {
        if (void 0 !== obj.eager) {
          const ordert = number;
          if ("boolean" != typeof obj.eager) {
            return h.errors = [{
              params : {
                type : "boolean"
              }
            }], false;
          }
          var i = ordert === number;
        } else {
          i = true;
        }
        if (i) {
          if (void 0 !== obj.import) {
            let linkheader = obj.import;
            const format = number;
            const c = number;
            let hasDataToSync = false;
            const ordert = number;
            if (false !== linkheader) {
              const firstRow = {
                params : {}
              };
              if (null === args) {
                args = [firstRow];
              } else {
                args.push(firstRow);
              }
              number++;
            }
            var hasSubset = ordert === number;
            if (hasDataToSync = hasDataToSync || hasSubset, !hasDataToSync) {
              const total = number;
              if (number == number) {
                if ("string" == typeof linkheader) {
                  if (linkheader.length < 1) {
                    const firstRow = {
                      params : {}
                    };
                    if (null === args) {
                      args = [firstRow];
                    } else {
                      args.push(firstRow);
                    }
                    number++;
                  }
                } else {
                  const firstRow = {
                    params : {
                      type : "string"
                    }
                  };
                  if (null === args) {
                    args = [firstRow];
                  } else {
                    args.push(firstRow);
                  }
                  number++;
                }
              }
              hasSubset = total === number;
              hasDataToSync = hasDataToSync || hasSubset;
            }
            if (!hasDataToSync) {
              const firstRow = {
                params : {}
              };
              return null === args ? args = [firstRow] : args.push(firstRow), number++, h.errors = args, false;
            }
            number = c;
            if (null !== args) {
              if (c) {
                args.length = c;
              } else {
                args = null;
              }
            }
            i = format === number;
          } else {
            i = true;
          }
          if (i) {
            if (void 0 !== obj.packageName) {
              let sGroup = obj.packageName;
              const type = number;
              if (number === type) {
                if ("string" != typeof sGroup) {
                  return h.errors = [{
                    params : {
                      type : "string"
                    }
                  }], false;
                }
                if (sGroup.length < 1) {
                  return h.errors = [{
                    params : {}
                  }], false;
                }
              }
              i = type === number;
            } else {
              i = true;
            }
            if (i) {
              if (void 0 !== obj.requiredVersion) {
                let _text = obj.requiredVersion;
                const format = number;
                const c = number;
                let foreground = false;
                const ordert = number;
                if (false !== _text) {
                  const firstRow = {
                    params : {}
                  };
                  if (null === args) {
                    args = [firstRow];
                  } else {
                    args.push(firstRow);
                  }
                  number++;
                }
                var f = ordert === number;
                if (foreground = foreground || f, !foreground) {
                  const argType = number;
                  if ("string" != typeof _text) {
                    const firstRow = {
                      params : {
                        type : "string"
                      }
                    };
                    if (null === args) {
                      args = [firstRow];
                    } else {
                      args.push(firstRow);
                    }
                    number++;
                  }
                  f = argType === number;
                  foreground = foreground || f;
                }
                if (!foreground) {
                  const firstRow = {
                    params : {}
                  };
                  return null === args ? args = [firstRow] : args.push(firstRow), number++, h.errors = args, false;
                }
                number = c;
                if (null !== args) {
                  if (c) {
                    args.length = c;
                  } else {
                    args = null;
                  }
                }
                i = format === number;
              } else {
                i = true;
              }
              if (i) {
                if (void 0 !== obj.shareKey) {
                  let sGroup = obj.shareKey;
                  const type = number;
                  if (number === type) {
                    if ("string" != typeof sGroup) {
                      return h.errors = [{
                        params : {
                          type : "string"
                        }
                      }], false;
                    }
                    if (sGroup.length < 1) {
                      return h.errors = [{
                        params : {}
                      }], false;
                    }
                  }
                  i = type === number;
                } else {
                  i = true;
                }
                if (i) {
                  if (void 0 !== obj.shareScope) {
                    let sGroup = obj.shareScope;
                    const type = number;
                    if (number === type) {
                      if ("string" != typeof sGroup) {
                        return h.errors = [{
                          params : {
                            type : "string"
                          }
                        }], false;
                      }
                      if (sGroup.length < 1) {
                        return h.errors = [{
                          params : {}
                        }], false;
                      }
                    }
                    i = type === number;
                  } else {
                    i = true;
                  }
                  if (i) {
                    if (void 0 !== obj.singleton) {
                      const format = number;
                      if ("boolean" != typeof obj.singleton) {
                        return h.errors = [{
                          params : {
                            type : "boolean"
                          }
                        }], false;
                      }
                      i = format === number;
                    } else {
                      i = true;
                    }
                    if (i) {
                      if (void 0 !== obj.strictVersion) {
                        const format = number;
                        if ("boolean" != typeof obj.strictVersion) {
                          return h.errors = [{
                            params : {
                              type : "boolean"
                            }
                          }], false;
                        }
                        i = format === number;
                      } else {
                        i = true;
                      }
                      if (i) {
                        if (void 0 !== obj.version) {
                          let _text = obj.version;
                          const format = number;
                          const c = number;
                          let hasDataToSync = false;
                          const ordert = number;
                          if (false !== _text) {
                            const firstRow = {
                              params : {}
                            };
                            if (null === args) {
                              args = [firstRow];
                            } else {
                              args.push(firstRow);
                            }
                            number++;
                          }
                          var hasSubset = ordert === number;
                          if (hasDataToSync = hasDataToSync || hasSubset, !hasDataToSync) {
                            const total = number;
                            if ("string" != typeof _text) {
                              const firstRow = {
                                params : {
                                  type : "string"
                                }
                              };
                              if (null === args) {
                                args = [firstRow];
                              } else {
                                args.push(firstRow);
                              }
                              number++;
                            }
                            hasSubset = total === number;
                            hasDataToSync = hasDataToSync || hasSubset;
                          }
                          if (!hasDataToSync) {
                            const firstRow = {
                              params : {}
                            };
                            return null === args ? args = [firstRow] : args.push(firstRow), number++, h.errors = args, false;
                          }
                          number = c;
                          if (null !== args) {
                            if (c) {
                              args.length = c;
                            } else {
                              args = null;
                            }
                          }
                          i = format === number;
                        } else {
                          i = true;
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
  }
  return h.errors = args, 0 === number;
}
function g(obj, {
  instancePath : returnPath = "",
  parentData : l,
  parentDataProperty : r,
  rootData : i = obj
} = {}) {
  let errors = null;
  let y = 0;
  if (0 === y) {
    if (!obj || "object" != typeof obj || Array.isArray(obj)) {
      return g.errors = [{
        params : {
          type : "object"
        }
      }], false;
    }
    for (const prop in obj) {
      let a = obj[prop];
      const visited = y;
      const generalErrors = y;
      let hasDataToSync = false;
      const x_or_y = y;
      if (!h(a, {
        instancePath : returnPath + "/" + prop.replace(/~/g, "~0").replace(/\//g, "~1"),
        parentData : obj,
        parentDataProperty : prop,
        rootData : i
      })) {
        errors = null === errors ? h.errors : errors.concat(h.errors);
        y = errors.length;
      }
      var hasFinished = x_or_y === y;
      if (hasDataToSync = hasDataToSync || hasFinished, !hasDataToSync) {
        const swipingDirection = y;
        if (y == y) {
          if ("string" == typeof a) {
            if (a.length < 1) {
              const e = {
                params : {}
              };
              if (null === errors) {
                errors = [e];
              } else {
                errors.push(e);
              }
              y++;
            }
          } else {
            const e = {
              params : {
                type : "string"
              }
            };
            if (null === errors) {
              errors = [e];
            } else {
              errors.push(e);
            }
            y++;
          }
        }
        hasFinished = swipingDirection === y;
        hasDataToSync = hasDataToSync || hasFinished;
      }
      if (!hasDataToSync) {
        const e = {
          params : {}
        };
        return null === errors ? errors = [e] : errors.push(e), y++, g.errors = errors, false;
      }
      if (y = generalErrors, null !== errors && (generalErrors ? errors.length = generalErrors : errors = null), visited !== y) {
        break;
      }
    }
  }
  return g.errors = errors, 0 === y;
}
function D(x, {
  instancePath : offset = "",
  parentData : r,
  parentDataProperty : t,
  rootData : xOrY = x
} = {}) {
  let array = null;
  let end = 0;
  const value = end;
  let position = false;
  const i = end;
  if (end === i) {
    if (Array.isArray(x)) {
      const rown = x.length;
      for (let j = 0; j < rown; j++) {
        let a = x[j];
        const curNode = end;
        const len = end;
        let position = false;
        const i = end;
        if (end == end) {
          if ("string" == typeof a) {
            if (a.length < 1) {
              const value = {
                params : {}
              };
              if (null === array) {
                array = [value];
              } else {
                array.push(value);
              }
              end++;
            }
          } else {
            const value = {
              params : {
                type : "string"
              }
            };
            if (null === array) {
              array = [value];
            } else {
              array.push(value);
            }
            end++;
          }
        }
        var last = i === end;
        if (position = position || last, !position) {
          const node = end;
          if (!g(a, {
            instancePath : offset + "/" + j,
            parentData : x,
            parentDataProperty : j,
            rootData : xOrY
          })) {
            array = null === array ? g.errors : array.concat(g.errors);
            end = array.length;
          }
          last = node === end;
          position = position || last;
        }
        if (position) {
          end = len;
          if (null !== array) {
            if (len) {
              array.length = len;
            } else {
              array = null;
            }
          }
        } else {
          const value = {
            params : {}
          };
          if (null === array) {
            array = [value];
          } else {
            array.push(value);
          }
          end++;
        }
        if (curNode !== end) {
          break;
        }
      }
    } else {
      const value = {
        params : {
          type : "array"
        }
      };
      if (null === array) {
        array = [value];
      } else {
        array.push(value);
      }
      end++;
    }
  }
  var last = i === end;
  if (position = position || last, !position) {
    const node = end;
    if (!g(x, {
      instancePath : offset,
      parentData : r,
      parentDataProperty : t,
      rootData : xOrY
    })) {
      array = null === array ? g.errors : array.concat(g.errors);
      end = array.length;
    }
    last = node === end;
    position = position || last;
  }
  if (!position) {
    const row = {
      params : {}
    };
    return null === array ? array = [row] : array.push(row), end++, D.errors = array, false;
  }
  return end = value, null !== array && (value ? array.length = value : array = null), D.errors = array, 0 === end;
}
function d(obj, {
  instancePath : path = "",
  parentData : s,
  parentDataProperty : a,
  rootData : i = obj
} = {}) {
  let results = null;
  let y = 0;
  if (0 === y) {
    if (!obj || "object" != typeof obj || Array.isArray(obj)) {
      return d.errors = [{
        params : {
          type : "object"
        }
      }], false;
    }
    {
      const cat_axis = y;
      for (const i in obj) {
        if (!e.call(t, i)) {
          return d.errors = [{
            params : {
              additionalProperty : i
            }
          }], false;
        }
      }
      if (cat_axis === y) {
        if (void 0 !== obj.exposes) {
          const cat_axis = y;
          if (!o(obj.exposes, {
            instancePath : path + "/exposes",
            parentData : obj,
            parentDataProperty : "exposes",
            rootData : i
          })) {
            results = null === results ? o.errors : results.concat(o.errors);
            y = results.length;
          }
          var z = cat_axis === y;
        } else {
          z = true;
        }
        if (z) {
          if (void 0 !== obj.filename) {
            let val = obj.filename;
            const r = y;
            if (y === r) {
              if ("string" != typeof val) {
                return d.errors = [{
                  params : {
                    type : "string"
                  }
                }], false;
              }
              if (val.includes("!") || false !== r.test(val)) {
                return d.errors = [{
                  params : {}
                }], false;
              }
            }
            z = r === y;
          } else {
            z = true;
          }
          if (z) {
            if (void 0 !== obj.library) {
              const r = y;
              if (!p(obj.library, {
                instancePath : path + "/library",
                parentData : obj,
                parentDataProperty : "library",
                rootData : i
              })) {
                results = null === results ? p.errors : results.concat(p.errors);
                y = results.length;
              }
              z = r === y;
            } else {
              z = true;
            }
            if (z) {
              if (void 0 !== obj.name) {
                const r = y;
                if ("string" != typeof obj.name) {
                  return d.errors = [{
                    params : {
                      type : "string"
                    }
                  }], false;
                }
                z = r === y;
              } else {
                z = true;
              }
              if (z) {
                if (void 0 !== obj.remoteType) {
                  let undefined = obj.remoteType;
                  const r = y;
                  const i = y;
                  let okval = false;
                  let func = null;
                  const cat_axis = y;
                  if ("var" !== undefined && "module" !== undefined && "assign" !== undefined && "this" !== undefined && "window" !== undefined && "self" !== undefined && "global" !== undefined && "commonjs" !== undefined && "commonjs2" !== undefined && "commonjs-module" !== undefined && "amd" !== undefined && "amd-require" !== undefined && "umd" !== undefined && "umd2" !== undefined && "jsonp" !== undefined && "system" !== undefined && "promise" !== undefined && "import" !== undefined && "script" !== 
                  undefined && "node-commonjs" !== undefined) {
                    const result = {
                      params : {}
                    };
                    if (null === results) {
                      results = [result];
                    } else {
                      results.push(result);
                    }
                    y++;
                  }
                  if (cat_axis === y && (okval = true, func = 0), !okval) {
                    const result = {
                      params : {
                        passingSchemas : func
                      }
                    };
                    return null === results ? results = [result] : results.push(result), y++, d.errors = results, false;
                  }
                  y = i;
                  if (null !== results) {
                    if (i) {
                      results.length = i;
                    } else {
                      results = null;
                    }
                  }
                  z = r === y;
                } else {
                  z = true;
                }
                if (z) {
                  if (void 0 !== obj.remotes) {
                    const r = y;
                    if (!m(obj.remotes, {
                      instancePath : path + "/remotes",
                      parentData : obj,
                      parentDataProperty : "remotes",
                      rootData : i
                    })) {
                      results = null === results ? m.errors : results.concat(m.errors);
                      y = results.length;
                    }
                    z = r === y;
                  } else {
                    z = true;
                  }
                  if (z) {
                    if (void 0 !== obj.runtime) {
                      let linkheader = obj.runtime;
                      const r = y;
                      const i = y;
                      let hasDataToSync = false;
                      const cat_axis = y;
                      if (false !== linkheader) {
                        const result = {
                          params : {}
                        };
                        if (null === results) {
                          results = [result];
                        } else {
                          results.push(result);
                        }
                        y++;
                      }
                      var hasAttempts = cat_axis === y;
                      if (hasDataToSync = hasDataToSync || hasAttempts, !hasDataToSync) {
                        const prevY = y;
                        if (y === prevY) {
                          if ("string" == typeof linkheader) {
                            if (linkheader.length < 1) {
                              const result = {
                                params : {}
                              };
                              if (null === results) {
                                results = [result];
                              } else {
                                results.push(result);
                              }
                              y++;
                            }
                          } else {
                            const result = {
                              params : {
                                type : "string"
                              }
                            };
                            if (null === results) {
                              results = [result];
                            } else {
                              results.push(result);
                            }
                            y++;
                          }
                        }
                        hasAttempts = prevY === y;
                        hasDataToSync = hasDataToSync || hasAttempts;
                      }
                      if (!hasDataToSync) {
                        const result = {
                          params : {}
                        };
                        return null === results ? results = [result] : results.push(result), y++, d.errors = results, false;
                      }
                      y = i;
                      if (null !== results) {
                        if (i) {
                          results.length = i;
                        } else {
                          results = null;
                        }
                      }
                      z = r === y;
                    } else {
                      z = true;
                    }
                    if (z) {
                      if (void 0 !== obj.shareScope) {
                        let sGroup = obj.shareScope;
                        const r = y;
                        if (y === r) {
                          if ("string" != typeof sGroup) {
                            return d.errors = [{
                              params : {
                                type : "string"
                              }
                            }], false;
                          }
                          if (sGroup.length < 1) {
                            return d.errors = [{
                              params : {}
                            }], false;
                          }
                        }
                        z = r === y;
                      } else {
                        z = true;
                      }
                      if (z) {
                        if (void 0 !== obj.shared) {
                          const r = y;
                          if (!D(obj.shared, {
                            instancePath : path + "/shared",
                            parentData : obj,
                            parentDataProperty : "shared",
                            rootData : i
                          })) {
                            results = null === results ? D.errors : results.concat(D.errors);
                            y = results.length;
                          }
                          z = r === y;
                        } else {
                          z = true;
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
  }
  return d.errors = results, 0 === y;
}
;
