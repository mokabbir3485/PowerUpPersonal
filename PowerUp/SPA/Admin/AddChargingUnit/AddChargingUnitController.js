app.controller("AddChargingUnitController", function ($scope, $filter) {
    var UserData = sessionStorage.getItem("UserDataSession");
    if (UserData != null) {
        $scope.LoginUser = JSON.parse(sessionStorage.UserDataSession);
    }

    Clear();
    function Clear() {
        $scope.ddlLocation = null;

        $scope.LocationList = [
            { LocationId: 1, LocationName: 'Wolf pen road', City: 'San Francisco', State: 'California', ZipCode: '94107', Country: 'US' },
            { LocationId: 2, LocationName: '2044 Maple Lane', City: ' Plano', State: 'Texas', ZipCode: '75075', Country: 'US' }
        ]

        

        $scope.ddlSwapStation = null;
        $scope.SwapStationList = [
            { SwapStationId: 1, StationAddress: 'San Francisco, California, US', StationName: 'Arrow 10 Swap Station' },
            { SwapStationId: 2, StationAddress: 'California, US', StationName: ' Arrow 100 Swap Station' }
        ]
        
        

        $scope.ChargingUnitList = [
            { ChargingUnitId: 1, ChargingUnitName: 'Arrow10 Port', arduinoId: 1, Voltage: 12, Amp: 1.2 },
            { ChargingUnitId: 2, ChargingUnitName: 'Arrow100 Port', arduinoId: 2, Voltage: 48, Amp: 1.6 }
        ]
    }

    $scope.FillData = function () {
        $scope.ChargingUnit = {};
        $scope.ChargingUnit.ChargingUnitName = 'Arrow 10';
        $scope.ChargingUnit.arduinoId = 3;
        $scope.ChargingUnit.Voltage = 48;
        $scope.ChargingUnit.Amp = 1.5;
       // $scope.ddlLocation = { LocationId: 1 };
     //   $('#BatteryLocation').select2('destroy');
      
        setTimeout(function () {
            $("#BatteryLocation").select2().val(1).trigger("change");
        }, 100);
        setTimeout(function () {
            $("#ddlSwapStation").select2().val(2).trigger("change");
        }, 100);

       // $scope.ddlSwapStation = { SwapStationId: 2 };
       // $('#ddlSwapStation').select2('destroy');
      
      
    }
    $scope.Save = function () {
        toastr.success('Charging Unit Saved Successfully.');
    }

    $scope.ResetCharge = function () {
        $scope.ChargingUnit = {};
        $('#BatteryLocation').select2('destroy');
        $('#BatteryLocation').val('').select2({
            placeholder: "Location"
        });

        $('#ddlSwapStation').select2('destroy');
        $('#ddlSwapStation').val('').select2({
            placeholder: "Select Swap Station"
        });

       
        toastr.error('All Data Reset');

    }
});