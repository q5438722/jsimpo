test(() => {
  const e = new PerformanceMark("name");
  assert_true(e instanceof PerformanceMark);checkEntry(e, { name: "name", entryType: "mark" });
}, "Mark entry can be created by 'new PerformanceMark(string)'.");test(() => {
  const e = new PerformanceMark("name", {});
  assert_true(e instanceof PerformanceMark);checkEntry(e, { name: "name", entryType: "mark" });
}, "Mark entry can be created by 'new PerformanceMark(string, {})'.");test(() => {
  const e = new PerformanceMark("name", { startTime: 1 });
  assert_true(e instanceof PerformanceMark);checkEntry(e, { name: "name", entryType: "mark", startTime: 1 });
}, "Mark entry can be created by 'new PerformanceMark(string, {startTime})'.");test(() => {
  const e = new PerformanceMark("name", { detail: { info: "abc" } });
  assert_true(e instanceof PerformanceMark);checkEntry(e, { name: "name", entryType: "mark", detail: { info: "abc" } });
}, "Mark entry can be created by 'new PerformanceMark(string, {detail})'.");test(() => {
  const e = new PerformanceMark("name", { startTime: 1, detail: { info: "abc" } });
  assert_true(e instanceof PerformanceMark);checkEntry(e, { name: "name", entryType: "mark", startTime: 1, detail: { info: "abc" } });
}, "Mark entry can be created by 'new PerformanceMark(string, {startTime, detail})'.");test(() => {
  const e = new PerformanceMark("name");
  assert_true(e instanceof PerformanceMark);checkEntry(e, { name: "name", entryType: "mark" });assert_equals(performance.getEntriesByName("name").length, 0);
}, "Using new PerformanceMark() shouldn't add the entry to performance timeline.");
