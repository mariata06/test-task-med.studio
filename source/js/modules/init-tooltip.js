// export function initTooltip() {
//   const cards = document.querySelectorAll(".sponsor__card, .partners__card");

//   cards.forEach(card => {
//     card.addEventListener("click", (e) => {
//       const tooltip = card.querySelector(".tooltip");

//       // Закрываем все тултипы перед открытием нового
//       document.querySelectorAll(".tooltip").forEach(tip => {
//         if (tip !== tooltip) {
//           tip.classList.remove("visible");
//         }
//       });

//       // Переключаем состояние текущего тултипа
//       tooltip.classList.toggle("visible");

//       // Закрываем тултип при клике вне карточки
//       document.addEventListener("click", (event) => {
//         if (!card.contains(event.target)) {
//           tooltip.classList.remove("visible");
//         }
//       }, { once: true });
//     });
//   });

// }

export function initTooltip() {
  const cards = document.querySelectorAll(".sponsor__card, .partners__card");

  function closeAllTooltips(except = null) {
    document.querySelectorAll(".tooltip.visible").forEach(tip => {
      if (tip !== except) {
        tip.classList.remove("visible");
      }
    });
  }

  cards.forEach(card => {
    card.addEventListener("click", (e) => {
      e.stopPropagation(); // Остановим всплытие, чтобы клик не дошел до document
      const tooltip = card.querySelector(".tooltip");

      if (!tooltip) return;

      const isVisible = tooltip.classList.contains("visible");
      closeAllTooltips(); // Закрываем все тултипы
      tooltip.classList.toggle("visible", !isVisible); // Открываем текущий, если он был закрыт
    });
  });

  // Глобальный обработчик для клика вне элемента
  document.addEventListener("click", () => closeAllTooltips());
}
