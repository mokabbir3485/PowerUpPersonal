app.controller("BatteryBookingController", function ($scope, $route) {
    var UserData = sessionStorage.getItem("UserDataSession");
    if (UserData != null) {
        $scope.LoginUser = JSON.parse(sessionStorage.UserDataSession);
    }
    $scope.name = "Abir";

    $scope.LocationTitle = false;
    $scope.SendDataAddToCartTopBar = [];

    $scope.LocationList = [
        { id:1, LocationName: 'Gulshan 01' },
        { id:2, LocationName: 'Gulshan 02' },
        { id:3, LocationName: 'Mirpur 1' },
        { id: 4, LocationName: 'Mirpur 2' },
        { id: 3, LocationName: 'Motijheel' },
        { id: 4, LocationName: 'Shahbagh ' },
        { id: 3, LocationName: 'Danmondi 16' },
        { id: 4, LocationName: 'Danmondi 27' },
        { id: 4, LocationName: 'Danmondi 32' },
    ]
    //$scope.LockerList = [
    //    { id: 1, LockerName: 'Locker 1' },
    //    { id: 2, LockerName: 'Locker 2' },
    //    { id: 3, LockerName: 'Locker 1' },
    //    { id: 4, LockerName: 'Locker 2' },
    //]
    $scope.PortList = [
        { id: 1, PortName: 'L1Port 01', BatteryName: 'Battery 1' },
    ];
    $scope.getLocker = function (id) {
        $scope.LocationTitle = true;
        $scope.LockerList = [
            { id: 1, LockerName: 'Swap Station 1' },
            { id: 2, LockerName: 'Swap Station 2' },
            { id: 3, LockerName: 'Swap Station 1' },
            { id: 4, LockerName: 'Swap Station 2' },
        ]
    }
    $scope.ShowPlug = function (aLocation) {
        $scope.isShowPlug = true;
        if (aLocation.id == 1 || aLocation.id == 2 || aLocation.id == 3 || aLocation.id == 4) {

            $scope.PortList = [
                { id: 1, PortName: 'L1Port 01', BatteryName: 'Battery 1', LocationId:1 ,CahargingPercentage:80,CagargingTime:"4 Hrs"},
                { id: 2, PortName: 'L1Port 02', BatteryName: 'Battery 2', LocationId: 1, CahargingPercentage: 60, CagargingTime: "4 Hrs"},
                { id: 3, PortName: 'L1Port 03', BatteryName: 'Battery 3', LocationId: 1, CahargingPercentage: 20, CagargingTime: "2 Hrs" },
                { id: 4, PortName: 'L1Port 04', BatteryName: 'Battery 4', LocationId: 1, CahargingPercentage: 30, CagargingTime: "3 Hrs" },
                { id: 5, PortName: 'L1Port 05', BatteryName: 'Battery 5', LocationId: 1, CahargingPercentage: 0, CagargingTime: "0 Hrs"},
                { id: 6, PortName: 'L1Port 06', BatteryName: 'Battery 6', LocationId: 1, CahargingPercentage: 50, CagargingTime: " 3 Hrs"},
                { id: 7, PortName: 'L1Port 07', BatteryName: 'Battery 7', LocationId: 1, CahargingPercentage: 30, CagargingTime: "4 Hrs"},
                { id: 8, PortName: 'L1Port 08', BatteryName: 'Battery 8', LocationId: 1, CahargingPercentage: 0, CagargingTime: "0 Hrs"},
                { id: 9, PortName: 'L1Port 09', BatteryName: 'Battery 9', LocationId: 1, CahargingPercentage: 95, CagargingTime: "5 Hrs"},
                { id: 10, PortName: 'L1Port 10', BatteryName: 'Battery 10', LocationId: 1, CahargingPercentage: 85, CagargingTime: "3 Hrs" },
                { id: 11, PortName: 'L1Port 11', BatteryName: 'Battery 11', LocationId: 1, CahargingPercentage: 4, CagargingTime: "4 Hrs" },
                { id: 12, PortName: 'L1Port 12', BatteryName: 'Battery 12', LocationId: 1, CahargingPercentage: 56, CagargingTime: "3 Hrs" },
                { id: 13, PortName: 'L1Port 13', BatteryName: 'Battery 13', LocationId: 1, CahargingPercentage: 0, CagargingTime: "0 Hrs" },
                { id: 14, PortName: 'L1Port 14', BatteryName: 'Battery 14', LocationId: 1, CahargingPercentage: 80, CagargingTime: "3 Hrs"},
                { id: 15, PortName: 'L1Port 15', BatteryName: 'Battery 15', LocationId: 1, CahargingPercentage: 60, CagargingTime: "4 Hrs"},
                { id: 16, PortName: 'L1Port 16', BatteryName: 'Battery 16', LocationId: 1, CahargingPercentage: 0, CagargingTime: "0 Hrs"},


               ]
        }
        if (aLocation.id == 2) {
            $scope.PortName1 = 'L2Port 01';
            $scope.PortName2 = 'L2Port 02';
            $scope.PortName3 = 'L2Port 03';
            $scope.PortName4 = 'L2Port 04';
            $scope.PortName5 = 'L2Port 05';
            $scope.PortName6 = 'L2Port 06';
            $scope.PortName7 = 'L2Port 07';
            $scope.PortName8 = 'L2Port 08';
            $scope.PortName9 = 'L2Port 09';
            $scope.PortName10 = 'L2Port 10';
            $scope.PortName11 = 'L2Port 11';
            $scope.PortName12 = 'L2Port 12';
            $scope.PortName13 = 'L2Port 13';
            $scope.PortName14 = 'L2Port 14';
            $scope.PortName15 = 'L2Port 15';
            $scope.PortName16 = 'L2Port 16';
        }
        if (aLocation.id == 3) {
            $scope.PortName1 = 'L3Port 01';
            $scope.PortName2 = 'L3Port 02';
            $scope.PortName3 = 'L3Port 03';
            $scope.PortName4 = 'L3Port 04';
            $scope.PortName5 = 'L3Port 05';
            $scope.PortName6 = 'L3Port 06';
            $scope.PortName7 = 'L3Port 07';
            $scope.PortName8 = 'L3Port 08';
            $scope.PortName9 = 'L3Port 09';
            $scope.PortName10 = 'L3Port 10';
            $scope.PortName11 = 'L3Port 11';
            $scope.PortName12 = 'L3Port 12';
            $scope.PortName13 = 'L3Port 13';
            $scope.PortName14 = 'L3Port 14';
            $scope.PortName15 = 'L3Port 15';
            $scope.PortName16 = 'L3Port 16';
        }
        if (aLocation.id == 4) {
            $scope.PortName1 = 'L4Port 01';
            $scope.PortName2 = 'L4Port 02';
            $scope.PortName3 = 'L4Port 03';
            $scope.PortName4 = 'L4Port 04';
            $scope.PortName5 = 'L4Port 05';
            $scope.PortName6 = 'L4Port 06';
            $scope.PortName7 = 'L4Port 07';
            $scope.PortName8 = 'L4Port 08';
            $scope.PortName9 = 'L4Port 09';
            $scope.PortName10 = 'L4Port 10';
            $scope.PortName11 = 'L4Port 11';
            $scope.PortName12 = 'L4Port 12';
            $scope.PortName13 = 'L4Port 13';
            $scope.PortName14 = 'L4Port 14';
            $scope.PortName15 = 'L4Port 15';
            $scope.PortName16 = 'L4Port 16';
        }
    }


    $scope.PortDetailObj = {};
    $scope.SendDataAddToCartTopBar = [];

    $scope.Addcartbattey = function () {
        

        $("#ShowaddToCartItem").show();

    }


    $scope.BatterySendViewDataInPage = function () {
 

        // sessionStorage.setItem("BatterySendToViewDate", JSON.stringify($scope.BatteryCartItemList));
        sessionStorage.setItem("BatterySendToViewDate", JSON.stringify($scope.SendDataAddToCartTopBar));
        $route.reload();
    }

    $scope.SendDataAddToCartTopBarList = [];
    $scope.checkPlus =true;
    $scope.checkMinus = false;
    $scope.disableBtn = false;

    $scope.checkPlus1 = true;
    $scope.checkMinus1 = false;

    $scope.checkPlus2 = true;
    $scope.checkMinus2 = false;
    $scope.checkPlus3 = true;
    $scope.checkMinus3 = false;

    $scope.checkPlus4 = true;
    $scope.checkMinus4 = false;

    $scope.checkPlus5 = true;
    $scope.checkMinus5 = false;

    $scope.checkPlus6= true;
    $scope.checkMinus6 = false;

    $scope.checkPlus7 = true;
    $scope.checkMinus7 = false;
    $scope.checkPlus8 = true;
    $scope.checkMinus8 = false;

    $scope.checkPlus9 = true;
    $scope.checkMinus9 = false;

    $scope.checkPlus10 = true;
    $scope.checkMinus10 = false;

    $scope.checkPlus11 = true;
    $scope.checkMinus11 = false;

    $scope.checkPlus12 = true;
    $scope.checkMinus12 = false;

    $scope.PortDetail = function (aPort) {

        if (aPort.id == 1) {
            if ($scope.checkPlus == true) {
                $scope.PortName = aPort.PortName;
                $scope.BatteryName = aPort.BatteryName;



                $scope.SendDataAddToCartTopBar.push(aPort);



                angular.forEach($scope.SendDataAddToCartTopBar, function (aData) {
                    if ($scope.SendDataAddToCartTopBar.length < 3) {
                        $scope.SendDataAddToCartTopBarList.push(aData);
                    }

                })
            }

            $scope.checkPlus = false;
            $scope.checkMinus = true;

        }
        else if (aPort.id == 2) {
            if ($scope.checkPlus1 == true) {
                $scope.PortName = aPort.PortName;
                $scope.BatteryName = aPort.BatteryName;



                $scope.SendDataAddToCartTopBar.push(aPort);



                angular.forEach($scope.SendDataAddToCartTopBar, function (aData) {
                    if ($scope.SendDataAddToCartTopBar.length < 3) {
                        $scope.SendDataAddToCartTopBarList.push(aData);
                    }

                })
            }

            $scope.checkPlus1 = false;
            $scope.checkMinus1 = true;

        }
        else if (aPort.id == 3) {
            if ($scope.checkPlus2 == true) {
                $scope.PortName = aPort.PortName;
                $scope.BatteryName = aPort.BatteryName;



                $scope.SendDataAddToCartTopBar.push(aPort);



                angular.forEach($scope.SendDataAddToCartTopBar, function (aData) {
                    if ($scope.SendDataAddToCartTopBar.length < 3) {
                        $scope.SendDataAddToCartTopBarList.push(aData);
                    }

                })
            }

            $scope.checkPlus2 = false;
            $scope.checkMinus2 = true;

        }
        else if (aPort.id == 4) {
            if ($scope.checkPlus3 == true) {
                $scope.PortName = aPort.PortName;
                $scope.BatteryName = aPort.BatteryName;



                $scope.SendDataAddToCartTopBar.push(aPort);



                angular.forEach($scope.SendDataAddToCartTopBar, function (aData) {
                    if ($scope.SendDataAddToCartTopBar.length < 3) {
                        $scope.SendDataAddToCartTopBarList.push(aData);
                    }

                })
            }

            $scope.checkPlus3 = false;
            $scope.checkMinus3 = true;

        }
        else if (aPort.id == 6) {
            if ($scope.checkPlus4 == true) {
                $scope.PortName = aPort.PortName;
                $scope.BatteryName = aPort.BatteryName;



                $scope.SendDataAddToCartTopBar.push(aPort);



                angular.forEach($scope.SendDataAddToCartTopBar, function (aData) {
                    if ($scope.SendDataAddToCartTopBar.length < 3) {
                        $scope.SendDataAddToCartTopBarList.push(aData);
                    }

                })
            }

            $scope.checkPlus4 = false;
            $scope.checkMinus4 = true;

        }
        else if (aPort.id == 7) {
            if ($scope.checkPlus5 == true) {
                $scope.PortName = aPort.PortName;
                $scope.BatteryName = aPort.BatteryName;



                $scope.SendDataAddToCartTopBar.push(aPort);



                angular.forEach($scope.SendDataAddToCartTopBar, function (aData) {
                    if ($scope.SendDataAddToCartTopBar.length < 3) {
                        $scope.SendDataAddToCartTopBarList.push(aData);
                    }

                })
            }

            $scope.checkPlus5 = false;
            $scope.checkMinus5 = true;

        }

        else if (aPort.id == 9) {
            if ($scope.checkPlus6 == true) {
                $scope.PortName = aPort.PortName;
                $scope.BatteryName = aPort.BatteryName;



                $scope.SendDataAddToCartTopBar.push(aPort);



                angular.forEach($scope.SendDataAddToCartTopBar, function (aData) {
                    if ($scope.SendDataAddToCartTopBar.length < 3) {
                        $scope.SendDataAddToCartTopBarList.push(aData);
                    }

                })
            }

            $scope.checkPlus6 = false;
            $scope.checkMinus6 = true;

        }
        else if (aPort.id == 10) {
            if ($scope.checkPlus7 == true) {
                $scope.PortName = aPort.PortName;
                $scope.BatteryName = aPort.BatteryName;



                $scope.SendDataAddToCartTopBar.push(aPort);



                angular.forEach($scope.SendDataAddToCartTopBar, function (aData) {
                    if ($scope.SendDataAddToCartTopBar.length < 3) {
                        $scope.SendDataAddToCartTopBarList.push(aData);
                    }

                })
            }

            $scope.checkPlus7 = false;
            $scope.checkMinus7 = true;

        }
        else if (aPort.id == 11) {
            if ($scope.checkPlus8 == true) {
                $scope.PortName = aPort.PortName;
                $scope.BatteryName = aPort.BatteryName;



                $scope.SendDataAddToCartTopBar.push(aPort);



                angular.forEach($scope.SendDataAddToCartTopBar, function (aData) {
                    if ($scope.SendDataAddToCartTopBar.length < 3) {
                        $scope.SendDataAddToCartTopBarList.push(aData);
                    }

                })
            }

            $scope.checkPlus8 = false;
            $scope.checkMinus8 = true;

        }
        else if (aPort.id == 12) {
            if ($scope.checkPlus9 == true) {
                $scope.PortName = aPort.PortName;
                $scope.BatteryName = aPort.BatteryName;



                $scope.SendDataAddToCartTopBar.push(aPort);



                angular.forEach($scope.SendDataAddToCartTopBar, function (aData) {
                    if ($scope.SendDataAddToCartTopBar.length < 3) {
                        $scope.SendDataAddToCartTopBarList.push(aData);
                    }

                })
            }

            $scope.checkPlus9 = false;
            $scope.checkMinus9 = true;

        }
        else if (aPort.id == 13) {
            if ($scope.checkPlus10 == true) {
                $scope.PortName = aPort.PortName;
                $scope.BatteryName = aPort.BatteryName;



                $scope.SendDataAddToCartTopBar.push(aPort);



                angular.forEach($scope.SendDataAddToCartTopBar, function (aData) {
                    if ($scope.SendDataAddToCartTopBar.length < 3) {
                        $scope.SendDataAddToCartTopBarList.push(aData);
                    }

                })
            }

            $scope.checkPlus10 = false;
            $scope.checkMinus10 = true;

        }
        else if (aPort.id == 14) {
            if ($scope.checkPlus11 == true) {
                $scope.PortName = aPort.PortName;
                $scope.BatteryName = aPort.BatteryName;



                $scope.SendDataAddToCartTopBar.push(aPort);



                angular.forEach($scope.SendDataAddToCartTopBar, function (aData) {
                    if ($scope.SendDataAddToCartTopBar.length < 3) {
                        $scope.SendDataAddToCartTopBarList.push(aData);
                    }

                })
            }

            $scope.checkPlus11 = false;
            $scope.checkMinus11 = true;

        }
        else if (aPort.id == 15) {
            if ($scope.checkPlus12 == true) {
                $scope.PortName = aPort.PortName;
                $scope.BatteryName = aPort.BatteryName;



                $scope.SendDataAddToCartTopBar.push(aPort);



                angular.forEach($scope.SendDataAddToCartTopBar, function (aData) {
                    if ($scope.SendDataAddToCartTopBar.length < 3) {
                        $scope.SendDataAddToCartTopBarList.push(aData);
                    }

                })
            }

            $scope.checkPlus12 = false;
            $scope.checkMinus12 = true;

        }






       
  


      //  $scope.isShowBatteryDetail = true;
       

        //Send tO Data Top Bar
        //sessionStorage.setItem("SendToDataTopBar", JSON.stringify($scope.SendDataAddToCartTopBar));
  
      //  $route.load();

       
      
    }

    $scope.PortDetailBooking = function (aPort) {



        $scope.isShowBatteryDetail = true;
        $scope.PortName = aPort.PortName;
        $scope.BatteryName = aPort.BatteryName;



       // $scope.SendDataAddToCartTopBar.push(aPort);



        //angular.forEach($scope.SendDataAddToCartTopBar, function (aData) {
        //    if ($scope.SendDataAddToCartTopBar.length < 3) {
        //        $scope.SendDataAddToCartTopBarList.push(aData);
        //    }

        //})

       
    }

    $scope.removecart = function (obj) {
        if (obj.id==1) {
            $scope.checkPlus = true;
            $scope.checkMinus = false;
        }
       else  if (obj.id == 2) {
            $scope.checkPlus1 = true;
            $scope.checkMinus1 = false;
        }
        else if (obj.id == 3) {
            $scope.checkPlus2 = true;
            $scope.checkMinus2 = false;
        }
        else if (obj.id == 4) {
            $scope.checkPlus3 = true;
            $scope.checkMinus3 = false;
        }
        else if (obj.id == 6) {
            $scope.checkPlus4 = true;
            $scope.checkMinus4 = false;
        }
        else if (obj.id == 7) {
            $scope.checkPlus5 = true;
            $scope.checkMinus5 = false;
        }
        else if (obj.id == 9) {
            $scope.checkPlus6 = true;
            $scope.checkMinus6 = false;
        }
        else if (obj.id == 10) {
            $scope.checkPlus7 = true;
            $scope.checkMinus7 = false;
        }
        else if (obj.id == 11) {
            $scope.checkPlus8 = true;
            $scope.checkMinus8 = false;
        }
        else if (obj.id == 12) {
            $scope.checkPlus9 = true;
            $scope.checkMinus9 = false;
        }

        else if (obj.id == 14) {
            $scope.checkPlus11 = true;
            $scope.checkMinus11 = false;
        }

        else if (obj.id == 15) {
            $scope.checkPlus12 = true;
            $scope.checkMinus12 = false;
        }


        var index = $scope.SendDataAddToCartTopBar.indexOf(obj);
        $scope.SendDataAddToCartTopBar.splice(index, 1);

        $('#ShowaddToCartItem').show();
       
    }

    

    
   

    $scope.HidecartItem = false;

    $scope.BatterySendViewDataInPage = function () {
        $("#ShowaddToCartItem").hide();
        sessionStorage.setItem("BatterySendToViewDate", JSON.stringify($scope.SendDataAddToCartTopBar));
        $route.reload();
    }


    //var item=  sessionStorage.setItem(JSON.stringify($scope.SendAddToCartDataTopBarList));
   



    Clear();
    function Clear() {
        $scope.BatteryBookingShow = true;
        $scope.BatteryBookingInfoShow = false;
    }

    $scope.BatteryBooking = function () {
        $scope.BatteryBookingShow = true;
        $scope.BatteryBookingInfoShow = false;
        $("#ItemBettaryDetailShow").hide();
    }

    $scope.BatteryBookingInfo = function () {
        $scope.BatteryBookingInfoShow = true;
        $scope.BatteryBookingShow = false;
        $("#ItemBettaryDetailShow").hide();
    }


    $scope.LocationPortChilList = [];
    $scope.ShowPortNumber = function (port) {
        $scope.LocationPortChilList = [];
        angular.forEach($scope.PortList,function (aData) {

            if (port.id == aData.LocationId) {
                $scope.LocationPortChilList.push(aData);
            }
        })
    }

    $scope.ItemBettaryDetailShow = false;
    $("#ItemBettaryDetailShow").hide();

    $('#jstree').on("select_node.jstree", function (e, data) {

     //  alert("node_id: " + data.node.id);

        $("#ItemBettaryDetailShow").show();


    });


    


});