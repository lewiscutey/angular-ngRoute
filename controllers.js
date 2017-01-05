angular.module("controllers",["services"]).controller("index",["$scope","$http","indexDate",function($scope,$http,indexDate){
    indexDate.then(function(data){
        $scope.data = data.data;
    });
}]);