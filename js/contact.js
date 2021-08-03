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
