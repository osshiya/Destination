//Load maps
gothere.load("maps");

//Global Variables
var map;
var geocoder;
var directions;
var amenities;

//When first form is submitted
function submitBtn(){
if($("#fromForm").val() === "" || $("#toForm").val() === ""){
                event.preventDefault();
                alert("Field is empty");
                return false();
}else{
//Set Data to Session Storage
var fromForm = $('#fromForm').val();
sessionStorage.setItem('from', fromForm);

var toForm = $('#toForm').val();
sessionStorage.setItem('to', toForm);
}
        }

//When second form is submitted
function submittedBtn(){
    if($("#modeForm").val() === ""){
            event.preventDefault();
            alert("Field is empty");
            return false();
}else{
    //Set Data to Session Storage
    var modeForm = $("#modeForm").val();
    sessionStorage.setItem('modeR', modeForm);
    }
}

//When document is ready
$(document).ready(function(){     
    
    //Retrieve data from Session Storage
$('#fromMap').val(sessionStorage.getItem('from'));   
$('#toMap').val(sessionStorage.getItem('to'));     
$('#modeMap').val(sessionStorage.getItem('modeR'));  
console.log(sessionStorage.getItem('from'));
console.log(sessionStorage.getItem('to'));
console.log(sessionStorage.getItem('modeR'));       
})


// Initialize Map Function
function initializeMap() {
    if (GBrowserIsCompatible()) {
        // Create map
        map = new GMap2(document.getElementById("map"));
        // Center of the map.
        map.setCenter(new GLatLng(1.362083, 103.819836), 11);
        // Add zoom controls on the top left of the map
        map.addControl(new GSmallMapControl());
        // Add a scale bar at the bottom left of the map
        map.addControl(new GScaleControl());

        directions = new GDirections(map, document.getElementById("panel"));
        // directions.load("from: Changi Airport to: Orchard Road");
        amenities = new GAmenities(map, document.getElementById("panel"));
        //amenities
        geocoder = new GClientGeocoder();
      }
    
    }

// Get Amenities Results
function getAmenities(query, category) {
            map.closeInfoWindow();
            amenities.clear();
            map.clearOverlays();
            var categoryToRequest;
            switch(category) {
                case "supermarkets":
                    categoryToRequest = GAmenities.AMENITY_SUPERMARKET;
                    break;
                case "clinics":
                    categoryToRequest = GAmenities.AMENITY_CLINIC;
                    break;
                case "postoffices":
                    categoryToRequest = GAmenities.AMENITY_POST_OFFICE;
                    break;
                case "schools":
                    categoryToRequest = GAmenities.AMENITY_SCHOOL;
                    break;
                case "atms":
                    categoryToRequest = GAmenities.AMENITY_ATM;
                    break;
                case "banks":
                    categoryToRequest = GAmenities.AMENITY_BANK;
                    break;
                case "petrolkiosks":
                    categoryToRequest = GAmenities.AMENITY_PETROL_KIOSK;
                    break;
                case "busstops":
                    categoryToRequest = GAmenities.AMENITY_BUS_STOP;
                    break;
                case "railstations":
                default:
                    categoryToRequest = GAmenities.AMENITY_RAIL_STATION;
                    break;
            }
            amenities.clearCategories();
            amenities.addCategory(categoryToRequest, GAmenities.LARGE_RESULTSET);
            geocoder.getLatLng(query, function(latlng) {
                if (latlng) {
                    amenities.load(latlng);
                    map.addOverlay(new GMarker(latlng));
                }
            });
            //If input is empty, return alert
            if($("#selectionA").val() === ""){
                alert("Field is empty");
                return false();
            }
        }

//Get Directions Results
function getDirections(from, to, mode) {
    var travelMode;
    switch(mode) {
        case "pt":
            travelMode = G_TRAVEL_MODE_TRANSIT;
            break;
            case "pt_b":
            travelMode = G_TRAVEL_MODE_BUS;
            break;
            case "pt_t":
            travelMode = G_TRAVEL_MODE_TRAIN;
            break;
        case "t":
            travelMode = G_TRAVEL_MODE_TAXI;
            break;
        case "d":
        default:
            travelMode = G_TRAVEL_MODE_DRIVING;
            break;
    }
    directions.load("from: " + from + " to: " + to, {travelMode: travelMode});

    //If input is empty, return alert
    if($("#modeMap").val() === "" || $("#modeMap").val() === null){
        alert("Field is empty");
        return false();
    }
}

//Initialize Map
gothere.setOnLoadCallback(initializeMap);
