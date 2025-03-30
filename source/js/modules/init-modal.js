export function initModal() {
  const openModalButtons = document.querySelectorAll('[data-open-modal="payment"]');
  const modal = document.querySelector('[data-modal="payment"]');
  const closeModalButton = modal.querySelector('[data-close-modal]');
  const body = document.body;

  function openModal() {
    modal.classList.add('is-active');
    body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('is-active');
    body.style.overflow = '';
  }

  openModalButtons.forEach(button => {
    button.addEventListener('click', openModal);
  });

  if (closeModalButton) {
    closeModalButton.addEventListener('click', closeModal);
  }

  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });
}
