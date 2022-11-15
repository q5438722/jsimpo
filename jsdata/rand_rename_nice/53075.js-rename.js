'use strict';
const isTerm = process.env.TERM_PROGRAM === "Apple_Terminal";
const colors = require("ansi-colors");
const utils = require("./utils");
const ansi = module.exports = exports;
const ESC = "\u001b[";
const BEL = "\u0007";
let hidden = false;
const code = ansi.code = {
  bell : BEL,
  beep : BEL,
  beginning : `${ESC}G`,
  down : `${ESC}J`,
  esc : ESC,
  getPosition : `${ESC}6n`,
  hide : `${ESC}?25l`,
  line : `${ESC}2K`,
  lineEnd : `${ESC}K`,
  lineStart : `${ESC}1K`,
  restorePosition : ESC + (isTerm ? "8" : "u"),
  savePosition : ESC + (isTerm ? "7" : "s"),
  screen : `${ESC}2J`,
  show : `${ESC}?25h`,
  up : `${ESC}1J`
};
const cursor = ansi.cursor = {
  get hidden() {
    return hidden;
  },
  hide() {
    hidden = true;
    return code.hide;
  },
  show() {
    hidden = false;
    return code.show;
  },
  forward : (stripeAPIVersion = 1) => {
    return `${ESC}${stripeAPIVersion}C`;
  },
  backward : (stripeAPIVersion = 1) => {
    return `${ESC}${stripeAPIVersion}D`;
  },
  nextLine : (maxSchedulerLen = 1) => {
    return `${ESC}E`.repeat(maxSchedulerLen);
  },
  prevLine : (maxSchedulerLen = 1) => {
    return `${ESC}F`.repeat(maxSchedulerLen);
  },
  up : (serverPath = 1) => {
    return serverPath ? `${ESC}${serverPath}A` : "";
  },
  down : (serverPath = 1) => {
    return serverPath ? `${ESC}${serverPath}B` : "";
  },
  right : (serverPath = 1) => {
    return serverPath ? `${ESC}${serverPath}C` : "";
  },
  left : (serverPath = 1) => {
    return serverPath ? `${ESC}${serverPath}D` : "";
  },
  to(handler, root) {
    return root ? `${ESC}${root + 1};${handler + 1}H` : `${ESC}${handler + 1}G`;
  },
  move(val = 0, y = 0) {
    let value = "";
    value = value + (val < 0 ? cursor.left(-val) : val > 0 ? cursor.right(val) : "");
    value = value + (y < 0 ? cursor.up(-y) : y > 0 ? cursor.down(y) : "");
    return value;
  },
  restore(state = {}) {
    let {
      after : id,
      cursor : index,
      initial : node,
      input : value,
      prompt : options,
      size : e,
      value : filename
    } = state;
    node = utils.isPrimitive(node) ? String(node) : "";
    value = utils.isPrimitive(value) ? String(value) : "";
    filename = utils.isPrimitive(filename) ? String(filename) : "";
    if (e) {
      let tpl = ansi.cursor.up(e) + ansi.cursor.to(options.length);
      let i = value.length - index;
      if (i > 0) {
        tpl = tpl + ansi.cursor.left(i);
      }
      return tpl;
    }
    if (filename || id) {
      let start = !value && !!node ? -node.length : -value.length + index;
      if (id) {
        start = start - id.length;
      }
      if (value === "" && node && !options.includes(node)) {
        start = start + node.length;
      }
      return ansi.cursor.move(start);
    }
  }
};
const erase = ansi.erase = {
  screen : code.screen,
  up : code.up,
  down : code.down,
  line : code.line,
  lineEnd : code.lineEnd,
  lineStart : code.lineStart,
  lines(lines) {
    let state = "";
    for (let i = 0; i < lines; i++) {
      state = state + (ansi.erase.line + (i < lines - 1 ? ansi.cursor.up(1) : ""));
    }
    if (lines) {
      state = state + ansi.code.beginning;
    }
    return state;
  }
};
ansi.clear = (queryStringParams = "", columns = process.stdout.columns) => {
  if (!columns) {
    return erase.line + cursor.to(0);
  }
  let error = (f) => {
    return [...colors.unstyle(f)].length;
  };
  let collectedUrls = queryStringParams.split(/\r?\n/);
  let indentation = 0;
  for (let e of collectedUrls) {
    indentation = indentation + (1 + Math.floor(Math.max(error(e) - 1, 0) / columns));
  }
  return (erase.line + cursor.prevLine()).repeat(indentation - 1) + erase.line + cursor.to(0);
};

