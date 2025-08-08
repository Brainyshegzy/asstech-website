document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");

  hamburger.addEventListener("click", function () {
    if (navMenu.style.display === "flex") {
      navMenu.style.display = "none";
    } else {
      navMenu.style.display = "flex";
    }
  });

  // WhatsApp Button Redirect
  const whatsappBtn = document.querySelector('.contact-buttons button');
  if (whatsappBtn) {
    whatsappBtn.addEventListener('click', () => {
      window.open("https://wa.me/2348035858679", "_blank");
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const playButtons = document.querySelectorAll('.custom-play');
  const videos = document.querySelectorAll('.portfolio-video');

  playButtons.forEach(button => {
    button.addEventListener('click', () => {
      const videoId = button.getAttribute('data-video');
      const video = document.getElementById(videoId);

      // Pause all other videos
      videos.forEach(v => {
        if (v !== video) {
          v.pause();
          v.currentTime = 0;
          const playIcon = v.parentElement.querySelector('.custom-play');
          if (playIcon) playIcon.style.display = 'block';
        }
      });

      // Play the selected video
      video.play();
      button.style.display = 'none';

      // When video ends, show play button again
      video.onended = () => {
        button.style.display = 'block';
      };
    });

    // Pause video if clicked directly
    const video = document.getElementById(button.getAttribute('data-video'));
    video.addEventListener('click', () => {
      if (!video.paused) {
        video.pause();
        button.style.display = 'block';
      }
    });
  });
});