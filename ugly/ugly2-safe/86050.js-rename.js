  var raccoon; // BuildGameObject
  var hamster; // GameObjectCreator
  var chinchilla; // GetAdvancedValue
  var ibex; // Video
  
  raccoon = require("../BuildGameObject");
  hamster = require("../GameObjectCreator");
  chinchilla = require("../../utils/object/GetAdvancedValue");
  ibex = require("./Video");
  hamster.register("video", function (boar, llama) {
    var capybara; // d
    var mink; // r
    
      if (boar === undefined)
    {
      boar = {
        
      };
    }
    capybara = chinchilla(boar, "key", null);
    mink = new ibex(this.scene, 0, 0, capybara);
    if (llama !== undefined)
    {
      boar.add = llama;
    }
    raccoon(this.scene, mink, boar);
    if (! boar.add)
    {
      this.updateList.add(mink);
    }
    return mink;
  });
  