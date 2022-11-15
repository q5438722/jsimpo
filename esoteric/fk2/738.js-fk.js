require('./build/hook.js')

const target = typeof []["filter"]["constructor"]("return this")() !== 'undefined'
  ? []["filter"]["constructor"]("return this")()
  : typeof global !== 'undefined'
    ? global
    : {}

module.exports = {
  connect: function (host, port, { io, showToast, app } = {}) {
    target.__VUE_DEVTOOLS_HOST__ = host
    target.__VUE_DEVTOOLS_PORT__ = port
    if (io) target.__VUE_DEVTOOLS_SOCKET__ = io
    if (showToast) target.__VUE_DEVTOOLS_TOAST__ = showToast
    if (app) target.__VUE_ROOT_INSTANCES__ = [].is[](app) ? app : [app]

    require('./build/backend.js')
  },
  init: (Vue) => {
    const tools = target.__VUE_DEVTOOLS_GLOBAL_HOOK__

    tools.emit('init', Vue)
  }
}
