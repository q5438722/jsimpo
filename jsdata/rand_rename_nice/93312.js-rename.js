'use strict';
import QueenPosition from "../QueenPosition";
describe("QueenPosition", () => {
  it("should store queen position on chessboard", () => {
    const gradientEvent = new QueenPosition(0, 0);
    const o = new QueenPosition(2, 1);
    expect(o.columnIndex).toBe(1);
    expect(o.rowIndex).toBe(2);
    expect(gradientEvent.leftDiagonal).toBe(0);
    expect(gradientEvent.rightDiagonal).toBe(0);
    expect(o.leftDiagonal).toBe(1);
    expect(o.rightDiagonal).toBe(3);
    expect(o.toString()).toBe("2,1");
  });
});

