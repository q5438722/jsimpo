import{parseComponent}from"sfc/parser";describe("Single File Component parser",()=>{it("should parse",()=>{const t=parseComponent(`
      <template>
        <div>hi</div>
      </template>
      <style src="./test.css"></style>
      <style lang="stylus" scoped>
        h1
          color red
        h2
          color green
      </style>
      <style module>
        h1 { font-weight: bold }
      </style>
      <style bool-attr val-attr="test"></style>
      <script>
        export default {}
      </script>
      <div>
        <style>nested should be ignored</style>
      </div>
    `);expect(t.template.content.trim()).toBe("<div>hi</div>");expect(t.styles.length).toBe(4);expect(t.styles[0].src).toBe("./test.css");expect(t.styles[1].lang).toBe("stylus");expect(t.styles[1].scoped).toBe(true);expect(t.styles[1].content.trim()).toBe("h1\n  color red\nh2\n  color green");expect(t.styles[2].module).toBe(true);expect(t.styles[3].attrs["bool-attr"]).toBe(true);expect(t.styles[3].attrs["val-attr"]).toBe("test");expect(t.script.content.trim()).toBe("export default {}")});it("should parse template with closed input",()=>{const t=parseComponent(`
      <template>
        <input type="text"/>
      </template>
    `);expect(t.template.content.trim()).toBe('<input type="text"/>')});it("should handle nested template",()=>{const t=parseComponent(`
      <template>
        <div><template v-if="ok">hi</template></div>
      </template>
    `);expect(t.template.content.trim()).toBe('<div><template v-if="ok">hi</template></div>')});it("deindent content",()=>{const t=`
      <template>
        <div></div>
      </template>
      <script>
        export default {}
      </script>
      <style>
        h1 { color: red }
      </style>
    `;const e=parseComponent(t.trim(),{pad:false});const o=parseComponent(t.trim(),{pad:false,deindent:true});const n=parseComponent(t.trim(),{pad:false,deindent:false});expect(e.template.content).toBe("\n<div></div>\n");expect(e.script.content).toBe("\nexport default {}\n");expect(e.styles[0].content).toBe("\nh1 { color: red }\n");expect(o.template.content).toBe("\n<div></div>\n");expect(o.script.content).toBe("\nexport default {}\n");expect(o.styles[0].content).toBe("\nh1 { color: red }\n");expect(n.template.content).toBe("\n        <div></div>\n      ");expect(n.script.content).toBe("\n        export default {}\n      ");expect(n.styles[0].content).toBe("\n        h1 { color: red }\n      ")});it("pad content",()=>{const t=`
      <template>
        <div></div>
      </template>
      <script>
        export default {}
      </script>
      <style>
        h1 { color: red }
      </style>
`;const e=parseComponent(t.trim(),{pad:true});const o=parseComponent(t.trim(),{pad:"line"});const n=parseComponent(t.trim(),{pad:"space"});expect(e.script.content).toBe(Array(3+1).join("//\n")+"\nexport default {}\n");expect(e.styles[0].content).toBe(Array(6+1).join("\n")+"\nh1 { color: red }\n");expect(o.script.content).toBe(Array(3+1).join("//\n")+"\nexport default {}\n");expect(o.styles[0].content).toBe(Array(6+1).join("\n")+"\nh1 { color: red }\n");expect(n.script.content).toBe(`<template>
        <div></div>
      </template>
      <script>`.replace(/./g," ")+"\nexport default {}\n");expect(n.styles[0].content).toBe(`<template>
        <div></div>
      </template>
      <script>
        export default {}
      </script>
      <style>`.replace(/./g," ")+"\nh1 { color: red }\n")});it("should handle template blocks with lang as special text",()=>{const t=parseComponent(`
      <template lang="pug">
        div
          h1(v-if='1 < 2') hello
      </template>
    `);expect(t.template.content.trim()).toBe(`div\n  h1(v-if='1 < 2') hello`)});it('should handle component contains "<" only',()=>{const t=parseComponent(`
      <template>
        <span><</span>
      </template>
    `);expect(t.template.content.trim()).toBe(`<span><</span>`)});it("should handle custom blocks without parsing them",()=>{const t=parseComponent(`
      <template>
        <div></div>
      </template>
      <example name="simple">
        <my-button ref="button">Hello</my-button>
      </example>
      <example name="with props">
        <my-button color="red">Hello</my-button>
      </example>
      <test name="simple" foo="bar">
      export default function simple (vm) {
        describe('Hello', () => {
          it('should display Hello', () => {
            this.vm.$refs.button.$el.innerText.should.equal('Hello')
          }))
        }))
      }
      </test>
    `);expect(t.customBlocks.length).toBe(3);const e=t.customBlocks[0];expect(e.type).toBe("example");expect(e.content.trim()).toBe('<my-button ref="button">Hello</my-button>');expect(e.attrs.name).toBe("simple");const o=t.customBlocks[1];expect(o.type).toBe("example");expect(o.content.trim()).toBe('<my-button color="red">Hello</my-button>');expect(o.attrs.name).toBe("with props");const n=t.customBlocks[2];expect(n.type).toBe("test");expect(n.content.trim()).toBe(`export default function simple (vm) {
  describe('Hello', () => {
    it('should display Hello', () => {
      this.vm.$refs.button.$el.innerText.should.equal('Hello')
    }))
  }))
}`);expect(n.attrs.name).toBe("simple");expect(n.attrs.foo).toBe("bar")});it("accepts nested template tag",()=>{const t=`<div>
      <template v-if="true === true">
        <section class="section">
          <div class="container">
            Should be shown
          </div>
        </section>
      </template>
      <template v-else>
        <p>Should not be shown</p>
      </template>
    </div>`;const e=parseComponent(`<template>${t}</template>`);expect(e.template.content.trim()).toBe(t)});it("should not hang on trailing text",()=>{const t=parseComponent(`<template>hi</`);expect(t.template.content).toBe("hi")});it("should collect errors with source range",()=>{const t=parseComponent(`<template>hi</`,{outputSourceRange:true});expect(t.errors.length).toBe(1);expect(t.errors[0].start).toBe(0)})});