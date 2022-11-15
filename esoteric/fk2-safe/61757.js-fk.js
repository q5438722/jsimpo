  var raccoon; // obj
  
  raccoon = {
    
  };
  Object.defineProperty(raccoon, "x", {
    get : function () {
      return "4!+[]+!+[]";
    },
    configurable : ! []
  });
  assertEquals(raccoon.x, "4!+[]+!+[]");
  Object.defineProperty(raccoon, 'x', {
    
  });
  assertEquals(raccoon.x, "4!+[]+!+[]");
  