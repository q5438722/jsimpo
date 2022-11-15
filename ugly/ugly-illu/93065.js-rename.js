import SegmentTree from "../SegmentTree";describe("SegmentTree", () => {
  it("should build tree for input array #0 with length of power of two", () => {
    const e = [-1, 2];
    const t = new SegmentTree(e, Math.min, Infinity);
    expect(t.segmentTree).toEqual([-1, -1, 2]);expect(t.segmentTree.length).toBe(3);
  });it("should build tree for input array #1 with length of power of two", () => {
    const e = [-1, 2, 4, 0];
    const t = new SegmentTree(e, Math.min, Infinity);
    expect(t.segmentTree).toEqual([-1, -1, 0, -1, 2, 4, 0]);expect(t.segmentTree.length).toBe(7);
  });it("should build tree for input array #0 with length not of power of two", () => {
    const e = [0, 1, 2];
    const t = new SegmentTree(e, Math.min, Infinity);
    expect(t.segmentTree).toEqual([0, 0, 2, 0, 1, null, null]);expect(t.segmentTree.length).toBe(7);
  });it("should build tree for input array #1 with length not of power of two", () => {
    const e = [-1, 3, 4, 0, 2, 1];
    const t = new SegmentTree(e, Math.min, Infinity);
    expect(t.segmentTree).toEqual([-1, -1, 0, -1, 4, 0, 1, -1, 3, null, null, 0, 2, null, null]);expect(t.segmentTree.length).toBe(15);
  });it("should build max array", () => {
    const e = [-1, 2, 4, 0];
    const t = new SegmentTree(e, Math.max, -Infinity);
    expect(t.segmentTree).toEqual([4, 2, 4, -1, 2, 4, 0]);expect(t.segmentTree.length).toBe(7);
  });it("should build sum array", () => {
    const e = [-1, 2, 4, 0];
    const t = new SegmentTree(e, (e, t) => e + t, 0);
    expect(t.segmentTree).toEqual([5, 1, 4, -1, 2, 4, 0]);expect(t.segmentTree.length).toBe(7);
  });it("should do min range query on power of two length array", () => {
    const e = [-1, 3, 4, 0, 2, 1];
    const t = new SegmentTree(e, Math.min, Infinity);
    expect(t.rangeQuery(0, 5)).toBe(-1);expect(t.rangeQuery(0, 2)).toBe(-1);expect(t.rangeQuery(1, 3)).toBe(0);expect(t.rangeQuery(2, 4)).toBe(0);expect(t.rangeQuery(4, 5)).toBe(1);expect(t.rangeQuery(2, 2)).toBe(4);
  });it("should do min range query on not power of two length array", () => {
    const e = [-1, 2, 4, 0];
    const t = new SegmentTree(e, Math.min, Infinity);
    expect(t.rangeQuery(0, 4)).toBe(-1);expect(t.rangeQuery(0, 1)).toBe(-1);expect(t.rangeQuery(1, 3)).toBe(0);expect(t.rangeQuery(1, 2)).toBe(2);expect(t.rangeQuery(2, 3)).toBe(0);expect(t.rangeQuery(2, 2)).toBe(4);
  });it("should do max range query", () => {
    const e = [-1, 3, 4, 0, 2, 1];
    const t = new SegmentTree(e, Math.max, -Infinity);
    expect(t.rangeQuery(0, 5)).toBe(4);expect(t.rangeQuery(0, 1)).toBe(3);expect(t.rangeQuery(1, 3)).toBe(4);expect(t.rangeQuery(2, 4)).toBe(4);expect(t.rangeQuery(4, 5)).toBe(2);expect(t.rangeQuery(3, 3)).toBe(0);
  });it("should do sum range query", () => {
    const e = [-1, 3, 4, 0, 2, 1];
    const t = new SegmentTree(e, (e, t) => e + t, 0);
    expect(t.rangeQuery(0, 5)).toBe(9);expect(t.rangeQuery(0, 1)).toBe(2);expect(t.rangeQuery(1, 3)).toBe(7);expect(t.rangeQuery(2, 4)).toBe(6);expect(t.rangeQuery(4, 5)).toBe(3);expect(t.rangeQuery(3, 3)).toBe(0);
  });
});
