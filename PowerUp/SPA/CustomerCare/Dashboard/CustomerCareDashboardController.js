app.controller("CustomerCareDashboardController", function ($scope, $filter) {
    var UserData = sessionStorage.getItem("UserDataSession");
    if (UserData != null) {
        $scope.LoginUser = JSON.parse(sessionStorage.UserDataSession);
    }

    Clear();
    function Clear() {

        //  $scope.ToDateBooking = new Date();

        $scope.Name = "Abir";
        $scope.TotalBooking = '100 K';
        $scope.ToDateBooking = $filter('date')(new Date().toJSON().slice(0, 10), 'MMM dd, yyyy');

        PieGraphDashboardPaymentProcessWiseTotalCi();

    }

    PieGraphDashboardPaymentProcessWiseTotalCi()

    function PieGraphDashboardPaymentProcessWiseTotalCi() {
        var ctx = document.getElementById("CountPieChartCustomercareChargingUnit").getContext('2d');
        if (window.MyChartPieCount != undefined) {
            window.MyChartPieCount.destroy();
        }
        window.MyChartPieCount = new Chart(ctx, {
            type: 'pie',
            data: {
                datasets: [{
                    data: [50,50],
                    backgroundColor: [
                        'rgb(30, 202, 184)',
                        'rgb(87, 102, 218)',
                        //'#f39c12',
                        //'#d9534f',
                        //'#d966ff',
                    ],
                }],
                labels: ['Malfunction Charging Unit','Online Charging Unit'],

            },
            options: {
                title: {
                    display: true,
                    text: 'Total Charging Unit',
                    position: 'left'
                }

            }

        });
    }

    //function GetAllDashboardPaymentProcessWiseTotalCi(FromDate, ToDate) {

    //    $http({
    //        url: "/ExportDashboard/GetAllDashboardPaymentProcessWiseTotalCi?FromDate=" + FromDate + "&ToDate=" + ToDate,
    //        method: "Get",
    //        headers: { 'Content-Type': "application/json" }
    //    }).success(function (data) {
    //        $scope.DashboardPaymentProcessWiseTotalCiList = data;
    //        if ($scope.DashboardPaymentProcessWiseTotalCiList.length > 0) {

    //            $scope.PaymentProcessWiseTotalCiArray = $scope.DashboardPaymentProcessWiseTotalCiList.map(function (obj) {
    //                return obj.TotalCi;
    //            });
    //            $scope.PaymentProcessArray = $scope.DashboardPaymentProcessWiseTotalCiList.map(function (obj) {
    //                return obj.PaymentProcessType;
    //            });

    //            PieGraphDashboardPaymentProcessWiseTotalCi();
    //        } else {
    //            $scope.PaymentProcessWiseTotalCiArray = [];
    //            $scope.PaymentProcessArray = [];
    //            PieGraphDashboardPaymentProcessWiseTotalCi();
    //        }


    //    })
    //}
    //Pie chart
    //var pieChart = {
    //    labels: [
    //        "Desktops",
    //        "Tablets",
    //        "Mobiles",
    //        "Mobiles",
    //    ],
    //    datasets: [
    //        {
    //            data: [80, 50, 100, 121],
    //            backgroundColor: [
    //                "#4d79f6",
    //                "#ff5da0",
    //                "#e0e7fd",
    //                "#4ac7ec",
    //            ],
    //            borderColor: "transparent",
    //            hoverBackgroundColor: [
    //                "#4d79f6",
    //                "#ff5da0",
    //                "#e0e7fd",
    //                "#4ac7ec",
    //            ],
    //            hoverBorderColor: "#ffffff"
    //        }]
    //};
    //var pieChartOpts = {
    //    legend: {
    //        labels: {
    //            fontColor: '#50649c'
    //        }
    //    }
    //};
    //this.respChart($("#CountPieChartCustomerDashboard"), 'Pie', pieChart, pieChartOpts);

});