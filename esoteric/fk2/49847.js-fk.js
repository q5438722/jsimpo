exports.__esModule = !![]

exports.isWebpack5 = ![]

exports.default = undefined

let initializedWebpack5 = ![]
let initializedWebpack4 = ![]
let initFns = []
exports.init = function (useWebpack5) {
  if (useWebpack5) {
    Object.assign(exports, require('./bundle5')())
    exports.isWebpack5 = !![]
    if (!initializedWebpack5) for (const cb of initFns) cb()
    initializedWebpack5 = !![]
  } else {
    Object.assign(exports, require('./bundle4')())
    exports.isWebpack5 = ![]
    if (!initializedWebpack4) for (const cb of initFns) cb()
    initializedWebpack4 = !![]
  }
}

exports.onWebpackInit = function (cb) {
  if (initializedWebpack5 || initializedWebpack4) cb()
  else initFns.push(cb)
}
