// export function initSmoothScroll() {

//   // Модуль для плавного скроллинга
//   const smoothScroll = () => {
//     // Получаем все ссылки с классом .scroll-link
//     const scrollLinks = document.querySelectorAll('.scroll-link');

//     // Для каждой ссылки добавляем обработчик события
//     scrollLinks.forEach((link) => {
//       link.addEventListener('click', function (event) {
//         // Отменяем стандартное поведение ссылки
//         event.preventDefault();

//         // Получаем id целевого блока из атрибута href
//         const targetId = link.getAttribute('href').substring(1);
//         const targetElement = document.getElementById(targetId);

//         if (targetElement) {
//           // Плавно скроллим к целевому элементу
//           targetElement.scrollIntoView({
//             behavior: 'smooth',
//             block: 'start',
//           });
//         }
//       });
//     });
//   };

//   // Инициализируем модуль
//   smoothScroll();
// }

export function initSmoothScroll() {
  // Модуль для плавного скроллинга
  const smoothScroll = () => {
    // Получаем все ссылки с классом .scroll-link
    const scrollLinks = document.querySelectorAll('.scroll-link');

    // Для каждой ссылки добавляем обработчик события
    scrollLinks.forEach((link) => {
      link.addEventListener('click', function (event) {
        // Отменяем стандартное поведение ссылки
        event.preventDefault();

        // Получаем значение data-scroll-to
        const targetSelector = link.getAttribute('data-scroll-to');
        const targetElement = document.querySelector(`[data-scroll-target="${targetSelector}"]`);

        if (targetElement) {
          // Плавно скроллим к целевому элементу
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      });
    });
  };

  // Инициализируем модуль
  smoothScroll();
}
