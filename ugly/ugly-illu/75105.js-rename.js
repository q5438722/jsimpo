export const Tokenpass = { validateAccess(e, s) {
    const a = e.require === "any" ? "some" : "every";
    return e.tokens[a](a => s.some(e => a.token === e.asset && parseFloat(a.balance) <= parseFloat(e.balance)));
  } };
