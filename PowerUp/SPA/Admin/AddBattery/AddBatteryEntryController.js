app.controller("AddBatteryEntryController", function ($scope, $filter) {
    var UserData = sessionStorage.getItem("UserDataSession");
    if (UserData != null) {
        $scope.LoginUser = JSON.parse(sessionStorage.UserDataSession);
    }

    Clear();
    function Clear() {
        

        $scope.BatteryList = [
            { BatteryId: 1, BatteryName: 'Arrow1', BatteryCode: 'B1-002', BatteryModel: 'Arrow-100', MacAddress: '09:AF:0F:E0:A1', Voltage: 12, Amp: 1.2},
            { BatteryId: 2, BatteryName: 'Arrow2', BatteryCode: 'B1-003', BatteryModel: 'Arrow-10', MacAddress: '09:AE:9F:E0:A1', Voltage: 48, Amp: 1.6}
        ]
    }
    $scope.FillData = function () {
        $scope.Battery = {};
        $scope.Battery.BatteryName = 'Arrow';
        $scope.Battery.BatteryCode = 'B1-001';
        $scope.Battery.BatteryModel = 'Arrow-10';
        $scope.Battery.MacAddress = '05:AD:0F:F0:A1';
        $scope.Battery.QRCode = '36733473483';
        $scope.Battery.Voltage = 48;
        $scope.Battery.Amp = 1.5;
        toastr.info('Fillup All Data');
    }


    $scope.Save = function () {
        // for success - green box
        toastr.success('Battery Saved Successfully.');

        //// for errors - red box
        //toastr.error('errors messages');

        //// for warning - orange box
        //toastr.warning('warning messages');

        //// for info - blue box
        //toastr.info('info messages');
    }

    $scope.batteryReset = function () {
        $scope.Battery = {};
        toastr.error('All Data Reset');
    }
});
