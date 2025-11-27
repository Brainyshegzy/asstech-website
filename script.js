document.querySelectorAll('.custom-play').forEach(btn => {
  btn.addEventListener('click', () => {
    const videoId = btn.getAttribute('data-video');
    const video = document.getElementById(videoId);

    if (video.paused) {
      video.play();
      btn.style.display = 'none'; // hide play icon while playing
    } else {
      video.pause();
      btn.style.display = 'flex'; // show play icon when paused
    }
  });
});

// Optional: Click on video itself pauses it
document.querySelectorAll('.portfolio-video').forEach(video => {
  video.addEventListener('click', () => {
    if (!video.paused) {
      video.pause();
      const btn = document.querySelector(`.custom-play[data-video="${video.id}"]`);
      btn.style.display = 'flex';
    }
  });
});