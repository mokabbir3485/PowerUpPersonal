app.controller("AddSwapStationController", function ($scope, $filter) {
    var UserData = sessionStorage.getItem("UserDataSession");
    if (UserData != null) {
        $scope.LoginUser = JSON.parse(sessionStorage.UserDataSession);
    }

    Clear();
    function Clear() {
        $scope.SwapStation = {};
        $scope.ddlLocation = null;

        $scope.LocationList = [
            { LocationId: 1, LocationName: 'Wolf pen road', City: 'San Francisco', State: 'California', ZipCode: '94107', Country: 'US' },
            { LocationId: 2, LocationName: '2044 Maple Lane', City: ' Plano', State: 'Texas', ZipCode: '75075', Country: 'US' }
        ]

        
        $scope.SwapStationList = [
            { SwapStationId: 1, StationAddress: 'San Francisco, California, US', StationName: 'Arrow 10 Swap Station' },
            { SwapStationId: 2, StationAddress: 'California, US', StationName: ' Arrow 100 Swap Station' }
        ]
    }

    $scope.FillData = function () {
        $scope.SwapStation.StationAddress = 'San Francisco, California, US';
        $scope.SwapStation.StationName = 'Arrow 10 Swap Station';
        // $scope.ddlLocation = { LocationId: 1 };
       
        //$('#BatteryLocation').select2('destroy');
       
        setTimeout(function () {
            $("#BatteryLocation").select2().val(1).trigger("change");
        }, 100);
        
     
       

    }
    $scope.Save = function () {
        toastr.success('Swap Station Saved Successfully.');
    }

    $scope.Reset = function () {
        $scope.SwapStation = {};
        $scope.ddlLocation = null;

        //$('#BatteryLocation').select2('destroy');
        //$("#BatteryLocation").select2().val(1).trigger("");
        $('#BatteryLocation').select2('destroy');
        $('#BatteryLocation').val('').select2({
            placeholder: "Select Location"
        });
    }
});