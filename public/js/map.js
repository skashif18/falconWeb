var map = new GMaps({
  el: "#map",
  lat: 40.73061,
  lng: -73.935242,
});

map.addMarker({
  lat: 40.70061,
  lng: -73.997242,
  title: "New York",
  infoWindow: {
    content: "New York",
  },
});

map.setZoom(8);
