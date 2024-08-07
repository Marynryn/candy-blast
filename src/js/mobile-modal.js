document.addEventListener('DOMContentLoaded', function () {
  const menuOpen = document.getElementById('menu-toggle');
  const menuClose = document.getElementById('menu-close');
  const mobileMenu = document.getElementById('mobile-menu');
  const backdrop = document.getElementById('backdrop');
  const navMob = document.querySelector('.nav-mob');
  const navPage2 = document.querySelector('.nav-page2');
  const nav = document.querySelector('.nav');
  const header = document.getElementById('box');

  function switchMenu() {
    const currentPage = window.location.pathname;

    if (currentPage.includes('page-2.html' || 'page-3.html')) {
      navMob.classList.remove('active');
      navPage2.classList.add('active');
      nav.classList.remove('active');
      header.classList.add('active');
    } else {
      navPage2.classList.remove('active');
      navMob.classList.add('active');
      nav.classList.add('active');
      header.classList.remove('.active');
    }
  }

  switchMenu();

  function toggleMenu() {
    const isMenuOpen = mobileMenu.classList.contains('active');

    mobileMenu.classList.toggle('active', !isMenuOpen);
    backdrop.classList.toggle('active', !isMenuOpen);
    menuOpen.classList.toggle('active', isMenuOpen);
    menuClose.classList.toggle('active', !isMenuOpen);
  }

  menuOpen.addEventListener('click', toggleMenu);
  menuClose.addEventListener('click', toggleMenu);
  backdrop.addEventListener('click', toggleMenu);
});
