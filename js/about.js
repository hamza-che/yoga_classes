const bullets = document.querySelectorAll(".testimonials .testims .bullets li");
const bulletsArray = Array.from(bullets);
const testims = document.querySelectorAll(".testimonials .testims .testim");
const testimsArray = Array.from(testims);

bulletsArray.forEach((bullet) => {
  bullet.addEventListener("click", function (e) {
    bulletsArray.forEach((bullet) => bullet.classList.remove("active"));
    e.currentTarget.classList.add("active");

    testimsArray.forEach((testim) => (testim.style.display = "none"));
    document.querySelector(this.dataset.testim).style.display = "flex";
  });
});
