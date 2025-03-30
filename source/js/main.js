// import {mobileVhFix} from './utils/mobile-vh-fix.js';
// import {initModals} from './modules/modals/init-modals';
// import {Form} from './modules/form-validate/form';
// import {CustomSelect} from './modules/select/custom-select';
// import {uploadFile, uploadImageDrop} from './modules/input-file/init-upload';
// import {initTabs} from './modules/init-tabs.js';
// import {initAccordion} from './modules/init-accordion.js';
import {initSubmenu} from './modules/init-submenu.js';
// import {initStickyModal} from './modules/init-sticky-modal.js';
import {initSmoothScroll} from './modules/init-smooth-scroll';
import {initTooltip} from './modules/init-tooltip';
import {initTabs} from './modules/init-tabs-accordion';
import {initAccordion} from './modules/init-tabs-accordion';
import {initMobMenu} from './modules/init-mob-menu';
import {initModal} from './modules/init-modal';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  // mobileVhFix();
  initTabs();
  initAccordion();
  initSubmenu();
  initSmoothScroll();
  initMobMenu();
  initModal();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    // initModals();
    // uploadFile();
    // uploadImageDrop();
    // const select = new CustomSelect();
    // select.init();
    // const form = new Form();
    // window.form = form;
    // form.init();
    // initStickyModal('.modal-cta', '.container');
    initTooltip();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используейтся matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
