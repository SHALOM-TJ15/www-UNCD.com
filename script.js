document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function showSlide(index) {
      slides.forEach(slide => {
        slide.style.display = 'none';
      });
      slides[index].style.display = 'block';
    }

    showSlide(currentSlide);

    // Next slide functionality
    document.addEventListener('keydown', function(event) {
      if (event.key === 'ArrowRight' || event.key === ' ') {
        currentSlide++;
        if (currentSlide >= slides.length) {
          currentSlide = 0; // Loop back to the beginning
        }
        showSlide(currentSlide);
      }
    });

    // Previous slide functionality
    document.addEventListener('keydown', function(event) {
      if (event.key === 'ArrowLeft') {
        currentSlide--;
        if (currentSlide < 0) {
          currentSlide = slides.length - 1; // Loop to the last slide
        }
        showSlide(currentSlide);
      }
    });
  });