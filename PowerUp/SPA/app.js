var app = angular.module('AngularDemoApp', ['ngRoute', 'ngCookies','angular.filter',]);


//app.run(function (signalR) {
//    signalR.url("http://localhost:21991/signalr");
//});

//Check page parmission from cookies which is defined by 'IndexController'
app.config(function ($routeProvider, $controllerProvider) {
    
    $routeProvider
      

        .when('/UserDashboard', {
            templateUrl: '/SPA/User/UserDashboard/UserDashboad.html',
            controller: 'UserDashboardController',
            resolve: {
                "check": function () {
                    $('.note-popover').css("display", "none");
                }
            }
        })


        .when('/PaymentMethod', {
            templateUrl: '/SPA/Admin/PaymentMethod/PaymentMethodEntry.html',
            controller: 'PaymentMethodEntryController',
            resolve: {
                "check": function () {
                    $('.note-popover').css("display", "none");
                }
            }
        })
        .when('/UserRole', {
            templateUrl: '/SPA/Admin/UserRole/UserRoleEntry.html',
            controller: 'UserRoleEntryController',
            resolve: {
                "check": function () {
                    $('.note-popover').css("display", "none");
                }
            }
        })
        .when('/UserManage', {
            templateUrl: '/SPA/Admin/UserManage/UserManage.html',
            controller: 'UserManageController',
            resolve: {
                "check": function () {
                    $('.note-popover').css("display", "none");
                }
            }
        })
        .when('/BatterySetup', {
            templateUrl: '/SPA/Admin/BatterySetup/BatterySetup.html',
            controller: 'BatterySetupController',
            resolve: {
                "check": function () {
                    $('.note-popover').css("display", "none");
                }
            }
        })
        .when('/BookingHistory', {
            templateUrl: '/SPA/Admin/BookingHistory/BookingHistory.html',
            controller: 'BookingHistoryController',
            resolve: {
                "check": function () {
                    $('.note-popover').css("display", "none");
                }
            }
        })

        .when('/AddChargingUnit', {
            templateUrl: '/SPA/Admin/AddChargingUnit/AddChargingUnit.html',
            controller: 'AddChargingUnitController',
            resolve: {
                "check": function () {
                    $('.note-popover').css("display", "none");
                }
            }
        })

        .when('/BatteryBooking', {
            templateUrl: '/SPA/User/BatteryBooking/BatteryBooking.html',
            controller: 'BatteryBookingController',
            resolve: {
                "check": function () {
                    $('.note-popover').css("display", "none");
                }
            }
        })
        .when('/CustomerQueries', {
            templateUrl: '/SPA/CustomerCare/CustomerQueries/CustomerQueries.html',
            controller: 'CustomerQueriesController',
            resolve: {
                "check": function () {
                    $('.note-popover').css("display", "none");
                    //var UserData = sessionStorage.getItem("UserDataSession"); if (UserData != null) { var login = JSON.parse(sessionStorage.UserDataSession); }
                   // if (login != undefined) {
                        //var permission = sessionStorage.getItem('UserDashboardPermission');
                        //var permission = true;
                        //if (permission != 'true') {
                            //alertify.alert("You don't have parmission to access this page");
                           // window.location = '/Home/Index#/Home';
                        //}
                    //}
                    //else {
                    //    window.location = '/Home/Login#/';
                    //}
                }
            }
        })
        .when('/EnableDisableSwapStation', {
            templateUrl: '/SPA/CustomerCare/EnableDisableSwapStation/EableDisableSwapStationEntry.html',
            controller: 'EableDisableSwapStationEntryController',
            resolve: {
                "check": function () {
                    $('.note-popover').css("display", "none");
                    //var UserData = sessionStorage.getItem("UserDataSession"); if (UserData != null) { var login = JSON.parse(sessionStorage.UserDataSession); }
                   // if (login != undefined) {
                        //var permission = sessionStorage.getItem('UserDashboardPermission');
                        //var permission = true;
                        //if (permission != 'true') {
                            //alertify.alert("You don't have parmission to access this page");
                           // window.location = '/Home/Index#/Home';
                        //}
                    //}
                    //else {
                    //    window.location = '/Home/Login#/';
                    //}
                }
            }
        })
        .when('/Dashboard', {
            templateUrl: '/SPA/CustomerCare/Dashboard/CustomerCareDashboard.html',
            controller: 'CustomerCareDashboardController',
            resolve: {
                "check": function () {
                    $('.note-popover').css("display", "none");
                    //var UserData = sessionStorage.getItem("UserDataSession"); if (UserData != null) { var login = JSON.parse(sessionStorage.UserDataSession); }
                    // if (login != undefined) {
                    //var permission = sessionStorage.getItem('UserDashboardPermission');
                    //var permission = true;
                    //if (permission != 'true') {
                    //alertify.alert("You don't have parmission to access this page");
                    // window.location = '/Home/Index#/Home';
                    //}
                    //}
                    //else {
                    //    window.location = '/Home/Login#/';
                    //}
                }
            }
        })

        .when('/LockUnlockChargingUnit', {
            templateUrl: '/SPA/CustomerCare/LockUnlockChargingUnit/LockUnlockChargingUnit.html',
            controller: 'LockUnlockChargingUnitController',
            resolve: {
                "check": function () {
                    $('.note-popover').css("display", "none");
                }
            }
        })
        .when('/EnableDisableChargingUnit', {
            templateUrl: '/SPA/CustomerCare/EnableDisableChargingUnit/EnableDisableChargingUnit.html',
            controller: 'EnableDisableChargingUnitController',
            resolve: {
                "check": function () {
                    $('.note-popover').css("display", "none");
                }
            }
        })
        .when('/ChargingPortError', {
            templateUrl: '/SPA/CustomerCare/ChargingPortError/ChargingPortError.html',
            controller: 'ChargingPortErrorController',
            resolve: {
                "check": function () {
                    $('.note-popover').css("display", "none");
                    //var UserData = sessionStorage.getItem("UserDataSession"); if (UserData != null) { var login = JSON.parse(sessionStorage.UserDataSession); }
                   // if (login != undefined) {
                        //var permission = sessionStorage.getItem('UserDashboardPermission');
                        //var permission = true;
                        //if (permission != 'true') {
                            //alertify.alert("You don't have parmission to access this page");
                           // window.location = '/Home/Index#/Home';
                        //}
                    //}
                    //else {
                    //    window.location = '/Home/Login#/';
                    //}
                }
            }
        })
        .when('/UserProfile', {
            templateUrl: '/SPA/User/UserProfile/UserProfile.html',
            controller: 'UserProfileController',
            resolve: {
                "check": function () {
                    $('.note-popover').css("display", "none");
                }
            }
        })

        .when('/Payment', {
            templateUrl: '/SPA/User/Payment/Payment.html',
            controller: 'PaymentController',
            resolve: {
                "check": function () {
                    $('.note-popover').css("display", "none");
                }
            }
        })

        .when('/CartItem', {
            templateUrl: '/SPA/User/CartItem/CartItemEntry.html',
            controller: 'CartItemEntryController',
            resolve: {
                "check": function () {
                    $('.note-popover').css("display", "none");
                }
            }
        })

        .when('/ApproveReg', {
            templateUrl: '/SPA/Admin/ApproveReg/ApproveReg.html',
            controller: 'ApproveRegController',
            resolve: {
                "check": function () {
                    $('.note-popover').css("display", "none");
                }
            }
        })
        .when('/AdminDashboard', {
            templateUrl: '/SPA/Admin/AdminDashboard/AdminDashboard.html',
            controller: 'AdminDashboardController',
            resolve: {
                "check": function () {
                    $('.note-popover').css("display", "none");
                }
            }
        })
        .when('/AdminSettings', {
            templateUrl: '/SPA/Admin/AdminSettings/AdminSettings.html',
            controller: 'AdminSettingsController',
            resolve: {
                "check": function () {
                    $('.note-popover').css("display", "none");
                }
            }
        })
        .when('/AddLocationSetup', {
            templateUrl: '/SPA/Admin/AddLocationSetup/AddLocationSetup.html',
            controller: 'AddLocationSetupController',
            resolve: {
                "check": function () {
                    $('.note-popover').css("display", "none");
                }
            }
        })
        .when('/AdminInvoice', {
            templateUrl: '/SPA/Admin/AdminInvoice/AdminInvoiceEntry.html',
            controller: 'AdminInvoiceController',
            resolve: {
                "check": function () {
                    $('.note-popover').css("display", "none");
                }
            }
        })

        //.when('/UserDashboard', {
        //    templateUrl: '/SPA/UserDashboard/UserDashboad.html',
        //    controller: 'UserDashboardController',
        //    resolve: {
        //        "check": function () {
                   
        //        }
        //    }
        //})

        .when('/Invoice', {
            templateUrl: '/SPA/User/Invoice/InvoiceEntry.html',
            controller: 'InvoiceController',
            resolve: {
                "check": function () {
                    $('.note-popover').css("display", "none");
                }
            }
        })
        .when('/AddBattery', {
            templateUrl: '/SPA/Admin/AddBattery/AddBatteryEntry.html',
            controller: 'AddBatteryEntryController',
            resolve: {
                "check": function () {
                    $('.note-popover').css("display", "none");
                }
            }
        })
        .when('/AddBattery', {
            templateUrl: '/SPA/Admin/AddBattery/AddBatteryEntry.html',
            controller: 'AddBatteryEntryController',
            resolve: {
                "check": function () {
                    $('.note-popover').css("display", "none");
                }
            }
        })
        .when('/AdminBatteryStatus', {
            templateUrl: '/SPA/Admin/AdminBatteryStatus/AdminBatteryStatusEntry.html',
            controller: 'AdminBatteryStatusController',
            resolve: {
                "check": function () {
                    $('.note-popover').css("display", "none");
                }
            }
        })
       
        .when('/UserBatteryStatus', {
            templateUrl: '/SPA/User/BatteryStatus/BatteryStatusEntry.html',
            controller: 'BatteryStatusController',
            resolve: {
                "check": function () {
                    $('.note-popover').css("display", "none");
                }
            }
        })

        .when('/AddSwapStation', {
            templateUrl: '/SPA/Admin/AddSwapStation/AddSwapStation.html',
            controller: 'AddSwapStationController',
            resolve: {
                "check": function () {
                    $('.note-popover').css("display", "none");
                }
            }
        })

        .when('/SwapStationMap', {
            templateUrl: '/SPA/Admin/SwapStationMap/SwapStationMapEntry.html',
            controller: 'SwapStationMapController',
            resolve: {
                "check": function () {
                    $('.note-popover').css("display", "none");
                }
            }
        })

        .when('/SwapStationMapMain', {
            templateUrl: '/SPA/User/SwapStationMapMain/SwapStationMapMainEntry.html',
            controller: 'SwapStationMapMainController',
            resolve: {
                "check": function () {
                    $('.note-popover').css("display", "none");
                }
            }
        })

        .when('/PaymentReceived', {
            templateUrl: '/SPA/Admin/PaymentReceived/PaymentRecivedEntry.html',
            controller: 'PaymentRecivedController',
            resolve: {
                "check": function () {
                    $('.note-popover').css("display", "none");
                }
            }
        })


        ////=======User========================>>>

      

        .when('/Ticket', {
            templateUrl: '/SPA/User/Ticket/TicketEntry.html',
            controller: 'TicketController',
            resolve: {
                "check": function () {
                    $('.note-popover').css("display", "none");
                }
            }
        })


        .when('/BillingInfo', {
            templateUrl: '/SPA/CustomerCare/BillingInfo/BillingInfoEntry.html',
            controller: 'BillingInfoController',
            resolve: {
                "check": function () {
                    $('.note-popover').css("display", "none");
                }
            }
        })

        .when('/CustomerTicket', {
            templateUrl: '/SPA/CustomerCare/CustomerTicket/CustomerTicketEntry.html',
            controller: 'CustomerTicketController',
            resolve: {
                "check": function () {
                    $('.note-popover').css("display", "none");
                }
            }
        })
        .when('/ManageTicket', {
            templateUrl: '/SPA/CustomerCare/ManageTicket/ManageTicket.html',
            controller: 'ManageTicketController',
            resolve: {
                "check": function () {
                    $('.note-popover').css("display", "none");
                }
            }
        })

        //.when('/BatteryHelthCheck', {
        //    templateUrl: '/SPA/CustomerCare/BatteryHelthCheck/BatteryHealthCheckEntry.html',
        //    controller: 'BatteryHelthCheckEntryController'
        //})



        //.when('/Invoice', {
        //    templateUrl: '/SPA/Invoice/InvoiceEntry.html',
        //    controller: 'InvoiceController'
        //})
        .when('/Register', {
            templateUrl: '/SPA/Register/Registration.html',
            controller: 'RegisterEntryController',
            resolve: {
                "check": function () {
                    $('.note-popover').css("display", "none");
                }
            }
        })
        .when('/Login', {
            templateUrl: '/SPA/Login/Login.html',
            controller: 'LoginController',
            resolve: {
                "check": function () {
                    $('.note-popover').css("display", "none");
                }
            }
        })


        .when('/', {
            templateUrl: '/SPA/LandingPage/LandingPage.html',
            controller: 'LandingPageController',
            resolve: {
                "check": function () {
                    $('.note-popover').css("display", "none");
                }
            }
        })

     
        //.when('/LazyLoad', {
        //    templateUrl: '/SPA/LazyLoad/LazyEntry.html',
        //    controller: 'LazyController',
        //    resolve: {
        //        load: function () {
        //            controllers(['LazyController'])
        //        }
        //    }
        //})

        ///Customer Care =======>>>>>>

      
        .otherwise({
            redirectTo: '/' });


    app.registerCtrl = $controllerProvider.register;

    //jquery to dynamically include controllers as needed




});
app.directive("selectNgFiles", function () {
    return {
        require: "ngModel",
        link: function postLink(scope, elem, attrs, ngModel) {
            elem.on("change", function (e) {
                var files = elem[0].files;
                ngModel.$setViewValue(files);
            })
        }
    }
});
app.factory('MyService', function () {
    return {
        data: {
            userName: '',
            role: '',
            permission: []
        },
        update: function (username, role) {
            this.data.userName = username;
            this.data.role = role;
        },
        permissionUpdate: function (permission) {
            this.data.permission = permission;
        }
    };
});

app.config(function ($provide) {
    $provide.decorator('$exceptionHandler', function ($delegate, $cookieStore) {
        return function (exception, cause) {
            $delegate(exception, cause);
            var message = exception.message;
            $cookieStore.put('errorMassage', message);
        };

    });
});

app.run(function ($http, $cookieStore) {
    var message = $cookieStore.get('errorMassage');
    if (message != undefined) {
        var megs = $cookieStore.get('errorMassage');
        var parms = { message: megs };
        //$http.post('/ErrorLog/CreateErrorLogForClintSite', parms).success(function (data) {
        //});
    }


});