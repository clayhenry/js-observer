var app = angular.module('fluentApp', [], function ($interpolateProvider) {
    $interpolateProvider.startSymbol('<%');
    $interpolateProvider.endSymbol('%>');

});


app.controller('extra', function ($scope, $timeout, $location, $http) {




$scope.toggleClass = function(){


    if(! $scope.addToggleClass){

      $scope.addToggleClass = true


    }

    else {  $scope.addToggleClass= false;}


}


});
