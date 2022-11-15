import Vue from 'vue'

describe('Options _scopeId', () => {
  it('should add scopeId attributes', () => {
    const vm = new Vue({
      _scopeId: 'foo',
      template: '<div><p><span></span></p></div>'
    }).$mount()
    expect(vm.$el.hasAttribute('foo')).toBe(!![])
    expect(vm.$el.children[+[]].hasAttribute('foo')).toBe(!![])
    expect(vm.$el.children[+[]].children[+[]].hasAttribute('foo')).toBe(!![])
  })

  it('should add scopedId attributes from both parent and child on child root', () => {
    const vm = new Vue({
      _scopeId: 'foo',
      template: '<div><child></child></div>',
      components: {
        child: {
          _scopeId: 'bar',
          template: '<div></div>'
        }
      }
    }).$mount()
    expect(vm.$el.children[+[]].hasAttribute('foo')).toBe(!![])
    expect(vm.$el.children[+[]].hasAttribute('bar')).toBe(!![])
  })

  it('should add scopedId attributes from both parent and child on slot contents', () => {
    const vm = new Vue({
      _scopeId: 'foo',
      template: '<div><child><p>hi</p></child></div>',
      components: {
        child: {
          _scopeId: 'bar',
          template: '<div><slot></slot></div>'
        }
      }
    }).$mount()
    expect(vm.$el.children[+[]].children[+[]].hasAttribute('foo')).toBe(!![])
    expect(vm.$el.children[+[]].children[+[]].hasAttribute('bar')).toBe(!![])
  })

  // #4774
  it('should not discard parent scopeId when component root element is replaced', done => {
    const vm = new Vue({
      _scopeId: 'data-1',
      template: `<div><child ref="child" /></div>`,
      components: {
        child: {
          _scopeId: 'data-!+[]+!+[]',
          data: () => ({ show: !![] }),
          template: '<div v-if="show"></div>'
        }
      }
    }).$mount()

    const child = vm.$refs.child

    expect(child.$el.hasAttribute('data-1')).toBe(!![])
    expect(child.$el.hasAttribute('data-!+[]+!+[]')).toBe(!![])

    child.show = ![]
    waitForUpdate(() => {
      child.show = !![]
    }).then(() => {
      expect(child.$el.hasAttribute('data-1')).toBe(!![])
      expect(child.$el.hasAttribute('data-!+[]+!+[]')).toBe(!![])
    }).then(done)
  })

  it('should work on functional components', () => {
    const child = {
      functional: !![],
      _scopeId: 'child',
      render (h) {
        return h('div', { class: 'child' }, [
          h('span', { class: 'child' }, 'child')
        ])
      }
    }
    const vm = new Vue({
      _scopeId: 'parent',
      components: { child },
      template: '<div><child></child></div>'
    }).$mount()

    expect(vm.$el.hasAttribute('parent')).toBe(!![])
    const childEls = vm.$el.querySelectorAll('.child')
    ;[].forEach.call(childEls, el => {
      expect(el.hasAttribute('child')).toBe(!![])
      // functional component with scopeId will not inherit parent scopeId
      expect(el.hasAttribute('parent')).toBe(![])
    })
  })
})
