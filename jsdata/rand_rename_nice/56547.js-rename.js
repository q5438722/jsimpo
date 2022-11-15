'use strict';
require("../common");
const assert = require("assert");
const util = require("util");
function findInGraph(n, type, graph) {
  let proto = 0;
  for (let i = 0; i < n.length; i++) {
    const node = n[i];
    if (node.type === type) {
      proto++;
    }
    if (proto === graph) {
      return node;
    }
  }
}
function pruneTickObjects(data) {
  const self = {
    found : true,
    index : null,
    data : null
  };
  if (!Array.isArray(data)) {
    return data;
  }
  for (; self.found;) {
    for (let i = 0; i < data.length; i++) {
      if (data[i].type === "TickObject") {
        self.index = i;
        break;
      } else {
        if (i + 1 >= data.length) {
          self.found = false;
        }
      }
    }
    if (self.found) {
      self.data = data[self.index];
      const item = {
        new : self.data.triggerAsyncId,
        old : self.data.uid
      };
      data.forEach(function toString(data) {
        if (data.triggerAsyncId === item.old) {
          data.triggerAsyncId = item.new;
        }
      });
      data.splice(self.index, 1);
    }
  }
  return data;
}
module.exports = function verifyGraph(hooks, graph) {
  function processActivity(x) {
    if (!item[x.type]) {
      item[x.type] = 0;
    }
    item[x.type]++;
    const node = findInGraph(graph, x.type, item[x.type]);
    if (node == null) {
      return;
    }
    idtouid[node.id] = x.uid;
    uidtoid[x.uid] = node.id;
    if (node.triggerAsyncId == null) {
      return;
    }
    const map_values_index = idtouid[node.triggerAsyncId];
    if (x.triggerAsyncId === map_values_index) {
      return;
    }
    errors.push({
      id : node.id,
      expectedTid : node.triggerAsyncId,
      actualTid : uidtoid[x.triggerAsyncId]
    });
  }
  pruneTickObjects(hooks);
  const idtouid = {};
  const uidtoid = {};
  const item = {};
  const errors = [];
  const activities = pruneTickObjects(hooks.activities);
  activities.forEach(processActivity);
  if (errors.length) {
    errors.forEach((x) => {
      return console.error(`'${x.id}' expected to be triggered by '${x.expectedTid}', ` + `but was triggered by '${x.actualTid}' instead.`);
    });
  }
  assert.strictEqual(errors.length, 0);
  const viewport = Object.create(null);
  for (let i = 0; i < graph.length; i++) {
    if (viewport[graph[i].type] == null) {
      viewport[graph[i].type] = 0;
    }
    viewport[graph[i].type]++;
  }
  for (const property in viewport) {
    assert.ok(item[property] >= viewport[property], `Type '${property}': expecting: ${viewport[property]} ` + `found: ${item[property]}`);
  }
};
function inspect(obj, depth) {
  console.error(util.inspect(obj, false, depth || 5, true));
}
module.exports.printGraph = function printGraph(hooks) {
  function procesNode(x) {
    const i = x.type.replace(/WRAP/, "").toLowerCase();
    if (!progt[i]) {
      progt[i] = 1;
    }
    const Shapefile = `${i}:${progt[i]++}`;
    window[x.uid] = Shapefile;
    const e = window[x.triggerAsyncId] || null;
    item.push({
      type : x.type,
      id : Shapefile,
      triggerAsyncId : e
    });
  }
  const progt = {};
  const window = {};
  const activities = pruneTickObjects(hooks.activities);
  const item = [];
  activities.forEach(procesNode);
  inspect(item);
};

