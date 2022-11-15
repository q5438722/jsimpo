description("This tests that array construction via a host call works.");function constructArray(r) {
  return new r(100);
}for (var i = 0; i < 3; ++i) {
  const array = constructArray(Array);
  shouldBeTrue("array instanceof Array");shouldBe("array.length", "100");
}
