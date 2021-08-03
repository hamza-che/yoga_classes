const menuToggle = document.querySelector(".navbar .menu-toggle");
const navLinks = document.querySelector(".navbar .links");

menuToggle.onclick = function () {
  menuToggle.style.transform = "rotation(90deg)";
  navLinks.classList.toggle("open");
};

// Map Functionality
mapboxgl.accessToken =
  "pk.eyJ1IjoiaGFtemFjaDk3IiwiYSI6ImNrcWxiZWNlcjN6M3kyd212MWZseWF4ZXcifQ.xwVPIODcdaYqfYW4NvGhyw";
var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11",
  center: [33.796296512357024, 2.8619866526413844],
});
