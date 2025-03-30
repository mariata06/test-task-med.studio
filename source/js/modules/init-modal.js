export function initModal() {
  // const openButtons = document.querySelectorAll("[data-open-modal]");
  // const closeButtons = document.querySelectorAll("[data-close-modal]");
  // const modals = document.querySelectorAll("[data-modal]");

  // openButtons.forEach(button => {
  //   button.addEventListener("click", function () {
  //     const modalName = this.getAttribute("data-open-modal");
  //     const modal = document.querySelector(`[data-modal='${modalName}']`);
  //     if (modal) {
  //       modal.classList.add("is-active");
  //     }
  //   });
  // });

  // closeButtons.forEach(button => {
  //   button.addEventListener("click", function () {
  //     this.closest(".modal").classList.remove("is-active");
  //   });
  // });

  // // Закрытие по клику вне модального окна
  // modals.forEach(modal => {
  //   modal.addEventListener("click", function (e) {
  //     if (e.target === modal) {
  //       modal.classList.remove("is-active");
  //     }
  //   });
  // });



  // Открытие модалки
  const openModalButtons = document.querySelectorAll('[data-open-modal="payment"]');
  const modal = document.querySelector('[data-modal="payment"]');
  const closeModalButton = modal.querySelector('[data-close-modal]');
  const body = document.body;

  // Функция для открытия модалки
  function openModal() {
    modal.classList.add('is-active');
    body.style.overflow = 'hidden'; // Блокируем скролл страницы
  }

  // Функция для закрытия модалки
  function closeModal() {
    modal.classList.remove('is-active');
    body.style.overflow = ''; // Восстанавливаем нормальный скролл страницы
  }

  // Обработчик открытия модалки при клике на кнопки
  openModalButtons.forEach(button => {
    button.addEventListener('click', openModal);
  });

  // Обработчик закрытия модалки при клике на кнопку закрытия
  if (closeModalButton) {
    closeModalButton.addEventListener('click', closeModal);
  }

  // Закрытие модалки при клике вне её содержимого
  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });

}
