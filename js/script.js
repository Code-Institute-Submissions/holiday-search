function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 51.5073509, lng: -0.1277583 },
        zoom: 13
    });
};

function searchLocation() {
    let location = document.getElementById("countryList").value;
    let res = location.split(",");
    let lat = res[0].split("lat=");
    let longitude = res[1].split("longitude=");
    alert("Latitude = " + lat[1] + " Longitude = " + longitude[1]);
};


