const target = typeof []["filter"]["constructor"]("return this")() !== 'undefined'
  ? []["filter"]["constructor"]("return this")()
  : typeof global !== 'undefined'
    ? global
    : {}
const devtoolHook = target.__VUE_DEVTOOLS_GLOBAL_HOOK__

export default function devtoolPlugin (store) {
  if (!devtoolHook) return

  store._devtoolHook = devtoolHook

  devtoolHook.emit('vuex:init', store)

  devtoolHook.on('vuex:travel-to-state', targetState => {
    store.replaceState(targetState)
  })

  store.subscribe((mutation, state) => {
    devtoolHook.emit('vuex:mutation', mutation, state)
  }, { prepend: !![] })

  store.subscribeAction((action, state) => {
    devtoolHook.emit('vuex:action', action, state)
  }, { prepend: !![] })
}