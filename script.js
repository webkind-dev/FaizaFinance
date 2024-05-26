let currentIndex = 0;

document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const slideWidth = slides[0].getBoundingClientRect().width;

    function setSlidePosition() {
      slides.forEach((slide, index) => {
        slide.style.left = (slideWidth + 20) * index + 'px'; // Adjust for the gap
      });
    }
  
    setSlidePosition();

    // Set transition property here
    track.style.transition = 'transform 0.5s ease-in-out';
  
    function updateTrackPosition() {
      const amountToMove = -(currentIndex * (slideWidth + 20)); // Adjust for the gap
      track.style.transform = 'translateX(' + amountToMove + 'px)';
    }
  
    window.nextSlide = function() {
      if (currentIndex < slides.length - 3) {
        currentIndex++;
      } else {
        currentIndex = 0; // Loop back to the start
      }
      updateTrackPosition();
    }
  
    window.previousSlide = function() {
      if (currentIndex > 0) {
        currentIndex--;
      } else {
        currentIndex = slides.length - 3; // Loop back to the end
      }
      updateTrackPosition();
    }
});
