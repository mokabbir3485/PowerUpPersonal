
app.controller("TicketController", function ($scope, $filter) {
    var UserData = sessionStorage.getItem("UserDataSession");
    if (UserData != null) {
        $scope.LoginUser = JSON.parse(sessionStorage.UserDataSession);
    }

    Clear();
    function Clear() {
        $scope.TicketEntry = {};
        //  $scope.ToDateBooking = new Date();
        $scope.TotalBooking = '100 K';
        $scope.ToDateBooking = $filter('date')(new Date().toJSON().slice(0, 10), 'MMM dd, yyyy');


      
       // $scope.TicketEntry.FormDate = "4/15/2022";
      //  $scope.TicketEntry.ToDate = $filter('date')(new Date().toJSON().slice(0, 10), 'dd/MM/yyyy');

    
    }


    $scope.SetFillData = function () {
        toastr.info('Load All Info');
        $scope.TicketEntry.CustomerName = "Bellal Hossain";
        $scope.TicketEntry.Email = "bellal@gmail.com";
        $scope.TicketEntry.Subject = "Short Circuit";
        $scope.TicketEntry.Message = "An electrical circuit in a device of lower resistance than that of a normal circuit, especially one resulting from the unintended contact of components and consequent accidental diversion of the current.";
    }

    $scope.ResetData = function () {
      
        $scope.TicketEntry = {};
        toastr.error('Clear All Info');

  
      
        Clear();
    }

    $scope.SaveTicket = function () {
        toastr.success('Ticket Save Successfully !!! ');

        console.log($scope.TicketEntry);
        Clear();
    }
   

});