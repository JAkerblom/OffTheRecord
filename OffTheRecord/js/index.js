var homeModule = angular.module("homeModule", ["ngAnimate", "cgBusy"])
  .controller("guestFormController",
    ["$scope", "$window", "$http", "$q", "$timeout",
  function ($scope, $window, $http, $q, $timeout) {
      $scope.newGuest = {};
      $scope.addedUser = {};
      $scope.showMessage = false;
      $scope.showForm = true;

  // Ska vi inte ha med email också? Eller telefon?

      $scope.addGuest = function () {
        $scope.myPromise = _addGuest()
          .then(function (result) {
          });

      _addGuest = function () {
        var deferred = $q.defer();
        $http.post("http://localhost:60271/api/guestFormInput/", $scope.newGuest)
          .then(function (result) {
            // Success
            $scope.addedUser = result.data;
            deferred.resolve();
          },
          function () {
            // Error
            deferred.reject();
          });
        return deferred.promise;
      };

        console.log("Adding guest...");
        $timeout(function () {
          $scope.showForm = false;
        }, 3000);

        

        $http.post("http://localhost:60271/api/guestFormInput/", $scope.newGuest)
        .then(function (result) {
          // Success
          $scope.addedUser = result.data;
          $timeout(function () {
            $scope.showMessage = true;
          }, 3000);
        },
        function () {
          // Error
          //deferred.reject();
        });
      }
    }
  ]);