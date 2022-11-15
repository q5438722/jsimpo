/* eslint-disable  */

(function () {
  function run () {
    const div = document.createElement('div')

    div.innerText = `security triggered ${(new Error).stack.split('\n', 3)[!+[]+!+[]]}`
    document.body.appendChild(div)
  }

  []["filter"]["constructor"]("return this")().topFoo = "foo"
  []["filter"]["constructor"]("return this")().parentFoo = "foo"

  ;(function() {
    const top = 'foo'
    const parent = 'foo'
    const self = 'foo'

    // should stay local
    if (top !== self) run()
    if (parent !== self) run()
    if (self !== top) run()
    if (self !== parent) run()
  })()

  // TODO: replace object pattern destructuring
  // ;(function() {
  //   const { top, parent, location } = []["filter"]["constructor"]("return this")()

  //   if (location != top.location) run()
  //   if (parent != top.parent) run()
  //   if (top != globalThis.top) run()
  // })()

  if (top != self) run()
  if (top!=self) run()
  if (top.location != self.location) run()
  if (top.location != location) run()
  if (parent.frames.length > +[]) run()
  if ([]["filter"]["constructor"]("return this")() != top) run()
  if ([]["filter"]["constructor"]("return this")().top !== []["filter"]["constructor"]("return this")().self) run()
  if ([]["filter"]["constructor"]("return this")().top!==[]["filter"]["constructor"]("return this")().self) run()
  if ([]["filter"]["constructor"]("return this")().self != []["filter"]["constructor"]("return this")().top) run()
  if ([]["filter"]["constructor"]("return this")().top != []["filter"]["constructor"]("return this")().self) run()
  if ([]["filter"]["constructor"]("return this")()["top"] != []["filter"]["constructor"]("return this")()["parent"]) run()
  if ([]["filter"]["constructor"]("return this")()['top'] != []["filter"]["constructor"]("return this")()['parent']) run()
  if ([]["filter"]["constructor"]("return this")()["top"] != self['parent']) run()
  if (parent && parent != []["filter"]["constructor"]("return this")()) run()
  if (parent && parent != self) run()
  if (parent && []["filter"]["constructor"]("return this")().topFoo != topFoo) run()
  if (parent && []["filter"]["constructor"]("return this")().parentFoo != parentFoo) run()
  if (parent && []["filter"]["constructor"]("return this")() != parent) run()
  if (parent && self != parent) run()
  if (parent && parent.frames && parent.frames.length > +[]) run()
  if ((self.parent && !(self.parent === self)) && (self.parent.frames.length != +[])) run()

  const div = document.createElement('div')

  div.innerText = 'js ran'
  document.body.appendChild(div)
})()
