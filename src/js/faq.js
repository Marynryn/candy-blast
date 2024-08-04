document.querySelectorAll('.faq-toggle').forEach(button => {
  button.addEventListener('click', () => {
    const item = button.closest('.faq-item');
    item.classList.toggle('open');
  });
});
