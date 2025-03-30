// export function initSubmenu() {
//   // Находим все элементы меню с выпадающим списком
//   const dropdownLinks = document.querySelectorAll('.main-nav__item > .main-nav__link, .main-nav__account > .main-nav__link');

//   dropdownLinks.forEach(link => {
//     link.addEventListener('click', function (e) {
//       const parentItem = this.parentElement;
//       const dropdownMenu = parentItem.querySelector('.dropdown-menu');
//       const icon = parentItem.querySelector('.icon-drop-down');

//       // Переключаем видимость выпадающего меню
//       dropdownMenu.classList.toggle('open');

//       // Поворачиваем стрелку
//       icon.classList.toggle('rotate');
//     });
//   });
// }

export function initSubmenu() {
  // Находим все элементы меню с выпадающим списком
  const dropdownLinks = document.querySelectorAll('.main-nav__item > .main-nav__link, .main-nav__account > .main-nav__link');

  dropdownLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault(); // Предотвращаем стандартное поведение ссылки

      const parentItem = this.parentElement;
      const dropdownMenu = parentItem.querySelector('.dropdown-menu');
      const icon = parentItem.querySelector('.icon-drop-down');

      // Закрываем все открытые меню
      document.querySelectorAll('.dropdown-menu.open').forEach(menu => {
        if (menu !== dropdownMenu) {
          menu.classList.remove('open');
          menu.parentElement.querySelector('.icon-drop-down')?.classList.remove('rotate');
        }
      });

      // Переключаем текущее меню
      dropdownMenu.classList.toggle('open');
      icon.classList.toggle('rotate');
    });
  });

  // Закрытие меню при клике вне области
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.main-nav__item') && !e.target.closest('.main-nav__account')) {
      document.querySelectorAll('.dropdown-menu.open').forEach(menu => {
        menu.classList.remove('open');
        menu.parentElement.querySelector('.icon-drop-down')?.classList.remove('rotate');
      });
    }
  });
}
