document.addEventListener('DOMContentLoaded', () => {
  const navMenu = document.querySelector('#navbarSupportedContent');
  const navLinks = document.querySelectorAll('.navbar-collapse .nav-link, .navbar-collapse .nav-btn');

  if (!navMenu || typeof bootstrap === 'undefined') {
    return;
  }

  const collapse = bootstrap.Collapse.getOrCreateInstance(navMenu, {
    toggle: false,
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (window.innerWidth < 1200) {
        collapse.hide();
      }
    });
  });
});
