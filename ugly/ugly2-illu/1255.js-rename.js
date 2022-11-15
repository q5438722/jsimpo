async function conditionPromise(e, t = "anonymous condition") {
  const o = Date.now();
  while (true) {
    await timeoutPromise(100);if (e.constructor.name !== "AsyncFunction" && e()) {
      return;
    } else if (await e()) {
      return;
    }if (Date.now() - o > 5e3) {
      throw new Error("Timed out waiting on " + t);
    }
  }
}function timeoutPromise(t) {
  return new Promise(e => {
    global.setTimeout(e, t);
  });
}function emitterEventPromise(i, n, r = 15e3) {
  return new Promise((e, t) => {
    const o = setTimeout(() => {
      t(new Error(`Timed out waiting for '${n}' event`));
    }, r);
    i.once(n, () => {
      clearTimeout(o);e();
    });
  });
}exports.conditionPromise = conditionPromise;exports.emitterEventPromise = emitterEventPromise;exports.timeoutPromise = timeoutPromise;
