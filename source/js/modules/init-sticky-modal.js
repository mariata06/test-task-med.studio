// export function initStickyModal(modalSelector, containerSelector) {
//   const modal = document.querySelector(modalSelector);
//   const container = document.querySelector(containerSelector);

//   if (!modal) return;

//   function updatePosition() {
//     const containerRect = container.getBoundingClientRect();
//   }

//   function handleScroll() {
//     const rect = modal.getBoundingClientRect();
//     console.log(rect);
//     const distanceToTop = rect.top;
//     console.log(distanceToTop); // расстояние до верха окна
//     const distanceToBottom = window.innerHeight - rect.bottom;
//     console.log(distanceToBottom); // расстояние до низа окна

//     if ((Math.abs(distanceToTop - distanceToBottom) === 1) || (distanceToTop === distanceToBottom)) {
//       console.log('момент выравнивания: ' + distanceToTop + ' ' + distanceToBottom);
//       modal.classList.add("fixed");
//     } else {
//       modal.classList.remove("fixed");
//     }
//   }

//   // События для обновления позиции
//   window.addEventListener("scroll", handleScroll);
//   window.addEventListener("resize", updatePosition);
//   updatePosition(); // Вызываем сразу
// }


// export function initStickyModal(modalSelector, containerSelector) {
//   const modal = document.querySelector(modalSelector);
//   const container = document.querySelector(containerSelector);

//   if (!modal || !container) return;

//   function handleScroll() {
//     const rect = modal.getBoundingClientRect();
//     const modalMiddle = rect.top + rect.height / 2; // Центр модалки
//     const viewportMiddle = window.innerHeight / 2; // Центр окна

//     if (modalMiddle <= viewportMiddle) {
//       modal.classList.add("fixed");
//     } else {
//       modal.classList.remove("fixed");
//     }
//   }

//   window.addEventListener("scroll", handleScroll);
//   handleScroll(); // Проверка сразу при загрузке
// }
