'use strict';
import MockDate from "mockdate";
import moment from "moment";
import dayjs from "../../src";
import "../../src/locale/fr";
import "../../src/locale/ru";
import "../../src/locale/zh-cn";
import localeData from "../../src/plugin/localeData";
import localizedFormat from "../../src/plugin/localizedFormat";
dayjs.extend(localizedFormat);
dayjs.extend(localeData);
beforeEach(() => {
  MockDate.set(new Date);
});
afterEach(() => {
  MockDate.reset();
});
describe("Instance localeData", () => {
  ["zh-cn", "en", "fr"].forEach((key) => {
    it(`Locale: ${key}`, () => {
      dayjs.locale(key);
      moment.locale(key);
      const date = dayjs();
      const start = moment();
      const prototype__proto = dayjs().localeData();
      const proto$1 = moment().localeData();
      expect(prototype__proto.firstDayOfWeek()).toBe(proto$1.firstDayOfWeek());
      expect(prototype__proto.months(date)).toBe(proto$1.months(start));
      expect(prototype__proto.months()).toEqual(proto$1.months());
      expect(prototype__proto.monthsShort(date)).toBe(proto$1.monthsShort(start));
      expect(prototype__proto.monthsShort()).toEqual(proto$1.monthsShort());
      expect(prototype__proto.weekdays(date)).toBe(proto$1.weekdays(start));
      expect(prototype__proto.weekdays()).toEqual(proto$1.weekdays());
      expect(prototype__proto.weekdaysMin(date)).toBe(proto$1.weekdaysMin(start));
      expect(prototype__proto.weekdaysMin()).toEqual(proto$1.weekdaysMin());
      expect(prototype__proto.weekdaysShort(date)).toBe(proto$1.weekdaysShort(start));
      expect(prototype__proto.weekdaysShort()).toEqual(proto$1.weekdaysShort());
      const pipelets = ["LT", "LTS", "L", "LL", "LLL", "LLLL", "l", "ll", "lll", "llll"];
      pipelets.forEach((input) => {
        expect(prototype__proto.longDateFormat(input)).toEqual(proto$1.longDateFormat(input));
      });
    });
  });
  dayjs.locale("en");
  moment.locale("en");
});
it("Global localeData", () => {
  ["zh-cn", "en", "fr"].forEach((key) => {
    dayjs.locale(key);
    moment.locale(key);
    const prototype__proto = dayjs.localeData();
    const proto$1 = moment.localeData();
    expect(prototype__proto.firstDayOfWeek()).toBe(proto$1.firstDayOfWeek());
    expect(prototype__proto.months()).toEqual(proto$1.months());
    expect(prototype__proto.monthsShort()).toEqual(proto$1.monthsShort());
    expect(prototype__proto.weekdays()).toEqual(proto$1.weekdays());
    expect(prototype__proto.weekdaysShort()).toEqual(proto$1.weekdaysShort());
    expect(prototype__proto.weekdaysMin()).toEqual(proto$1.weekdaysMin());
    const pipelets = ["LT", "LTS", "L", "LL", "LLL", "LLLL", "l", "ll", "lll", "llll"];
    pipelets.forEach((input) => {
      expect(prototype__proto.longDateFormat(input)).toEqual(proto$1.longDateFormat(input));
    });
  });
});
it("Listing the months and weekdays", () => {
  ["zh-cn", "en", "fr"].forEach((key) => {
    dayjs.locale(key);
    moment.locale(key);
    expect(dayjs.months()).toEqual(moment.months());
    expect(dayjs.monthsShort()).toEqual(moment.monthsShort());
    expect(dayjs.weekdays()).toEqual(moment.weekdays());
    expect(dayjs.weekdaysShort()).toEqual(moment.weekdaysShort());
    expect(dayjs.weekdaysMin()).toEqual(moment.weekdaysMin());
  });
});
it("Month function", () => {
  const pMoment = dayjs().locale("ru").localeData();
  const hooks__hooks = moment().locale("ru").localeData();
  expect(pMoment.months()).toEqual(hooks__hooks.months());
  expect(pMoment.monthsShort()).toEqual(hooks__hooks.monthsShort());
  dayjs.locale("ru");
  moment.locale("ru");
  expect(dayjs.months()).toEqual(moment.months());
  expect(dayjs.monthsShort()).toEqual(moment.monthsShort());
});
it("Locale order", () => {
  dayjs.locale("fr");
  moment.locale("fr");
  expect(dayjs.weekdays(true)).toEqual(moment.weekdays(true));
  expect(dayjs.weekdaysShort(true)).toEqual(moment.weekdaysShort(true));
  expect(dayjs.weekdaysMin(true)).toEqual(moment.weekdaysMin(true));
  expect(dayjs.weekdays()).not.toEqual(dayjs.weekdays(true));
  dayjs.locale("en");
  moment.locale("en");
  expect(dayjs.weekdays(true)).toEqual(moment.weekdays(true));
});
it("meridiem", () => {
  dayjs.locale("zh-cn");
  expect(typeof dayjs.localeData().meridiem).toEqual("function");
  expect(typeof dayjs().localeData().meridiem).toEqual("function");
  dayjs.locale("en");
});
it("ordinal", () => {
  dayjs.locale("zh-cn");
  expect(typeof dayjs.localeData().ordinal).toEqual("function");
  expect(typeof dayjs().localeData().ordinal).toEqual("function");
  dayjs.locale("en");
});

