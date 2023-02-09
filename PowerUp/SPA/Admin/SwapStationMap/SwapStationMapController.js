app.controller("SwapStationMapController", function ($scope, $filter) {
    var UserData = sessionStorage.getItem("UserDataSession");
    if (UserData != null) {
        $scope.LoginUser = JSON.parse(sessionStorage.UserDataSession);
    }

    //initMap();
    function initMap() {
        var options = {
            center: { lat: 23.780336, lng: 90.418597 },
            //center: { lat: $scope.myLat, lng: $scope.myLong },
            zoom: 16
        }

        //const directionsRenderer = new google.maps.DirectionsRenderer();
        //const directionsService = new google.maps.DirectionsService();


        map = new google.maps.Map(document.getElementById("map"), options);

        //directionsRenderer.setMap(map);
        //calculateAndDisplayRoute(directionsService, directionsRenderer);
        //document.getElementById("mode").addEventListener("change", () => {
        //    calculateAndDisplayRoute(directionsService, directionsRenderer);
        //})

        /*
        const marker = new google.maps.Marker({
            position: { lat: 23.780336, lng: 90.418597 },
            map: map,
            icon: "https://img.icons8.com/nolan/2x/marker.png"
    
        });
    
        const detailWindow = new google.maps.InfoWindow({
            content: `<h2>Gulshan 1 Lake View</h2>`
        });
    
        marker.addListener("mouseover", () => {
            detailWindow.open(map, marker);
        })
        */

        //google.maps.event.addListener(map, "click", (event) =>{
        //    addMarker({ location: event.latLng })
        //})
        var LocationArr = [
            //{ location: { lat: 23.780336, lng: 90.418597 }, imageIcon: "https://img.icons8.com/nolan/2x/marker.png", content: `<h2>Gulshan 1 Lake View</h2>` },
            { location: { lat: 23.780336, lng: 90.418597 }, content: `<h2>Gulshan 1 Lake View</h2>` },
            { location: { lat: 23.7807091, lng: 90.4144771 }, content: `<h2>Gulshan 1 DNCC View</h2>` },
            { location: { lat: 23.7805234, lng: 90.4163402 }, content: `<h2>Gulshan 1 Navana Tower</h2>` },
            { location: { lat: 23.7798938, lng: 90.4166354 }, content: `<h2>Gulshan Shopping Center</h2>` },
            { location: { lat: 23.7805861, lng: 90.4098827 }, content: `<h2>BRAC Centre</h2>` },
        ]
        for (var i = 0; i < LocationArr.length; i++) {
            addMarker(LocationArr[i]);
        }
        //addMarker({ location: { lat: 23.780336, lng: 90.418597 }, imageIcon: "https://img.icons8.com/nolan/2x/marker.png" })

        function addMarker(property) {
            const marker = new google.maps.Marker({
                position: property.location,
                map: map,
                icon: property.imageIcon

            });
            const detailWindow = new google.maps.InfoWindow({
                content: property.content
            });

            marker.addListener("click", () => {
                detailWindow.open(map, marker);
            })
        }

    }
    function calculateAndDisplayRoute(directionsService, directionsRenderer) {
        const selectedMode = document.getElementById("mode").value;

        directionsService
            .route({
                origin: document.getElementById("from").value,
                destrination: document.getElementById("to").value,

                travelMode: google.maps.TravelMode[selectedMode],

            }).then((response) => {
                directionsRenderer.setDirections(response);
            }).catch((e) => window.alert('Directions request failed due to ') + e)
    }

});

