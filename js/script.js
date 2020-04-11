// The shell for this code came from the Google Places API Documentation, which can be found at the below link
// https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete-hotelsearch
// The purpose of this code is to utilise the Google Places Autocomplete
// to return results for 3 location types: Accommodation, attractions, bars/restaurants

var map, places, infoWindow;
var markers = [];
var autocomplete;
var hostnameRegexp = new RegExp('^https?://.+?/');


function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 51.5073509, lng: -0.1277583 },
        zoom: 13
    });

    infoWindow = new google.maps.InfoWindow({
        content: document.getElementById('info-content')
    });

    // Create the autocomplete object and associate it with the UI input control.
    // Restrict the search to place type "cities".
    autocomplete = new google.maps.places.Autocomplete(
      /** @type {!HTMLInputElement} */(
            document.getElementById('autocomplete')), {
        types: ['(cities)'],

    });
    places = new google.maps.places.PlacesService(map);

    autocomplete.addListener('place_changed', onPlaceChanged);


    // Linked to the 3 place type headings, when one is clicked, make that one true, and the other two false
    // This will be used to trigger the different types of places that are being displayed on the map
    // If place type == 0, no results list will be shown (for that type). 
    // If place type == 1, those results will be shown.
    var attractionsClicked = 0;
    var accommodationClicked = 0;
    var barsClicked = 0;
    var markerIconType = '';

    $("#attractions").click(function () {
        attractionsClicked = 1;
        accommodationClicked = 0;
        barsClicked = 0;
        markerIconType = 'http://maps.google.com/mapfiles/kml/pal4/icon46.png'
        $("tbody").removeClass("results-positioning-center");
        $("tbody").removeClass("results-positioning-right");
        $("tbody").addClass("results-positioning-left");
        $("#results-table-div").removeClass("hide-results");
        return onPlaceChanged();
    });

    $("#accommodation").click(function () {
        accommodationClicked = 1;
        attractionsClicked = 0;
        barsClicked = 0;
        markerIconType = 'http://maps.google.com/mapfiles/kml/pal2/icon20.png';
        $("tbody").removeClass("results-positioning-left");
        $("tbody").removeClass("results-positioning-right");
        $("tbody").addClass("results-positioning-center");
        $("#results-table-div").removeClass("hide-results");
        return onPlaceChanged();
    });

    $("#bars").click(function () {
        barsClicked = 1;
        accommodationClicked = 0;
        attractionsClicked = 0;
        markerIconType = 'http://maps.google.com/mapfiles/kml/pal2/icon32.png'
        $("tbody").removeClass("results-positioning-left");
        $("tbody").removeClass("results-positioning-center");
        $("tbody").addClass("results-positioning-right");
        $("#results-table-div").removeClass("hide-results");
        return onPlaceChanged();
    });

    function search() {
        if (attractionsClicked == 1) {
            return typeSearch(['museum', 'art_gallery', 'amusement_park', 'aquarium', 'zoo', 'tourist_attraction']);
        }
        else if (accommodationClicked == 1) {
            return typeSearch(['lodging']);
        }
        else if (barsClicked == 1) {
            return typeSearch(['restaurant']);
        }
    };

    // When the user selects a city, get the place details for the city and
    // zoom the map in on the city.
    function onPlaceChanged() {
        var place = autocomplete.getPlace();
        if (place.geometry) {
            map.panTo(place.geometry.location);
            map.setZoom(14);
            search();
        } else {
            document.getElementById('autocomplete').placeholder = 'Enter Your Destination Here';
        }
    };

    // Search for selected place type in the selected city, within the viewport of the map. 
    // typeArray determines which type of place location to display.
    // They are each defined in the search function above.
    function typeSearch(typeArray) {
        var search = {
            bounds: map.getBounds(),
            types: typeArray
        };

        places.nearbySearch(search, function (results, status) {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                clearResults();
                clearMarkers();
                // Create a marker for each hotel found, and
                // assign a letter of the alphabetic to each marker icon.
                for (var i = 0; i < results.length; i++) {
                    var markerIcon = `${markerIconType}`;
                    // Use marker animation to drop the icons incrementally on the map.
                    markers[i] = new google.maps.Marker({
                        position: results[i].geometry.location,
                        animation: google.maps.Animation.DROP,
                        icon: markerIcon
                    });
                    // If the user clicks a hotel marker, show the details of that hotel
                    // in an info window.
                    markers[i].placeResult = results[i];
                    google.maps.event.addListener(markers[i], 'click', showInfoWindow);
                    setTimeout(dropMarker(i), i * 100);
                    addResult(results[i], i);
                }
            }
        });
        console.log(typeArray);
    }

    function clearMarkers() {
        for (var i = 0; i < markers.length; i++) {
            if (markers[i]) {
                markers[i].setMap(null);
            }
        }
        markers = [];
    }

    function dropMarker(i) {
        return function () {
            markers[i].setMap(map);
        };
    }

    function addResult(result, i) {
        var results = document.getElementById('results');
        var markerIcon = `${markerIconType}`;

        var tr = document.createElement('tr');
        tr.style.backgroundColor = (i % 2 === 0 ? '#50C9CE' : '#E55934');
        tr.style.color = (i % 2 === 0 ? '#E55934' : '#50C9CE');
        tr.onclick = function () {
            google.maps.event.trigger(markers[i], 'click');
        };

        var iconTd = document.createElement('td');
        var nameTd = document.createElement('td');
        var icon = document.createElement('img');
        icon.src = markerIcon;
        icon.setAttribute('class', 'placeIcon');
        icon.setAttribute('className', 'placeIcon');
        var name = document.createTextNode(result.name);
        iconTd.appendChild(icon);
        nameTd.appendChild(name);
        tr.appendChild(iconTd);
        tr.appendChild(nameTd);
        results.appendChild(tr);
    }

    function clearResults() {
        var results = document.getElementById('results');
        while (results.childNodes[0]) {
            results.removeChild(results.childNodes[0]);
        }
    }

    // Get the place details for a hotel. Show the information in an info window,
    // anchored on the marker for the hotel that the user selected.
    function showInfoWindow() {
        var marker = this;
        places.getDetails({ placeId: marker.placeResult.place_id },
            function (place, status) {
                if (status !== google.maps.places.PlacesServiceStatus.OK) {
                    return;
                }
                infoWindow.open(map, marker);
                buildIWContent(place);
            });
    }

    // Load the place information into the HTML elements used by the info window.
    function buildIWContent(place) {
        document.getElementById('iw-icon').innerHTML = '<img class="placeTypeIcon" ' +
            'src="' + place.icon + '"/>';
        document.getElementById('iw-url').innerHTML = '<b><a href="' + place.url +
            '">' + place.name + '</a></b>';
        document.getElementById('iw-address').textContent = place.vicinity;

        if (place.formatted_phone_number) {
            document.getElementById('iw-phone-row').style.display = '';
            document.getElementById('iw-phone').textContent =
                place.formatted_phone_number;
        } else {
            document.getElementById('iw-phone-row').style.display = 'none';
        }

        // Assign a five-star rating to the hotel, using a black star ('&#10029;')
        // to indicate the rating the hotel has earned, and a white star ('&#10025;')
        // for the rating points not achieved.
        if (place.rating) {
            var ratingHtml = '';
            for (var i = 0; i < 5; i++) {
                if (place.rating < (i + 0.5)) {
                    ratingHtml += '&#10025;';
                } else {
                    ratingHtml += '&#10029;';
                }
                document.getElementById('iw-rating-row').style.display = '';
                document.getElementById('iw-rating').innerHTML = ratingHtml;
            }
        } else {
            document.getElementById('iw-rating-row').style.display = 'none';
        }

        // The regexp isolates the first part of the URL (domain plus subdomain)
        // to give a short URL for displaying in the info window.
        if (place.website) {
            var fullUrl = place.website;
            var website = hostnameRegexp.exec(place.website);
            if (website === null) {
                website = 'http://' + place.website + '/';
                fullUrl = website;
            }
            document.getElementById('iw-website-row').style.display = '';
            document.getElementById('iw-website').textContent = website;
        } else {
            document.getElementById('iw-website-row').style.display = 'none';
        }
    }
}