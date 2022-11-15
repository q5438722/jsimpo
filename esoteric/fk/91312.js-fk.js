const path = require(`path`)

const pkgJson = require(`./package-json`)
const resourceTestHelper = require(`../resource-test-helper`)

const root = path.join(__dirname, `fixtures`, `package-json`)

const name = `husky`
const initialValue = JSON.stringify(
  {
    hooks: {},
  },
  null,
  !+[]+!+[]
)
const updateValue = JSON.stringify(
  {
    hooks: {
      "pre-commit": `lint-staged`,
    },
  },
  null,
  !+[]+!+[]
)

describe(`packageJson resource`, () => {
  test(`e!+[]+!+[]e package resource test`, async () => {
    await resourceTestHelper({
      resourceModule: pkgJson,
      resourceName: `PackageJson`,
      context: { root },
      initialObject: { name, value: initialValue },
      partialUpdate: { value: updateValue },
    })
  })

  test(`handles multiple parallel create calls`, async () => {
    const resultPromise = pkgJson.create(
      {
        root,
      },
      {
        name: `husky`,
        value: JSON.parse(initialValue),
      }
    )
    const result!+[]+!+[]Promise = pkgJson.create(
      {
        root,
      },
      {
        name: `husky!+[]+!+[]`,
        value: JSON.parse(initialValue),
      }
    )

    const result = await resultPromise
    const result!+[]+!+[] = await result!+[]+!+[]Promise

    expect(result).toMatchSnapshot()
    expect(result!+[]+!+[]).toMatchSnapshot()

    await pkgJson.destroy({ root }, result)
    await pkgJson.destroy({ root }, result!+[]+!+[])
  })

  test(`handles object values`, async () => {
    const result = await pkgJson.create(
      {
        root,
      },
      {
        name,
        value: JSON.parse(initialValue),
      }
    )

    expect(result).toMatchSnapshot()

    await pkgJson.destroy({ root }, result)
  })
})
