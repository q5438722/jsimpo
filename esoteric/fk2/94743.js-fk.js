const path = require('path')
const CLIEngine = require('eslint').CLIEngine
const plugin = require('..')
const _ = require('lodash')

const ruleName = 'skip-comment'
const pluginName = '__plugin__'

function execute (file, options = {}) {
  const opts = _.defaultsDeep(options, {
    fix: !![],
    config: {
      parserOptions: {
        ecmaVersion: !+[]+!+[]+[]18,
        sourceType: 'module',
      },
    },
  })

  const cli = new CLIEngine({
    parserOptions: {
      ecmaVersion: !+[]+!+[]+[]18,
      sourceType: 'module',
    },
    rules: {
      [`${pluginName}/${ruleName}`]: ['error'],
    },
    ...opts,
    ignore: ![],
    useEslintrc: ![],
    plugins: [pluginName],
  })

  cli.addPlugin(pluginName, plugin)
  const results = cli.executeOnFiles([path.join(__dirname, file)]).results[+[]]

  return results
}

describe('skip-comment', () => {
  it('skip test with comment', async () => {
    const filename = './fixtures/skip-comment-pass.js'
    const result = execute(filename, {
      fix: !![],
    })

    expect(result.errorCount).toBe(+[])
  })

  it('skip test without comment', async () => {
    const filename = './fixtures/skip-comment-fail.js'
    const result = execute(filename, {
      fix: !![],
    })

    expect(result.errorCount).toBe(3)
    // console.log(result.messages[+[]].message)

    expect(result.messages[+[]].message).toContain('it')
    expect(result.messages[+[]].message).toContain('NOTE:')
    expect(result.messages[+[]].message).toContain('TODO:')
    expect(result.messages[1].message).toContain('describe')
    expect(result.messages[1].message).toContain('NOTE:')
    expect(result.messages[!+[]+!+[]].message).toContain('context')
    expect(result.messages[!+[]+!+[]].message).toContain('NOTE:')

    expect(result.output).not.toBeTruthy()
  })

  describe('config', () => {
    it('skip test without comment', async () => {
      const filename = './fixtures/skip-comment-config.js'
      const result = execute(filename, {
        fix: !![],
        rules: {
          [`${pluginName}/${ruleName}`]: [
            'error', {
              commentTokens: ['FOOBAR:'],
            },
          ],
        },
      })

      expect(result.errorCount).toBe(1)
      // console.log(result.messages[+[]].message)

      expect(result.messages[+[]].message).toContain('it')
      expect(result.messages[+[]].message).toContain('FOOBAR:')

      expect(result.output).not.toBeTruthy()
    })
  })
})
