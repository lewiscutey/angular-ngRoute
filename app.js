angular.module("myapp",["ngRoute" ,"ngAnimate","controllers","services"]).config(function ($routeProvider) {
    $routeProvider.when("/",{
       templateUrl:"index1.html",
        controller:"index"
   }).when("/list/:id",{
       templateUrl:"list.html",
   }).when("/show/:id",{
        templateUrl:"show.html",
    }).otherwise("/");
});