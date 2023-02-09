app.controller("BillingInfoController", function ($scope, $filter) {
    var UserData = sessionStorage.getItem("UserDataSession");
    if (UserData != null) {
        $scope.LoginUser = JSON.parse(sessionStorage.UserDataSession);
    }

    Clear();
    function Clear() {

        //  $scope.ToDateBooking = new Date();

        $scope.Name = "Abir";
        $scope.TotalBooking = '100 K';
        $scope.ToDateBooking = $filter('date')(new Date().toJSON().slice(0, 10), 'MMM dd, yyyy');

        $scope.BillingInfoShow = false;
        $scope.BillingInfoShow1 = false;
     //  $scope.BillingInfohide = true;

    }

    //$scope.InnerTableShow = function () {
    //    $scope.BillingInfoShow  = true;
    //}

    $scope.InnerTableShow = function () {
        $scope.BillingInfoShow == true;

        $scope.BillingInfoShow = $scope.BillingInfoShow == false ? true : false;

    }
    $scope.InnerTableShow1 = function () {
        $scope.BillingInfoShow1 == true;
        $scope.BillingInfoShow1 = $scope.BillingInfoShow1 == false ? true : false;
    }

    $scope.InnerTableShow2 = function () {
        $scope.BillingInfoShow2 == true;
        $scope.BillingInfoShow2 = $scope.BillingInfoShow2 == false ? true : false;
    }

    $scope.InnerTableShow3 = function () {
        $scope.BillingInfoShow3 == true;
        $scope.BillingInfoShow3 = $scope.BillingInfoShow3 == false ? true : false;
    }
    
    //$scope.InnerTableHide = function () {
    // $scope.BillingInfohide = true;
    //  //  $scope.BillingInfoShow = false;
    //}
});