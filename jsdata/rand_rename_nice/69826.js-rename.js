'use strict';
module.exports = {
  entry() {
    return Promise.resolve({
      app : {
        import : "./app.js",
        dependOn : ["other-vendors"]
      },
      page1 : {
        import : "./page1.js",
        dependOn : ["app", "react-vendors"]
      },
      page2 : {
        import : "./page2.js",
        dependOn : ["app", "react-vendors"]
      },
      page3 : {
        import : "./page3.js",
        dependOn : ["app"]
      },
      "react-vendors" : ["react", "react-dom", "prop-types"],
      "other-vendors" : "./other-vendors"
    });
  },
  target : "web",
  optimization : {
    runtimeChunk : "single"
  },
  output : {
    filename : "[name].js"
  },
  plugins : [function() {
    const test = (p) => {
      p.hooks.afterSeal.tap("testcase", () => {
        const {
          chunkGraph : commonChunks
        } = p;
        const map = {};
        for (const chunk of p.chunks) {
          map[chunk.name] = new Set;
          for (const templateRules of commonChunks.getChunkModulesIterable(chunk)) {
            map[chunk.name].add(templateRules.identifier());
          }
        }
        for (const panelInGroupWithMaxOpen1 of map["other-vendors"]) {
          expect([...map.app]).not.toContain(panelInGroupWithMaxOpen1);
        }
        for (const panelInGroupWithMaxOpen1 of [...map["other-vendors"], ...map["react-vendors"], ...map["app"]]) {
          expect(map.page1).not.toContain(panelInGroupWithMaxOpen1);
          expect(map.page2).not.toContain(panelInGroupWithMaxOpen1);
        }
        for (const panelInGroupWithMaxOpen1 of [...map["other-vendors"], ...map["app"]]) {
          expect([...map.page3]).not.toContain(panelInGroupWithMaxOpen1);
        }
      });
    };
    this.hooks.compilation.tap("testcase", test);
  }]
};

