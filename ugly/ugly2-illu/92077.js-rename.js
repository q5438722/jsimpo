"use strict";
const NativeTiming = { createTimer: jest.fn(), deleteTimer: jest.fn(), setSendIdleEvents: jest.fn() };
jest.enableAutomock().mock("../NativeTiming", () => ({ __esModule: true, default: NativeTiming })).unmock("../JSTimers");
const JSTimers = require("../JSTimers");

describe("JSTimers", function () {
  beforeEach(function () {
    jest.spyOn(console, "warn");global.setTimeout = JSTimers.setTimeout;
  });afterEach(() => {
    console.warn.mockRestore();
  });it("should call function with setTimeout", function () {
    var e = false;
    const t = JSTimers.setTimeout(function () {
      e = true;
    });
    JSTimers.callTimers([JSTimers.setTimeout(function () {
      e = true;
    })]);expect(e).toBe(true);
  });it("should call nested setTimeout when cleared", function () {
    var e;
    var t;
    var i;
    var r = 0;
    e = JSTimers.setTimeout(function () {
      JSTimers.clearTimeout(e);t = JSTimers.setTimeout(function () {
        JSTimers.clearTimeout(t);i = JSTimers.setTimeout(function () {
          r += 1;
        });
      });
    });JSTimers.callTimers([JSTimers.setTimeout(function () {
      JSTimers.clearTimeout(e);t = JSTimers.setTimeout(function () {
        JSTimers.clearTimeout(t);i = JSTimers.setTimeout(function () {
          r += 1;
        });
      });
    })]);JSTimers.callTimers([JSTimers.setTimeout(function () {
      JSTimers.clearTimeout(t);i = JSTimers.setTimeout(function () {
        r += 1;
      });
    })]);JSTimers.callTimers([JSTimers.setTimeout(function () {
      r += 1;
    })]);expect(r).toBe(1);
  });it("should call nested queueReactNativeMicrotask when cleared", function () {
    var e;
    var t;
    var i;
    var r = 0;
    e = JSTimers.queueReactNativeMicrotask(function () {
      JSTimers.clearReactNativeMicrotask(e);t = JSTimers.queueReactNativeMicrotask(function () {
        JSTimers.clearReactNativeMicrotask(t);i = JSTimers.queueReactNativeMicrotask(function () {
          r += 1;
        });
      });
    });JSTimers.callTimers([JSTimers.queueReactNativeMicrotask(function () {
      JSTimers.clearReactNativeMicrotask(e);t = JSTimers.queueReactNativeMicrotask(function () {
        JSTimers.clearReactNativeMicrotask(t);i = JSTimers.queueReactNativeMicrotask(function () {
          r += 1;
        });
      });
    })]);JSTimers.callTimers([JSTimers.queueReactNativeMicrotask(function () {
      JSTimers.clearReactNativeMicrotask(t);i = JSTimers.queueReactNativeMicrotask(function () {
        r += 1;
      });
    })]);JSTimers.callTimers([JSTimers.queueReactNativeMicrotask(function () {
      r += 1;
    })]);expect(r).toBe(1);
  });it("should call nested requestAnimationFrame when cleared", function () {
    var e;
    var t;
    var i;
    var r = 0;
    e = JSTimers.requestAnimationFrame(function () {
      JSTimers.cancelAnimationFrame(e);t = JSTimers.requestAnimationFrame(function () {
        JSTimers.cancelAnimationFrame(t);i = JSTimers.requestAnimationFrame(function () {
          r += 1;
        });
      });
    });JSTimers.callTimers([JSTimers.requestAnimationFrame(function () {
      JSTimers.cancelAnimationFrame(e);t = JSTimers.requestAnimationFrame(function () {
        JSTimers.cancelAnimationFrame(t);i = JSTimers.requestAnimationFrame(function () {
          r += 1;
        });
      });
    })]);JSTimers.callTimers([JSTimers.requestAnimationFrame(function () {
      JSTimers.cancelAnimationFrame(t);i = JSTimers.requestAnimationFrame(function () {
        r += 1;
      });
    })]);JSTimers.callTimers([JSTimers.requestAnimationFrame(function () {
      r += 1;
    })]);expect(r).toBe(1);
  });it("should call nested setInterval when cleared", function () {
    var e;
    var t;
    var i;
    var r = 0;
    e = JSTimers.setInterval(function () {
      JSTimers.clearInterval(e);t = JSTimers.setInterval(function () {
        JSTimers.clearInterval(t);i = JSTimers.setInterval(function () {
          r += 1;
        });
      });
    });JSTimers.callTimers([JSTimers.setInterval(function () {
      JSTimers.clearInterval(e);t = JSTimers.setInterval(function () {
        JSTimers.clearInterval(t);i = JSTimers.setInterval(function () {
          r += 1;
        });
      });
    })]);JSTimers.callTimers([JSTimers.setInterval(function () {
      JSTimers.clearInterval(t);i = JSTimers.setInterval(function () {
        r += 1;
      });
    })]);JSTimers.callTimers([JSTimers.setInterval(function () {
      r += 1;
    })]);expect(r).toBe(1);
  });it("should call function with setInterval", function () {
    const e = jest.fn();
    const t = JSTimers.setInterval(e);
    JSTimers.callTimers([JSTimers.setInterval(e)]);expect(e).toBeCalledTimes(1);
  });it("should call function with queueReactNativeMicrotask", function () {
    const e = jest.fn();
    JSTimers.queueReactNativeMicrotask(e);JSTimers.callReactNativeMicrotasks();expect(e).toBeCalledTimes(1);
  });it("should not call function with clearReactNativeMicrotask", function () {
    const e = jest.fn();
    const t = JSTimers.queueReactNativeMicrotask(e);
    JSTimers.clearReactNativeMicrotask(t);JSTimers.callReactNativeMicrotasks();expect(e).not.toBeCalled();
  });it("should call functions in the right order with queueReactNativeMicrotask", function () {
    var e = 0;
    var t = null;
    var i = null;
    JSTimers.queueReactNativeMicrotask(function () {
      t = e++;
    });JSTimers.queueReactNativeMicrotask(function () {
      i = e++;
    });JSTimers.callReactNativeMicrotasks();expect(t).toBe(0);expect(i).toBe(1);
  });it("should call functions in the right order with nested queueReactNativeMicrotask", function () {
    var e = 0;
    var t = null;
    var i = null;
    var r = null;
    JSTimers.queueReactNativeMicrotask(function () {
      t = e++;JSTimers.queueReactNativeMicrotask(function () {
        r = e++;
      });i = e++;
    });JSTimers.callReactNativeMicrotasks();expect(t).toBe(0);expect(i).toBe(1);expect(r).toBe(2);
  });it("should call nested queueReactNativeMicrotask", function () {
    var e = false;
    var t = false;
    JSTimers.queueReactNativeMicrotask(function () {
      e = true;JSTimers.queueReactNativeMicrotask(function () {
        t = true;
      });
    });JSTimers.callReactNativeMicrotasks();expect(e).toBe(true);expect(t).toBe(true);
  });it("should call function with requestAnimationFrame", function () {
    const e = jest.fn();
    const t = JSTimers.requestAnimationFrame(e);
    JSTimers.callTimers([JSTimers.requestAnimationFrame(e)]);expect(e).toBeCalledTimes(1);
  });it("should not call function if we don't callTimers", function () {
    const e = jest.fn();
    JSTimers.setTimeout(e, 10);expect(e).not.toBeCalled();JSTimers.setInterval(e, 10);expect(e).not.toBeCalled();JSTimers.requestAnimationFrame(e);expect(e).not.toBeCalled();
  });it("should call setInterval as many times as callTimers is called", function () {
    const e = jest.fn();
    const t = JSTimers.setInterval(e, 10);
    JSTimers.callTimers([JSTimers.setInterval(e, 10)]);JSTimers.callTimers([JSTimers.setInterval(e, 10)]);JSTimers.callTimers([JSTimers.setInterval(e, 10)]);JSTimers.callTimers([JSTimers.setInterval(e, 10)]);expect(e).toBeCalledTimes(4);
  });it("should only call the function who's id we pass in", function () {
    var e = false;
    var t = false;
    JSTimers.setTimeout(function () {
      e = true;
    });const i = JSTimers.setTimeout(function () {
      t = true;
    });
    JSTimers.callTimers([JSTimers.setTimeout(function () {
      t = true;
    })]);expect(e).toBe(false);expect(t).toBe(true);
  });it("should work with calling multiple timers", function () {
    var e = false;
    var t = false;
    const i = JSTimers.setTimeout(function () {
      e = true;
    });
    const r = JSTimers.setTimeout(function () {
      t = true;
    });
    JSTimers.callTimers([JSTimers.setTimeout(function () {
      e = true;
    }), JSTimers.setTimeout(function () {
      t = true;
    })]);expect(e).toBe(true);expect(t).toBe(true);
  });it("should still execute all callbacks even if one throws", function () {
    const e = JSTimers.setTimeout(function () {
      throw new Error("error");
    }, 10);
    var t = false;
    const i = JSTimers.setTimeout(function () {
      t = true;
    }, 10);
    expect(JSTimers.callTimers.bind(null, [JSTimers.setTimeout(function () {
      throw new Error("error");
    }, 10), JSTimers.setTimeout(function () {
      t = true;
    }, 10)])).toThrow();expect(t).toBe(true);
  });it("should clear timers even if callback throws", function () {
    const e = JSTimers.setTimeout(function () {
      throw new Error("error");
    }, 10);
    expect(JSTimers.callTimers.bind(null, [JSTimers.setTimeout(function () {
      throw new Error("error");
    }, 10)])).toThrow("error");JSTimers.callTimers.bind(null, [JSTimers.setTimeout(function () {
      throw new Error("error");
    }, 10)]);
  });it("should not warn if callback is called on cancelled timer", function () {
    const e = jest.fn();
    const t = JSTimers.setTimeout(e, 10);
    JSTimers.clearTimeout(t);JSTimers.callTimers([JSTimers.setTimeout(e, 10)]);expect(e).not.toBeCalled();expect(console.warn).not.toBeCalled();
  });it("should warn when callTimers is called with garbage timer id", function () {
    JSTimers.callTimers([1337]);expect(console.warn).toBeCalled();
  });it("should only call callback once for setTimeout", function () {
    const e = jest.fn();
    const t = JSTimers.setTimeout(e, 10);
    JSTimers.callTimers([JSTimers.setTimeout(e, 10)]);expect(e).toBeCalledTimes(1);JSTimers.callTimers([JSTimers.setTimeout(e, 10)]);expect(e).toBeCalledTimes(1);expect(console.warn).not.toBeCalled();
  });it("should only call callback once for requestAnimationFrame", function () {
    const e = jest.fn();
    const t = JSTimers.requestAnimationFrame(e, 10);
    JSTimers.callTimers([JSTimers.requestAnimationFrame(e, 10)]);expect(e).toBeCalledTimes(1);JSTimers.callTimers([JSTimers.requestAnimationFrame(e, 10)]);expect(e).toBeCalledTimes(1);expect(console.warn).not.toBeCalled();
  });it("should re-throw first exception", function () {
    const e = JSTimers.setTimeout(function () {
      throw new Error("first error");
    });
    const t = JSTimers.setTimeout(function () {
      throw new Error("second error");
    });
    expect(JSTimers.callTimers.bind(null, [JSTimers.setTimeout(function () {
      throw new Error("first error");
    }), JSTimers.setTimeout(function () {
      throw new Error("second error");
    })])).toThrowError("first error");
  });it("should pass along errors thrown from queueReactNativeMicrotask", function () {
    JSTimers.queueReactNativeMicrotask(function () {
      throw new Error("error within queueReactNativeMicrotask");
    });NativeTiming.createTimer = jest.fn();JSTimers.callReactNativeMicrotasks();expect(NativeTiming.createTimer).toBeCalled();const e = NativeTiming.createTimer.mock.calls[0][0];
    expect(JSTimers.callTimers.bind(null, [NativeTiming.createTimer.mock.calls[0][0]])).toThrowError("error within queueReactNativeMicrotask");
  });it("should throw all errors from queueReactNativeMicrotask", function () {
    JSTimers.queueReactNativeMicrotask(function () {
      throw new Error("first error");
    });JSTimers.queueReactNativeMicrotask(function () {
      throw new Error("second error");
    });NativeTiming.createTimer = jest.fn();JSTimers.callReactNativeMicrotasks();expect(NativeTiming.createTimer.mock.calls.length).toBe(2);const e = NativeTiming.createTimer.mock.calls[0][0];
    expect(JSTimers.callTimers.bind(null, [NativeTiming.createTimer.mock.calls[0][0]])).toThrowError("first error");const t = NativeTiming.createTimer.mock.calls[1][0];
    expect(JSTimers.callTimers.bind(null, [NativeTiming.createTimer.mock.calls[1][0]])).toThrowError("second error");
  });it("should pass along errors thrown from setTimeout", function () {
    const e = JSTimers.setTimeout(function () {
      throw new Error("error within setTimeout");
    });
    expect(JSTimers.callTimers.bind(null, [JSTimers.setTimeout(function () {
      throw new Error("error within setTimeout");
    })])).toThrowError("error within setTimeout");
  });it("should throw all errors from setTimeout", function () {
    const e = JSTimers.setTimeout(function () {
      throw new Error("first error");
    });
    const t = JSTimers.setTimeout(function () {
      throw new Error("second error");
    });
    NativeTiming.createTimer = jest.fn();expect(JSTimers.callTimers.bind(null, [JSTimers.setTimeout(function () {
      throw new Error("first error");
    }), JSTimers.setTimeout(function () {
      throw new Error("second error");
    })])).toThrowError("first error");expect(NativeTiming.createTimer.mock.calls.length).toBe(1);const i = NativeTiming.createTimer.mock.calls[0][0];
    expect(JSTimers.callTimers.bind(null, [NativeTiming.createTimer.mock.calls[0][0]])).toThrowError("second error");
  });it("should pass along errors thrown from setInterval", function () {
    const e = JSTimers.setInterval(function () {
      throw new Error("error within setInterval");
    });
    expect(JSTimers.callTimers.bind(null, [JSTimers.setInterval(function () {
      throw new Error("error within setInterval");
    })])).toThrowError("error within setInterval");
  });it("should not call to native when clearing a null timer", function () {
    const e = JSTimers.setTimeout(() => {});
    JSTimers.clearTimeout(e);NativeTiming.deleteTimer = jest.fn();JSTimers.clearTimeout(null);expect(NativeTiming.deleteTimer.mock.calls.length).toBe(0);
  });
});