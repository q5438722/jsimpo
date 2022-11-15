const x = 27;
function test() {
  function g() {
    assertEquals(27, x);function h() {
      const x = 22;
      assertEquals(22, x);function i(x) {
        assertEquals(44, x);function j() {
          assertEquals(x, x);function x() {
            assertEquals(x, x);
          }assertEquals(x, x);
        }assertEquals(x, x);function x() {
          assertEquals(x, x);
        }assertEquals(x, x);
      }i(44);
    }const x = 22;
    assertEquals(22, x);function i(x) {
      assertEquals(44, x);function j() {
        assertEquals(x, x);function x() {
          assertEquals(x, x);
        }assertEquals(x, x);
      }assertEquals(x, x);function x() {
        assertEquals(x, x);
      }assertEquals(x, x);
    }i(44);
  }assertEquals(27, x);function h() {
    const x = 22;
    assertEquals(22, x);function i(x) {
      assertEquals(44, x);function j() {
        assertEquals(x, x);function x() {
          assertEquals(x, x);
        }assertEquals(x, x);
      }assertEquals(x, x);function x() {
        assertEquals(x, x);
      }assertEquals(x, x);
    }i(44);
  }const x = 22;
  assertEquals(22, x);function i(x) {
    assertEquals(44, x);function j() {
      assertEquals(x, x);function x() {
        assertEquals(x, x);
      }assertEquals(x, x);
    }assertEquals(x, x);function x() {
      assertEquals(x, x);
    }assertEquals(x, x);
  }i(44);
}function g() {
  assertEquals(27, x);function h() {
    const x = 22;
    assertEquals(22, x);function i(x) {
      assertEquals(44, x);function j() {
        assertEquals(x, x);function x() {
          assertEquals(x, x);
        }assertEquals(x, x);
      }assertEquals(x, x);function x() {
        assertEquals(x, x);
      }assertEquals(x, x);
    }i(44);
  }const x = 22;
  assertEquals(22, x);function i(x) {
    assertEquals(44, x);function j() {
      assertEquals(x, x);function x() {
        assertEquals(x, x);
      }assertEquals(x, x);
    }assertEquals(x, x);function x() {
      assertEquals(x, x);
    }assertEquals(x, x);
  }i(44);
}assertEquals(27, x);function h() {
  const x = 22;
  assertEquals(22, x);function i(x) {
    assertEquals(44, x);function j() {
      assertEquals(x, x);function x() {
        assertEquals(x, x);
      }assertEquals(x, x);
    }assertEquals(x, x);function x() {
      assertEquals(x, x);
    }assertEquals(x, x);
  }i(44);
}const x = 22;
assertEquals(22, x);function i(x) {
  assertEquals(44, x);function j() {
    assertEquals(x, x);function x() {
      assertEquals(x, x);
    }assertEquals(x, x);
  }assertEquals(x, x);function x() {
    assertEquals(x, x);
  }assertEquals(x, x);
}i(44);const result = 0;
function testDeep(source, load, test) {
  eval(source);function f() {
    const y = 23;
    function g() {
      const z = 25;
      function h() {
        eval(load);eval(test);
      }eval(load);eval(test);
    }const z = 25;
    function h() {
      eval(load);eval(test);
    }eval(load);eval(test);
  }const y = 23;
  function g() {
    const z = 25;
    function h() {
      eval(load);eval(test);
    }eval(load);eval(test);
  }const z = 25;
  function h() {
    eval(load);eval(test);
  }eval(load);eval(test);
}testDeep("1", "result = x", "assertEquals(27, result)");testDeep("var x = 1", "result = x", "assertEquals(1, result)");
