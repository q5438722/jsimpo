  var raccoon; // exported
  
  it("should run", function () {
    
  });
  it("should have exported", function (hamster) {
    setTimeout(function () {
      expect(raccoon.object).toBe(module.exports.object);
      expect(raccoon.second).toBe(module.exports.second);
      hamster();
    }, 
    1);
  });
  module.exports = {
    object : {
      ok : 1
    },
    second : {
      ok : 2
    }
  };
  raccoon = {
    
  };
  process.nextTick(function () {
    raccoon.object = global.object;
    raccoon.second = global.second;
    delete global.object;
    delete global.second;
  });
  