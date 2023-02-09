app.controller("CustomerTicketController", function ($scope, $filter) {
    var UserData = sessionStorage.getItem("UserDataSession");
    if (UserData != null) {
        $scope.LoginUser = JSON.parse(sessionStorage.UserDataSession);
    }

    Clear();
    function Clear() {
        $scope.TicketList = [
            { TicketId: 1, UserName: 'Abir', DateTame: '24 Apr 2022 11:17', Heading: 'headingOne', Collapse: 'collapseOne',Subject: "I Can't Open The Door?", Details: 'Please, Help me. Try To, Press The Reset Button.'},
            { TicketId: 2, UserName: 'Shuvo', DateTame: '24 Apr 2022 12:05', Heading: 'headingTwo', Collapse: 'collapseTwo', Subject: 'How To Swap A Battery?', Details: 'First I My Complete Payment. 2nd I Try To Open The Door.'},
            { TicketId: 3, UserName: 'Bellal', DateTame: '25 Apr 2022 10:10', Heading: 'headingThree', Collapse: 'collapseThree', Subject: "I Can't Place My Used Battery?", Details: "I Am Tring to Push The Battery Trey. But Can't Locked"},
        ]

        $scope.TicketListDetails = [
            { Id: 1, Name: "Abc", Email: "abc@gmail.com", Phone: "01234567678", TicketId: 1},
            { Id: 2, Name: "xyz", Email: "xyz@gmail.com", Phone: "01234567678",TicketId: 2 },
            { Id: 3, Name: "mn", Email: "mn@gmail.com", Phone: "01234567678", TicketId: 3 }
        ]
    }
    $scope.ManageTicket = function () {
        window.location = '/Home/Index#/ManageTicket';
    }

    $scope.DetailList = [];
    $scope.DetailsDataLoad = function (ticket) {
        
        angular.forEach($scope.TicketListDetails,function (aData) {

            if (ticket.TicketId == aData.TicketId) {
                $scope.DetailList.push(aData);
            }
        })
    }
   
});