app.controller("EnableDisableChargingUnitController", function ($scope) {
    var UserData = sessionStorage.getItem("UserDataSession");
    if (UserData != null) {
        $scope.LoginUser = JSON.parse(sessionStorage.UserDataSession);
    }
    
    $scope.getLockerChargingUnit = function () {
        $scope.ChargingUnitList = [
            { id: 1, Name: 'Abir', UnitName: 'Charging Port1', Email: 'abir@gmail.com', Status: true },
            { id: 2, Name: 'Shuvo', UnitName: 'Charging Port2', Email: 'shuvo@gmail.com', Status: false },
            { id: 3, Name: 'Bellal', UnitName: 'Charging Port3', Email: 'bellal@gmail.com', Status: true },
            { id: 4, Name: 'Bellal', UnitName: 'Charging Port4', Email: 'bellal@gmail.com', Status: false },
            { id: 5, Name: 'Bellal', UnitName: 'Charging Port5', Email: 'bellal@gmail.com', Status: false },
            { id: 6, Name: 'Bellal', UnitName: 'Charging Port6', Email: 'bellal@gmail.com', Status: true },
            { id: 7, Name: 'Bellal', UnitName: 'Charging Port7', Email: 'bellal@gmail.com', Status: true },
        ]

        //angular.forEach($scope.ChargingUnitList, function (aData) {
        //    if (aData.Status == 1) {
        //        aData.LockStatus = 'active';
        //    } else {
        //        aData.UnlockStatus = 'active';
        //    }
        //})
    }
    $scope.getSwapStation = function () {
        $scope.ddlSwapStation = null;
        $scope.SwapStationList = [
            { SwapStationId: 1, StationAddress: 'San Francisco, California, US', StationName: 'Arrow 10 Swap Station' },
            { SwapStationId: 2, StationAddress: 'California, US', StationName: 'Arrow 100 Swap Station' }
        ]

        
    }

    $scope.LocationList = [
        { id: 1, LocationName: 'Gulshan 1' },
        { id: 2, LocationName: 'Gulshan 2' },
        { id: 3, LocationName: 'Mirpur 1' },
        { id: 4, LocationName: 'Mirpur 2' },
    ]
});