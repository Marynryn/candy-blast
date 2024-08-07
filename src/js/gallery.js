document.addEventListener('DOMContentLoaded', () => {
  let slideIndex = 1;
  let startX = 0;
  let endX = 0;

  showSlides(slideIndex);

  document
    .querySelector('.prev')
    .addEventListener('click', () => plusSlides(-1));
  document
    .querySelector('.next')
    .addEventListener('click', () => plusSlides(1));

  document.querySelectorAll('.dot').forEach(dot => {
    dot.addEventListener('click', () => {
      const slideNumber = parseInt(dot.getAttribute('data-slide'), 10);
      currentSlide(slideNumber);
    });
  });

  function plusSlides(n) {
    showSlides((slideIndex += n));
  }

  function currentSlide(n) {
    showSlides((slideIndex = n));
  }

  function showSlides(n) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');

    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }

    slides.forEach((slide, index) => {
      slide.style.display = index + 1 === slideIndex ? 'block' : 'none';
    });

    dots.forEach((dot, index) => {
      dot.className = index + 1 === slideIndex ? 'dot active' : 'dot';
    });
  }

  function handleSwipe() {
    const threshold = 50;
    if (endX < startX - threshold) {
      plusSlides(1);
    } else if (endX > startX + threshold) {
      plusSlides(-1);
    }
  }

  document.querySelector('.slider').addEventListener('touchstart', e => {
    startX = e.touches[0].clientX;
  });

  document.querySelector('.slider').addEventListener('touchend', e => {
    endX = e.changedTouches[0].clientX;
    handleSwipe();
  });
});
