document.addEventListener("DOMContentLoaded", function () {
  // Hamburger Menu Toggle
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", function () {
      navMenu.classList.toggle("hidden");
    });

    // Close menu when link clicked (mobile)
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.add('hidden');
      });
    });
  }

  // WhatsApp Button Redirect
  const whatsappBtn = document.getElementById('whatsapp-btn');
  if (whatsappBtn) {
    whatsappBtn.addEventListener('click', () => {
      window.open("https://wa.me/2348035858679?text=Hello%20Asstech%20Global%20Synergy%20Ltd%2C%20I%27d%20like%20to%20make%20an%20enquiry.", "_blank");
    });
  }

  // Video Play/Pause Controls
  const playButtons = document.querySelectorAll('.custom-play');
  const videos = document.querySelectorAll('.portfolio-video');

  playButtons.forEach(button => {
    button.addEventListener('click', () => {
      const videoId = button.getAttribute('data-video');
      const video = document.getElementById(videoId);

      if (!video) return;

      // Pause all other videos
      videos.forEach(v => {
        if (v !== video && !v.paused) {
          v.pause();
          v.currentTime = 0;
          const playIcon = v.parentElement.querySelector('.custom-play');
          if (playIcon) playIcon.style.display = 'block';
        }
      });

      // Toggle play/pause for current video
      if (video.paused) {
        video.play();
        button.style.display = 'none';
      } else {
        video.pause();
        button.style.display = 'block';
      }

      // When video ends, show play button again
      video.onended = () => {
        button.style.display = 'block';
      };
    });
  });

  // Also allow clicking video itself to pause/play
  videos.forEach(video => {
    video.addEventListener('click', () => {
      const button = video.parentElement.querySelector('.custom-play');
      
      if (!video.paused) {
        video.pause();
        if (button) button.style.display = 'block';
      } else {
        // Pause all other videos first
        videos.forEach(v => {
          if (v !== video && !v.paused) {
            v.pause();
            const playIcon = v.parentElement.querySelector('.custom-play');
            if (playIcon) playIcon.style.display = 'block';
          }
        });
        
        video.play();
        if (button) button.style.display = 'none';
      }
    });
  });
});