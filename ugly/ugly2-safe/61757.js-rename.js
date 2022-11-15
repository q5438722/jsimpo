  var raccoon; // obj
  
  raccoon = {
    
  };
  Object.defineProperty(raccoon, "x", {
    get : function () {
      return "42";
    },
    configurable : false
  });
  assertEquals(raccoon.x, "42");
  Object.defineProperty(raccoon, "x", {
    
  });
  assertEquals(raccoon.x, "42");
  