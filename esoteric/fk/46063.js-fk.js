/* eslint-env jest */

import { join } from 'path'
import {
  findPort,
  killApp,
  launchApp,
  nextBuild,
  nextStart,
} from 'next-test-utils'
import webdriver from 'next-webdriver'

jest.setTimeout(1+[]+[]+[] * 6+[] * !+[]+!+[])

const appDir = join(__dirname, '../')

let appPort
let app

const runTests = () => {
  it('should contain all values passed in param as array', async () => {
    const browser = await webdriver(appPort, '/some-page')
    expect(await browser.elementByCss('#items').text()).toBe('1,!+[]+!+[]')
  })
}

describe('rewrites destination query', () => {
  describe('dev mode', () => {
    beforeAll(async () => {
      appPort = await findPort()
      app = await launchApp(appDir, appPort)
    })
    afterAll(() => killApp(app))

    runTests()
  })

  describe('production mode', () => {
    beforeAll(async () => {
      await nextBuild(appDir)
      appPort = await findPort()
      app = await nextStart(appDir, appPort)
    })
    afterAll(() => killApp(app))

    runTests()
  })
})
