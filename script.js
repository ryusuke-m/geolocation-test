let id;
let target;
let options;

function success(position) {
//   const crd = position.coords;
    console.log("get current position"+position.timestamp)
    document.getElementById("lat").innerHTML = 'Lat: ' + position.coords.latitude;
    document.getElementById("lng").innerHTML = 'Lng: ' + position.coords.longitude;
    document.getElementById("acc").innerHTML = 'Accuracy of position: ' + position.coords.accuracy;
    document.getElementById("alt").innerHTML = 'Altitude: ' + position.coords.altitude;
    document.getElementById("altAcc").innerHTML = 'Altitude Accuracy: ' + position.coords.altitudeAccuracy;
    document.getElementById("heading").innerHTML = 'Heading: ' + position.coords.heading;
    document.getElementById("speed").innerHTML = 'Speed: ' + position.coords.speed;
    document.getElementById("timestamp").innerHTML = 'Timestamp: ' + position.timestamp;
//   if (target.latitude === crd.latitude && target.longitude === crd.longitude) {
//     console.log("Congratulations, you reached the target");
//     navigator.geolocation.clearWatch(id);
//   }
}

function error(err) {
  console.error(`ERROR(${err.code}): ${err.message}`);
}

target = {
  latitude: 0,
  longitude: 0,
};

options = {
  enableHighAccuracy: false,
  timeout: 5000,
  maximumAge: 0,
};

id = navigator.geolocation.watchPosition(success, error, options);