app.controller("AddLocationSetupController", function ($scope, $filter) {
    var UserData = sessionStorage.getItem("UserDataSession");
    if (UserData != null) {
        $scope.LoginUser = JSON.parse(sessionStorage.UserDataSession);
    }

    Clear();
    function Clear() {
        $scope.LocationList = [
            { LocationId: 1, LocationName: 'Wolf pen road', City: 'San Francisco', State: 'California', ZipCode: '94107', Country: 'US' },
            { LocationId: 2, LocationName: '2044 Maple Lane', City: ' Plano', State: 'Texas', ZipCode: '75075', Country: 'US' }
        ]

    }
    $scope.FillData = function () {
        $scope.Location = {};
        $scope.Location.LocationName = 'Wolf pen road';
        $scope.Location.City = 'San Francisco';
        $scope.Location.State = 'California';
        $scope.Location.ZipCode = '94107';
        $scope.Location.Country = 'US';
    }
    $scope.Save = function () {
        toastr.success('Location Saved Successfully.');
    }


    $scope.Reset = function () {
        $scope.Location = {};
        toastr.error('All Data Reset');
    }
});