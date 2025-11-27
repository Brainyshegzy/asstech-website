// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('hidden');
});

// Close menu when link clicked (mobile)
const navLinks = navMenu.querySelectorAll('a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.add('hidden');
  });
});

// Custom Video Play Buttons
const playButtons = document.querySelectorAll('.custom-play');

playButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const videoId = btn.getAttribute('data-video');
    const video = document.getElementById(videoId);

    if(video.paused) {
      video.play();
      btn.style.display = 'none'; // hide play button while video plays
    }

    // Optional: show button again when video ends
    video.addEventListener('ended', () => {
      btn.style.display = 'block';
    });
  });
});