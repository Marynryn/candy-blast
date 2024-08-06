document.addEventListener('DOMContentLoaded', () => {
  let slideIndex = 1;
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
});
