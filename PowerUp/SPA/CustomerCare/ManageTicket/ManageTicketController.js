app.controller("ManageTicketController", function ($scope, $filter) {
    var UserData = sessionStorage.getItem("UserDataSession");
    if (UserData != null) {
        $scope.LoginUser = JSON.parse(sessionStorage.UserDataSession);
    }

    Clear();
    function Clear() {
        $scope.TicketList = [
            { TicketId: 1, Heading: 'headingOne', Collapse: 'collapseOne', Subject: 'What is Frogetor?', Details: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.' },
            { TicketId: 2, Heading: 'headingTwo', Collapse: 'collapseTwo', Subject: 'How buy Frogetor on coin?', Details: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.' },
            { TicketId: 3, Heading: 'headingThree', Collapse: 'collapseThree', Subject: 'What cryptocurrency can i use to buy Frogetor?', Details: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.' },
        ]

    }


});