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
      e.stopPropagation();
      const tooltip = card.querySelector(".tooltip");

      if (!tooltip) return;

      const isVisible = tooltip.classList.contains("visible");
      closeAllTooltips();
      tooltip.classList.toggle("visible", !isVisible);
    });
  });

  document.addEventListener("click", () => closeAllTooltips());
}
