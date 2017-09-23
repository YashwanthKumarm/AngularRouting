app.controller('studentController', function ($scope, $routeParams,$location) {
    $scope.username = $routeParams.username;
    $scope.ViewEmployee=function()
    {
        $location.path('/ViewEmployee/');
    }
});