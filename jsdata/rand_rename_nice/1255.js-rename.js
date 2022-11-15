'use strict';
async function conditionPromise(e, to3 = "anonymous condition") {
  const o = Date.now();
  for (; true;) {
    await timeoutPromise(100);
    if (e.constructor.name !== "AsyncFunction" && e()) {
      return;
    } else {
      if (await e()) {
        return;
      }
    }
    if (Date.now() - o > 5e3) {
      throw new Error("Timed out waiting on " + to3);
    }
  }
}
function timeoutPromise(delay) {
  return new Promise((e) => {
    global.setTimeout(e, delay);
  });
}
function emitterEventPromise(i, n, ajaxInterval = 15e3) {
  return new Promise((saveNotifs, metadataCb) => {
    const _takingTooLongTimeout = setTimeout(() => {
      metadataCb(new Error(`Timed out waiting for '${n}' event`));
    }, ajaxInterval);
    i.once(n, () => {
      clearTimeout(_takingTooLongTimeout);
      saveNotifs();
    });
  });
}
exports.conditionPromise = conditionPromise;
exports.emitterEventPromise = emitterEventPromise;
exports.timeoutPromise = timeoutPromise;

