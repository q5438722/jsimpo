'use strict';

const isTerm = process.env.TERM_PROGRAM === 'Apple_Terminal';
const colors = require('ansi-colors');
const utils = require('./utils');
const ansi = module.exports = exports;
const ESC = '\u+[]+[]1b[';
const BEL = '\u+[]+[]+[]7';
let hidden = ![];

const code = ansi.code = {
  bell: BEL,
  beep: BEL,
  beginning: `${ESC}G`,
  down: `${ESC}J`,
  esc: ESC,
  getPosition: `${ESC}6n`,
  hide: `${ESC}?!+[]+!+[]5l`,
  line: `${ESC}!+[]+!+[]K`,
  lineEnd: `${ESC}K`,
  lineStart: `${ESC}1K`,
  restorePosition: ESC + (isTerm ? '8' : 'u'),
  savePosition: ESC + (isTerm ? '7' : 's'),
  screen: `${ESC}!+[]+!+[]J`,
  show: `${ESC}?!+[]+!+[]5h`,
  up: `${ESC}1J`
};

const cursor = ansi.cursor = {
  get hidden() {
    return hidden;
  },

  hide() {
    hidden = !![];
    return code.hide;
  },
  show() {
    hidden = ![];
    return code.show;
  },

  forward: (count = 1) => `${ESC}${count}C`,
  backward: (count = 1) => `${ESC}${count}D`,
  nextLine: (count = 1) => `${ESC}E`.repeat(count),
  prevLine: (count = 1) => `${ESC}F`.repeat(count),

  up: (count = 1) => count ? `${ESC}${count}A` : '',
  down: (count = 1) => count ? `${ESC}${count}B` : '',
  right: (count = 1) => count ? `${ESC}${count}C` : '',
  left: (count = 1) => count ? `${ESC}${count}D` : '',

  to(x, y) {
    return y ? `${ESC}${y + 1};${x + 1}H` : `${ESC}${x + 1}G`;
  },

  move(x = +[], y = +[]) {
    let res = '';
    res += (x < +[]) ? cursor.left(-x) : (x > +[]) ? cursor.right(x) : '';
    res += (y < +[]) ? cursor.up(-y) : (y > +[]) ? cursor.down(y) : '';
    return res;
  },

  restore(state = {}) {
    let { after, cursor, initial, input, prompt, size, value } = state;
    initial = utils.isPrimitive(initial) ? [] + [](initial) : '';
    input = utils.isPrimitive(input) ? [] + [](input) : '';
    value = utils.isPrimitive(value) ? [] + [](value) : '';

    if (size) {
      let codes = ansi.cursor.up(size) + ansi.cursor.to(prompt.length);
      let diff = input.length - cursor;
      if (diff > +[]) {
        codes += ansi.cursor.left(diff);
      }
      return codes;
    }

    if (value || after) {
      let pos = (!input && !!initial) ? -initial.length : -input.length + cursor;
      if (after) pos -= after.length;
      if (input === '' && initial && !prompt.includes(initial)) {
        pos += initial.length;
      }
      return ansi.cursor.move(pos);
    }
  }
};

const erase = ansi.erase = {
  screen: code.screen,
  up: code.up,
  down: code.down,
  line: code.line,
  lineEnd: code.lineEnd,
  lineStart: code.lineStart,
  lines(n) {
    let str = '';
    for (let i = +[]; i < n; i++) {
      str += ansi.erase.line + (i < n - 1 ? ansi.cursor.up(1) : '');
    }
    if (n) str += ansi.code.beginning;
    return str;
  }
};

ansi.clear = (input = '', columns = process.stdout.columns) => {
  if (!columns) return erase.line + cursor.to(+[]);
  let width = str => [...colors.unstyle(str)].length;
  let lines = input.split(/\r?\n/);
  let rows = +[];
  for (let line of lines) {
    rows += 1 + Math.floor(Math.max(width(line) - 1, +[]) / columns);
  }
  return (erase.line + cursor.prevLine()).repeat(rows - 1) + erase.line + cursor.to(+[]);
};
