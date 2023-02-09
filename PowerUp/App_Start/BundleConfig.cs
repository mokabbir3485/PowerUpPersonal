using System.Web;
using System.Web.Optimization;

namespace PowerUp
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"
                        
                        ));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at https://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(

                      "~/Content/assets/plugins/select2/select2.min.css",
                      "~/Content/assets/plugins/bootstrap-colorpicker/css/bootstrap-colorpicker.css",
                      "~/Content/assets/plugins/timepicker/bootstrap-material-datetimepicker.css",
                      "~/Content/assets/plugins/bootstrap-touchspin/css/jquery.bootstrap-touchspin.min.css",
                      "~/Content/assets/css/bootstrap.min.css",
                      "~/Content/assets/css/icons.css",
                      "~/Content/assets/css/metisMenu.min.css",
                      "~/Content/assets/css/style.css",
                      //"~/Content/site.css",
                      "~/Content/datepicker.css",
                      "~/Content/bootstrap-select.min.css",

                      "~/Content/assets/plugins/creditcard/card.css",
                      "~/Content/assets/plugins/summernote/summernote-bs4.css",

                      "~/Content/toastr.min.css"
                      ));

          
            bundles.Add(new ScriptBundle("~/bundles/spa").Include(
                

                 //---- Angular Assets ------
             
                 "~/Scripts/multiple-select.js",
                "~/Scripts/angular.min.js",
                "~/Scripts/angular-route.min.js",
                "~/Scripts/angular-cookies.js",
                "~/Scripts/angular-animate.js",
                "~/Scripts/angular-filter.min.js",
                "~/Scripts/mapapi.js",
                
                "~/Scripts/bootstrap-select.min.js",
                "~/Scripts/bootstrap-datepicker.js",
                "~/Scripts/select2.min.js",
                //"~/Scripts/angularjs-dropdown-multiselect.js",

                "~/Scripts/jquery-3.4.1.min.js",
                "~/Scripts/toastr.min.js",
                

                //"~/Scripts/jquery.dropotron.min.js",
                //"~/Scripts/jquery.scrollex.min.js",
                //"~/Scripts/browser.min.js",
                //"~/Scripts/breakpoints.min.js",
                //"~/Scripts/util.js",
                //"~/Scripts/main.js",


                "~/Content/assets/plugins/creditcard/card.js",
                "~/Content/assets/plugins/creditcard/jquery.card.js",
                "~/Content/assets/plugins/summernote/summernote-bs4.min.js",
                //"~/Scripts/jquery-3.4.1.min.js",
                //"~/Scripts/alertify.js",
                //"~/Scripts/alertify.min.js",

                //"~/Scripts/alasql.min.js",

                //----

                "~/SPA/app.js",
                 //"~/Scripts/dirPagination.js",
                 //"~/Content/plugins/timepicker/bootstrap-material-datetimepicker.js",
                 //"~/Content/plugins/timepicker/bootstrap-material-datetimepicker.css",


               

                 

                 ///----Admin-----///
                 "~/SPA/Admin/AddBattery/AddBatteryEntryController.js",
                  "~/SPA/Admin/AdminBatteryStatus/AdminBatteryStatusController.js",
                
                  "~/SPA/User/BatteryStatus/BatteryStatusController.js",

                  "~/SPA/Admin/SwapStationMap/SwapStationMapController.js",

                  "~/SPA/Admin/AddSwapStation/AddSwapStationController.js",

                  "~/SPA/Admin/PaymentReceived/PaymentRecivedController.js",
                  "~/SPA/Admin/AdminDashboard/AdminDashboardController.js",
                  "~/SPA/Admin/AdminSettings/AdminSettingsController.js",
                  "~/SPA/Admin/AdminInvoice/AdminInvoiceController.js",
                  "~/SPA/Admin/AddLocationSetup/AddLocationSetupController.js",
                  "~/SPA/Admin/AddChargingUnit/AddChargingUnitController.js",
                  "~/SPA/Admin/BookingHistory/BookingHistoryController.js",

                 "~/SPA/LandingPage/LandingPageController.js",

           

                 "~/SPA/User/BatteryBooking/BatteryBookingController.js",
                 
                 "~/SPA/Admin/ApproveReg/ApproveRegController.js",
                  "~/SPA/Admin/PaymentMethod/PaymentMethodEntryController.js",

                  "~/SPA/Admin/UserRole/UserRoleEntryController.js",

                  "~/SPA/Admin/UserManage/UserManageController.js",

                   "~/SPA/Admin/BatterySetup/BatterySetupController.js",
                 ///====== User ========
                 "~/SPA/User/SwapStationMapMain/SwapStationMapMainController.js",

                 "~/SPA/User/Payment/PaymentController.js",
                

                 
                  "~/SPA/User/UserProfile/UserProfileController.js",
                  "~/SPA/User/CartItem/CartItemEntryController.js",
                  "~/SPA/User/Ticket/TicketController.js",

                 //// Customer care ///
                 "~/SPA/CustomerCare/Dashboard/CustomerCareDashboardController.js",

                  "~/SPA/CustomerCare/BillingInfo/BillingInfoController.js",
                  "~/SPA/CustomerCare/CustomerQueries/CustomerQueriesController.js",


                  "~/SPA/CustomerCare/EnableDisableSwapStation/EableDisableSwapStationEntryController.js",

                  "~/SPA/CustomerCare/LockUnlockChargingUnit/LockUnlockChargingUnitController.js",

                  "~/SPA/CustomerCare/EnableDisableChargingUnit/EnableDisableChargingUnitController.js",

                  "~/SPA/CustomerCare/ChargingPortError/ChargingPortErrorController.js",
                   "~/SPA/CustomerCare/CustomerTicket/CustomerTicketController.js",
                   "~/SPA/CustomerCare/ManageTicket/ManageTicketController.js",
                   "~/SPA/CustomerCare/BatteryHelthCheck/BatteryHelthCheckEntryController.js",
                  "~/SPA/User/UserDashboard/UserDashboardController.js",
                  "~/SPA/User/Invoice/InvoiceController.js",
                  //"~/SPA/Login/LoginController.js",
                  "~/SPA/IndexController.js"

                ));


          
            //bundles.Add(new ScriptBundle("~/bundles/vendors").Include(
            //       "~/Content/assets/js/jquery.min.js",
            //       "~/Content/assets/js/bootstrap.bundle.min.js",
            //       "~/Content/assets/js/metisMenu.min.js",
            //       "~/Content/assets/js/waves.min.js",
            //     //"~/Content/assets/js/jquery.slimscroll.min.js",
            //       "~/Content/assets/plugins/apexcharts/apexcharts.min.js",
            //       "~/Content/assets/pages/jquery.eco_dashboard.init.js"
            // ));
        }
    }
}
