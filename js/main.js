 var reservationData = {}

  var config = {
    apiKey: "AIzaSyB2eNwWfMqenKvTdLnBsDKpEEpA_IRTUCM",
    authDomain: "reservation-site-d8059.firebaseapp.com",
    databaseURL: "https://reservation-site-d8059.firebaseio.com",
    projectId: "reservation-site-d8059",
    storageBucket: "reservation-site-d8059.appspot.com",
    messagingSenderId: "652457995835"
  };

firebase.initializeApp(config);

var database = firebase.database();

// set the day when an option is clicked on
//  reservationData.day = $(this).text();
//});

// when clicked, the name data should be set
// and all data should be sent to your database
$('.reservations').on('submit', function(event) {
  // prevent reloading
  event.preventDefault();

  // get name from input
  reservationData.name = $('.reservation-name').val();
  reservationData.day = $('.reservation-day').val();

  // push configured data object to database
  database.ref('reservations').push(reservationData);
});


// on initial load and addition of each reservation update the view
database.ref('reservations').on('child_added', function(snapshot) {
  // grab element to hook to
  var reservationList = $('.reservation-list');
  // get data from database
  var reservations = snapshot.val();
  // get your template from your script tag
  var source = $("#reservation-template").html();
  // compile template
  var template = Handlebars.compile(source);
  // pass data to template to be evaluated within handlebars
  // as the template is created
  var reservationTemplate = template(reservations);
  // append created templated
  reservationList.append(reservationTemplate);
});


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



