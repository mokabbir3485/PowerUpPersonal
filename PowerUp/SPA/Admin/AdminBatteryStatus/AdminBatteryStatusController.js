app.controller("AdminBatteryStatusController", function ($scope, $filter) {
    var UserData = sessionStorage.getItem("UserDataSession");
    if (UserData != null) {
        $scope.LoginUser = JSON.parse(sessionStorage.UserDataSession);
    }
    $scope.ddlLocation = null;
    $scope.LocationList = [
        { LocationId: 1, LocationName: 'Wolf pen road', City: 'San Francisco', State: 'California', ZipCode: '94107', Country: 'US' },
        { LocationId: 2, LocationName: '2044 Maple Lane', City: ' Plano', State: 'Texas', ZipCode: '75075', Country: 'US' }
    ]
    $scope.ddlLocation = { LocationId: 1 };

    $scope.PortList = [
        { id: 1, PortName: 'L1Port 01', BatteryName: 'Battery 1' },
    ];

    $scope.getSwapStation = function () {
        $scope.ddlSwapStation = null;
        $scope.SwapStationList = [
            { SwapStationId: 1, StationAddress: 'San Francisco, California, US', StationName: 'Arrow 10 Swap Station' },
            { SwapStationId: 2, StationAddress: 'California, US', StationName: 'Arrow 100 Swap Station' }
        ]
        //$scope.ddlSwapStation = { SwapStationId: 2 };
    }

    $scope.ShowPlug = function (SwapStation) {
        $scope.isShowPlug = true;
        if (SwapStation.SwapStationId == 1 || SwapStation.SwapStationId == 2 || SwapStation.SwapStationId == 3 || SwapStation.SwapStationId == 4) {

            $scope.PortList = [
                { id: 1, PortName: 'L1Port 01', BatteryName: 'Battery 1', LocationId: 1, Status: 'OffLine', Color: 'danger', Charge: 0, Voltage: 48, Amp: 1500 },
                { id: 2, PortName: 'L1Port 02', BatteryName: 'Battery 2', LocationId: 1, Status: 'Online', Color: 'secondary', Charge: 100, Voltage: 48, Amp: 1500 },
                { id: 3, PortName: 'L1Port 03', BatteryName: 'Battery 3', LocationId: 1, Status: 'OffLine', Color: 'danger', Charge: 0, Voltage: 48, Amp: 1500 },
                { id: 4, PortName: 'L1Port 04', BatteryName: 'Battery 4', LocationId: 1, Status: 'OffLine', Color: 'danger', Charge: 0, Voltage: 48, Amp: 1500 },
                { id: 5, PortName: 'L1Port 05', BatteryName: 'Battery 5', LocationId: 1, Status: 'OffLine', Color: 'danger', Charge: 0, Voltage: 48, Amp: 1500 },
                { id: 6, PortName: 'L1Port 06', BatteryName: 'Battery 6', LocationId: 1, Status: 'Online', Color: 'secondary', Charge: 100, Voltage: 48, Amp: 1500 },
                { id: 7, PortName: 'L1Port 07', BatteryName: 'Battery 7', LocationId: 1, Status: 'OffLine', Color: 'danger', Charge: 0, Voltage: 48, Amp: 1500 },
                { id: 8, PortName: 'L1Port 08', BatteryName: 'Battery 8', LocationId: 1, Status: 'Online', Color: 'secondary', Charge: 100, Voltage: 48, Amp: 1500 },
                { id: 9, PortName: 'L1Port 09', BatteryName: 'Battery 9', LocationId: 1, Status: 'OffLine', Color: 'danger', Charge: 0, Voltage: 48, Amp: 1500 },
                { id: 10, PortName: 'L1Port 10', BatteryName: 'Battery 10', LocationId: 1, Status: 'OffLine', Color: 'danger', Charge: 0, Voltage: 48, Amp: 1500 },
                { id: 11, PortName: 'L1Port 11', BatteryName: 'Battery 11', LocationId: 1, Status: 'OffLine', Color: 'danger', Charge: 0, Voltage: 48, Amp: 1500 },
                { id: 12, PortName: 'L1Port 12', BatteryName: 'Battery 12', LocationId: 1, Status: 'Online', Color: 'secondary', Charge: 100, Voltage: 48, Amp: 1500 },
                { id: 13, PortName: 'L1Port 13', BatteryName: 'Battery 13', LocationId: 1, Status: 'OffLine', Color: 'danger', Charge: 0, Voltage: 48, Amp: 1500 },
                { id: 14, PortName: 'L1Port 14', BatteryName: 'Battery 14', LocationId: 1, Status: 'Online', Color: 'secondary', Charge: 100, Voltage: 48, Amp: 1500 },
                { id: 15, PortName: 'L1Port 15', BatteryName: 'Battery 15', LocationId: 1, Status: 'Online', Color: 'secondary', Charge: 100, Voltage: 48, Amp: 1500 },
                { id: 16, PortName: 'L1Port 16', BatteryName: 'Battery 16', LocationId: 1, Status: 'OffLine', Color: 'danger', Charge: 0, Voltage: 48, Amp: 1500 }, 
            ];
        }
        if (SwapStation.SwapStationId == 2) {
            $scope.PortName1 = 'L2Port 01';
            $scope.PortName2 = 'L2Port 02';
            $scope.PortName3 = 'L2Port 03';
            $scope.PortName4 = 'L2Port 04';
            $scope.PortName5 = 'L2Port 05';
            $scope.PortName6 = 'L2Port 06';
            $scope.PortName7 = 'L2Port 07';
            $scope.PortName8 = 'L2Port 08';
            $scope.PortName9 = 'L2Port 09';
            $scope.PortName10 = 'L2Port 10';
            $scope.PortName11 = 'L2Port 11';
            $scope.PortName12 = 'L2Port 12';
            $scope.PortName13 = 'L2Port 13';
            $scope.PortName14 = 'L2Port 14';
            $scope.PortName15 = 'L2Port 15';
            $scope.PortName16 = 'L2Port 16';
        }
        if (SwapStation.SwapStationId == 3) {
            $scope.PortName1 = 'L3Port 01';
            $scope.PortName2 = 'L3Port 02';
            $scope.PortName3 = 'L3Port 03';
            $scope.PortName4 = 'L3Port 04';
            $scope.PortName5 = 'L3Port 05';
            $scope.PortName6 = 'L3Port 06';
            $scope.PortName7 = 'L3Port 07';
            $scope.PortName8 = 'L3Port 08';
            $scope.PortName9 = 'L3Port 09';
            $scope.PortName10 = 'L3Port 10';
            $scope.PortName11 = 'L3Port 11';
            $scope.PortName12 = 'L3Port 12';
            $scope.PortName13 = 'L3Port 13';
            $scope.PortName14 = 'L3Port 14';
            $scope.PortName15 = 'L3Port 15';
            $scope.PortName16 = 'L3Port 16';
        }
        if (SwapStation.SwapStationId == 4) {
            $scope.PortName1 = 'L4Port 01';
            $scope.PortName2 = 'L4Port 02';
            $scope.PortName3 = 'L4Port 03';
            $scope.PortName4 = 'L4Port 04';
            $scope.PortName5 = 'L4Port 05';
            $scope.PortName6 = 'L4Port 06';
            $scope.PortName7 = 'L4Port 07';
            $scope.PortName8 = 'L4Port 08';
            $scope.PortName9 = 'L4Port 09';
            $scope.PortName10 = 'L4Port 10';
            $scope.PortName11 = 'L4Port 11';
            $scope.PortName12 = 'L4Port 12';
            $scope.PortName13 = 'L4Port 13';
            $scope.PortName14 = 'L4Port 14';
            $scope.PortName15 = 'L4Port 15';
            $scope.PortName16 = 'L4Port 16';
        }
    }

    $scope.PortDetail = function (aPort) {
        $scope.isShowBatteryDetail = true;
        $scope.PortName = aPort.PortName;
        $scope.BatteryName = aPort.BatteryName;
    }

    Clear();
    function Clear() {
        $scope.BatteryBookingShow = true;
        $scope.BatteryBookingInfoShow = false;
    }

    $scope.BatteryBooking = function () {
        $scope.BatteryBookingShow = true;
        $scope.BatteryBookingInfoShow = false;
        $("#ItemBettaryDetailShow").hide();
    }

    $scope.BatteryBookingInfo = function () {
        $scope.BatteryBookingInfoShow = true;
        $scope.BatteryBookingShow = false;
        $("#ItemBettaryDetailShow").hide();
    }


    $scope.LocationPortChilList = [];
    $scope.ShowPortNumber = function (port) {
        $scope.LocationPortChilList = [];
        angular.forEach($scope.PortList, function (aData) {

            if (port.id == aData.LocationId) {
                $scope.LocationPortChilList.push(aData);
            }
        })
    }

    $scope.ItemBettaryDetailShow = false;
    $("#ItemBettaryDetailShow").hide();

    $('#jstree').on("select_node.jstree", function (e, data) {

        //  alert("node_id: " + data.node.id);

        $("#ItemBettaryDetailShow").show();


    });

});