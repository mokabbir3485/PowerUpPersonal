app.controller("LoginController", function ($scope, $cookieStore) {
    var UserData = sessionStorage.getItem("UserDataSession");
    if (UserData != null) {
        $scope.LoginUser = JSON.parse(sessionStorage.UserDataSession);
    }
    $scope.name = "Abir";
    $scope.Login = function () {
        $cookieStore.put('LoginUser', $scope.username);
        if ($scope.username == 'Admin') {
            window.location = '/Home/Index#/AdminDashboard';
        }else if ($scope.username == 'User') {
            window.location = '/Home/Index#/UserDashboard';
        }else if ($scope.username == 'Care') {
            window.location = '/Home/Index#/Dashboard';
        } else if ($scope.username == 'SAdmin') {
            window.location = '/Home/Index#/AdminDashboard';
        }
       
    }


    $scope.PasswordIcon = "fa fa-eye-slash";
    $scope.InputType = "password";
    $scope.PasswordHideAndShow = function () {

        if ($scope.UserPassword != null) {
            if ($scope.InputType == 'password') {
                $scope.InputType = "text";
                $scope.PasswordIcon = 'fa fa-eye';
                //$scope.isShowIconPassword = false;
            } else {
                $scope.InputType = 'password';
                $scope.PasswordIcon = "fa fa-eye-slash";
                // $scope.isShowIconPassword = false;
                //$scope.showHideClass = 'glyphicon glyphicon-eye-open';

            }
        }
    }

    //$scope.PasswordConfrimValidate = function () {
    //    if ($scope.UserConfrimPassword != $scope.UserPassword) {
    //        $scope.UserConfrimPassword = "";
    //        $scope.PasswordIcon = "fa fa-eye-slash";
    //        toastr.error("Password are not Matched");
    //    }
    //}
})