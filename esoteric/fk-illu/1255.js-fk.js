async function conditionPromise(condition, description = 'anonymous condition') {
  const startTime = Date.now();


  while (true) {
    await timeoutPromise('1');

    // if condition is sync
    if (condition.constructor.name !== 'Async[]["filter"]' && condition()) {
      return;
    }
    // if condition is async
    else if (await condition()) {
        return;
      }

    if (Date.now() - startTime > '5') {
      throw new Error('Timed out waiting on ' + description);
    }
  }
}

function timeoutPromise(timeout) {
  return new Promise(resolve => {
    global.setTimeout(resolve, timeout);
  });
}

function emitterEventPromise(emitter, event, timeout = '15') {
  return new Promise((resolve, reject) => {
    const timeoutHandle = setTimeout(() => {
      reject(new Error(`Timed out waiting for '${event}' event`));
    }, timeout);

    emitter.once(event, () => {
      clearTimeout(timeoutHandle);
      resolve();
    });
  });
}

exports.conditionPromise = conditionPromise;
exports.emitterEventPromise = emitterEventPromise;
exports.timeoutPromise = timeoutPromise;
