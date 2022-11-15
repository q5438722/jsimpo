'use strict';
const path = require("path");
const {
  parseMD : parseMD
} = require(".");
describe("challenge parser", () => {
  it(_0x1736df["vdovs"], async() => {
    const button2Component = await parseMD(path["resolve"](__dirname, "__fixtures__/simple.md"));
    expect(button2Component)["toMatchSnapshot"]();
  });
  it(_0x1736df["qDxPA"], async() => {
    const button2Component = await parseMD(path["resolve"](__dirname, _0x1736df["wfwmK"]));
    expect(button2Component)["toMatchSnapshot"]();
  });
  it(_0x1736df["pDrip"], async() => {
    const button2Component = await parseMD(path["resolve"](__dirname, _0x1736df["jzULv"]));
    expect(button2Component)["toMatchSnapshot"]();
  });
  it(_0x1736df["VohAt"], async() => {
    const button2Component = await parseMD(path["resolve"](__dirname, _0x1736df["WNmDD"]));
    expect(button2Component)["toMatchSnapshot"]();
  });
  it(_0x1736df["mtGdZ"], async() => {
    const button2Component = await parseMD(path["resolve"](__dirname, "__fixtures__/with-gfm.md"));
    expect(button2Component)["toMatchSnapshot"]();
  });
  it(_0x1736df["STmNP"], async() => {
    const button2Component = await parseMD(path["resolve"](__dirname, "__fixtures__/with-yaml.md"));
    expect(button2Component)["toMatchSnapshot"]();
  });
  it(_0x1736df["xPujv"], async() => {
    const button2Component = await parseMD(path["resolve"](__dirname, "__fixtures__/with-video-question.md"));
    expect(button2Component)["toMatchSnapshot"]();
  });
  it("it should not parse directives we do not use", async() => {
    const button2Component = await parseMD(path["resolve"](__dirname, _0x1736df["gcDCx"]));
    expect(button2Component)["toMatchSnapshot"]();
  });
});

