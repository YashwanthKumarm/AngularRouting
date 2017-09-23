app.controller('loginController', function ($scope, $location) {
    $scope.authenticate = function (username) {
        $location.path('/student/');
    };
   
});