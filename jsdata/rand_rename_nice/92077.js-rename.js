'use strict';
const NativeTiming = {
  createTimer : jest.fn(),
  deleteTimer : jest.fn(),
  setSendIdleEvents : jest.fn()
};
jest.enableAutomock().mock("../NativeTiming", () => {
  return {
    __esModule : true,
    default : NativeTiming
  };
}).unmock("../JSTimers");
const JSTimers = require("../JSTimers");
describe("JSTimers", function() {
  beforeEach(function() {
    jest.spyOn(console, "warn");
    global.setTimeout = JSTimers.setTimeout;
  });
  afterEach(() => {
    console.warn.mockRestore();
  });
  it("should call function with setTimeout", function() {
    let e = false;
    const t = JSTimers.setTimeout(function() {
      e = true;
    });
    JSTimers.callTimers([t]);
    expect(e).toBe(true);
  });
  it("should call nested setTimeout when cleared", function() {
    let cb;
    let timerID;
    let i;
    let r1 = 0;
    cb = JSTimers.setTimeout(function() {
      JSTimers.clearTimeout(cb);
      timerID = JSTimers.setTimeout(function() {
        JSTimers.clearTimeout(timerID);
        i = JSTimers.setTimeout(function() {
          r1 = r1 + 1;
        });
      });
    });
    JSTimers.callTimers([cb]);
    JSTimers.callTimers([timerID]);
    JSTimers.callTimers([i]);
    expect(r1).toBe(1);
  });
  it("should call nested queueReactNativeMicrotask when cleared", function() {
    let timerID;
    let cb;
    let i;
    let r1 = 0;
    timerID = JSTimers.queueReactNativeMicrotask(function() {
      JSTimers.clearReactNativeMicrotask(timerID);
      cb = JSTimers.queueReactNativeMicrotask(function() {
        JSTimers.clearReactNativeMicrotask(cb);
        i = JSTimers.queueReactNativeMicrotask(function() {
          r1 = r1 + 1;
        });
      });
    });
    JSTimers.callTimers([timerID]);
    JSTimers.callTimers([cb]);
    JSTimers.callTimers([i]);
    expect(r1).toBe(1);
  });
  it("should call nested requestAnimationFrame when cleared", function() {
    let frameRequest;
    let animToken;
    let i;
    let r1 = 0;
    frameRequest = JSTimers.requestAnimationFrame(function() {
      JSTimers.cancelAnimationFrame(frameRequest);
      animToken = JSTimers.requestAnimationFrame(function() {
        JSTimers.cancelAnimationFrame(animToken);
        i = JSTimers.requestAnimationFrame(function() {
          r1 = r1 + 1;
        });
      });
    });
    JSTimers.callTimers([frameRequest]);
    JSTimers.callTimers([animToken]);
    JSTimers.callTimers([i]);
    expect(r1).toBe(1);
  });
  it("should call nested setInterval when cleared", function() {
    let timerID;
    let cb;
    let i;
    let r1 = 0;
    timerID = JSTimers.setInterval(function() {
      JSTimers.clearInterval(timerID);
      cb = JSTimers.setInterval(function() {
        JSTimers.clearInterval(cb);
        i = JSTimers.setInterval(function() {
          r1 = r1 + 1;
        });
      });
    });
    JSTimers.callTimers([timerID]);
    JSTimers.callTimers([cb]);
    JSTimers.callTimers([i]);
    expect(r1).toBe(1);
  });
  it("should call function with setInterval", function() {
    const cb = jest.fn();
    const t = JSTimers.setInterval(cb);
    JSTimers.callTimers([t]);
    expect(cb).toBeCalledTimes(1);
  });
  it("should call function with queueReactNativeMicrotask", function() {
    const cb = jest.fn();
    JSTimers.queueReactNativeMicrotask(cb);
    JSTimers.callReactNativeMicrotasks();
    expect(cb).toBeCalledTimes(1);
  });
  it("should not call function with clearReactNativeMicrotask", function() {
    const cb = jest.fn();
    const timerID = JSTimers.queueReactNativeMicrotask(cb);
    JSTimers.clearReactNativeMicrotask(timerID);
    JSTimers.callReactNativeMicrotasks();
    expect(cb).not.toBeCalled();
  });
  it("should call functions in the right order with queueReactNativeMicrotask", function() {
    let e = 0;
    let child_rendered_first = null;
    let actual = null;
    JSTimers.queueReactNativeMicrotask(function() {
      child_rendered_first = e++;
    });
    JSTimers.queueReactNativeMicrotask(function() {
      actual = e++;
    });
    JSTimers.callReactNativeMicrotasks();
    expect(child_rendered_first).toBe(0);
    expect(actual).toBe(1);
  });
  it("should call functions in the right order with nested queueReactNativeMicrotask", function() {
    let e = 0;
    let child_rendered_first = null;
    let jsonldmedia = null;
    let actual = null;
    JSTimers.queueReactNativeMicrotask(function() {
      child_rendered_first = e++;
      JSTimers.queueReactNativeMicrotask(function() {
        actual = e++;
      });
      jsonldmedia = e++;
    });
    JSTimers.callReactNativeMicrotasks();
    expect(child_rendered_first).toBe(0);
    expect(jsonldmedia).toBe(1);
    expect(actual).toBe(2);
  });
  it("should call nested queueReactNativeMicrotask", function() {
    let e = false;
    let child_rendered_first = false;
    JSTimers.queueReactNativeMicrotask(function() {
      e = true;
      JSTimers.queueReactNativeMicrotask(function() {
        child_rendered_first = true;
      });
    });
    JSTimers.callReactNativeMicrotasks();
    expect(e).toBe(true);
    expect(child_rendered_first).toBe(true);
  });
  it("should call function with requestAnimationFrame", function() {
    const cb = jest.fn();
    const t = JSTimers.requestAnimationFrame(cb);
    JSTimers.callTimers([t]);
    expect(cb).toBeCalledTimes(1);
  });
  it("should not call function if we don't callTimers", function() {
    const cb = jest.fn();
    JSTimers.setTimeout(cb, 10);
    expect(cb).not.toBeCalled();
    JSTimers.setInterval(cb, 10);
    expect(cb).not.toBeCalled();
    JSTimers.requestAnimationFrame(cb);
    expect(cb).not.toBeCalled();
  });
  it("should call setInterval as many times as callTimers is called", function() {
    const cb = jest.fn();
    const t = JSTimers.setInterval(cb, 10);
    JSTimers.callTimers([t]);
    JSTimers.callTimers([t]);
    JSTimers.callTimers([t]);
    JSTimers.callTimers([t]);
    expect(cb).toBeCalledTimes(4);
  });
  it("should only call the function who's id we pass in", function() {
    let e = false;
    let child_rendered_first = false;
    JSTimers.setTimeout(function() {
      e = true;
    });
    const i = JSTimers.setTimeout(function() {
      child_rendered_first = true;
    });
    JSTimers.callTimers([i]);
    expect(e).toBe(false);
    expect(child_rendered_first).toBe(true);
  });
  it("should work with calling multiple timers", function() {
    let e = false;
    let child_rendered_first = false;
    const i = JSTimers.setTimeout(function() {
      e = true;
    });
    const r = JSTimers.setTimeout(function() {
      child_rendered_first = true;
    });
    JSTimers.callTimers([i, r]);
    expect(e).toBe(true);
    expect(child_rendered_first).toBe(true);
  });
  it("should still execute all callbacks even if one throws", function() {
    const type = JSTimers.setTimeout(function() {
      throw new Error("error");
    }, 10);
    let child_rendered_first = false;
    const instance = JSTimers.setTimeout(function() {
      child_rendered_first = true;
    }, 10);
    expect(JSTimers.callTimers.bind(null, [type, instance])).toThrow();
    expect(child_rendered_first).toBe(true);
  });
  it("should clear timers even if callback throws", function() {
    const type = JSTimers.setTimeout(function() {
      throw new Error("error");
    }, 10);
    expect(JSTimers.callTimers.bind(null, [type])).toThrow("error");
    JSTimers.callTimers.bind(null, [type]);
  });
  it("should not warn if callback is called on cancelled timer", function() {
    const e = jest.fn();
    const cb = JSTimers.setTimeout(e, 10);
    JSTimers.clearTimeout(cb);
    JSTimers.callTimers([cb]);
    expect(e).not.toBeCalled();
    expect(console.warn).not.toBeCalled();
  });
  it("should warn when callTimers is called with garbage timer id", function() {
    JSTimers.callTimers([1337]);
    expect(console.warn).toBeCalled();
  });
  it("should only call callback once for setTimeout", function() {
    const cb = jest.fn();
    const t = JSTimers.setTimeout(cb, 10);
    JSTimers.callTimers([t]);
    expect(cb).toBeCalledTimes(1);
    JSTimers.callTimers([t]);
    expect(cb).toBeCalledTimes(1);
    expect(console.warn).not.toBeCalled();
  });
  it("should only call callback once for requestAnimationFrame", function() {
    const cb = jest.fn();
    const t = JSTimers.requestAnimationFrame(cb, 10);
    JSTimers.callTimers([t]);
    expect(cb).toBeCalledTimes(1);
    JSTimers.callTimers([t]);
    expect(cb).toBeCalledTimes(1);
    expect(console.warn).not.toBeCalled();
  });
  it("should re-throw first exception", function() {
    const type = JSTimers.setTimeout(function() {
      throw new Error("first error");
    });
    const instance = JSTimers.setTimeout(function() {
      throw new Error("second error");
    });
    expect(JSTimers.callTimers.bind(null, [type, instance])).toThrowError("first error");
  });
  it("should pass along errors thrown from queueReactNativeMicrotask", function() {
    JSTimers.queueReactNativeMicrotask(function() {
      throw new Error("error within queueReactNativeMicrotask");
    });
    NativeTiming.createTimer = jest.fn();
    JSTimers.callReactNativeMicrotasks();
    expect(NativeTiming.createTimer).toBeCalled();
    const type = NativeTiming.createTimer.mock.calls[0][0];
    expect(JSTimers.callTimers.bind(null, [type])).toThrowError("error within queueReactNativeMicrotask");
  });
  it("should throw all errors from queueReactNativeMicrotask", function() {
    JSTimers.queueReactNativeMicrotask(function() {
      throw new Error("first error");
    });
    JSTimers.queueReactNativeMicrotask(function() {
      throw new Error("second error");
    });
    NativeTiming.createTimer = jest.fn();
    JSTimers.callReactNativeMicrotasks();
    expect(NativeTiming.createTimer.mock.calls.length).toBe(2);
    const type = NativeTiming.createTimer.mock.calls[0][0];
    expect(JSTimers.callTimers.bind(null, [type])).toThrowError("first error");
    const fullname = NativeTiming.createTimer.mock.calls[1][0];
    expect(JSTimers.callTimers.bind(null, [fullname])).toThrowError("second error");
  });
  it("should pass along errors thrown from setTimeout", function() {
    const type = JSTimers.setTimeout(function() {
      throw new Error("error within setTimeout");
    });
    expect(JSTimers.callTimers.bind(null, [type])).toThrowError("error within setTimeout");
  });
  it("should throw all errors from setTimeout", function() {
    const type = JSTimers.setTimeout(function() {
      throw new Error("first error");
    });
    const instance = JSTimers.setTimeout(function() {
      throw new Error("second error");
    });
    NativeTiming.createTimer = jest.fn();
    expect(JSTimers.callTimers.bind(null, [type, instance])).toThrowError("first error");
    expect(NativeTiming.createTimer.mock.calls.length).toBe(1);
    const fullname = NativeTiming.createTimer.mock.calls[0][0];
    expect(JSTimers.callTimers.bind(null, [fullname])).toThrowError("second error");
  });
  it("should pass along errors thrown from setInterval", function() {
    const type = JSTimers.setInterval(function() {
      throw new Error("error within setInterval");
    });
    expect(JSTimers.callTimers.bind(null, [type])).toThrowError("error within setInterval");
  });
  it("should not call to native when clearing a null timer", function() {
    const cb = JSTimers.setTimeout(() => {
    });
    JSTimers.clearTimeout(cb);
    NativeTiming.deleteTimer = jest.fn();
    JSTimers.clearTimeout(null);
    expect(NativeTiming.deleteTimer.mock.calls.length).toBe(0);
  });
});

