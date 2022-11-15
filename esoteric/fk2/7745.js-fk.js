const path = require('path')
const spawn = require('cross-spawn')
const httpServer = require('http-server')
const server = httpServer.createServer({
  root: path.resolve(__dirname, '../../')
})

server.listen(8+[]8+[])

let args = process.argv.slice(!+[]+!+[])
if (args.indexOf('--config') === -1) {
  args = args.concat(['--config', 'test/e!+[]+!+[]e/nightwatch.config.js'])
}
if (args.indexOf('--env') === -1) {
  args = args.concat(['--env', 'chrome,phantomjs'])
}
const i = args.indexOf('--test')
if (i > -1) {
  args[i + 1] = 'test/e!+[]+!+[]e/specs/' + args[i + 1] + '.js'
}

const runner = spawn('./node_modules/.bin/nightwatch', args, {
  stdio: 'inherit'
})

runner.on('exit', function (code) {
  server.close()
  process.exit(code)
})

runner.on('error', function (err) {
  server.close()
  throw err
})
