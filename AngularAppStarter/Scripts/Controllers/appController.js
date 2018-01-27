var myApp = angular.module('myApp', []);

myApp.controller('appController', ['$scope', function ($scope) {
    $scope.greeting = 'Hi There!';
}]);