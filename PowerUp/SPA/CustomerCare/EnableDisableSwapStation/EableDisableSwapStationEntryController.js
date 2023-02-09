app.controller("EableDisableSwapStationEntryController", function ($scope) {
    var UserData = sessionStorage.getItem("UserDataSession");
    if (UserData != null) {
        $scope.LoginUser = JSON.parse(sessionStorage.UserDataSession);
    }
    $scope.getLocker = function () {
        $scope.LockUnlockList = [
            { id: 1, Name: 'Abir', LockerName: 'Swap Station 1', Email: 'abir@gmail.com', Status: false },
            { id: 2, Name: 'Shuvo', LockerName: 'Swap Station 2', Email: 'shuvo@gmail.com', Status: false },
            { id: 3, Name: 'Bellal', LockerName: 'Swap Station 1', Email: 'bellal@gmail.com', Status: true },
            { id: 4, Name: 'Bellal', LockerName: 'Swap Station 2', Email: 'bellal@gmail.com', Status: true },
            { id: 5, Name: 'Bellal', LockerName: 'Swap Station 6', Email: 'bellal@gmail.com', Status: true },
            { id: 6, Name: 'Bellal', LockerName: 'Swap Station 12', Email: 'bellal@gmail.com', Status: true },
            { id: 7, Name: 'Bellal', LockerName: 'Swap Station 14', Email: 'bellal@gmail.com', Status: true },
            { id: 8, Name: 'Bellal', LockerName: 'Swap Station 15', Email: 'bellal@gmail.com', Status: true },
        ]

        //angular.forEach($scope.LockUnlockList, function (aData) {
        //    if (aData.Status == 1) {
        //        aData.LockStatus = 'active';
        //    } else {
        //        aData.UnlockStatus = 'active';
        //    }
        //})
    }
    
    $scope.LocationList = [
        { id: 1, LocationName: 'Gulshan 1' },
        { id: 2, LocationName: 'Gulshan 2' },
        { id: 3, LocationName: 'Mirpur 1' },
        { id: 4, LocationName: 'Mirpur 2' },
    ]
});