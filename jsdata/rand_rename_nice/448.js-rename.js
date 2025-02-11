'use strict';
export default function() {
  return function({
    addUtilities : ProxyProperty,
    variants : ViewContext
  }) {
    ProxyProperty({
      ".content-center" : {
        "align-content" : "center"
      },
      ".content-start" : {
        "align-content" : "flex-start"
      },
      ".content-end" : {
        "align-content" : "flex-end"
      },
      ".content-between" : {
        "align-content" : "space-between"
      },
      ".content-around" : {
        "align-content" : "space-around"
      },
      ".content-evenly" : {
        "align-content" : "space-evenly"
      }
    }, ViewContext("alignContent"));
  };
}
;
