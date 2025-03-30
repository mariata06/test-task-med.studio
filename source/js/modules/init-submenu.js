export function initSubmenu() {

  const dropdownLinks = document.querySelectorAll('.main-nav__item > .main-nav__link, .main-nav__account > .main-nav__link');

  dropdownLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      const parentItem = this.parentElement;
      const dropdownMenu = parentItem.querySelector('.dropdown-menu');
      const icon = parentItem.querySelector('.icon-drop-down');

      document.querySelectorAll('.dropdown-menu.open').forEach(menu => {
        if (menu !== dropdownMenu) {
          menu.classList.remove('open');
          menu.parentElement.querySelector('.icon-drop-down')?.classList.remove('rotate');
        }
      });

      dropdownMenu.classList.toggle('open');
      icon.classList.toggle('rotate');
    });
  });

  document.addEventListener('click', function (e) {
    if (!e.target.closest('.main-nav__item') && !e.target.closest('.main-nav__account')) {
      document.querySelectorAll('.dropdown-menu.open').forEach(menu => {
        menu.classList.remove('open');
        menu.parentElement.querySelector('.icon-drop-down')?.classList.remove('rotate');
      });
    }
  });
}
