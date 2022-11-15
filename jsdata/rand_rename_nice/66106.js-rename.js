'use strict';
const {
  hasOwnProperty : hasOwnProperty
} = Object.prototype;
const eol = typeof process !== "undefined" && process.platform === "win32" ? "\r\n" : "\n";
const encode = (value, opt) => {
  const keys = [];
  let out = "";
  if (typeof opt === "string") {
    opt = {
      section : opt,
      whitespace : false
    };
  } else {
    opt = opt || Object.create(null);
    opt.whitespace = opt.whitespace === true;
  }
  const separator = opt.whitespace ? " = " : "=";
  for (const k of Object.keys(value)) {
    const val = value[k];
    if (val && Array.isArray(val)) {
      for (const item of val) {
        out = out + (safe(k + "[]") + separator + safe(item) + "\n");
      }
    } else {
      if (val && typeof val === "object") {
        keys.push(k);
      } else {
        out = out + (safe(k) + separator + safe(val) + eol);
      }
    }
  }
  if (opt.section && out.length) {
    out = "[" + safe(opt.section) + "]" + eol + out;
  }
  for (const k of keys) {
    const hiraAndKana = dotSplit(k).join("\\.");
    const oilSections = (opt.section ? opt.section + "." : "") + hiraAndKana;
    const {
      whitespace : whitespace
    } = opt;
    const child = encode(value[k], {
      section : oilSections,
      whitespace : whitespace
    });
    if (out.length && child.length) {
      out = out + eol;
    }
    out = out + child;
  }
  return out;
};
const dotSplit = (str) => {
  return str.replace(/\1/g, "\u0002LITERAL\\1LITERAL\u0002").replace(/\\\./g, "\u0001").split(/\./).map((commaParam) => {
    return commaParam.replace(/\1/g, "\\.").replace(/\2LITERAL\\1LITERAL\2/g, "\u0001");
  });
};
const decode = (hashString) => {
  const values = Object.create(null);
  let obj = values;
  let name = null;
  const rDataName = /^\[([^\]]*)\]$|^([^=]+)(=(.*))?$/i;
  const buildIgnore = hashString.split(/[\r\n]+/g);
  for (const ignoredFile of buildIgnore) {
    if (!ignoredFile || ignoredFile.match(/^\s*[;#]/)) {
      continue;
    }
    const match = ignoredFile.match(rDataName);
    if (!match) {
      continue;
    }
    if (match[1] !== undefined) {
      name = unsafe(match[1]);
      if (name === "__proto__") {
        obj = Object.create(null);
        continue;
      }
      obj = values[name] = values[name] || Object.create(null);
      continue;
    }
    const args = unsafe(match[2]);
    const isdom = args.length > 2 && args.slice(-2) === "[]";
    const key = isdom ? args.slice(0, -2) : args;
    if (key === "__proto__") {
      continue;
    }
    const la = match[3] ? unsafe(match[4]) : true;
    const backup = la === "true" || la === "false" || la === "null" ? JSON.parse(la) : la;
    if (isdom) {
      if (!hasOwnProperty.call(obj, key)) {
        obj[key] = [];
      } else {
        if (!Array.isArray(obj[key])) {
          obj[key] = [obj[key]];
        }
      }
    }
    if (Array.isArray(obj[key])) {
      obj[key].push(backup);
    } else {
      obj[key] = backup;
    }
  }
  const coordsParsed = [];
  for (const k of Object.keys(values)) {
    if (!hasOwnProperty.call(values, k) || typeof values[k] !== "object" || Array.isArray(values[k])) {
      continue;
    }
    const anchors = dotSplit(k);
    let o = values;
    const sel = anchors.pop();
    const s = sel.replace(/\\\./g, ".");
    for (const a of anchors) {
      if (a === "__proto__") {
        continue;
      }
      if (!hasOwnProperty.call(o, a) || typeof o[a] !== "object") {
        o[a] = Object.create(null);
      }
      o = o[a];
    }
    if (o === values && s === sel) {
      continue;
    }
    o[s] = values[k];
    coordsParsed.push(k);
  }
  for (const _rg of coordsParsed) {
    delete values[_rg];
  }
  return values;
};
const isQuoted = (val) => {
  return val.charAt(0) === '"' && val.slice(-1) === '"' || val.charAt(0) === "'" && val.slice(-1) === "'";
};
const safe = (value) => {
  return typeof value !== "string" || value.match(/[=\r\n]/) || value.match(/^\[/) || value.length > 1 && isQuoted(value) || value !== value.trim() ? JSON.stringify(value) : value.replace(/;/g, "\\;").replace(/#/g, "\\#");
};
const unsafe = (val, doUnesc) => {
  val = (val || "").trim();
  if (isQuoted(val)) {
    if (val.charAt(0) === "'") {
      val = val.substr(1, val.length - 2);
    }
    try {
      val = JSON.parse(val);
    } catch (e) {
    }
  } else {
    let s = false;
    let out = "";
    for (let i = 0, l = val.length; i < l; i++) {
      const c = val.charAt(i);
      if (s) {
        if ("\\;#".indexOf(c) !== -1) {
          out = out + c;
        } else {
          out = out + ("\\" + c);
        }
        s = false;
      } else {
        if (";#".indexOf(c) !== -1) {
          break;
        } else {
          if (c === "\\") {
            s = true;
          } else {
            out = out + c;
          }
        }
      }
    }
    if (s) {
      out = out + "\\";
    }
    return out.trim();
  }
  return val;
};
module.exports = {
  parse : decode,
  decode : decode,
  stringify : encode,
  encode : encode,
  safe : safe,
  unsafe : unsafe
};

