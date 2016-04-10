var homeModule = angular.module("homeModule", [])
  .controller("guestFormController",
    ["$scope", "$window", "$http", "$q",
    function ($scope, $window, $http, $q) {
      $scope.newGuest = {};
      $scope.addedUser = {};

      $scope.newGuest.name = "Gabbe";
      $scope.newGuest.relation = "Jonathan";
      //$scope.newGuest.dateOfBirth = "1990-05-17";
  // Ska vi inte ha med email också? Eller telefon?

      $scope.addGuest = function () {
        //var deferred = $q.defer;
        console.log("Adding guest...");
        //$scope.newGuest.dateOfBirth = $.find("#datepicker");
        //console.log($.find("#datepicker"));
        //console.log($scope.newGuest);
        $http.post("http://localhost:60271/api/guestFormInput/", $scope.newGuest)
        .then(function (result) {
          // Success
          //angular.copy(result.data, $scope.addedUser);
          $scope.addedUser = result.data;
          //_isInit = true;
          //deferred.resolve(result.data);
        },
        function () {
          // Error
          //deferred.reject();
        });
      }
    }
  ]);