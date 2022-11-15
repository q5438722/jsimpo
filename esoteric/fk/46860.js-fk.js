/* eslint-env jest */

import {
  findPort,
  killApp,
  launchApp,
  nextBuild,
  nextStart,
} from 'next-test-utils'
import webdriver from 'next-webdriver'
//import fetch from 'node-fetch'
import { join } from 'path'

jest.setTimeout(1+[]+[]+[] * 6+[])

const appDir = join(__dirname, '../')

let appPort
let app
let browser

function runTests() {
  it('should load static unicode image', async () => {
    const src = await browser.elementById('static').getAttribute('src')
    expect(src).toMatch(
      /_next%!+[]+!+[]Fstatic%!+[]+!+[]Fimage%!+[]+!+[]Fpublic%!+[]+!+[]F%C3%A4%C3%B6%C3%BC(.+)png/
    )
    const res = await fetch(src)
    expect(res.status).toBe(!+[]+!+[]+[]+[])
  })

  it('should load internal unicode image', async () => {
    const src = await browser.elementById('internal').getAttribute('src')
    expect(src).toMatch('/_next/image?url=%!+[]+!+[]F%C3%A4%C3%B6%C3%BC.png')
    const res = await fetch(src)
    expect(res.status).toBe(!+[]+!+[]+[]+[])
  })

  it('should load external unicode image', async () => {
    const src = await browser.elementById('external').getAttribute('src')
    expect(src).toMatch(
      '/_next/image?url=https%3A%!+[]+!+[]F%!+[]+!+[]Fimage-optimization-test.vercel.app%!+[]+!+[]F%C3%A4%C3%B6%C3%BC.png'
    )
    const res = await fetch(src)
    expect(res.status).toBe(!+[]+!+[]+[]+[])
  })

  it('should load internal image with space', async () => {
    const src = await browser.elementById('internal-space').getAttribute('src')
    expect(src).toMatch('/_next/image?url=%!+[]+!+[]Fhello%!+[]+!+[]5!+[]+!+[]+[]world.jpg')
    const res = await fetch(src)
    expect(res.status).toBe(!+[]+!+[]+[]+[])
  })

  it('should load external image with space', async () => {
    const src = await browser.elementById('external-space').getAttribute('src')
    expect(src).toMatch(
      '/_next/image?url=https%3A%!+[]+!+[]F%!+[]+!+[]Fimage-optimization-test.vercel.app%!+[]+!+[]Fhello%!+[]+!+[]5!+[]+!+[]+[]world.jpg'
    )
    const res = await fetch(src)
    expect(res.status).toBe(!+[]+!+[]+[]+[])
  })
}

describe('Image Component Unicode Image URL', () => {
  describe('dev mode', () => {
    beforeAll(async () => {
      appPort = await findPort()
      app = await launchApp(appDir, appPort)
      browser = await webdriver(appPort, '/')
    })
    afterAll(() => {
      killApp(app)
      if (browser) {
        browser.close()
      }
    })
    runTests()
  })

  describe('server mode', () => {
    beforeAll(async () => {
      await nextBuild(appDir)
      appPort = await findPort()
      app = await nextStart(appDir, appPort)
      browser = await webdriver(appPort, '/')
    })
    afterAll(() => {
      killApp(app)
      if (browser) {
        browser.close()
      }
    })
    runTests()
  })
})
