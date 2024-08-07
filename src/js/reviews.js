document.addEventListener('DOMContentLoaded', () => {
  let slideIndex = 1;
  let startX;

  function getResponsiveSettings() {
    const width = window.innerWidth;

    if (width <= 1439) {
      return {
        slidesToShowOnNav: 1,
        slidesToScrollOnNav: 1,
        slidesToShowOnPagination: 1,
      };
    } else {
      return {
        slidesToShowOnNav: 2,
        slidesToScrollOnNav: 1,
        slidesToShowOnPagination: 2,
      };
    }
  }

  function updateSlides() {
    const settings = getResponsiveSettings();
    showSlides(
      slideIndex,
      settings.slidesToShowOnNav,
      settings.slidesToShowOnPagination
    );
  }

  function plusSlides(n) {
    const settings = getResponsiveSettings();
    slideIndex += n;
    showSlides(
      slideIndex,
      settings.slidesToShowOnNav,
      settings.slidesToShowOnPagination
    );
  }

  function currentSlide(n) {
    const settings = getResponsiveSettings();
    const slides = document.querySelectorAll('.reviews-item');
    const totalSlides = slides.length;

    if (n < 1) {
      slideIndex = 1;
    } else if (n > Math.ceil(totalSlides / settings.slidesToShowOnPagination)) {
      slideIndex = Math.ceil(totalSlides / settings.slidesToShowOnPagination);
    } else {
      slideIndex = n;
    }

    showSlides(
      slideIndex,
      settings.slidesToShowOnNav,
      settings.slidesToShowOnPagination
    );
  }

  function showSlides(n, slidesToShowOnNav, slidesToShowOnPagination) {
    const settings = getResponsiveSettings();
    const slides = document.querySelectorAll('.reviews-item');
    const totalSlides = slides.length;

    if (n > Math.ceil(totalSlides / slidesToShowOnPagination)) {
      slideIndex = 1;
    } else if (n < 1) {
      slideIndex = Math.ceil(totalSlides / slidesToShowOnPagination);
    } else {
      slideIndex = n;
    }

    const startSlide = (slideIndex - 1) * slidesToShowOnPagination;
    const endSlide = startSlide + slidesToShowOnPagination;
    const dots = document.querySelectorAll('.reviews-pagination-button');
    slides.forEach((slide, index) => {
      if (index >= startSlide && index < endSlide) {
        slide.style.display = 'block';
      } else {
        slide.style.display = 'none';
      }
    });
    dots.forEach(dot => dot.classList.remove('active'));

    dots.forEach((dot, index) => {
      const dotSlideIndex = Math.floor((index * totalSlides) / dots.length) + 1;
      if (dotSlideIndex === slideIndex) {
        dot.classList.add('active');
      }
    });
  }

  function handleSwipe(startX, endX) {
    const threshold = 50;
    if (endX < startX - threshold) {
      plusSlides(1);
    } else if (endX > startX + threshold) {
      plusSlides(-1);
    }
  }

  function onTouchStart(event) {
    startX = event.touches[0].clientX;
  }

  function onTouchEnd(event) {
    const endX = event.changedTouches[0].clientX;
    handleSwipe(startX, endX);
  }

  updateSlides();

  document
    .querySelector('.reviews-button-prev')
    .addEventListener('click', () => {
      const settings = getResponsiveSettings();
      plusSlides(-settings.slidesToScrollOnNav);
    });
  document
    .querySelector('.reviews-button-next')
    .addEventListener('click', () => {
      const settings = getResponsiveSettings();
      plusSlides(settings.slidesToScrollOnNav);
    });

  const dots = document.querySelectorAll('.reviews-pagination-button');
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentSlide(index + 1);
    });
  });

  window.addEventListener('resize', updateSlides);

  document
    .querySelector('.reviews-slider')
    .addEventListener('touchstart', onTouchStart);
  document
    .querySelector('.reviews-slider')
    .addEventListener('touchend', onTouchEnd);
});
