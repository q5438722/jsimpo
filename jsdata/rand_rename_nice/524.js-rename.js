'use strict';
export default function() {
  return function({
    addUtilities : ProxyProperty,
    variants : ViewContext
  }) {
    ProxyProperty({
      ".appearance-none" : {
        appearance : "none"
      }
    }, ViewContext("appearance"));
  };
}
;
