app.controller("LockUnlockChargingUnitController", function ($scope, $http) {
    var UserData = sessionStorage.getItem("UserDataSession");
    if (UserData != null) {
        $scope.LoginUser = JSON.parse(sessionStorage.UserDataSession);
    }
    
    $scope.getLockerChargingUnit = function () {
        $scope.DoorList = [
            { id: 1, Name: 'Abir', DoorName: 'Door1', Email: 'abir@gmail.com', Status: false },
            { id: 2, Name: 'Shuvo', DoorName: 'Door2', Email: 'shuvo@gmail.com', Status: false },
            { id: 3, Name: 'Bellal', DoorName: 'Door3', Email: 'bellal@gmail.com', Status: true },
            { id: 4, Name: 'Bellal', DoorName: 'Door4', Email: 'bellal@gmail.com', Status: false },
            { id: 5, Name: 'Bellal', DoorName: 'Door5', Email: 'bellal@gmail.com', Status: false },
            { id: 6, Name: 'Bellal', DoorName: 'Door6', Email: 'bellal@gmail.com', Status: true },
            { id: 7, Name: 'Bellal', DoorName: 'Door7', Email: 'bellal@gmail.com', Status: true },
        ]

        angular.forEach($scope.DoorList, function (aData) {
            if (aData.Status == true) {
                aData.StatusDetail = 'Locked';
                aData.iconColor = 'success';
            } else {
                aData.StatusDetail = 'Unlocked';
                aData.iconColor = 'danger';
            }

        })
    }
    $scope.ChangeStatus = function (aDoor) {
        angular.forEach($scope.DoorList, function (aData) {
            if (aDoor.id == aData.id) {
                if (aData.Status == true) {
                    aData.StatusDetail = 'Locked';
                    aData.iconColor = 'success';
                } else {
                    aData.StatusDetail = 'Unlocked';
                    aData.iconColor = 'danger';
                }
            }
        })
    }
    $scope.SelectDoor = function (aDoor) {
        //if (aDoor.Status==true) {
        //    $scope.status=1
        //} else {
        //    $scope.status = 0
        //}
        $http.post("/Home/SetLockerStatus?arduinoId=" + aDoor.id + "&status=" + aDoor.Status).success(function (data) {
            if (data !== "") {

            }
        }).error(function (msg) {
           // alertify.log("Save failed, refresh page and try again", "error", "5000");
        });
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




    //////////////////// SignalR Started/////////////////////////////
    //$scope.batteryStatus = [];
    $scope.notificationHub = null;
    $scope.notificationHub = $.connection.notificationHub;



    $scope.notificationHub.client.broadcastDoorLockUnLockStatus = function (arduinoId, status) {
        angular.forEach($scope.DoorList, function (aData) {
            if (aData.id == arduinoId) {
                aData.Status = status;

                if (aData.Status == true) {
                    aData.StatusDetail = 'Locked';
                    aData.iconColor = 'success';
                } else {
                    aData.StatusDetail = 'Unlocked';
                    aData.iconColor = 'danger';
                }
            }

            

        })

        $scope.$apply();
    };

    $.connection.hub.start().done(function () {
        //alert("SignalR Connected!!!!")
    });

      //////////////////// SignalR END/////////////////////////////

});