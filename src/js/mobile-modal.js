document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuClose = document.getElementById('menu-close');

  const navMob = document.querySelector('.nav-mob');
  const navPage2 = document.querySelector('.nav-page2');

  function switchMenu() {
    const currentPage = window.location.pathname;

    if (currentPage.includes('index.html')) {
      navPage2.classList.remove('active');
      navMob.classList.add('active');
    } else {
      navMob.classList.remove('active');
      navPage2.classList.add('active');
    }
  }

  switchMenu();

  menuToggle.addEventListener('click', function () {
    mobileMenu.classList.toggle('active');
  });

  menuClose.addEventListener('click', function () {
    mobileMenu.classList.remove('active');
  });
});
