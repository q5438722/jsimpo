'use strict';
const avoidSet = new Set(["and", "break", "continue", "do", "downto", "else", "elseif", "end", "endfor", "endfunc", "endif", "endwhile", "eq", "exit", "for", "foreach", "func", "ge", "gt", "if", "in", "infinity", "le", "lt", "nan", "ne", "not", "null", "or", "return", "step", "then", "this", "throw", "upto", "var", "while"]);
const options = {
  and : 0,
  divide : 1,
  dot : 2,
  dotDot : 3,
  dotHash : 4,
  dotStar : 5,
  eq : 6,
  ge : 7,
  gt : 8,
  le : 9,
  leftBracket : 10,
  leftParen : 11,
  lt : 12,
  minus : 13,
  ne : 14,
  not : 15,
  null : 16,
  number : 17,
  or : 18,
  plus : 19,
  rightBracket : 20,
  rightParen : 21,
  string : 22,
  this : 23,
  times : 24,
  identifier : 25,
  break : 26,
  continue : 27,
  do : 28,
  for : 29,
  foreach : 30,
  func : 31,
  if : 32,
  var : 33,
  while : 34,
  assign : 35,
  comma : 36,
  downto : 37,
  else : 38,
  elseif : 39,
  end : 40,
  endif : 41,
  endfor : 42,
  endfunc : 43,
  endwhile : 44,
  eof : 45,
  exit : 46,
  in : 47,
  infinity : 48,
  nan : 49,
  return : 50,
  step : 51,
  then : 52,
  throw : 53,
  upto : 54
};
const rDataName = /^[uU]([0-9a-fA-F]{4,8})/;
const REGEXP_CHECK = /^[0-9]*(?:\.[0-9]*)?(?:[Ee][+-]?[0-9]+)?/;
const REGEXP_OPR = /^[0-9]*(?:[Ee][+-]?[0-9]+)?/;
const findFolderName = /[\r\n]+/;
const re_pba_css = new RegExp("^[\\p{L}_$!][\\p{L}\\p{N}_$]*", "u");
class Token {
  constructor(value, last_value = null) {
    this.id = value;
    this.value = last_value;
  }
}
const self = function() {
  const ild = Object.create(null);
  const e = new Set(["identifier", "string", "number", "nan", "infinity"]);
  for (const [token, handlerKey] of Object.entries(options)) {
    if (!e.has(token)) {
      ild[token] = new Token(handlerKey);
    }
  }
  ild.nan = new Token(options.number, NaN);
  ild.infinity = new Token(options.number, Infinity);
  return ild;
}();
class Lexer {
  constructor(options) {
    this.data = options;
    this.pos = 0;
    this.len = options.length;
    this.strBuf = [];
  }
  skipUntilEOL() {
    const define_match = this.data.slice(this.pos).match(findFolderName);
    if (define_match) {
      this.pos += define_match.index + define_match[0].length;
    } else {
      this.pos = this.len;
    }
  }
  getIdentifier() {
    this.pos--;
    const sortedValueArrays = this.data.slice(this.pos).match(re_pba_css);
    if (!sortedValueArrays) {
      throw new Error(`Invalid token in FormCalc expression at position ${this.pos}.`);
    }
    const match = this.data.slice(this.pos, this.pos + sortedValueArrays[0].length);
    this.pos += sortedValueArrays[0].length;
    const name = match.toLowerCase();
    if (!avoidSet.has(name)) {
      return new Token(options.identifier, match);
    }
    return self[name];
  }
  getString() {
    const result = this.strBuf;
    const text = this.data;
    let start = this.pos;
    for (; this.pos < this.len;) {
      const r = text.charCodeAt(this.pos++);
      if (r === 34) {
        if (text.charCodeAt(this.pos) === 34) {
          result.push(text.slice(start, this.pos++));
          start = this.pos;
          continue;
        }
        break;
      }
      if (r === 92) {
        const o = text.substring(this.pos, this.pos + 10).match(rDataName);
        if (!o) {
          continue;
        }
        result.push(text.slice(start, this.pos - 1));
        const esc = o[1];
        if (esc.length === 4) {
          result.push(String.fromCharCode(parseInt(esc, 16)));
          start = this.pos += 5;
        } else {
          if (esc.length !== 8) {
            result.push(String.fromCharCode(parseInt(esc.slice(0, 4), 16)));
            start = this.pos += 5;
          } else {
            result.push(String.fromCharCode(parseInt(esc, 16)));
            start = this.pos += 9;
          }
        }
      }
    }
    const value = text.slice(start, this.pos - 1);
    if (result.length === 0) {
      return new Token(options.string, value);
    }
    result.push(value);
    const startOffset = result.join("");
    result.length = 0;
    return new Token(options.string, startOffset);
  }
  getNumber(options) {
    const sortedValueArrays = this.data.substring(this.pos).match(REGEXP_CHECK);
    if (!sortedValueArrays) {
      return options - 48;
    }
    const startOffset = parseFloat(this.data.substring(this.pos - 1, this.pos + sortedValueArrays[0].length));
    this.pos += sortedValueArrays[0].length;
    return new Token(options.number, startOffset);
  }
  getCompOperator(type, src) {
    if (this.data.charCodeAt(this.pos) === 61) {
      this.pos++;
      return type;
    }
    return src;
  }
  getLower() {
    const t = this.data.charCodeAt(this.pos);
    if (t === 61) {
      this.pos++;
      return self.le;
    }
    if (t === 62) {
      this.pos++;
      return self.ne;
    }
    return self.lt;
  }
  getSlash() {
    if (this.data.charCodeAt(this.pos) === 47) {
      this.skipUntilEOL();
      return false;
    }
    return true;
  }
  getDot() {
    const t = this.data.charCodeAt(this.pos);
    if (t === 46) {
      this.pos++;
      return self.dotDot;
    }
    if (t === 42) {
      this.pos++;
      return self.dotStar;
    }
    if (t === 35) {
      this.pos++;
      return self.dotHash;
    }
    if (48 <= t && t <= 57) {
      this.pos++;
      const sortedValueArrays = this.data.substring(this.pos).match(REGEXP_OPR);
      if (!sortedValueArrays) {
        return new Token(options.number, (t - 48) / 10);
      }
      const end = this.pos + sortedValueArrays[0].length;
      const startOffset = parseFloat(this.data.substring(this.pos - 2, end));
      this.pos = end;
      return new Token(options.number, startOffset);
    }
    return self.dot;
  }
  next() {
    for (; this.pos < this.len;) {
      const maxConfirms = this.data.charCodeAt(this.pos++);
      switch(maxConfirms) {
        case 9:
        case 10:
        case 11:
        case 12:
        case 13:
        case 32:
          break;
        case 34:
          return this.getString();
        case 38:
          return self.and;
        case 40:
          return self.leftParen;
        case 41:
          return self.rightParen;
        case 42:
          return self.times;
        case 43:
          return self.plus;
        case 44:
          return self.comma;
        case 45:
          return self.minus;
        case 46:
          return this.getDot();
        case 47:
          if (this.getSlash()) {
            return self.divide;
          }
          break;
        case 48:
        case 49:
        case 50:
        case 51:
        case 52:
        case 53:
        case 54:
        case 55:
        case 56:
        case 57:
          return this.getNumber(maxConfirms);
        case 59:
          this.skipUntilEOL();
          break;
        case 60:
          return this.getLower();
        case 61:
          return this.getCompOperator(self.eq, self.assign);
        case 62:
          return this.getCompOperator(self.ge, self.gt);
        case 91:
          return self.leftBracket;
        case 93:
          return self.rightBracket;
        case 124:
          return self.or;
        default:
          return this.getIdentifier();
      }
    }
    return self.eof;
  }
}
export{
  Lexer as Lexer,
  Token as Token,
  options as TOKEN
};

