  it("should name require in define correctly", function () {
    define(["require", ], function (raccoon) {
      expect((typeof raccoon)).toBe("function");
    });
  });
  