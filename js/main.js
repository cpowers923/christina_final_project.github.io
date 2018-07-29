 
  var config = {
    apiKey: "AIzaSyB2eNwWfMqenKvTdLnBsDKpEEpA_IRTUCM",
    authDomain: "reservation-site-d8059.firebaseapp.com",
    databaseURL: "https://reservation-site-d8059.firebaseio.com",
    projectId: "reservation-site-d8059",
    storageBucket: "reservation-site-d8059.appspot.com",
    messagingSenderId: "652457995835"
  };

  firebase.initializeApp(config);
  

  function getReservations() {

    database.ref('reservations').on('value', function (results) {

      var allReservations = results.val();

      var reservations = []; {

      var context = {
        name: allReservations[item].name,
        day: allReservations[item].day

      };

    };
  });

  var database = firebase.database();


  $('#form').on('submit', function(e) {
    e.preventDefault();
  

  var userInput = {
  name: $('#reservation-name').val(),
  day: $('#reservation-day').val()
  
  };

  var source = $('#reservations').html();

  var template = Handlebars.compile(source);

  var existingReservationHTML = template(userInput);

  $('tbody').append(existingReservationHTML);
});

  $('#reservation-name', '#reservation-day').val('')

  var reservationsReference = database.ref('reservations');

  reservationsReference.push({
    name: userInput,
    day: userInput
    
  });
};



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
      position: {lat: 40.8054491, lng: -73.9654415},
      title: 'The Drinking Goat',
      map: map
  });
});
}


initMap();



