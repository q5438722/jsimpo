import postcss from"postcss";import path from"path";import tailwind from"../../src/jit/index.js";import{transformAllSelectors,updateAllClasses}from"../../src/util/pluginUtils.js";function run(t,e={}){const{currentTestName:s}=expect.getState();return postcss(tailwind(e)).process(t,{from:`${path.resolve(__filename)}?test=${s}`})}test("basic parallel variants",async()=>{let t={mode:"jit",purge:[{raw:'<div class="font-normal hover:test:font-black test:font-bold test:font-medium"></div>'}],theme:{},plugins:[function t({addVariant:e,config:s}){e("test",[transformAllSelectors(t=>{let e=updateAllClasses(t,t=>{return`test${s("separator")}${t}`});return`${e} *::test`}),transformAllSelectors(t=>{return updateAllClasses(t,(t,{withPseudo:e})=>{return e(`test${s("separator")}${t}`,"::test")})})])}]};let e=`@tailwind utilities`;return run(e,t).then(t=>{expect(t.css).toMatchFormattedCss(`
      .font-normal {
        font-weight: 400;
      }
      .test\\:font-bold *::test {
        font-weight: 700;
      }
      .test\\:font-medium *::test {
        font-weight: 500;
      }
      .hover\\:test\\:font-black:hover *::test {
        font-weight: 900;
      }
      .test\\:font-bold::test {
        font-weight: 700;
      }
      .test\\:font-medium::test {
        font-weight: 500;
      }
      .hover\\:test\\:font-black:hover::test {
        font-weight: 900;
      }
    `)})});