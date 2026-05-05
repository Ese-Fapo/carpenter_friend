document.addEventListener('DOMContentLoaded', () => {
  const navMenu = document.querySelector('#navbarSupportedContent');
  const navLinks = document.querySelectorAll('.navbar-collapse .nav-link, .navbar-collapse .nav-btn');

  if (navMenu && typeof bootstrap !== 'undefined') {
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
  }

  const quoteForm = document.querySelector('#quoteForm');

  if (quoteForm) {
    quoteForm.addEventListener('submit', (event) => {
      event.preventDefault();

      const formData = new FormData(quoteForm);
      const message = [
        'Ola, gostaria de solicitar um orcamento.',
        `Nome: ${formData.get('name')}`,
        `Telefone: ${formData.get('phone')}`,
        `Servico: ${formData.get('service')}`,
        `Mensagem: ${formData.get('message')}`,
      ].join('\n');

      window.open(`https://wa.me/5548991447569?text=${encodeURIComponent(message)}`, '_blank');
    });
  }

  const projectGrid = document.querySelector('.project-grid');

  if (projectGrid) {
    const intervalDelay = 3500;
    let autoScrollInterval = null;

    const scrollProjectCarousel = () => {
      const itemWidth = projectGrid.querySelector('.project-item')?.offsetWidth || 320;
      const gap = 16;
      const nextPosition = projectGrid.scrollLeft + itemWidth + gap;
      const maxScroll = projectGrid.scrollWidth - projectGrid.clientWidth;

      if (nextPosition >= maxScroll - 10) {
        projectGrid.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        projectGrid.scrollBy({ left: itemWidth + gap, behavior: 'smooth' });
      }
    };

    const startAutoScroll = () => {
      autoScrollInterval = window.setInterval(scrollProjectCarousel, intervalDelay);
    };

    const stopAutoScroll = () => {
      if (autoScrollInterval !== null) {
        window.clearInterval(autoScrollInterval);
        autoScrollInterval = null;
      }
    };

    projectGrid.addEventListener('mouseenter', stopAutoScroll);
    projectGrid.addEventListener('mouseleave', startAutoScroll);
    projectGrid.addEventListener('touchstart', stopAutoScroll, { passive: true });
    projectGrid.addEventListener('touchend', startAutoScroll);

    startAutoScroll();
  }
});
