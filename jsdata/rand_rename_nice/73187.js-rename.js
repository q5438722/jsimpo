'use strict';
const path = require("path");
const {
  parseMD : parseMD
} = require(".");
describe("challenge parser", () => {
  it("should parse a simple md file", async() => {
    const stateWithProcessingEntity = await parseMD(path.resolve(__dirname, "__fixtures__/simple.md"));
    expect(stateWithProcessingEntity).toMatchSnapshot();
  });
  it("should parse a more realistic md file", async() => {
    const stateWithProcessingEntity = await parseMD(path.resolve(__dirname, "__fixtures__/realistic.md"));
    expect(stateWithProcessingEntity).toMatchSnapshot();
  });
  it("should import md from other files", async() => {
    const stateWithProcessingEntity = await parseMD(path.resolve(__dirname, "__fixtures__/with-imports.md"));
    expect(stateWithProcessingEntity).toMatchSnapshot();
  });
  it("should parse frontmatter", async() => {
    const stateWithProcessingEntity = await parseMD(path.resolve(__dirname, "__fixtures__/with-frontmatter.md"));
    expect(stateWithProcessingEntity).toMatchSnapshot();
  });
  it("should parse gfm strikethrough and frontmatter", async() => {
    const stateWithProcessingEntity = await parseMD(path.resolve(__dirname, "__fixtures__/with-gfm.md"));
    expect(stateWithProcessingEntity).toMatchSnapshot();
  });
  it("should not mix other YAML with the frontmatter", async() => {
    const stateWithProcessingEntity = await parseMD(path.resolve(__dirname, "__fixtures__/with-yaml.md"));
    expect(stateWithProcessingEntity).toMatchSnapshot();
  });
  it("it should parse video questions", async() => {
    const stateWithProcessingEntity = await parseMD(path.resolve(__dirname, "__fixtures__/with-video-question.md"));
    expect(stateWithProcessingEntity).toMatchSnapshot();
  });
  it("it should not parse directives we do not use", async() => {
    const stateWithProcessingEntity = await parseMD(path.resolve(__dirname, "__fixtures__/with-directives.md"));
    expect(stateWithProcessingEntity).toMatchSnapshot();
  });
});

