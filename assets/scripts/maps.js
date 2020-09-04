function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 5,
        center: {
            lat: 37.4109,
            lng: -94.7050
        }
    });

    var labels = "ABCDEFGHIJKLMONPQRSTUVWXYZ";

    var locations = [
        { lat: 38.751365, lng: -90.249011 }, 
        { lat: 41.675603, lng: -86.078059 },  
        { lat: 41.881832, lng: -87.623177 },  
        { lat: 43.0731, lng: -89.4012 },  
        { lat: 43.099573, lng: -90.135281 },  
        { lat: 41.3275, lng: -89.1290 },  
        { lat: 40.7392, lng: -89.0165 }, 
        { lat: 37.9137, lng: -89.8221 }, 
        { lat: 37.803311, lng: -89.175483 },  
        { lat: 37.0053, lng: -89.1765 },  
        { lat: 43.8138, lng: -91.2519 },  
        { lat: 44.8755, lng: -91.9193 },  
        { lat: 43.8791, lng: -103.4591 },   
        { lat: 43.7094, lng: -98.0298 },  
        { lat: 43.5460, lng: -96.7313 },  
        { lat: 44.9537, lng: -93.0900 },  
        { lat: 40.0150, lng: -105.2705 },  
        { lat: 44.9778, lng: -93.2650 },  
        { lat: 37.7945, lng: -93.5780 },  
        { lat: 39.8097, lng: -98.5556 },  
        { lat: 40.4008, lng: -93.5805 },  
        { lat: 37.2296, lng: -80.4139 },  
        { lat: 34.9734, lng: -85.3502 },  
        { lat: 27.4467, lng: -80.3256 },  
        { lat: 38.9041, lng: -89.9253 }
    ];

    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
                position: location,
                label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
        
}