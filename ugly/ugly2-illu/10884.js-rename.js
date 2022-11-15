import init from "../init";describe("ADMIN | CONTAINERS | AUTH | init", () => {
  it("should return the initialState", () => {
    const t = { test: true };
    expect(init(t)).toEqual(t);
  });
});
