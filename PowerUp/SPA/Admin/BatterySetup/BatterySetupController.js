app.controller("BatterySetupController", function ($scope, $filter) {
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
            { SwapStationId: 2, StationAddress: 'California, US', StationName: 'Arrow 100 Swap Station' }
        ]
        

        $scope.ddlChargingUnit = null;
        $scope.ChargingUnitList = [
            { ChargingUnitId: 1, ChargingUnitName: 'Arrow10 Port', Voltage: 12, Amp: 1.2 },
            { ChargingUnitId: 2, ChargingUnitName: 'Arrow100 Port', Voltage: 48, Amp: 1.6 }
        ]
        

        $scope.ddlBattery = null;
        $scope.BatteryList = [
            { BatteryId: 1, BatteryName: 'Arrow1', BatteryCode: 'B1-002', BatteryModel: 'Arrow-100', MacAddress: '09:AF:0F:E0:A1', Voltage: 12, Amp: 1.2 },
            { BatteryId: 2, BatteryName: 'Arrow2', BatteryCode: 'B1-003', BatteryModel: 'Arrow-10', MacAddress: '09:AE:9F:E0:A1', Voltage: 48, Amp: 1.6 }
        ]

        

        $scope.BatterySetupList = [
            { BatterySetupId: 1, BatteryName: 'Arrow1', LocationName: 'Wolf pen road', StationName: 'Arrow 10 Swap Station', ChargingUnitName: 'Arrow1' },
            { BatterySetupId: 2, BatteryName: 'Arrow2', LocationName: '2044 Maple Lane', StationName: 'Arrow 100 Swap Station', ChargingUnitName: 'Arrow2' }
        ]
    }


    $scope.FillData = function () {
        $scope.ddlLocation = { LocationId: 1 };
        setTimeout(function () {
            $("#ddlLocation").select2().val(1).trigger("change");
        }, 100);
       // $('#ddlLocation').select2('destroy');
        $scope.ddlSwapStation = { SwapStationId: 2 };
        setTimeout(function () {
            $("#ddlSwapStation").select2().val(2).trigger("change");
        }, 100);

        
        //$('#ddlSwapStation').select2('destroy');
      

        $scope.ddlChargingUnit = { ChargingUnitId: 2 };
      //  $('#ddlChargingUnit').select2('destroy');
        setTimeout(function () {
            $("#ddlChargingUnit").select2().val(2).trigger("change");
        }, 100);

        $scope.ddlBattery = { BatteryId: 2 };
       // $('#ddlBattery').select2('destroy');
        setTimeout(function () {
            $("#ddlBattery").select2().val(2).trigger("change");
        }, 100);


       
      
        
    }
    $scope.Save = function () {
        toastr.success('Battery Setup Saved Successfully.');
    }


    $scope.Reset = function () {
       
     
        $('#ddlLocation').select2('destroy');
        $('#ddlLocation').val('').select2({
            placeholder: "Select Location"
        });

        $('#ddlSwapStation').select2('destroy');
        $('#ddlSwapStation').val('').select2({
            placeholder: "Select Swap Station"
        });

        $('#ddlChargingUnit').select2('destroy');
        $('#ddlChargingUnit').val('').select2({
            placeholder: "Select Charging Unit Name"
        });

        $('#ddlBattery').select2('destroy');
        $('#ddlBattery').val('').select2({
            placeholder: "Select Battery Name"
        });

        toastr.error('All Data Reset');
    }




   


    //setTimeout(function () {
    //    $("#BatteryLocation").select2().val(1).trigger("change");
    //}, 1000);
    //setTimeout(function () {
    //    $("#ddlSwapStation").select2().val(2).trigger("change");
    //}, 1000);
});