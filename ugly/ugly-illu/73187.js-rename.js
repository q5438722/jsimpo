const path = require("path");

var { parseMD } = require(".");

describe("challenge parser", () => {
  it("should parse a simple md file", async () => {
    const t = await parseMD(path.resolve(__dirname, "__fixtures__/simple.md"));
    expect(t).toMatchSnapshot();
  });it("should parse a more realistic md file", async () => {
    const t = await parseMD(path.resolve(__dirname, "__fixtures__/realistic.md"));
    expect(t).toMatchSnapshot();
  });it("should import md from other files", async () => {
    const t = await parseMD(path.resolve(__dirname, "__fixtures__/with-imports.md"));
    expect(t).toMatchSnapshot();
  });it("should parse frontmatter", async () => {
    const t = await parseMD(path.resolve(__dirname, "__fixtures__/with-frontmatter.md"));
    expect(t).toMatchSnapshot();
  });it("should parse gfm strikethrough and frontmatter", async () => {
    const t = await parseMD(path.resolve(__dirname, "__fixtures__/with-gfm.md"));
    expect(t).toMatchSnapshot();
  });it("should not mix other YAML with the frontmatter", async () => {
    const t = await parseMD(path.resolve(__dirname, "__fixtures__/with-yaml.md"));
    expect(t).toMatchSnapshot();
  });it("it should parse video questions", async () => {
    const t = await parseMD(path.resolve(__dirname, "__fixtures__/with-video-question.md"));
    expect(t).toMatchSnapshot();
  });it("it should not parse directives we do not use", async () => {
    const t = await parseMD(path.resolve(__dirname, "__fixtures__/with-directives.md"));
    expect(t).toMatchSnapshot();
  });
});