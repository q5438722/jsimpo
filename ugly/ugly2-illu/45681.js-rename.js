import moment from "moment";import MockDate from "mockdate";import dayjs from "../../src";import relativeTime from "../../src/plugin/relativeTime";import "../../src/locale/pl";dayjs.extend(relativeTime);beforeEach(() => {
  MockDate.set(new Date());
});afterEach(() => {
  MockDate.reset();
});it("Format month with locale function", () => {
  for (let t = 0; t <= 7; t += 1) {
    const e = dayjs().locale("pl").add(t, "day");
    const o = moment().locale("pl").add(t, "day");
    const a = "DD MMMM YYYY MMM";
    const m = "dddd, MMMM D YYYY";
    const r = "MMMM";
    const d = "MMM";
    expect(e.format(a)).toEqual(o.format(a));expect(e.format(m)).toEqual(o.format(m));expect(e.format(r)).toEqual(o.format(r));expect(e.format(d)).toEqual(o.format(d));
  }
});it("RelativeTime: Time from X", () => {
  const t = [[44.4, "second"], [89.5, "second"], [2, "minute"], [5, "minute"], [43, "minute"], [45, "minute"], [3, "hour"], [21, "hour"], [1, "day"], [3, "day"], [25, "day"], [1, "month"], [2, "month"], [10, "month"], [1, "year"], [2, "year"], [5, "year"], [18, "month"]];
  t.forEach(t => {
    dayjs.locale("pl");moment.locale("pl");expect(dayjs().from(dayjs().add(t[0], t[1]))).toBe(moment().from(moment().add(t[0], t[1])));expect(dayjs().from(dayjs().add(t[0], t[1]), true)).toBe(moment().from(moment().add(t[0], t[1]), true));
  });
});