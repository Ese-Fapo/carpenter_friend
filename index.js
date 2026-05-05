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
});
