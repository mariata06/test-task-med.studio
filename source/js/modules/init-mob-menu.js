
export function initMobMenu() {
  document.querySelector('.main-nav__toggle').addEventListener('click', function() {
    const menu = document.querySelector('.main-nav__wrapper');
    this.classList.toggle('open');
    menu.classList.toggle('open');
  });
}
