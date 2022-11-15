'use strict';
import SegmentTree from "../SegmentTree";
describe("SegmentTree", () => {
  it("should build tree for input array #0 with length of power of two", () => {
    const placeholder = [-1, 2];
    const abFolder = new SegmentTree(placeholder, Math.min, Infinity);
    expect(abFolder.segmentTree).toEqual([-1, -1, 2]);
    expect(abFolder.segmentTree.length).toBe(2 * placeholder.length - 1);
  });
  it("should build tree for input array #1 with length of power of two", () => {
    const placeholder = [-1, 2, 4, 0];
    const abFolder = new SegmentTree(placeholder, Math.min, Infinity);
    expect(abFolder.segmentTree).toEqual([-1, -1, 0, -1, 2, 4, 0]);
    expect(abFolder.segmentTree.length).toBe(2 * placeholder.length - 1);
  });
  it("should build tree for input array #0 with length not of power of two", () => {
    const placeholder = [0, 1, 2];
    const abFolder = new SegmentTree(placeholder, Math.min, Infinity);
    expect(abFolder.segmentTree).toEqual([0, 0, 2, 0, 1, null, null]);
    expect(abFolder.segmentTree.length).toBe(2 * 4 - 1);
  });
  it("should build tree for input array #1 with length not of power of two", () => {
    const placeholder = [-1, 3, 4, 0, 2, 1];
    const abFolder = new SegmentTree(placeholder, Math.min, Infinity);
    expect(abFolder.segmentTree).toEqual([-1, -1, 0, -1, 4, 0, 1, -1, 3, null, null, 0, 2, null, null]);
    expect(abFolder.segmentTree.length).toBe(2 * 8 - 1);
  });
  it("should build max array", () => {
    const placeholder = [-1, 2, 4, 0];
    const abFolder = new SegmentTree(placeholder, Math.max, -Infinity);
    expect(abFolder.segmentTree).toEqual([4, 2, 4, -1, 2, 4, 0]);
    expect(abFolder.segmentTree.length).toBe(2 * placeholder.length - 1);
  });
  it("should build sum array", () => {
    const placeholder = [-1, 2, 4, 0];
    const abFolder = new SegmentTree(placeholder, (buckets, name) => {
      return buckets + name;
    }, 0);
    expect(abFolder.segmentTree).toEqual([5, 1, 4, -1, 2, 4, 0]);
    expect(abFolder.segmentTree.length).toBe(2 * placeholder.length - 1);
  });
  it("should do min range query on power of two length array", () => {
    const placeholder = [-1, 3, 4, 0, 2, 1];
    const queryEngine = new SegmentTree(placeholder, Math.min, Infinity);
    expect(queryEngine.rangeQuery(0, 5)).toBe(-1);
    expect(queryEngine.rangeQuery(0, 2)).toBe(-1);
    expect(queryEngine.rangeQuery(1, 3)).toBe(0);
    expect(queryEngine.rangeQuery(2, 4)).toBe(0);
    expect(queryEngine.rangeQuery(4, 5)).toBe(1);
    expect(queryEngine.rangeQuery(2, 2)).toBe(4);
  });
  it("should do min range query on not power of two length array", () => {
    const placeholder = [-1, 2, 4, 0];
    const queryEngine = new SegmentTree(placeholder, Math.min, Infinity);
    expect(queryEngine.rangeQuery(0, 4)).toBe(-1);
    expect(queryEngine.rangeQuery(0, 1)).toBe(-1);
    expect(queryEngine.rangeQuery(1, 3)).toBe(0);
    expect(queryEngine.rangeQuery(1, 2)).toBe(2);
    expect(queryEngine.rangeQuery(2, 3)).toBe(0);
    expect(queryEngine.rangeQuery(2, 2)).toBe(4);
  });
  it("should do max range query", () => {
    const placeholder = [-1, 3, 4, 0, 2, 1];
    const queryEngine = new SegmentTree(placeholder, Math.max, -Infinity);
    expect(queryEngine.rangeQuery(0, 5)).toBe(4);
    expect(queryEngine.rangeQuery(0, 1)).toBe(3);
    expect(queryEngine.rangeQuery(1, 3)).toBe(4);
    expect(queryEngine.rangeQuery(2, 4)).toBe(4);
    expect(queryEngine.rangeQuery(4, 5)).toBe(2);
    expect(queryEngine.rangeQuery(3, 3)).toBe(0);
  });
  it("should do sum range query", () => {
    const placeholder = [-1, 3, 4, 0, 2, 1];
    const queryEngine = new SegmentTree(placeholder, (buckets, name) => {
      return buckets + name;
    }, 0);
    expect(queryEngine.rangeQuery(0, 5)).toBe(9);
    expect(queryEngine.rangeQuery(0, 1)).toBe(2);
    expect(queryEngine.rangeQuery(1, 3)).toBe(7);
    expect(queryEngine.rangeQuery(2, 4)).toBe(6);
    expect(queryEngine.rangeQuery(4, 5)).toBe(3);
    expect(queryEngine.rangeQuery(3, 3)).toBe(0);
  });
});

