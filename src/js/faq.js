document.addEventListener('DOMContentLoaded', () => {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const toggleButton = item.querySelector('.faq-toggle');
    const answer = item.querySelector('.faq-item-answer');
    const minusIcon = item.querySelector('.faq-item-icon-minus');
    const plusIcon = item.querySelector('.faq-item-icon-plus');

    toggleButton.addEventListener('click', () => {
      answer.classList.toggle('visible');
      minusIcon.classList.toggle('hidden');
      plusIcon.classList.toggle('hidden');
    });
  });
});
