"use strict";const path=require("path");const camelcase=require("camelcase");module.exports={process(e,t){const r=JSON.stringify(path.basename(t));if(t.match(/\.svg$/)){const s=camelcase(path.parse(t).name,{pascalCase:true});const a=`Svg${s}`;return`const React = require('react');
      module.exports = {
        __esModule: true,
        default: ${r},
        ReactComponent: React.forwardRef(function ${a}(props, ref) {
          return {
            $$typeof: Symbol.for('react.element'),
            type: 'svg',
            ref: ref,
            key: null,
            props: Object.assign({}, props, {
              children: ${r}
            })
          };
        }),
      };`}return`module.exports = ${r};`}};