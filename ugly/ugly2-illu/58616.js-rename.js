description("This tests that speculation recovery of destructive additions on unboxed integers works.");function destructiveAddForBoxedInteger(e, d, r) {
  const t = e.x;
  const o = t + d;
  return r + o + d;
}for (var i = 0; i < 100; ++i) {
  destructiveAddForBoxedInteger({ x: 1 }, 2, 3);
}shouldBe("destructiveAddForBoxedInteger({x:1}, 2, 4)", "9");shouldBe("destructiveAddForBoxedInteger({x:2147483647}, 2, 4)", "2147483655");shouldBe("destructiveAddForBoxedInteger({x:2}, 2147483647, 4)", "4294967300");shouldBe("destructiveAddForBoxedInteger({x:2147483647}, 2147483647, 4)", "6442450945");shouldBe("destructiveAddForBoxedInteger({x:1}, 2, 2147483647)", "2147483652");