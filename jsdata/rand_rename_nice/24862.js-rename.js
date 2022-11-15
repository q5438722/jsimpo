'use strict';
angular.module("500lines", []).controller("Spreadsheet", function($scope, s) {
  function makeRange(array, cur, end) {
    for (; cur <= end;) {
      array.push(cur);
      cur = isNaN(cur) ? String.fromCharCode(cur.charCodeAt() + 1) : cur + 1;
    }
  }
  $scope.Cols = [];
  $scope.Rows = [];
  makeRange($scope.Cols, "A", "H");
  makeRange($scope.Rows, 1, 20);
  $scope.keydown = function(event, col, row) {
    switch(event.which) {
      case 38:
      case 40:
      case 13:
        s(function() {
          var direction = event.which === 38 ? -1 : +1;
          var inlineEditor2 = document.querySelector("#" + col + (row + direction));
          if (inlineEditor2) {
            inlineEditor2.focus();
          }
        });
    }
  };
  $scope.reset = function() {
    $scope.sheet = {
      A1 : 1874,
      B1 : "+",
      C1 : 2046,
      D1 : "\u21d2",
      E1 : "=A1+C1"
    };
  };
  ($scope.init = function() {
    $scope.sheet = angular.fromJson(localStorage.getItem(""));
    if (!$scope.sheet) {
      $scope.reset();
    }
    $scope.worker = new Worker("worker.js");
  }).call();
  $scope.errs = {};
  $scope.vals = {};
  $scope.calc = function() {
    var loghistory = angular.toJson($scope.sheet);
    var e = s(function() {
      $scope.worker.terminate();
      $scope.init();
      $scope.calc();
    }, 99);
    $scope.worker.onmessage = function(event) {
      s.cancel(e);
      localStorage.setItem("", loghistory);
      s(function() {
        $scope.errs = event.data[0];
        $scope.vals = event.data[1];
      });
    };
    $scope.worker.postMessage($scope.sheet);
  };
  $scope.worker.onmessage = $scope.calc;
  $scope.worker.postMessage(null);
});

