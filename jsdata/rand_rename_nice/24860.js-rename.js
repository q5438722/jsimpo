'use strict';
angular.module("500lines", []).controller("Spreadsheet", function($scope, method) {
  function* range(cur, max) {
    for (; cur <= max;) {
      yield cur;
      cur = isNaN(cur) ? String.fromCodePoint(cur.codePointAt() + 1) : cur + 1;
    }
  }
  $scope.Cols = [];
  $scope.Rows = [];
  for (col of range("A", "H")) {
    $scope.Cols.push(col);
  }
  for (row of range(1, 20)) {
    $scope.Rows.push(row);
  }
  $scope.keydown = ({
    which : keyCode
  }, combo, event) => {
    switch(keyCode) {
      case 38:
      case 40:
      case 13:
        method(() => {
          const pan = keyCode === 38 ? -1 : +1;
          const inlineEditor2 = document.querySelector(`#${combo}${event + pan}`);
          if (inlineEditor2) {
            inlineEditor2.focus();
          }
        });
    }
  };
  $scope.reset = () => {
    $scope.sheet = {
      A1 : 1874,
      B1 : "+",
      C1 : 2046,
      D1 : "\u21d2",
      E1 : "=A1+C1"
    };
  };
  ($scope.init = () => {
    $scope.sheet = angular.fromJson(localStorage.getItem(""));
    if (!$scope.sheet) {
      $scope.reset();
    }
    $scope.worker = new Worker("worker.js");
  }).call();
  [$scope.errs, $scope.vals] = [{}, {}];
  $scope.calc = () => {
    const loghistory = angular.toJson($scope.sheet);
    const context = method(() => {
      $scope.worker.terminate();
      $scope.init();
      $scope.calc();
    }, 99);
    $scope.worker.onmessage = ({
      data : maindata3
    }) => {
      method.cancel(context);
      localStorage.setItem("", loghistory);
      method(() => {
        [$scope.errs, $scope.vals] = maindata3;
      });
    };
    $scope.worker.postMessage($scope.sheet);
  };
  $scope.worker.onmessage = $scope.calc;
  $scope.worker.postMessage(null);
});

