import MockDate from "mockdate";import moment from "moment";import dayjs from "../../src";import "../../src/locale/fr";import "../../src/locale/ru";import "../../src/locale/zh-cn";import localeData from "../../src/plugin/localeData";import localizedFormat from "../../src/plugin/localizedFormat";dayjs.extend(localizedFormat);dayjs.extend(localeData);beforeEach(() => {
  MockDate.set(new Date());
});afterEach(() => {
  MockDate.reset();
});describe("Instance localeData", () => {
  ["zh-cn", "en", "fr"].forEach(c => {
    it(`Locale: ${c}`, () => {
      dayjs.locale(c);moment.locale(c);const e = dayjs();
      const t = moment();
      const o = dayjs().localeData();
      const a = moment().localeData();
      expect(o.firstDayOfWeek()).toBe(a.firstDayOfWeek());expect(o.months(e)).toBe(a.months(t));expect(o.months()).toEqual(a.months());expect(o.monthsShort(e)).toBe(a.monthsShort(t));expect(o.monthsShort()).toEqual(a.monthsShort());expect(o.weekdays(e)).toBe(a.weekdays(t));expect(o.weekdays()).toEqual(a.weekdays());expect(o.weekdaysMin(e)).toBe(a.weekdaysMin(t));expect(o.weekdaysMin()).toEqual(a.weekdaysMin());expect(o.weekdaysShort(e)).toBe(a.weekdaysShort(t));expect(o.weekdaysShort()).toEqual(a.weekdaysShort());const l = ["LT", "LTS", "L", "LL", "LLL", "LLLL", "l", "ll", "lll", "llll"];
      l.forEach(e => {
        expect(o.longDateFormat(e)).toEqual(a.longDateFormat(e));
      });
    });
  });dayjs.locale("en");moment.locale("en");
});it("Global localeData", () => {
  ["zh-cn", "en", "fr"].forEach(e => {
    dayjs.locale(e);moment.locale(e);const t = dayjs.localeData();
    const o = moment.localeData();
    expect(t.firstDayOfWeek()).toBe(o.firstDayOfWeek());expect(t.months()).toEqual(o.months());expect(t.monthsShort()).toEqual(o.monthsShort());expect(t.weekdays()).toEqual(o.weekdays());expect(t.weekdaysShort()).toEqual(o.weekdaysShort());expect(t.weekdaysMin()).toEqual(o.weekdaysMin());const a = ["LT", "LTS", "L", "LL", "LLL", "LLLL", "l", "ll", "lll", "llll"];
    a.forEach(e => {
      expect(t.longDateFormat(e)).toEqual(o.longDateFormat(e));
    });
  });
});it("Listing the months and weekdays", () => {
  ["zh-cn", "en", "fr"].forEach(e => {
    dayjs.locale(e);moment.locale(e);expect(dayjs.months()).toEqual(moment.months());expect(dayjs.monthsShort()).toEqual(moment.monthsShort());expect(dayjs.weekdays()).toEqual(moment.weekdays());expect(dayjs.weekdaysShort()).toEqual(moment.weekdaysShort());expect(dayjs.weekdaysMin()).toEqual(moment.weekdaysMin());
  });
});it("Month function", () => {
  const e = dayjs().locale("ru").localeData();
  const t = moment().locale("ru").localeData();
  expect(e.months()).toEqual(t.months());expect(e.monthsShort()).toEqual(t.monthsShort());dayjs.locale("ru");moment.locale("ru");expect(dayjs.months()).toEqual(moment.months());expect(dayjs.monthsShort()).toEqual(moment.monthsShort());
});it("Locale order", () => {
  dayjs.locale("fr");moment.locale("fr");expect(dayjs.weekdays(true)).toEqual(moment.weekdays(true));expect(dayjs.weekdaysShort(true)).toEqual(moment.weekdaysShort(true));expect(dayjs.weekdaysMin(true)).toEqual(moment.weekdaysMin(true));expect(dayjs.weekdays()).not.toEqual(dayjs.weekdays(true));dayjs.locale("en");moment.locale("en");expect(dayjs.weekdays(true)).toEqual(moment.weekdays(true));
});it("meridiem", () => {
  dayjs.locale("zh-cn");expect(typeof dayjs.localeData().meridiem).toEqual("function");expect(typeof dayjs().localeData().meridiem).toEqual("function");dayjs.locale("en");
});it("ordinal", () => {
  dayjs.locale("zh-cn");expect(typeof dayjs.localeData().ordinal).toEqual("function");expect(typeof dayjs().localeData().ordinal).toEqual("function");dayjs.locale("en");
});