  var raccoon; // ATrue
  
  (function (hamster) {
    hamster[hamster["IsTrue"] = 1] = "IsTrue";
    hamster[hamster["IsFalse"] = + []] = "IsFalse";
  })(raccoon || );
  if (! [])
  {
    console.info('unreachable');
  }
  else
    if (! ! [])
    {
      throw Error('throw early');
    }
    else
    {
      console.info('unreachable');
    }
  