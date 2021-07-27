const bullets = document.querySelectorAll(".testimonials .testims .bullets li");
const bulletsArray = Array.from(bullets);
const testims = document.querySelectorAll(".testimonials .testims .testim");
const testimsArray = Array.from(testims);

// Map Functionality
mapboxgl.accessToken =
  "pk.eyJ1IjoiaGFtemFjaDk3IiwiYSI6ImNrcWxiZWNlcjN6M3kyd212MWZseWF4ZXcifQ.xwVPIODcdaYqfYW4NvGhyw";
var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11",
  center: [33.796296512357024, 2.8619866526413844],
});

bulletsArray.forEach((bullet) => {
  bullet.addEventListener("click", function (e) {
    bulletsArray.forEach((bullet) => bullet.classList.remove("active"));
    e.currentTarget.classList.add("active");

    testimsArray.forEach((testim) => (testim.style.display = "none"));
    document.querySelector(this.dataset.testim).style.display = "flex";
  });
});
