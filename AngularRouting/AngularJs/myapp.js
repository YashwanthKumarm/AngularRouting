var app = angular.module('ngRoutingDemo', ['ngRoute']);
app.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: '/login.html',
        controller: 'loginController'
    }).when('/student/', {
        templateUrl: '/student.html',
        controller: 'studentController'
    }).when('/ViewEmployee/', {
        templateUrl: '/Employee.html',
        controller:'employeeController'
    }).otherwise({
        redirectTo: "/"
    });
});