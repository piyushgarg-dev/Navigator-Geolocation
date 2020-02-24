const latTag = document.getElementById("latitude");
const lonTag = document.getElementById("longitude");

function onLocationSuccess(position) {
  latTag.innerText = position.coords.latitude;
  lonTag.innerText = position.coords.longitude;
}
function onLocationError(err) {
  latTag.innerText = "";
  lonTag.innerText = "";
  console.log(err);
}

function getLocation() {
  setTimeout(() => {
    navigator.geolocation.getCurrentPosition(
      onLocationSuccess,
      onLocationError
    );
    getLocation();
  }, 1000);
}

getLocation();
