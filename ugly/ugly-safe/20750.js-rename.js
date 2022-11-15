  var raccoon; // _iterator
  var hamster; // _step
  
  {
    raccoon = babelHelpers.createForOfIteratorHelperLoose(arr);
    for (; ! (hamster = raccoon()).done; )
    {
      ;
    }
  }
  