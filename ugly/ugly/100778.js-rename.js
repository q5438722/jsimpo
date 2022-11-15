"use strict";const fs=require("fs");const vm=require("vm");const globby=require("globby");const sandbox=vm.createContext();const source=globby.sync(["standalone.js","parser-*.js"],{cwd:process.env.PRETTIER_DIR,absolute:true}).map(t=>fs.readFileSync(t,"utf8")).join(";");vm.runInContext(source,sandbox);const allowedGlobalObjects=new Set(["prettier","prettierPlugins"]);const globalObjects=Object.keys(sandbox).filter(t=>!allowedGlobalObjects.has(t));if(globalObjects.length>0){throw new Error(`Global ${globalObjects.map(t=>`"${t}"(${Object.prototype.toString.call(sandbox[t]).slice(8,-1)})`).join(", ")} should not be exposed.`)}module.exports={formatWithCursor(t,o){return vm.runInNewContext(`
        const options = {
          ...$$$options,
          plugins: [
            ...Object.values(prettierPlugins),
            ...($$$options.plugins || []),
          ],
        };
        prettier.formatWithCursor($$$input, options);
      `,{$$$input:t,$$$options:o,...sandbox})},__debug:{parse(t,o,e){return vm.runInNewContext(`
          const options = {
            ...$$$options,
            plugins: [
              ...Object.values(prettierPlugins),
              ...($$$options.plugins || []),
            ],
          };
          prettier.__debug.parse($$$input, options, ${JSON.stringify(e)});
        `,{$$$input:t,$$$options:o,...sandbox})}}};