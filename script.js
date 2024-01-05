let id;
let target;
let options;
let prevTimestamp;

function success(position) {
//   const crd = position.coords;
    document.getElementById("lat").innerHTML =  position.coords.latitude;
    document.getElementById("long").innerHTML =  position.coords.longitude;
    document.getElementById("acc").innerHTML =  position.coords.accuracy;
    document.getElementById("alti").innerHTML = position.coords.altitude;
    document.getElementById("altiAcc").innerHTML =  position.coords.altitudeAccuracy;
    document.getElementById("heading").innerHTML =  position.coords.heading;
    document.getElementById("speed").innerHTML = position.coords.speed;
    document.getElementById("timestamp").innerHTML =  position.timestamp;
    document.getElementById("deltatime").innerHTML = position.timestamp-prevTimestamp;
    console.log(position)
    prevTimestamp=position.timestamp;
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



function onClickStartButton(){
  // alert(id);
  id = navigator.geolocation.watchPosition(success, error, options);
}
function onClickStopButton(){
  navigator.geolocation.clearWatch(id);
}