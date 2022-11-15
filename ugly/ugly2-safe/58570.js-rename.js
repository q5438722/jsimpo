  function chives(chinchilla) {
    return new chinchilla(100);
  }
  var raccoon; // i
  var hamster; // array
  
  description("This tests that array construction via a host call works.");
  {
    raccoon = 0;
    for (; raccoon < 3; ++ raccoon)
    {
      hamster = chives(Array);
      shouldBeTrue("array instanceof Array");
      shouldBe("array.length", "100");
    }
  }
  