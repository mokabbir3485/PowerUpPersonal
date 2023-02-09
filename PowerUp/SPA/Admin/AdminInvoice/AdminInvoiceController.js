app.controller("AdminInvoiceController", function ($scope, $filter) {
    var UserData = sessionStorage.getItem("UserDataSession");
    if (UserData != null) {
        $scope.LoginUser = JSON.parse(sessionStorage.UserDataSession);
    }

    Clear();
    function Clear() {


        $scope.Invoice = {};
        $scope.Invoice.BillAmount = null;

        $scope.CustomerList = [
            { CustomerId: 1, CustomerName: 'Abir', Mobile: '017587685' },
            { CustomerId: 2, CustomerName: 'Bellal', Mobile: '0175785757' },
            { CustomerId: 3, CustomerName: 'Shuvo', Mobile: '0155757577' },
        ]

        $scope.AdjustedBillNoList = [
            { BillNoId: 1, BillNo: 'Bill 1', BillAmount: 100, AdjustedAmount: 10 },
            { BillNoId: 2, BillNo: 'Bill 2', BillAmount: 200, AdjustedAmount: 5 },
            { BillNoId: 3, BillNo: 'Bill 3', BillAmount: 600, AdjustedAmount: 20 },
            { BillNoId: 4, BillNo: 'Bill 4', BillAmount: 500, AdjustedAmount: 10 },
        ]
        $scope.BillNoList = [
            { BillNoId: 1, BillNo: 'Bill 1', BillAmount: 100 },
            { BillNoId: 2, BillNo: 'Bill 2', BillAmount: 200 },
            { BillNoId: 3, BillNo: 'Bill 3', BillAmount: 600 },
            { BillNoId: 4, BillNo: 'Bill 4', BillAmount: 500 },
        ]





        $scope.VoidBillList = [
            { VoidBillId: 1, BillNo: 'Bill 1', BillAmount: 100, IsVoid: true },
            { VoidBillId: 2, BillNo: 'Bill 2', BillAmount: 200, IsVoid: false },
            { VoidBillId: 3, BillNo: 'Bill 3', BillAmount: 600, IsVoid: false },
            { VoidBillId: 4, BillNo: 'Bill 4', BillAmount: 500, IsVoid: true },
        ]
        $scope.VoidPaymentList = [
            { VoidPaymentId: 1, PaymentNo: 'Payment 1', PaymentAmount: 100, IsVoid: true },
            { VoidPaymentId: 2, PaymentNo: 'Payment 2', PaymentAmount: 200, IsVoid: false },
            { VoidPaymentId: 3, PaymentNo: 'Payment 3', PaymentAmount: 600, IsVoid: true },
            { VoidPaymentId: 4, PaymentNo: 'Payment 4', PaymentAmount: 500, IsVoid: false },
        ]
    }
    $scope.FillData = function () {

        $scope.Invoice.BillAmount = 600;
        $scope.Invoice.Adjustment = 20;
        $scope.Invoice.AfterAdjusted = 580;
        $scope.Invoice.VoidBill = true;
        $scope.Invoice.VoidPayment = true;


      


      

        //$scope.ddlPayment = { VoidPaymentId: 2 }
        //$('#ddlPaymentNoForVoidPayment').select2('destroy');
        setTimeout(function () {
            $("#ddlPaymentNoForVoidPayment").select2().val(2).trigger("change");
        }, 100);




      

       

        /*$scope.ddlCustomer = { CustomerId: 3 };*/
        // $('#ddlCustomerForVoidPayment').select2('destroy');
        setTimeout(function () {
            $("#ddlCustomerForVoidPayment").select2().val(3).trigger("change");
        }, 100);

        /*$scope.ddlCustomer = { CustomerId: 3 };*/
        //   $('#ddlCustomerForInvoice').select2('destroy');
        setTimeout(function () {
            $("#ddlCustomerForInvoice").select2().val(3).trigger("change");
        }, 100);





    }

    $scope.BillAdjustmentFillData = function () {
        $scope.Invoice.BillAmount = 600;
        $scope.Invoice.Adjustment = 20;
        $scope.Invoice.AfterAdjusted = 580;
        $scope.Invoice.VoidBill = true;
        $scope.Invoice.VoidPayment = true;

        //$scope.ddlCustomer = { CustomerId: 3 };
        //$('#ddlCustomerForBillAdjustment').select2('destroy');
        setTimeout(function () {
            $("#ddlCustomerForBillAdjustment").select2().val(3).trigger("change");
        }, 100);

        //$scope.ddlBillNoBA = { BillNoId: 3 }

        /// $('#ddlBillNoForBillAdjustment').select2('destroy');
        setTimeout(function () {
            $("#ddlBillNoForBillAdjustment").select2().val(3).trigger("change");
        }, 100);

    }

   

    $scope.VoidBillFill = function () {
     

        /*$scope.ddlCustomer = { CustomerId: 3 };*/
        // $('#ddlCustomerForVoidBill').select2('destroy');
        
        setTimeout(function () {
            $("#ddlCustomerForVoidBill").select2().val(1).trigger("change");
        }, 100);

        //$scope.ddlBillNoVB = { BillNoId: 2 }
        //$('#ddlBillNoForVoidBill').select2('destroy');
        setTimeout(function () {
            $("#ddlBillNoForVoidBill").select2().val(1).trigger("change");
        }, 100);

        $scope.Invoice.BillAmount = 600;
        $scope.Invoice.Adjustment = 20;
        $scope.Invoice.AfterAdjusted = 580;
        $scope.Invoice.VoidBill = true;
        $scope.Invoice.VoidPayment = true;
    }

  
    $scope.ShowInvoiceReport = function () {
        var date = $("#mdate").val();
        $scope.Invoice = {};
        $scope.Invoice.InvoiceDate = date;
        $scope.IsShowInvoice = true;
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

    $scope.IsGenerateInvoice = true;
    $scope.BtnGenerateInvoice = function () {
        $scope.IsVoidPayment = false;
        $scope.IsVoidBill = false;
        $scope.IsBillAdjustment = false;
        $scope.IsGenerateInvoice = true;
    };

    $scope.BtnBillAdjustment = function () {
        $scope.IsGenerateInvoice = false;
        $scope.IsVoidPayment = false;
        $scope.IsVoidBill = false;
        $scope.IsBillAdjustment = true;
    };
    $scope.BtnVoidBill = function () {
        $scope.IsGenerateInvoice = false;
        $scope.IsBillAdjustment = false;
        $scope.IsVoidPayment = false;
        $scope.IsVoidBill = true;
    };
    $scope.BtnVoidPayment = function () {
        $scope.IsGenerateInvoice = false;
        $scope.IsBillAdjustment = false;
        $scope.IsVoidBill = false;
        $scope.IsVoidPayment = true;
    };


    $scope.BillAdjustmentSave = function () {
        $scope.Invoice = {};
        toastr.success('Bill Adjustment Save Successfully !!! ');
    }

    $scope.BillAdjustmentReset = function () {
        $('#ddlCustomerForBillAdjustment').select2('destroy');
        $("#ddlCustomerForBillAdjustment").val('').select2({
            placeholder: "Select Customer",

        });

        $('#ddlBillNoForBillAdjustment').select2('destroy');
        $("#ddlBillNoForBillAdjustment").val('').select2({
            placeholder: "Select Bill Number",

        });

        $scope.Invoice = {};
        toastr.error('Clear All Info');
    }


    $scope.BillAdjustmentReset = function () {
        $('#ddlCustomerForBillAdjustment').select2('destroy');
        $("#ddlCustomerForBillAdjustment").val('').select2({
            placeholder: "Select Customer",

        });

        $('#ddlBillNoForBillAdjustment').select2('destroy');
        $("#ddlBillNoForBillAdjustment").val('').select2({
            placeholder: "Select Bill Number",

        });

        $scope.Invoice = {};
        toastr.error('Clear All Info');
    }

    //$scope.VoidBillFillData = function () {
      
    //}


    $scope.SaveVoidBill = function () {
        $scope.Invoice = {};
        toastr.success('Void BIll Save Successfully !!! ');
    }

    $scope.VoidBillReset = function () {
        $scope.Invoice = {};

        $('#ddlBillNoForVoidBill').select2('destroy');
        $("#ddlBillNoForVoidBill").val('').select2({
            placeholder: "Select Bill Number",

        });

        $('#ddlCustomerForVoidBill').select2('destroy');
        $("#ddlCustomerForVoidBill").val('').select2({
            placeholder: "Select Customer",

        });
      /*  toastr.success('Void BIll Save Successfully !!! ');*/
        toastr.error('Clear All Info');
    }

    $scope.VoidPaymentReset = function () {
        $scope.Invoice = {};
        $('#ddlCustomerForVoidPayment').select2('destroy');
        $("#ddlCustomerForVoidPayment").val('').select2({
            placeholder: "Select Customer",

        });

        $('#ddlPaymentNoForVoidPayment').select2('destroy');
        $("#ddlPaymentNoForVoidPayment").val('').select2({
            placeholder: "Select Payment Number",

        });
        toastr.error('Clear All Info');
    } 

    $scope.VoidPayment = function () {
        $scope.Invoice = {};
        toastr.success('Void Payment Save Successfully !!! ');
    }


    $scope.ResetData = function () {
        $scope.Invoice = {};
        $('#ddlSwapStation').select2('destroy');
        $('#ddlSwapStation').val('').select2({
            placeholder: "Select Swap Station"
        });


        $('#ddlPaymentNoForVoidPayment').select2('destroy');
        $("#ddlPaymentNoForVoidPayment").val('').select2({
            placeholder: "Select Payment Number",

        });

        $('#ddlCustomerForVoidPayment').select2('destroy');
        $("#ddlCustomerForVoidPayment").val('').select2({
            placeholder: "Select Customer",

        });

        $('#ddlCustomerForInvoice').select2('destroy');
        $("#ddlCustomerForInvoice").val('').select2({
            placeholder: "Select Customer",

        });
        toastr.error('All Data Reset');


    }
});