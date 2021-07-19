const playBtn = document.querySelector(".play");
const video = document.querySelector(".features .video video");

// Map Functionality
mapboxgl.accessToken =
  "pk.eyJ1IjoiaGFtemFjaDk3IiwiYSI6ImNrcWxiZWNlcjN6M3kyd212MWZseWF4ZXcifQ.xwVPIODcdaYqfYW4NvGhyw";
var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11",
  center: [33.796296512357024, 2.8619866526413844],
});

// Features Video Functionality
playBtn.addEventListener("click", function () {
  video.play();
  this.classList.add("remove-btn");
});

video.addEventListener("ended", function () {
  playBtn.classList.remove("remove-btn");
});

video.addEventListener("playing", function () {
  this.onclick = function () {
    this.pause();
    playBtn.classList.remove("remove-btn");
  };
});
