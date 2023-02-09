
app.controller("CartItemEntryController", function ($scope, $filter) {
    var UserData = sessionStorage.getItem("UserDataSession");
    if (UserData != null) {
        $scope.LoginUser = JSON.parse(sessionStorage.UserDataSession);
    }

    Clear();
    function Clear() {

        $scope.ToDateBooking = $filter('date')(new Date().toJSON().slice(0, 10), 'MMM dd, yyyy');
        $scope.CartItemListFilter = [];
        $scope.CartItemList = [];
      
        

    }

    CartItemData();
    function CartItemData() {
        Clear();
        $scope.CartItemList = JSON.parse(sessionStorage.getItem("BatterySendToViewDate"));
        angular.forEach($scope.CartItemList, function (aData) {
            var obj = {};

            obj.BatteryName = aData.BatteryName;
            obj.PortName = aData.PortName;
            obj.CahargingPercentage = aData.CahargingPercentage;
            obj.CagargingTime = aData.CagargingTime;
            $scope.CartItemListFilter.push(obj);
        });
       
    }

    $scope.ClearCart = function () {
        $scope.CartItemListFilter = [];
        $scope.AllCheckBtn = false;

    }

    $scope.RemoveCartItem = function (cartItem) {
        var index = $scope.CartItemListFilter.indexOf(cartItem);
        $scope.CartItemListFilter.splice(index, 1);
        $scope.AllCheckBtn = false;
    }


    $scope.CheckItemList = [];
    $scope.CheckCatItem = function (checkItem) {

        if (checkItem.IsCheck == true) {

            $scope.CheckItemList.push(checkItem);
           
        } else {
          
            var index = $scope.CheckItemList.indexOf(checkItem);
            $scope.CheckItemList.splice(index, 1);
            $scope.AllCheckBtn = false;
        }

       
        //angular.forEach($scope.CheckItemList, function (aData) {
        //    if (aData.IsCheck == false) {
        //        $scope.AllCheckBtn = false;
        //    }
        //    //else {
        //    //    $scope.AllCheckBtn = false;
        //    //}
        //})

        if ($scope.CartItemListFilter.length == $scope.CheckItemList.length) {
            $scope.AllCheckBtn = true;
        }


    }


    $scope.BookingCardItem = function () {
        console.log($scope.CheckItemList);
       
    }

    $scope.AllCheckEvent = function () {
        
        if ($scope.AllCheckBtn == true) {

            angular.forEach($scope.CartItemListFilter, function (aData) {
                aData.IsCheck = $scope.AllCheckBtn;
            });
        } else {
            angular.forEach($scope.CartItemListFilter, function (aData) {
                aData.IsCheck = $scope.AllCheckBtn;
            });
        }
    }


});