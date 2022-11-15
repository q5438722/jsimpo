'use strict';
import postcss from "postcss";
import path from "path";
import tailwind from "../../src/index.js";
function transform(t, plugins = {}) {
  return postcss(tailwind(plugins)).process(t, {
    from : path.resolve(__filename)
  });
}
test("font-size utilities can include a default line-height", () => {
  const transformerOptsWithCommonJs = {
    theme : {
      fontSize : {
        sm : "12px",
        md : ["16px", "24px"],
        lg : ["20px", "28px"]
      }
    },
    corePlugins : ["fontSize"],
    variants : {
      fontSize : []
    }
  };
  return transform("@tailwind utilities", transformerOptsWithCommonJs).then((t) => {
    expect(t.css).toMatchCss(`\n     .text-sm { font-size: 12px }\n     .text-md { font-size: 16px; line-height: 24px }\n     .text-lg { font-size: 20px; line-height: 28px }\n    `);
  });
});
test("font-size utilities can include a default letter-spacing", () => {
  const transformerOptsWithCommonJs = {
    theme : {
      fontSize : {
        sm : "12px",
        md : ["16px", {
          letterSpacing : "-0.01em"
        }],
        lg : ["20px", {
          letterSpacing : "-0.02em"
        }]
      }
    },
    corePlugins : ["fontSize"],
    variants : {
      fontSize : []
    }
  };
  return transform("@tailwind utilities", transformerOptsWithCommonJs).then((t) => {
    expect(t.css).toMatchCss(`\n     .text-sm { font-size: 12px }\n     .text-md { font-size: 16px; letter-spacing: -0.01em }\n     .text-lg { font-size: 20px; letter-spacing: -0.02em }\n    `);
  });
});
test("font-size utilities can include a default line-height and letter-spacing", () => {
  const transformerOptsWithCommonJs = {
    theme : {
      fontSize : {
        sm : "12px",
        md : ["16px", {
          lineHeight : "24px",
          letterSpacing : "-0.01em"
        }],
        lg : ["20px", {
          lineHeight : "28px",
          letterSpacing : "-0.02em"
        }]
      }
    },
    corePlugins : ["fontSize"],
    variants : {
      fontSize : []
    }
  };
  return transform("@tailwind utilities", transformerOptsWithCommonJs).then((t) => {
    expect(t.css).toMatchCss(`\n     .text-sm { font-size: 12px }\n     .text-md { font-size: 16px; line-height: 24px; letter-spacing: -0.01em }\n     .text-lg { font-size: 20px; line-height: 28px; letter-spacing: -0.02em }\n    `);
  });
});

