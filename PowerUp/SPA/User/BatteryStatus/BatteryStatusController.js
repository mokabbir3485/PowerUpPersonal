app.controller("BatteryStatusController", function ($scope, $filter) {
    var UserData = sessionStorage.getItem("UserDataSession");
    if (UserData != null) {
        $scope.LoginUser = JSON.parse(sessionStorage.UserDataSession); 
    }

    //$scope.BattaryList = [
    //    {id: 1, BattaryName: 'Battary1', LocationName: 'Location1', PortName: 'Port1', Status: 'Online', Charge: 100, Voltage: 48, Amp: 1500},
    //    {id: 2, BattaryName: 'Battary2', LocationName: 'Location1', PortName: 'Port2', Status: 'Online', Charge: 75, Voltage: 48, Amp: 1500},
    //    {id: 3, BattaryName: 'Battary3', LocationName: 'Location3', PortName: 'Port3', Status: 'OffLine', Charge: 10, Voltage: 48, Amp: 1500},
    //    {id: 4, BattaryName: 'Battary4', LocationName: 'Location4', PortName: 'Port4', Status: 'OffLine', Charge: 10, Voltage: 48, Amp: 1500},
    //    {id: 5, BattaryName: 'Battary5', LocationName: 'Location5', PortName: 'Port5', Status: 'OffLine', Charge: 10, Voltage: 48, Amp: 1500},
    //    {id: 6, BattaryName: 'Battary6', LocationName: 'Location6', PortName: 'Port6', Status: 'OffLine', Charge: 10, Voltage: 48, Amp: 1500},
    //]
    $scope.BattaryList = [

        { id: 1, LocationName: 'Location1', SwapStation: 'SwapStation01', PortName: 'Port1', BatteryName: 'Battery1', Status: 'Online', Color: 'success', Charge: 100, Voltage: 48, Amp: 1500, SyncTime:'0:0:0'},
        { id: 2, LocationName: 'Location1', SwapStation: 'SwapStation01', PortName: 'Port2', BatteryName: 'Battery2', Status: 'Online', Color: 'success', Charge: 75, Voltage: 48, Amp: 1500, SyncTime: '0:0:0'},
        { id: 3, LocationName: 'Location1', SwapStation: 'SwapStation02', PortName: 'Port3', BatteryName: 'Battery3', Status: 'OffLine', Color: 'danger', Charge: 0, Voltage: 48, Amp: 1500, SyncTime: '0:0:0'},
        { id: 4, LocationName: 'Location2', SwapStation: 'SwapStation01', PortName: 'Port4', BatteryName: 'Battery4', Status: 'OffLine', Color: 'danger', Charge: 0, Voltage: 48, Amp: 1500, SyncTime: '0:0:0'},
        { id: 5, LocationName: 'Location2', SwapStation: 'SwapStation02', PortName: 'Port5', BatteryName: 'Battery5', Status: 'OffLine', Color: 'danger', Charge: 0, Voltage: 48, Amp: 1500, SyncTime: '0:0:0'},
        { id: 6, LocationName: 'Location6', SwapStation: 'SwapStation01', PortName: 'Port6', BatteryName: 'Battery6', Status: 'OffLine', Color: 'danger', Charge: 0, Voltage: 48, Amp: 1500, SyncTime: '0:0:0'},
    ]

    //$scope.BattaryList = [
    //    { id: 1, PortName: 'L1Port 01', BatteryName: 'Battery 1', LocationId: 1, Status: 'OffLine', Color: 'danger', Charge: 100, Voltage: 48, Amp: 1500 },
    //    { id: 2, PortName: 'L1Port 02', BatteryName: 'Battery 2', LocationId: 1, Status: 'Online',  Color: 'secondary', Charge: 100, Voltage: 48, Amp: 1500 },
    //    { id: 3, PortName: 'L1Port 03', BatteryName: 'Battery 3', LocationId: 1, Status: 'OffLine', Color: 'danger', Charge: 100, Voltage: 48, Amp: 1500 },
    //    { id: 4, PortName: 'L1Port 04', BatteryName: 'Battery 4', LocationId: 1, Status: 'OffLine', Color: 'danger', Charge: 100, Voltage: 48, Amp: 1500 },
    //    { id: 5, PortName: 'L1Port 05', BatteryName: 'Battery 5', LocationId: 1, Status: 'OffLine', Color: 'danger', Charge: 100, Voltage: 48, Amp: 1500 },
    //    { id: 6, PortName: 'L1Port 06', BatteryName: 'Battery 6', LocationId: 1, Status: 'Online', Color: 'secondary', Charge: 100, Voltage: 48, Amp: 1500 },
    //    { id: 7, PortName: 'L1Port 07', BatteryName: 'Battery 7', LocationId: 1, Status: 'OffLine', Color: 'danger', Charge: 100, Voltage: 48, Amp: 1500 },
    //    { id: 8, PortName: 'L1Port 08', BatteryName: 'Battery 8', LocationId: 1, Status: 'Online', Color: 'secondary', Charge: 100, Voltage: 48, Amp: 1500 },
    //    { id: 9, PortName: 'L1Port 09', BatteryName: 'Battery 9', LocationId: 1, Status: 'OffLine', Color: 'danger', Charge: 100, Voltage: 48, Amp: 1500 },
    //    { id: 10, PortName: 'L1Port 10', BatteryName: 'Battery 10', LocationId: 1, Status: 'OffLine', Color: 'danger', Charge: 100, Voltage: 48, Amp: 1500 },
    //    { id: 11, PortName: 'L1Port 11', BatteryName: 'Battery 11', LocationId: 1, Status: 'OffLine', Color: 'danger', Charge: 100, Voltage: 48, Amp: 1500 },
    //    { id: 12, PortName: 'L1Port 12', BatteryName: 'Battery 12', LocationId: 1, Status: 'Online', Color: 'secondary', Charge: 100, Voltage: 48, Amp: 1500 },
    //    { id: 13, PortName: 'L1Port 13', BatteryName: 'Battery 13', LocationId: 1, Status: 'OffLine', Color: 'danger', Charge: 100, Voltage: 48, Amp: 1500 },
    //    { id: 14, PortName: 'L1Port 14', BatteryName: 'Battery 14', LocationId: 1, Status: 'Online', Color: 'secondary', Charge: 100, Voltage: 48, Amp: 1500 },
    //    { id: 15, PortName: 'L1Port 15', BatteryName: 'Battery 15', LocationId: 1, Status: 'Online', Color: 'secondary', Charge: 100, Voltage: 48, Amp: 1500 },
    //    { id: 16, PortName: 'L1Port 16', BatteryName: 'Battery 16', LocationId: 1, Status: 'OffLine', Color: 'danger', Charge: 100, Voltage: 48, Amp: 1500 },
    //];

    //////////////////// SignalR Started/////////////////////////////
    //$scope.batteryStatus = [];
    $scope.notificationHub = null;
    $scope.notificationHub = $.connection.notificationHub;
 


    $scope.notificationHub.client.broadcastUserBatteryStatus = function (location, swapStation, portName, battery, charging, voltage, ampere) {

        angular.forEach($scope.BattaryList, function (batteryListobj) {
            if (batteryListobj.LocationName == location && batteryListobj.SwapStation == swapStation && batteryListobj.PortName == portName && batteryListobj.BatteryName == battery  ) {
                batteryListobj.Charge = charging;
                batteryListobj.Voltage = voltage;
                batteryListobj.Amp = ampere;
                batteryListobj.SyncTime=new Date().toLocaleString();
            }
        })
        $scope.$apply();
    };

    $.connection.hub.start().done(function () {
        //alert("SignalR Connected!!!!")
    });

      //////////////////// SignalR END/////////////////////////////
});