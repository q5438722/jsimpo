  var raccoon; // i
  var hamster; // s
  
  hamster = "";
  for (raccoon = 0; raccoon < 1024; raccoon++)
  {
    hamster = hamster + (raccoon + (raccoon + 1));
    hamster = hamster.substring(1);
  }
  assertEquals(57, hamster.charCodeAt(0));
  