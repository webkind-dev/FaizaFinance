let currentIndices = {
  'scholarships': 0,
  'helpful-links': 0,
  'financial-tips': 0
};

document.addEventListener("DOMContentLoaded", function () {
  const carousels = document.querySelectorAll('.carousel-track');

  carousels.forEach(track => {
      const slides = Array.from(track.children);
      const slideWidth = slides[0].getBoundingClientRect().width;

      function setSlidePosition() {
          slides.forEach((slide, index) => {
              slide.style.left = (slideWidth + 20) * index + 'px'; // Adjust for the gap
          });
      }

      setSlidePosition();
      track.style.transition = 'transform 0.5s ease-in-out';
  });

  function updateTrackPosition(carouselId) {
      const track = document.getElementById(carouselId);
      const slides = Array.from(track.children);
      const slideWidth = slides[0].getBoundingClientRect().width;
      const amountToMove = -(currentIndices[carouselId] * (slideWidth + 20)); // Adjust for the gap
      track.style.transform = 'translateX(' + amountToMove + 'px)';
  }

  window.nextSlide = function(carouselId) {
      const track = document.getElementById(carouselId);
      const slides = Array.from(track.children);
      if (currentIndices[carouselId] < slides.length - 3) {
          currentIndices[carouselId]++;
      } else {
          currentIndices[carouselId] = 0; // Loop back to the start
      }
      updateTrackPosition(carouselId);
  }

  window.previousSlide = function(carouselId) {
      const track = document.getElementById(carouselId);
      const slides = Array.from(track.children);
      if (currentIndices[carouselId] > 0) {
          currentIndices[carouselId]--;
      } else {
          currentIndices[carouselId] = slides.length - 3; // Loop back to the end
      }
      updateTrackPosition(carouselId);
  }
});
