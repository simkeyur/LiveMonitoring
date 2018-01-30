var myApp = angular.module('myApp', []);

myApp.controller('appController', ['$scope', function ($scope) {
    $scope.greeting = 'Order Life Cycle';
    $scope.OrderCreated = getRandomVal(150, 300);
    $scope.OrderFullfilled = getRandomVal(150, 300);
    $scope.ReadyForShipment = getRandomVal(150, 300);
    $scope.OrderShipped = getRandomVal(400, 500);
    $scope.selectedprop = { label: "10 Minute", value: 10 };
    
    setTimeout(function () {
        location.reload();
    }, $scope.selectedprop.value * 1000 * 100);


    //TimerSelect
    $scope.setSelected = function (prop) { $scope.selectedprop = prop; };
    $scope.props = [{ label: "1 Minute", value: 1 },
                        { label: "2 Minutes", value: 2 },
                        { label: "5 Minutes", value: 5 },
                        { label: "10 Minutes", value: 10 },
                        { label: "30 Minutes", value: 30 },
                        { label: "1 Hour", value: 60 }
                       ];
    
    function getRandomVal(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}]);