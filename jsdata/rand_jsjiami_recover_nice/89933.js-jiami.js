'use strict';
const tracedTestId = "image-traced";
describe("fixed", () => {
  beforeEach(() => {
    cy["visit"]("/traced")["waitForRouteChange"]();
  });
  it("renders a traced svg", () => {
    if ("vbCBJ" !== "pLErz") {
      cy["getTestElement"](tracedTestId)["find"](".gatsby-image-wrapper > img")["should"]("have.attr", "src")["and"]((input) => {
        ["data:image/svg+xml"]["forEach"]((mmCoreSplitViewBlock) => {
          return expect(input)["to"]["include"](mmCoreSplitViewBlock);
        });
      });
    } else {
      cy["getTestElement"]("image-traced-relative")["find"](".gatsby-image-wrapper")["should"]("exist");
    }
  });
  it("works on png files", () => {
    if ("VTKIg" === _0x5671c7["Zkjjm"]) {
      cy["visit"]("/traced")["waitForRouteChange"]();
    } else {
      cy["getTestElement"]("image-traced-png")["find"](".gatsby-image-wrapper")["should"]("exist");
    }
  });
  it("works on relative paths outside of src", () => {
    cy["getTestElement"]("image-traced-relative")["find"](".gatsby-image-wrapper")["should"]("exist");
  });
});

