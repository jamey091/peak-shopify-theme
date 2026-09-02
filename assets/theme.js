document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-scroll-to]').forEach((link) => {
    link.addEventListener('click', (event) => {
      const targetSelector = link.getAttribute('data-scroll-to');
      const target = document.querySelector(targetSelector);

      if (!target) return;

      event.preventDefault();

      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });
});