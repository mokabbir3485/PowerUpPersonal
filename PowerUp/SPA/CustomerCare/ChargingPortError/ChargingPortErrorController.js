app.controller("ChargingPortErrorController", function ($scope) {
    var UserData = sessionStorage.getItem("UserDataSession");
    if (UserData != null) {
        $scope.LoginUser = JSON.parse(sessionStorage.UserDataSession);
    }
    $scope.LockerErrorList = [];
    $scope.LockerErrorListDB = [
        { arduinoId: 1, LocationName: 'San Francisco, California, US', StationName: 'Swap Station 1', PortName: 'port 1 ', Status: true, errorId: 0 },
        { arduinoId: 2, LocationName: 'California, US', StationName: 'Swap Station 2', PortName: 'port 2', Status: false, errorId: 0 },
        { arduinoId: 3, LocationName: 'San Francisco, California, US', StationName: 'Swap Station 3', PortName: 'port 3', Status: true, errorId: 0 },
        { arduinoId: 1, LocationName: 'San Francisco, California, US', StationName: 'Swap Station 1', PortName: 'port 1 ', Status: true, errorId: 1 },
        { arduinoId: 2, LocationName: 'California, US', StationName: 'Swap Station 2', PortName: 'port 2', Status: false, errorId: 1 },
        { arduinoId: 3, LocationName: 'San Francisco, California, US', StationName: 'Swap Station 3', PortName: 'port 3', Status: true, errorId: 1 },
    ]
    angular.forEach($scope.LockerErrorList, function (obj) {
        if (obj.errorId == 0) {
            obj.ErrorDetail = 'Door Open';
        } else if (obj.errorId == 1) {
            obj.ErrorDetail = 'Battery is not set properly';
        } else {
            obj.ErrorDetail = 'Unknown Error';
        }
    })

    $scope.notificationHub = null;
    $scope.notificationHub = $.connection.notificationHub;



    $scope.notificationHub.client.broadcastChargingPortError = function (arduinoId, errorId) {
        var keepGoing = true;
        angular.forEach($scope.LockerErrorListDB, function (batteryListobj) {
            if (keepGoing) {
                if (batteryListobj.arduinoId == arduinoId && batteryListobj.errorId == errorId) {
                    //var obj = {}
                    //obj.errorId = errorId;
                    //obj.arduinoId = batteryListobj.arduinoId;
                    //obj.StationName = batteryListobj.StationName;
                    //obj.LocationName = batteryListobj.LocationName;
                    //obj.PortName = batteryListobj.PortName;
                    //obj.Status = batteryListobj.Status;

                    //if (errorId == 0) {
                    //    obj.ErrorDetail = 'Door Open';
                    //} else if (errorId == 1) {
                    //    obj.ErrorDetail = 'Battery is not set properly';
                    //} else {
                    //    obj.ErrorDetail = 'Unknown Error';
                    //}
                    if (batteryListobj.errorId == 0) {
                        batteryListobj.ErrorDetail = 'Door Open';
                    } else if (batteryListobj.errorId == 1) {
                        batteryListobj.ErrorDetail = 'Battery is not set properly';
                    } else {
                        batteryListobj.ErrorDetail = 'Unknown Error';
                    }
                    $scope.LockerErrorList.push(batteryListobj);
                    //obj = {};
                    keepGoing = false;
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