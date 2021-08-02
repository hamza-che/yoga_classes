const bullets = document.querySelectorAll(".contact-us .bullets li");
const slides = document.querySelectorAll(".contact-us .location .slide");

bullets.forEach((bullet) => {
  bullet.onclick = function () {
    this.parentElement.querySelector(".active").classList.remove("active");
    this.classList.add("active");

    slides.forEach((slide) => {
      slide.classList.contains(bullet.dataset.loc)
        ? slide.classList.add("active")
        : slide.classList.remove("active");
    });
  };
});

// Map Functionality
mapboxgl.accessToken =
  "pk.eyJ1IjoiaGFtemFjaDk3IiwiYSI6ImNrcWxiZWNlcjN6M3kyd212MWZseWF4ZXcifQ.xwVPIODcdaYqfYW4NvGhyw";
var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11",
  center: [33.796296512357024, 2.8619866526413844],
});
