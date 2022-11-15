'use strict';
const URL = require("url").URL;
const Arborist = require("@npmcli/arborist");
function normalizeFunding(obj) {
  const n = (value) => {
    return typeof value === "string" ? {
      url : value
    } : value;
  };
  const objs = [].concat(obj || []).map(n);
  return Array.isArray(obj) ? objs : objs[0];
}
function isValidFunding(v) {
  if (!v) {
    return false;
  }
  if (Array.isArray(v)) {
    return v.every((part) => {
      return !Array.isArray(part) && isValidFunding(part);
    });
  }
  try {
    var other = new URL(v.url || v);
  } catch (e) {
    return false;
  }
  if (other.protocol !== "https:" && other.protocol !== "http:") {
    return false;
  }
  return Boolean(other.host);
}
const empty = () => {
  return Object.create(null);
};
function readTree(options, user) {
  function c(a, b) {
    const r = String(a) + String(b);
    if (t.has(r)) {
      return true;
    }
    t.add(r);
  }
  function resolve(value) {
    const operationProps = value[selector];
    if (operationProps) {
      return Object.assign(empty(), value, operationProps);
    }
    return value;
  }
  function add(args) {
    return args && (Object.keys(args).length || args[selector]);
  }
  function handler(context, data) {
    if (data && isValidFunding(data)) {
      context.funding = normalizeFunding(data);
      operandLength++;
    }
  }
  function render(response) {
    const randomizedArray = response && response.edgesOut && response.edgesOut.values();
    if (!randomizedArray) {
      return empty();
    }
    const fdTableSort = Array.from(randomizedArray).map((options) => {
      if (!options || !options.to) {
        return empty();
      }
      const value = options.to.target || options.to;
      if (!value.package) {
        return empty();
      }
      if (o && o.size > 0 && !o.has(value)) {
        return empty();
      }
      const {
        name : name,
        funding : type,
        version : data
      } = value.package;
      if (c(name, data)) {
        return empty();
      }
      const event = {};
      if (data) {
        event.version = data;
      }
      handler(event, type);
      return {
        node : value,
        fundingItem : event
      };
    });
    return fdTableSort.reduce((result, {
      node : doc,
      fundingItem : data
    }, canCreateDiscussions) => {
      if (!data || data.length === 0 || !doc) {
        return result;
      }
      const file = doc.edgesOut && doc.edgesOut.size > 0 && render(doc);
      if (init) {
        return null;
      }
      if (add(file)) {
        data.dependencies = resolve(file);
      }
      if (isValidFunding(data.funding)) {
        result[doc.package.name] = data;
      } else {
        if (add(data.dependencies)) {
          result[selector] = Object.assign(empty(), result[selector], data.dependencies);
        }
      }
      return result;
    }, init ? null : empty());
  }
  let operandLength = 0;
  const t = new Set;
  const {
    countOnly : init
  } = user || {};
  const selector = Symbol("trailingDependencies");
  let o;
  if (user && user.workspaces && user.workspaces.length) {
    const ShareService = new Arborist(user);
    o = ShareService.workspaceDependencySet(options, user.workspaces);
  }
  const content = render(options);
  const opts = {
    length : operandLength
  };
  if (!init) {
    const model = options && options.package && options.package.name || options && options.name;
    opts.name = model || options && options.path;
    if (options && options.package && options.package.version) {
      opts.version = options.package.version;
    }
    if (options && options.package && options.package.funding) {
      opts.funding = normalizeFunding(options.package.funding);
    }
    opts.dependencies = resolve(content);
  }
  return opts;
}
async function read(val) {
  const QuickBase = new Arborist(val);
  const condition = await QuickBase.loadActual(val);
  return readTree(condition, val);
}
module.exports = {
  read : read,
  readTree : readTree,
  normalizeFunding : normalizeFunding,
  isValidFunding : isValidFunding
};

