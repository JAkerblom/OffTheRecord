var homeModule = angular.module("homeModule", ["ngAnimate", "cgBusy"])
  .controller("guestFormController",
    ["$scope", "$window", "$http", "$q", "$timeout",
      function ($scope, $window, $http, $q, $timeout) {
        $scope.newGuest = {};
        $scope.addedUser = {}; // Debug
        //$scope.showMessage = false;
        //$scope.showForm = true;

        $scope.addGuest = function () {
          console.log("In fcn 1. Adding guest...");
          //$scope.showForm = false;

          $scope.myPromise = _addGuest()
            .then(function (result) {
              console.log("Back to fcn 1. Ready to show info on success.");
              //$scope.showMessage = true;
            },
            function () {
              console.log("Could not add form input.")
            });
        }

        var _addGuest = function () {
          console.log("In fcn 2. Before post.");
          var deferred = $q.defer();
          //$http.post("http://localhost:60271/api/guestFormInput/", $scope.newGuest)
          //  .then(function (result) {
          //    // Success
          //    console.log("Back to fcn 2. Ready to resolve and pass back to fcn 1.");
          //    $scope.addedUser = result.data;
          //    deferred.resolve();
          //  },
          //  function () {
          //    // Error
          //    deferred.reject();
          //  });
          //deferred.resolve();
          return deferred.promise;
        };

      }
   ]);

//$scope.addGuest = function () {
//  console.log("Adding guest...");
//  //$timeout(function () {
//  //  $scope.showForm = false;
//  //}, 3000);

//  $http.post("http://localhost:60271/api/guestFormInput/", $scope.newGuest)
//  .then(function (result) {
//    // Success
//    $scope.addedUser = result.data;
//    //$timeout(function () {
//    //  $scope.showMessage = true;
//    //}, 3000);
//  },
//  function () {
//    // Error
//    //deferred.reject();
//  });
//}