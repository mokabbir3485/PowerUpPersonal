app.controller("IndexController", function ($scope, $cookieStore, $route, $templateCache, $window, MyService, $http, $filter) {
    load();
    $scope.LoginUser = $cookieStore.get('LoginUser');
    function load() {
        $('.note-popover').css("display", "none");
        $scope.LoginUser = [];
        $scope.NoticeList = [];
        $scope.addToCartData = [];
        $scope.UnreadMessageNo = 0;
        //All menu control hidden default ----Start
        $('.note-popover').css("display", "none");
        $scope.UserDashboardView = "menuViewHide";
        $scope.BatteryBookingView = "menuViewHide";
        $scope.LoginView = "menuViewHide";
        $scope.RegisterView = "menuViewHide";
        $scope.InvoiceView = "menuViewHide";
        $scope.CustomerQueriesView = "menuViewHide";
        $scope.LockUnlockLockerView = "menuViewHide";

        $scope.EnableDisableSwapStationView = "menuViewHide";

        $scope.LockUnlockChargingUnitView = "menuViewHide";

        $scope.EnableDisableChargingUnitView = "menuViewHide";
        $scope.AdminDashboardView = "menuViewHide";
        $scope.AdminInvoiceView = "menuViewHide";
        $scope.AddLocationSetupView = "menuViewHide";
        $scope.AddChargingUnitView = "menuViewHide";

        $scope.BatterySetupView = "menuViewHide";


        ///======= Admin==================

        $scope.BatteryAdd = "menuViewHide";
        $scope.CartItemView = "menuViewHide";

        $scope.AdminSettingsView = "menuViewHide";
    
        $scope.AdminBatteryStatus = "menuViewHide";

        $scope.SwapStationMapView = "menuViewHide";
        $scope.SwapStationMapMainView = "menuViewHide";


        $scope.AddSwapStation = "menuViewHide";

        $scope.PaymentRecived = "menuViewHide";
        $scope.ApproveRegView = "menuViewHide";

        $scope.PaymentMethodView = "menuViewHide";

        $scope.UserRoleView = "menuViewHide";

        $scope.UserManageView = "menuViewHide";

       

        ///=====User ==============

        $scope.TicketView = "menuViewHide";

        $scope.PaymentView = "menuViewHide";

        $scope.BillingInfoView = "menuViewHide";
        $scope.ChargingPortErrorView = "menuViewHide";
        $scope.CustomerTicketView = "menuViewHide";
       /* $scope.BatteryHelthCheckView = "menuViewHide";*/
     

        $scope.CustomerCareDashboardView = "menuViewHide";
       

        //All menu control hidden default ----End
        GetUser(); //Get logged in user Info from cookies
    }
    //$scope.profile = function () {
    //    $("#Profile").addClass("show");
    //}
    ViewRole();
    function ViewRole() {
        if ($scope.LoginUser == 'User') {
            $("#Admin").attr("hidden", true);
            $("#Care").attr("hidden", true);
            $(".left-sidenav").show();
        } else if ($scope.LoginUser == 'Care') {
            $("#Admin").attr("hidden", true);
            $("#User").attr("hidden", true);
            $(".left-sidenav").show();

        } else if ($scope.LoginUser == 'Admin') {
            $("#User").attr("hidden", true);
            $("#Care").attr("hidden", true);
            $(".left-sidenav").show();
        } else if ($scope.LoginUser == 'SAdmin') {
            $(".left-sidenav").show();
        } else {
            $("#Admin").attr("hidden", true);
            $("#User").attr("hidden", true);
            $("#Care").attr("hidden", true);

        }

    }
    $scope.Home = function () {
        window.location = '/Home/LandingPage#/LandingPage';
    }
    $scope.ReloadPage = function () {
        //$templateCache.removeAll();
        var currentPageTemplate = $route.current.templateUrl;
        console.log(currentPageTemplate);
        $templateCache.remove(currentPageTemplate);
        $window.location.reload();
    }
    function GetUser() {
        //$scope.LoginUser = $cookieStore.get('UserData');
        var login = sessionStorage.getItem("UserDataSession");
        if (login != null) {
            $scope.LoginUser = JSON.parse(sessionStorage.UserDataSession);
        }
        $scope.UserId = $scope.LoginUser.UserId;
        $scope.UserName = $scope.LoginUser.Username;
        $scope.RoleId = $scope.LoginUser.RoleId;
        $scope.RoleName = $scope.LoginUser.RoleName;
        GetPermissionByRoleId($scope.RoleId);
    }

    function GetPermissionByRoleId(roleId) {
        $scope.ScreenName = 'UserDashboard'
        if ($scope.ScreenName == "UserDashboard" && true) {
            $scope.UserDashboardView = "menuViewShow";
          // $scope.FiscalYearView = "menuViewShow";
            //sessionStorage.setItem("FiscalYearEntryScreenId", aPermission.ScreenId);
            sessionStorage.setItem("UserDashboardPermission", 'true');

        }
        
        $scope.LoginScreenName = 'Login'
        if ($scope.LoginScreenName == "Login" && true) {
          ///  $scope.AdminView = "menuViewShow";
            $scope.LoginView= "menuViewShow";
            //sessionStorage.setItem("FiscalYearEntryScreenId", aPermission.ScreenId);
            sessionStorage.setItem("LoginPermission", 'true');

        }

        $scope.RegisterScreenName = 'Register'
        if ($scope.RegisterScreenName == "Register" && true) {
            ///  $scope.AdminView = "menuViewShow";
            $scope.RegisterView = "menuViewShow";
            //sessionStorage.setItem("FiscalYearEntryScreenId", aPermission.ScreenId);
            sessionStorage.setItem("RegisterPermission", 'true');

        }


        $scope.InvoiceScreenName = 'Invoice'
        if ($scope.InvoiceScreenName == "Invoice" && true) {
            ///  $scope.AdminView = "menuViewShow";
            $scope.InvoiceView = "menuViewShow";
            //sessionStorage.setItem("FiscalYearEntryScreenId", aPermission.ScreenId);
            sessionStorage.setItem("InvoicePermission", 'true');

        }

        $scope.BatteryAddScreenName = "BatteryAdd";
        $scope.ApproveRegistrationScreenName = "ApproveRegistration";
    
        $scope.BatteryStatusScreenName = "BatteryStatus";
        $scope.LockerManagementScreenName = "LockerManagement";
        $scope.LockerMapScreenName = "LockerMap";
        $scope.PaymentRecivedScreenName = "PaymentRecive";
        $scope.TicketScreenName = "Ticket";
        $scope.BillingViewScreenName = "BillingInfo";
        /*$scope.BatteryHelthChecKScreenName = "BatteryHelthChecK";*/
        $scope.CustomerTicketScreenName = "CustomerTicket";
      

        $scope.PaymentMethodScreenName = "PaymentMethod";
        $scope.UserRoleScreenName = "UserRole";
        $scope.LockUnlockSwapStationScreenName = "EnableDisableSwapStation";

       $scope.CustomerCareDashboardScreenName = "CustomerCareDashboard";
       
        $scope.SwapStationMapScreenName = "SwapStationmap";


        if ($scope.SwapStationMapScreenName == "SwapStationmap" && true) {
            ///  $scope.AdminView = "menuViewShow";
            $scope.SwapStationMapMainView = "menuViewShow";
            //sessionStorage.setItem("FiscalYearEntryScreenId", aPermission.ScreenId);
            sessionStorage.setItem("SwapStationmapPermission", 'true');

        }

        if ($scope.LockUnlockSwapStationScreenName == "EnableDisableSwapStation" && true) {
            ///  $scope.AdminView = "menuViewShow";
            $scope.EnableDisableSwapStationView = "menuViewShow";
            //sessionStorage.setItem("FiscalYearEntryScreenId", aPermission.ScreenId);
            sessionStorage.setItem("EnableDisableSwapPermission", 'true');

        }

        if ($scope.BatteryAddScreenName == "BatteryAdd" && true) {
            ///  $scope.AdminView = "menuViewShow";
            $scope.BatteryAdd = "menuViewShow";
            //sessionStorage.setItem("FiscalYearEntryScreenId", aPermission.ScreenId);
            sessionStorage.setItem("BatteryAddPermission", 'true');

        }

     

        if ($scope.BatteryStatusScreenName == "BatteryStatus" && true) {
            ///  $scope.AdminView = "menuViewShow";
            $scope.BatteryStatus = "menuViewShow";
            //sessionStorage.setItem("FiscalYearEntryScreenId", aPermission.ScreenId);
            sessionStorage.setItem("BatteryStatusPermission", 'true');

        }

        if ($scope.LockerManagementScreenName == "LockerManagement" && true) {
            ///  $scope.AdminView = "menuViewShow";
            $scope.LockerManagement = "menuViewShow";
            //sessionStorage.setItem("FiscalYearEntryScreenId", aPermission.ScreenId);
            sessionStorage.setItem("LockerManagementPermission", 'true');

        }

        if ($scope.LockerMapScreenName == "LockerMap" && true) {
            ///  $scope.AdminView = "menuViewShow";
            $scope.LockerMap = "menuViewShow";
            //sessionStorage.setItem("FiscalYearEntryScreenId", aPermission.ScreenId);
            sessionStorage.setItem("LockerMapPermission", 'true');

        }
        if ($scope.PaymentRecivedScreenName == "PaymentRecive" && true) {
            ///  $scope.AdminView = "menuViewShow";
            $scope.PaymentRecived = "menuViewShow";
            //sessionStorage.setItem("FiscalYearEntryScreenId", aPermission.ScreenId);
            sessionStorage.setItem("PaymentRecivePermission", 'true');

        }

        if ($scope.TicketScreenName == "Ticket"  && true) {
            ///  $scope.AdminView = "menuViewShow";
            $scope.TicketView = "menuViewShow";
            //sessionStorage.setItem("FiscalYearEntryScreenId", aPermission.ScreenId);
            sessionStorage.setItem("TicketRecivePermission", 'true');

        }

        if ($scope.BillingViewScreenName == "BillingInfo" && true) {
            ///  $scope.AdminView = "menuViewShow";
            $scope.BillingInfoView = "menuViewShow";
            //sessionStorage.setItem("FiscalYearEntryScreenId", aPermission.ScreenId);
            sessionStorage.setItem("BillingInfoPermission", 'true');

        }
       
        if ($scope.CustomerTicketScreenName == "CustomerTicket" && true) {
            ///  $scope.AdminView = "menuViewShow";
            $scope.CustomerTicketView = "menuViewShow";
            //sessionStorage.setItem("FiscalYearEntryScreenId", aPermission.ScreenId);
            sessionStorage.setItem("CustomerTicketPermission", 'true');

        }
       
        //if ($scope.BatteryHelthChecKScreenName == "BatteryHelthChecK" && true) {
        //    ///  $scope.AdminView = "menuViewShow";
        //    $scope.BatteryHelthCheckView = "menuViewShow";
        //    //sessionStorage.setItem("FiscalYearEntryScreenId", aPermission.ScreenId);
        //    sessionStorage.setItem("BatteryHelthChecKTicketPermission", 'true');

        //}
       
      

        if ($scope.CustomerCareDashboardScreenName == "CustomerCareDashboard" && true) {
            ///  $scope.AdminView = "menuViewShow";
             $scope.CustomerCareDashboardView  = "menuViewShow";
            //sessionStorage.setItem("FiscalYearEntryScreenId", aPermission.ScreenId);
            sessionStorage.setItem("CustomerCareDashboardPermission", 'true');

        }
       
        if ($scope.PaymentMethodScreenName == "PaymentMethod" && true) {
            ///  $scope.AdminView = "menuViewShow";
            $scope.PaymentMethodView = "menuViewShow";
            //sessionStorage.setItem("FiscalYearEntryScreenId", aPermission.ScreenId);
            sessionStorage.setItem("PaymentMethodPermission", 'true');

        }
       
        if ($scope.UserRoleScreenName == "UserRole" && true) {
            ///  $scope.AdminView = "menuViewShow";
            $scope.UserRoleView = "menuViewShow";
            //sessionStorage.setItem("FiscalYearEntryScreenId", aPermission.ScreenId);
            sessionStorage.setItem("UserRolePermission", 'true');

        }

        

       
       
        

    }



    $scope.SignOut = function () {
        //$scope.User = $cookieStore.get('UserData');
        var login = sessionStorage.getItem("UserDataSession");
        if (login != null) {
            $scope.User = JSON.parse(sessionStorage.UserDataSession);
        }
        //sessionStorage.setItem('UserData', null);
        sessionStorage.setItem("UserDataSession", null);


        window.location = '/Home/Login#/';
    }

    //////////////////// SignalR /////////////////////////////
    
    $scope.batteryStatus = [];
    $scope.notificationHub = null;
    $scope.notificationHub = $.connection.notificationHub;
    $.connection.hub.start().done(function () {
       // alert("SignalR Connected!!!!")
    });
    //$scope.notificationHub.client.broadcastMessage = function (name, message) {

    //    $scope.notificationObj = {};
    //    $scope.notificationObj.name = name;
    //    $scope.notificationObj.message = message;
    //    //$scope.messages.name = name;
    //    //$scope.messages.message = message
    //    $scope.messages.push($scope.notificationObj);
    //    /*$scope.messages = [{ name: 'Belal', message: 'Hi' }, { name: 'Shovo', message: 'How are you' }];*/
    //    $('#notiCount').text($scope.messages.length);
    //    $('#notiAll').text('Notifications (' + $scope.messages.length + ')');
    //    $scope.$apply();
    //};
    // $scope.messages = [{ name: 'Belal', message: 'Hi' }, { name: 'Shovo', message: 'How are you' }];


  //  $scope.addToCartData = [];
    //$scope.cartItemList = [];
    //$scope.addToCartData = [];
    //$scope.addToCartData= JSON.parse(sessionStorage.getItem("SendToDataTopBar"));
    //if ($scope.addToCartData == null) {
    //    $scope.addToCartData = [];
    //}

    //$scope.BatteryCartItemList = [];

    //$scope.cartItemList = [];
    //$scope.BatteryCartItemList = [];

    //angular.forEach($scope.addToCartData, function (aData) {


    //    if ($scope.addToCartData.length < 4) {
    //        var obj = {};
    //        obj.BatteryName = aData.BatteryName;
    //        obj.PortName = aData.PortName;
    //        obj.CahargingPercentage = aData.CahargingPercentage;
    //        obj.CagargingTime = aData.CagargingTime;
    //        $scope.addToCartData.push(obj);
    //    }

    //});

    //$scope.Addcartbattey = function () {
    //    //$scope.cartItemList = [];
    //    //$scope.BatteryCartItemList = [];

        

    //    //angular.forEach($scope.addToCartData, function (aData) {
    //    //    var obj2 = {};
    //    //    obj2.BatteryName = aData.BatteryName;
    //    //    obj2.PortName = aData.PortName;
    //    //    obj2.CahargingPercentage = aData.CahargingPercentage;
    //    //    obj2.CagargingTime = aData.CagargingTime;
    //    //    $scope.BatteryCartItemList.push(obj2);
    //    //});
      
      
    //    $("#ShowaddToCartItem").show();
      
    //}


  
   

    $scope.notificationHub.client.broadcastBatteryStatus = function (location, swapStation, chargingUnit, battery, voltage, amper) {

        $scope.batteryStatusObj = {};
        $scope.batteryStatusObj.location = location;
        $scope.batteryStatusObj.swapStation = swapStation;
        $scope.batteryStatusObj.chargingUnit = chargingUnit;
        $scope.batteryStatusObj.battery = battery;
        $scope.batteryStatusObj.voltage = voltage;
        $scope.batteryStatusObj.amper = amper;
        //$scope.messages.name = name;
        //$scope.messages.message = message
        $scope.batteryStatus.push($scope.batteryStatusObj);
        console.log($scope.batteryStatus);
        /*$scope.messages = [{ name: 'Belal', message: 'Hi' }, { name: 'Shovo', message: 'How are you' }];*/
        $('#notiCount').text($scope.batteryStatus.length);
        $('#notiAll').text('Notifications (' + $scope.batteryStatus.length + ')');
        $scope.$apply();
    };
   
});
