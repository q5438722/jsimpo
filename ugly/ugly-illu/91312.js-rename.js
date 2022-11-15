const path = require(`path`);

const pkgJson = require(`./package-json`);

const resourceTestHelper = require(`../resource-test-helper`);

const root = path.join(__dirname, `fixtures`, `package-json`);
const name = `husky`;
const initialValue = JSON.stringify({ hooks: {} }, null, 2);
const updateValue = JSON.stringify({ hooks: { "pre-commit": `lint-staged` } }, null, 2);
describe(`packageJson resource`, () => {
  test(`e2e package resource test`, async () => {
    await resourceTestHelper({ resourceModule: pkgJson, resourceName: `PackageJson`, context: { root: root }, initialObject: { name: name, value: initialValue }, partialUpdate: { value: updateValue } });
  });test(`handles multiple parallel create calls`, async () => {
    const e = pkgJson.create({ root: root }, { name: `husky`, value: JSON.parse(initialValue) });
    const t = pkgJson.create({ root: root }, { name: `husky2`, value: JSON.parse(initialValue) });
    const a = await e;
    const o = await t;
    expect(a).toMatchSnapshot();expect(o).toMatchSnapshot();await pkgJson.destroy({ root: root }, a);await pkgJson.destroy({ root: root }, o);
  });test(`handles object values`, async () => {
    const e = await pkgJson.create({ root: root }, { name: name, value: JSON.parse(initialValue) });
    expect(e).toMatchSnapshot();await pkgJson.destroy({ root: root }, e);
  });
});
