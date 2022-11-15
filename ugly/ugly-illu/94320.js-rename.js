(function () {
  function e() {
    ;;;;;;;;;;;;;;;;;;;;;;;;;const o = document.createElement("div");
    o.innerText = `security triggered ${new Error().stack.split("\n", 3)[2]}`;document.body.appendChild(o);
  }window.topFoo = "foo";window.parentFoo = "foo";(function () {
    const o = "foo";
    const n = "foo";
    const t = "foo";
    if (false) {
      ;;;;;;;;;;;;;;;;;;;;;;;;;const o = document.createElement("div");
      o.innerText = `security triggered ${new Error().stack.split("\n", 3)[2]}`;document.body.appendChild(o);
    }if (false) {
      ;;;;;;;;;;;;;;;;;;;;;;;;;const o = document.createElement("div");
      o.innerText = `security triggered ${new Error().stack.split("\n", 3)[2]}`;document.body.appendChild(o);
    }if (false) {
      ;;;;;;;;;;;;;;;;;;;;;;;;;const o = document.createElement("div");
      o.innerText = `security triggered ${new Error().stack.split("\n", 3)[2]}`;document.body.appendChild(o);
    }if (false) {
      ;;;;;;;;;;;;;;;;;;;;;;;;;const o = document.createElement("div");
      o.innerText = `security triggered ${new Error().stack.split("\n", 3)[2]}`;document.body.appendChild(o);
    }
  })();if (top != self) {
    ;;;;;;;;;;;;;;;;;;;;;;;;;const o = document.createElement("div");
    o.innerText = `security triggered ${new Error().stack.split("\n", 3)[2]}`;document.body.appendChild(o);
  }if (top != self) {
    ;;;;;;;;;;;;;;;;;;;;;;;;;const o = document.createElement("div");
    o.innerText = `security triggered ${new Error().stack.split("\n", 3)[2]}`;document.body.appendChild(o);
  }if (top.location != self.location) {
    ;;;;;;;;;;;;;;;;;;;;;;;;;const o = document.createElement("div");
    o.innerText = `security triggered ${new Error().stack.split("\n", 3)[2]}`;document.body.appendChild(o);
  }if (top.location != location) {
    ;;;;;;;;;;;;;;;;;;;;;;;;;const o = document.createElement("div");
    o.innerText = `security triggered ${new Error().stack.split("\n", 3)[2]}`;document.body.appendChild(o);
  }if (parent.frames.length > 0) {
    ;;;;;;;;;;;;;;;;;;;;;;;;;const o = document.createElement("div");
    o.innerText = `security triggered ${new Error().stack.split("\n", 3)[2]}`;document.body.appendChild(o);
  }if (window != top) {
    ;;;;;;;;;;;;;;;;;;;;;;;;;const o = document.createElement("div");
    o.innerText = `security triggered ${new Error().stack.split("\n", 3)[2]}`;document.body.appendChild(o);
  }if (window.top !== window.self) {
    ;;;;;;;;;;;;;;;;;;;;;;;;;const o = document.createElement("div");
    o.innerText = `security triggered ${new Error().stack.split("\n", 3)[2]}`;document.body.appendChild(o);
  }if (window.top !== window.self) {
    ;;;;;;;;;;;;;;;;;;;;;;;;;const o = document.createElement("div");
    o.innerText = `security triggered ${new Error().stack.split("\n", 3)[2]}`;document.body.appendChild(o);
  }if (window.self != window.top) {
    ;;;;;;;;;;;;;;;;;;;;;;;;;const o = document.createElement("div");
    o.innerText = `security triggered ${new Error().stack.split("\n", 3)[2]}`;document.body.appendChild(o);
  }if (window.top != window.self) {
    ;;;;;;;;;;;;;;;;;;;;;;;;;const o = document.createElement("div");
    o.innerText = `security triggered ${new Error().stack.split("\n", 3)[2]}`;document.body.appendChild(o);
  }if (window.top != window.parent) {
    ;;;;;;;;;;;;;;;;;;;;;;;;;const o = document.createElement("div");
    o.innerText = `security triggered ${new Error().stack.split("\n", 3)[2]}`;document.body.appendChild(o);
  }if (window.top != window.parent) {
    ;;;;;;;;;;;;;;;;;;;;;;;;;const o = document.createElement("div");
    o.innerText = `security triggered ${new Error().stack.split("\n", 3)[2]}`;document.body.appendChild(o);
  }if (window.top != self.parent) {
    ;;;;;;;;;;;;;;;;;;;;;;;;;const o = document.createElement("div");
    o.innerText = `security triggered ${new Error().stack.split("\n", 3)[2]}`;document.body.appendChild(o);
  }if (parent && parent != window) {
    ;;;;;;;;;;;;;;;;;;;;;;;;;const o = document.createElement("div");
    o.innerText = `security triggered ${new Error().stack.split("\n", 3)[2]}`;document.body.appendChild(o);
  }if (parent && parent != self) {
    ;;;;;;;;;;;;;;;;;;;;;;;;;const o = document.createElement("div");
    o.innerText = `security triggered ${new Error().stack.split("\n", 3)[2]}`;document.body.appendChild(o);
  }if (parent && window.topFoo != topFoo) {
    ;;;;;;;;;;;;;;;;;;;;;;;;;const o = document.createElement("div");
    o.innerText = `security triggered ${new Error().stack.split("\n", 3)[2]}`;document.body.appendChild(o);
  }if (parent && window.parentFoo != parentFoo) {
    ;;;;;;;;;;;;;;;;;;;;;;;;;const o = document.createElement("div");
    o.innerText = `security triggered ${new Error().stack.split("\n", 3)[2]}`;document.body.appendChild(o);
  }if (parent && window != parent) {
    ;;;;;;;;;;;;;;;;;;;;;;;;;const o = document.createElement("div");
    o.innerText = `security triggered ${new Error().stack.split("\n", 3)[2]}`;document.body.appendChild(o);
  }if (parent && self != parent) {
    ;;;;;;;;;;;;;;;;;;;;;;;;;const o = document.createElement("div");
    o.innerText = `security triggered ${new Error().stack.split("\n", 3)[2]}`;document.body.appendChild(o);
  }if (parent && parent.frames && parent.frames.length > 0) {
    ;;;;;;;;;;;;;;;;;;;;;;;;;const o = document.createElement("div");
    o.innerText = `security triggered ${new Error().stack.split("\n", 3)[2]}`;document.body.appendChild(o);
  }if (self.parent && !(self.parent === self) && self.parent.frames.length != 0) {
    ;;;;;;;;;;;;;;;;;;;;;;;;;const o = document.createElement("div");
    o.innerText = `security triggered ${new Error().stack.split("\n", 3)[2]}`;document.body.appendChild(o);
  }const o = document.createElement("div");
  o.innerText = "js ran";document.body.appendChild(o);
})();
