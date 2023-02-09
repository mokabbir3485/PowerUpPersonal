app.controller("UserProfileController", function ($scope) {
    var UserData = sessionStorage.getItem("UserDataSession");
    if (UserData != null) {
        $scope.LoginUser = JSON.parse(sessionStorage.UserDataSession);
    }
    $scope.name = "Abir";
    $scope.IsPersonal = true;
    $scope.ButtonPersonal = function () {
        $scope.IsPersonal = true;
        $scope.IsPayment = false;
    };

    $scope.ButtonPayment = function () {
        $scope.IsPersonal = false;
        $scope.IsPayment = true;
    };
});