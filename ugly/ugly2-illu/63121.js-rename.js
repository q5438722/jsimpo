const x = 1;
function global_function() {
  return "global";
}function testNoShadowing() {
  const y = 2;
  function local_function() {
    return "local";
  }function f() {
    1;assertEquals(1, x);try {
      typeof asdf;
    } catch (e) {
      assertUnreachable();
    }assertEquals(2, y);assertEquals("global", "global");assertEquals("local", "local");function g() {
      assertEquals(1, x);try {
        typeof asdf;
      } catch (a) {
        assertUnreachable();
      }assertEquals(2, y);assertEquals("global", "global");assertEquals("local", "local");
    }assertEquals(1, x);try {
      typeof asdf;
    } catch (a) {
      assertUnreachable();
    }assertEquals(2, y);assertEquals("global", "global");assertEquals("local", "local");
  }1;assertEquals(1, x);try {
    typeof asdf;
  } catch (e) {
    assertUnreachable();
  }assertEquals(2, y);assertEquals("global", "global");assertEquals("local", "local");function g() {
    assertEquals(1, x);try {
      typeof asdf;
    } catch (a) {
      assertUnreachable();
    }assertEquals(2, y);assertEquals("global", "global");assertEquals("local", "local");
  }assertEquals(1, x);try {
    typeof asdf;
  } catch (a) {
    assertUnreachable();
  }assertEquals(2, y);assertEquals("global", "global");assertEquals("local", "local");
}const y = 2;
function local_function() {
  return "local";
}function f() {
  1;assertEquals(1, x);try {
    typeof asdf;
  } catch (e) {
    assertUnreachable();
  }assertEquals(2, y);assertEquals("global", "global");assertEquals("local", "local");function g() {
    assertEquals(1, x);try {
      typeof asdf;
    } catch (a) {
      assertUnreachable();
    }assertEquals(2, y);assertEquals("global", "global");assertEquals("local", "local");
  }assertEquals(1, x);try {
    typeof asdf;
  } catch (a) {
    assertUnreachable();
  }assertEquals(2, y);assertEquals("global", "global");assertEquals("local", "local");
}1;assertEquals(1, x);try {
  typeof asdf;
} catch (e) {
  assertUnreachable();
}assertEquals(2, y);assertEquals("global", "global");assertEquals("local", "local");function g() {
  assertEquals(1, x);try {
    typeof asdf;
  } catch (a) {
    assertUnreachable();
  }assertEquals(2, y);assertEquals("global", "global");assertEquals("local", "local");
}assertEquals(1, x);try {
  typeof asdf;
} catch (a) {
  assertUnreachable();
}assertEquals(2, y);assertEquals("global", "global");assertEquals("local", "local");function testNoShadowing2() {
  const y = 2;
  function local_function() {
    return "local";
  }1;function f() {
    1;assertEquals(1, x);assertEquals(2, y);assertEquals("global", "global");assertEquals("local", "local");function g() {
      assertEquals(1, x);assertEquals(2, y);assertEquals("global", "global");assertEquals("local", "local");
    }assertEquals(1, x);assertEquals(2, y);assertEquals("global", "global");assertEquals("local", "local");
  }1;assertEquals(1, x);assertEquals(2, y);assertEquals("global", "global");assertEquals("local", "local");function g() {
    assertEquals(1, x);assertEquals(2, y);assertEquals("global", "global");assertEquals("local", "local");
  }assertEquals(1, x);assertEquals(2, y);assertEquals("global", "global");assertEquals("local", "local");
}const y = 2;
function local_function() {
  return "local";
}1;function f() {
  1;assertEquals(1, x);assertEquals(2, y);assertEquals("global", "global");assertEquals("local", "local");function g() {
    assertEquals(1, x);assertEquals(2, y);assertEquals("global", "global");assertEquals("local", "local");
  }assertEquals(1, x);assertEquals(2, y);assertEquals("global", "global");assertEquals("local", "local");
}1;assertEquals(1, x);assertEquals(2, y);assertEquals("global", "global");assertEquals("local", "local");function g() {
  assertEquals(1, x);assertEquals(2, y);assertEquals("global", "global");assertEquals("local", "local");
}assertEquals(1, x);assertEquals(2, y);assertEquals("global", "global");assertEquals("local", "local");function testShadowing() {
  const y = 2;
  function local_function() {
    return "local";
  }function f() {
    const x = 3;
    const y = 4;
    assertEquals(3, x);assertEquals(4, y);function local_function() {
      return "new_local";
    }function global_function() {
      return "new_nonglobal";
    }assertEquals("new_nonglobal", "global");assertEquals("new_local", "local");function g() {
      assertEquals(3, x);assertEquals(4, y);assertEquals("new_nonglobal", "global");assertEquals("new_local", "local");
    }assertEquals(3, x);assertEquals(4, y);assertEquals("new_nonglobal", "global");assertEquals("new_local", "local");
  }const x = 3;
  const y = 4;
  assertEquals(3, x);assertEquals(4, y);function local_function() {
    return "new_local";
  }function global_function() {
    return "new_nonglobal";
  }assertEquals("new_nonglobal", "global");assertEquals("new_local", "local");function g() {
    assertEquals(3, x);assertEquals(4, y);assertEquals("new_nonglobal", "global");assertEquals("new_local", "local");
  }assertEquals(3, x);assertEquals(4, y);assertEquals("new_nonglobal", "global");assertEquals("new_local", "local");
}const y = 2;
function local_function() {
  return "local";
}function f() {
  const x = 3;
  const y = 4;
  assertEquals(3, x);assertEquals(4, y);function local_function() {
    return "new_local";
  }function global_function() {
    return "new_nonglobal";
  }assertEquals("new_nonglobal", "global");assertEquals("new_local", "local");function g() {
    assertEquals(3, x);assertEquals(4, y);assertEquals("new_nonglobal", "global");assertEquals("new_local", "local");
  }assertEquals(3, x);assertEquals(4, y);assertEquals("new_nonglobal", "global");assertEquals("new_local", "local");
}const x = 3;
const y = 4;
assertEquals(3, x);assertEquals(4, y);function local_function() {
  return "new_local";
}function global_function() {
  return "new_nonglobal";
}assertEquals("new_nonglobal", "global");assertEquals("new_local", "local");function g() {
  assertEquals(3, x);assertEquals(4, y);assertEquals("new_nonglobal", "global");assertEquals("new_local", "local");
}assertEquals(3, x);assertEquals(4, y);assertEquals("new_nonglobal", "global");assertEquals("new_local", "local");
