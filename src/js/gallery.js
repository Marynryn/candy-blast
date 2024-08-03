let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function plusSlides(n) {
  showSlides((slideIndex += n));
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
    slide.style.transform = `translateX(-${(slideIndex - 1) * 100}%)`;
  });

  dots.forEach((dot, index) => {
    dot.className = dot.className.replace(' active', '');
    if (index === slideIndex - 1) {
      dot.className += ' active';
    }
  });
}
