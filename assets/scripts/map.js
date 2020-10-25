/*Adapted from instructions given in documentation for Google Maps JavaScript API https://developers.google.com/maps/documentation/javascript/examples/event-arguments*/

function initMap() {
  const map = new google.maps.Map(document.querySelector("#map"), {
    zoom: 4.2,
    center: { lat: 36.6437, lng: -93.2185 },
  });
  map.addListener("click", (e) => {
    placeMarkerAndPanTo(e.latLng, map);
  });
}

function placeMarkerAndPanTo(latLng, map) {
  new google.maps.Marker({
    position: latLng,
    map: map,
  });
  map.panTo(latLng);
}
