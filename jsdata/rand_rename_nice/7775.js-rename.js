'use strict';
var ENV = ENV || function() {
  function formatElapsed(value) {
    var str = parseFloat(value).toFixed(2);
    if (value > 60) {
      minutes = Math.floor(value / 60);
      comps = (value % 60).toFixed(2).split(".");
      seconds = comps[0].lpad("0", 2);
      ms = comps[1];
      str = minutes + ":" + seconds + "." + ms;
    }
    return str;
  }
  function getElapsedClassName(elapsed) {
    var className = "Query elapsed";
    if (elapsed >= 10) {
      className = className + " warn_long";
    } else {
      if (elapsed >= 1) {
        className = className + " warn";
      } else {
        className = className + " short";
      }
    }
    return className;
  }
  function countClassName(queries) {
    var countClassName = "label";
    if (queries >= 20) {
      countClassName = countClassName + " label-important";
    } else {
      if (queries >= 10) {
        countClassName = countClassName + " label-warning";
      } else {
        countClassName = countClassName + " label-success";
      }
    }
    return countClassName;
  }
  function updateQuery(object) {
    if (!object) {
      object = {};
    }
    var elapsed = Math.random() * 15;
    object.elapsed = elapsed;
    object.formatElapsed = formatElapsed(elapsed);
    object.elapsedClassName = getElapsedClassName(elapsed);
    object.query = "SELECT blah FROM something";
    object.waiting = Math.random() < .5;
    if (Math.random() < .2) {
      object.query = "<IDLE> in transaction";
    }
    if (Math.random() < .1) {
      object.query = "vacuum";
    }
    return object;
  }
  function cleanQuery(value) {
    if (value) {
      value.formatElapsed = "";
      value.elapsedClassName = "";
      value.query = "";
      value.elapsed = null;
      value.waiting = null;
    } else {
      return {
        query : "***",
        formatElapsed : "",
        elapsedClassName : ""
      };
    }
  }
  function generateRow(object, keepIdentity, counter) {
    var nbQueries = Math.floor(Math.random() * 10 + 1);
    if (!object) {
      object = {};
    }
    object.lastMutationId = counter;
    object.nbQueries = nbQueries;
    if (!object.lastSample) {
      object.lastSample = {};
    }
    if (!object.lastSample.topFiveQueries) {
      object.lastSample.topFiveQueries = [];
    }
    if (keepIdentity) {
      if (!object.lastSample.queries) {
        object.lastSample.queries = [];
        var l = 0;
        for (; l < 12; l++) {
          object.lastSample.queries[l] = cleanQuery();
        }
      }
      var i;
      for (i in object.lastSample.queries) {
        var value = object.lastSample.queries[i];
        if (i <= nbQueries) {
          updateQuery(value);
        } else {
          cleanQuery(value);
        }
      }
    } else {
      object.lastSample.queries = [];
      i = 0;
      for (; i < 12; i++) {
        if (i < nbQueries) {
          value = updateQuery(cleanQuery());
          object.lastSample.queries.push(value);
        } else {
          object.lastSample.queries.push(cleanQuery());
        }
      }
    }
    var i = 0;
    for (; i < 5; i++) {
      var _credential = object.lastSample.queries[i];
      object.lastSample.topFiveQueries[i] = _credential;
    }
    object.lastSample.nbQueries = nbQueries;
    object.lastSample.countClassName = countClassName(nbQueries);
    return object;
  }
  function getData(keepIdentity) {
    var oldData = data;
    if (!keepIdentity) {
      data = [];
      var i = 1;
      for (; i <= ENV.rows; i++) {
        data.push({
          dbname : "cluster" + i,
          query : "",
          formatElapsed : "",
          elapsedClassName : ""
        });
        data.push({
          dbname : "cluster" + i + " slave",
          query : "",
          formatElapsed : "",
          elapsedClassName : ""
        });
      }
    }
    if (!data) {
      data = [];
      i = 1;
      for (; i <= ENV.rows; i++) {
        data.push({
          dbname : "cluster" + i
        });
        data.push({
          dbname : "cluster" + i + " slave"
        });
      }
      oldData = data;
    }
    for (i in data) {
      var row = data[i];
      if (!keepIdentity && oldData && oldData[i]) {
        row.lastSample = oldData[i].lastSample;
      }
      if (!row.lastSample || Math.random() < ENV.mutations()) {
        counter = counter + 1;
        if (!keepIdentity) {
          row.lastSample = null;
        }
        generateRow(row, keepIdentity, counter);
      } else {
        data[i] = oldData[i];
      }
    }
    s = false;
    return {
      toArray : function() {
        return data;
      }
    };
  }
  function mutations(value) {
    if (value) {
      mutationsValue = value;
      return mutationsValue;
    } else {
      return mutationsValue;
    }
  }
  var s = true;
  var counter = 0;
  var data;
  var _base;
  if (!(_base = String.prototype).lpad) {
    _base.lpad = function(padding, toLength) {
      return padding.repeat((toLength - this.length) / padding.length).concat(this);
    };
  }
  var mutationsValue = .5;
  var d = document.querySelector("body");
  var c = d.firstChild;
  var v = document.createElement("div");
  v.style.cssText = "display: flex";
  var h = document.createElement("input");
  var text = document.createElement("label");
  text.innerHTML = "mutations : " + (mutationsValue * 100).toFixed(0) + "%";
  text.id = "ratioval";
  h.setAttribute("type", "range");
  h.style.cssText = "margin-bottom: 10px; margin-top: 5px";
  h.addEventListener("change", function(e) {
    ENV.mutations(e.target.value / 100);
    document.querySelector("#ratioval").innerHTML = "mutations : " + (ENV.mutations() * 100).toFixed(0) + "%";
  });
  v.appendChild(text);
  v.appendChild(h);
  d.insertBefore(v, c);
  return {
    generateData : getData,
    rows : 50,
    timeout : 0,
    mutations : mutations
  };
}();

