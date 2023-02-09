app.controller("InvoiceController", function ($scope, $filter) {
    var UserData = sessionStorage.getItem("UserDataSession");
    if (UserData != null) {
        $scope.LoginUser = JSON.parse(sessionStorage.UserDataSession);
    }

    Clear();
    function Clear() {
       
        //  $scope.ToDateBooking = new Date();
        $scope.TotalBooking = '100 K';
        $scope.ToDateBooking = $filter('date')(new Date().toJSON().slice(0, 10), 'MMM dd, yyyy');
        $scope.InvoiceReportObject = {};

        $scope.BatteryList = [
            { BatteryId: 1, BatteryName: "Battery 001",Date:"4/11/2022", BackupHourse: 10, Capacity: 100, VoltageUnit: "Voltage", UnitPrice: 100, SubTotal: 0, },
            { BatteryId: 1, BatteryName: "Battery 002", Date: "4/12/2022", BackupHourse: 10, Capacity: 100, VoltageUnit: "Voltage", UnitPrice: 100, SubTotal: 0 },
            { BatteryId: 1, BatteryName: "Battery 003", Date: "5/13/2022", BackupHourse: 10, Capacity: 100, VoltageUnit: "Voltage", UnitPrice: 100, SubTotal: 0 },
            { BatteryId: 1, BatteryName: "Battery 004", Date: "3/2/2022", BackupHourse: 10, Capacity: 100, VoltageUnit: "Voltage", UnitPrice: 100, SubTotal: 0 },
            { BatteryId: 1, BatteryName: "Battery 005", Date: "2/2/2022", BackupHourse: 10, Capacity: 100, VoltageUnit: "Voltage", UnitPrice: 100, SubTotal: 0 },
            { BatteryId: 1, BatteryName: "Battery 006", Date: "1/2/2022", BackupHourse: 10, Capacity: 100, VoltageUnit: "Voltage", UnitPrice: 100, SubTotal: 0 },

        ];
    }

    $scope.ShowInvoiceReport = function () {
       var date= $("#mdate").val();
        $scope.InvoiceReportObject.InvoiceDate = date;
    }

    $scope.InvoiceHeaderPrintHide = false;
    $scope.PrintPdf = function () {
        window.print();
        $scope.InvoiceHeaderPrintHide = false;
    }

    $("#dpMonths").datepicker({
        format: "mm/yyyy",
        viewMode: "years",
        minViewMode: "months"

    });


    //$scope.InvoiceDateClanderDide = function () {
    //    $("#dpMonths").hide();
    //}

   
    
});