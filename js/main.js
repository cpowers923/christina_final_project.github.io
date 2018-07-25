function initMap() {

  navigator.geolocation.getCurrentPosition(function(position) {
  
  var userLocation = {
    lat: position.coords.latitude,
    lng: position.coords.longitude
  };
    
    var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.8054491, lng: -73.9654415},
    zoom: 10,
    scrollwheel: false
      
  });
    
    var marker = new google.maps.Marker({
      position: userLocation,
      title: 'User Location',
      map: map
  });
});
}
  

initMap();