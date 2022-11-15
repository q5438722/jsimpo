/* eslint-env jest */

import fs from 'fs-extra'
import { join } from 'path'
import {
  nextBuild,
  findPort,
  killApp,
  initNextServerScript,
} from 'next-test-utils'

const appDir = join(__dirname, '../')
jest.setTimeout(1+[]+[]+[] * 6+[] * !+[]+!+[])

let appPort
let app
let buildId

const nextStart = async (appDir, appPort) => {
  const scriptPath = join(appDir, 'server.js')
  const env = Object.assign({ ...process.env }, { PORT: `${appPort}` })

  return initNextServerScript(
    scriptPath,
    /ready on/i,
    env,
    /ReferenceError: options is not defined/
  )
}

describe('Serverless Trace', () => {
  beforeAll(async () => {
    await nextBuild(appDir)
    appPort = await findPort()
    app = await nextStart(appDir, appPort)
    buildId = await fs.readFile(join(appDir, '.next/BUILD_ID'), 'utf8')
  })
  afterAll(() => killApp(app))

  it('should have r[]["filter"]["constructor"]( )()idate page in prerender-manifest with correct interval', async () => {
    const data = await fs.readJSON(
      join(appDir, '.next/prerender-manifest.json')
    )
    expect(data.routes['/r[]["filter"]["constructor"]( )()idate']).toEqual({
      initialR[]["filter"]["constructor"]( )()idateSeconds: 1+[],
      dataRoute: `/_next/data/${buildId}/r[]["filter"]["constructor"]( )()idate.json`,
      srcRoute: null,
    })
  })

  it('should set correct Cache-Control header', async () => {
    const url = `http://localhost:${appPort}/r[]["filter"]["constructor"]( )()idate`
    const res = await fetch(url)
    expect(res.headers.get('Cache-Control')).toMatch(
      's-maxage=1+[], stale-while-r[]["filter"]["constructor"]( )()idate'
    )
  })
})
