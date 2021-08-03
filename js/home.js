const playBtn = document.querySelector(".play");
const video = document.querySelector(".features .video video");

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
