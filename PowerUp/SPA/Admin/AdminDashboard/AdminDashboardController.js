app.controller("AdminDashboardController", function ($scope, $filter) {
    var UserData = sessionStorage.getItem("UserDataSession");
    if (UserData != null) {
        $scope.LoginUser = JSON.parse(sessionStorage.UserDataSession);
    }

    Clear();
    function Clear() {

        //  $scope.ToDateBooking = new Date();
        $scope.TotalBooking = '100 K';
        $scope.ToDateBooking = $filter('date')(new Date().toJSON().slice(0, 10), 'MMM dd, yyyy');
    }
    $scope.BookingHistory = function () {
        window.location = '/Home/Index#/BookingHistory';
    }


    PieGraphDashboardAdmin();

    function PieGraphDashboardAdmin() {
        var ctx = document.getElementById("CountPieChartAdminChargingUnit").getContext('2d');
        if (window.MyChartPieCount != undefined) {
            window.MyChartPieCount.destroy();
        }
        window.MyChartPieCount = new Chart(ctx, {
            type: 'pie',
            data: {
                datasets: [{
                    data: [1000, 2000],
                    backgroundColor: [
                        'rgb(30, 202, 184)',
                        'rgb(87, 102, 218)',
                        //'#f39c12',
                        //'#d9534f',
                        //'#d966ff',
                    ],
                }],
                labels: ['This Month Payment','This Month Due Payment'],

            },
            options: {
                title: {
                    display: true,
                   // text: 'Total Payment',
                    position: 'left'
                }

            }

        });
    }

});