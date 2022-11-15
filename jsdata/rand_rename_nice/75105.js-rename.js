'use strict';
const Tokenpass = {
  validateAccess(e, s) {
    const key = e.require === "any" ? "some" : "every";
    return e.tokens[key]((a) => {
      return s.some((b) => {
        return a.token === b.asset && parseFloat(a.balance) <= parseFloat(b.balance);
      });
    });
  }
};
export{
  Tokenpass as Tokenpass
};

