app.controller("BookingHistoryController", function ($scope, $filter) {
    var UserData = sessionStorage.getItem("UserDataSession");
    if (UserData != null) {
        $scope.LoginUser = JSON.parse(sessionStorage.UserDataSession);
    }

    Clear();
    function Clear() {


        $scope.BookingList = [
            { BookingId: 1, BookingDate: '24 Apr 2022', BatteryName: 'Arrow1', BatteryModel: 'Arrow-100', BookedBy: 'Abir', Voltage: 12, Amp: 1.2 },
            { BookingId: 2, BookingDate: '25 Apr 2022', BatteryName: 'Arrow2', BatteryModel: 'Arrow-10', BookedBy: 'Shuvo', Voltage: 48, Amp: 1.6 }
        ]
    }


});
