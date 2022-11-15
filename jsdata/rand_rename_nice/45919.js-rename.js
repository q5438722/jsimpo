'use strict';
import{
  MILLISECONDS_A_DAY as MILLISECONDS_A_DAY,
  MILLISECONDS_A_HOUR as MILLISECONDS_A_HOUR,
  MILLISECONDS_A_MINUTE as MILLISECONDS_A_MINUTE,
  MILLISECONDS_A_SECOND as MILLISECONDS_A_SECOND,
  MILLISECONDS_A_WEEK as MILLISECONDS_A_WEEK,
  REGEX_FORMAT as REGEX_FORMAT
}from "../../constant";
const one_minute = MILLISECONDS_A_DAY * 365;
const one_hour = MILLISECONDS_A_DAY * 30;
const marker_ul_re = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
const data = {
  years : one_minute,
  months : one_hour,
  days : MILLISECONDS_A_DAY,
  hours : MILLISECONDS_A_HOUR,
  minutes : MILLISECONDS_A_MINUTE,
  seconds : MILLISECONDS_A_SECOND,
  milliseconds : 1,
  weeks : MILLISECONDS_A_WEEK
};
const equals = (opt_equalsFn) => {
  return opt_equalsFn instanceof Seraph;
};
let normalize;
let formatters;
const create = (opts, global, url) => {
  return new Seraph(opts, url, global.$l);
};
const callback = (value) => {
  return `${formatters.p(value)}s`;
};
const isFinite = (i) => {
  return i < 0;
};
const d3_time_range = (number) => {
  return isFinite(number) ? Math.ceil(number) : Math.floor(number);
};
const norm = (val) => {
  return Math.abs(val);
};
const append = (value, tag) => {
  if (!value) {
    return {
      negative : false,
      format : ""
    };
  }
  if (isFinite(value)) {
    return {
      negative : true,
      format : `${norm(value)}${tag}`
    };
  }
  return {
    negative : false,
    format : `${value}${tag}`
  };
};
class Seraph {
  constructor(type, prop, obj) {
    this.$d = {};
    this.$l = obj;
    if (type === undefined) {
      this.$ms = 0;
      this.parseFromMilliseconds();
    }
    if (prop) {
      return create(type * data[callback(prop)], this);
    }
    if (typeof type === "number") {
      this.$ms = type;
      this.parseFromMilliseconds();
      return this;
    }
    if (typeof type === "object") {
      Object.keys(type).forEach((capture) => {
        this.$d[callback(capture)] = type[capture];
      });
      this.calMilliseconds();
      return this;
    }
    if (typeof type === "string") {
      const charListNotLatin = type.match(marker_ul_re);
      if (charListNotLatin) {
        const navLinksArr = charListNotLatin.slice(2);
        const n = navLinksArr.map((minWorkers) => {
          return Number(minWorkers);
        });
        [this.$d.years, this.$d.months, this.$d.weeks, this.$d.days, this.$d.hours, this.$d.minutes, this.$d.seconds] = n;
        this.calMilliseconds();
        return this;
      }
    }
    return this;
  }
  calMilliseconds() {
    this.$ms = Object.keys(this.$d).reduce((canCreateDiscussions, unbracketed) => {
      return canCreateDiscussions + (this.$d[unbracketed] || 0) * data[unbracketed];
    }, 0);
  }
  parseFromMilliseconds() {
    let {
      $ms : milliSecondsRemaining
    } = this;
    this.$d.years = d3_time_range(milliSecondsRemaining / one_minute);
    milliSecondsRemaining = milliSecondsRemaining % one_minute;
    this.$d.months = d3_time_range(milliSecondsRemaining / one_hour);
    milliSecondsRemaining = milliSecondsRemaining % one_hour;
    this.$d.days = d3_time_range(milliSecondsRemaining / MILLISECONDS_A_DAY);
    milliSecondsRemaining = milliSecondsRemaining % MILLISECONDS_A_DAY;
    this.$d.hours = d3_time_range(milliSecondsRemaining / MILLISECONDS_A_HOUR);
    milliSecondsRemaining = milliSecondsRemaining % MILLISECONDS_A_HOUR;
    this.$d.minutes = d3_time_range(milliSecondsRemaining / MILLISECONDS_A_MINUTE);
    milliSecondsRemaining = milliSecondsRemaining % MILLISECONDS_A_MINUTE;
    this.$d.seconds = d3_time_range(milliSecondsRemaining / MILLISECONDS_A_SECOND);
    milliSecondsRemaining = milliSecondsRemaining % MILLISECONDS_A_SECOND;
    this.$d.milliseconds = milliSecondsRemaining;
  }
  toISOString() {
    const test = append(this.$d.years, "Y");
    const node = append(this.$d.months, "M");
    let vCardsString = +this.$d.days || 0;
    if (this.$d.weeks) {
      vCardsString = vCardsString + this.$d.weeks * 7;
    }
    const schema = append(vCardsString, "D");
    const opts = append(this.$d.hours, "H");
    const config = append(this.$d.minutes, "M");
    let letters = this.$d.seconds || 0;
    if (this.$d.milliseconds) {
      letters = letters + this.$d.milliseconds / 1e3;
    }
    const locale = append(letters, "S");
    const allowUnderscores = test.negative || node.negative || schema.negative || opts.negative || config.negative || locale.negative;
    const surrounder = opts.format || config.format || locale.format ? "T" : "";
    const TRAVIS_API_JOBS_URL = allowUnderscores ? "-" : "";
    const arg = `${TRAVIS_API_JOBS_URL}P${test.format}${node.format}${schema.format}${surrounder}${opts.format}${config.format}${locale.format}`;
    return arg === "P" || arg === "-P" ? "P0D" : arg;
  }
  toJSON() {
    return this.toISOString();
  }
  format(results) {
    const originalBaseURL = results || "YYYY-MM-DDTHH:mm:ss";
    const keyboardKey = {
      Y : this.$d.years,
      YY : formatters.s(this.$d.years, 2, "0"),
      YYYY : formatters.s(this.$d.years, 4, "0"),
      M : this.$d.months,
      MM : formatters.s(this.$d.months, 2, "0"),
      D : this.$d.days,
      DD : formatters.s(this.$d.days, 2, "0"),
      H : this.$d.hours,
      HH : formatters.s(this.$d.hours, 2, "0"),
      m : this.$d.minutes,
      mm : formatters.s(this.$d.minutes, 2, "0"),
      s : this.$d.seconds,
      ss : formatters.s(this.$d.seconds, 2, "0"),
      SSS : formatters.s(this.$d.milliseconds, 3, "0")
    };
    return originalBaseURL.replace(REGEX_FORMAT, (name, data) => {
      return data || String(keyboardKey[name]);
    });
  }
  as(type) {
    return this.$ms / data[callback(type)];
  }
  get(query) {
    let value = this.$ms;
    const unit = callback(query);
    if (unit === "milliseconds") {
      value = value % 1e3;
    } else {
      if (unit === "weeks") {
        value = d3_time_range(value / data[unit]);
      } else {
        value = this.$d[unit];
      }
    }
    return value === 0 ? 0 : value;
  }
  add(b, type, fn) {
    let d;
    if (type) {
      d = b * data[callback(type)];
    } else {
      if (equals(b)) {
        d = b.$ms;
      } else {
        d = create(b, this).$ms;
      }
    }
    return create(this.$ms + d * (fn ? -1 : 1), this);
  }
  subtract(i, value) {
    return this.add(i, value, true);
  }
  locale(key) {
    const current = this.clone();
    current.$l = key;
    return current;
  }
  clone() {
    return create(this.$ms, this);
  }
  humanize(value) {
    return normalize().add(this.$ms, "ms").locale(this.$l).fromNow(!value);
  }
  milliseconds() {
    return this.get("milliseconds");
  }
  asMilliseconds() {
    return this.as("milliseconds");
  }
  seconds() {
    return this.get("seconds");
  }
  asSeconds() {
    return this.as("seconds");
  }
  minutes() {
    return this.get("minutes");
  }
  asMinutes() {
    return this.as("minutes");
  }
  hours() {
    return this.get("hours");
  }
  asHours() {
    return this.as("hours");
  }
  days() {
    return this.get("days");
  }
  asDays() {
    return this.as("days");
  }
  weeks() {
    return this.get("weeks");
  }
  asWeeks() {
    return this.as("weeks");
  }
  months() {
    return this.get("months");
  }
  asMonths() {
    return this.as("months");
  }
  years() {
    return this.get("years");
  }
  asYears() {
    return this.as("years");
  }
}
export default(canCreateDiscussions, a, options) => {
  normalize = options;
  formatters = options().$utils();
  options.duration = function(value, text) {
    const currentLeft = options.locale();
    return create(value, {
      $l : currentLeft
    }, text);
  };
  options.isDuration = equals;
  const Slatebox = a.prototype.add;
  const _fUpdate = a.prototype.subtract;
  a.prototype.add = function(d, t) {
    if (equals(d)) {
      d = d.asMilliseconds();
    }
    return Slatebox.bind(this)(d, t);
  };
  a.prototype.subtract = function(d, transform) {
    if (equals(d)) {
      d = d.asMilliseconds();
    }
    return _fUpdate.bind(this)(d, transform);
  };
}
;
