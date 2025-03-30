export function initAccordion() {
  const accordions = document.querySelectorAll(".intro__course-acordeon");
  const modalContainer = document.querySelector(".container--modal-cta");

  if (accordions.length > 0) {
    accordions[0].classList.add("open");
  }

  function updateModalHeight() {
    const activeTab = document.querySelector('.intro__tab.active');
    const description = activeTab ? activeTab.querySelector(".intro__tab-details") : null;
    if (description && modalContainer) {
      modalContainer.style.height = `${description.offsetHeight}px`;
    }
  }

  accordions.forEach(accordion => {
    accordion.addEventListener("click", function () {
      accordion.classList.toggle("open");

      updateModalHeight();

      const secondPartContent = document.querySelector(".intro__tab[data-content='1']");
      if (secondPartContent) {
        secondPartContent.style.height = `${secondPartContent.scrollHeight}px`;
      }
    });
  });

  const initialActiveTab = document.querySelector(".intro__tab.active");
  if (initialActiveTab) updateModalHeight();
}

export function initTabs() {
  const tabButtons = document.querySelectorAll("[data-tab]");
  const tabContents = document.querySelectorAll("[data-content]");
  const modalContainer = document.querySelector(".container--modal-cta");

  function updateModalHeight(activeTab) {
    const description = activeTab.querySelector(".intro__tab-details");
    if (description && modalContainer) {
      modalContainer.style.height = `${description.offsetHeight}px`;
    }
  }

  tabButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const targetTab = this.getAttribute("data-tab");

      tabButtons.forEach((btn) => btn.classList.remove("active"));
      tabContents.forEach((content) => content.classList.remove("active", "fade-in"));

      this.classList.add("active");
      const targetContent = document.querySelector(`[data-content='${targetTab}']`);

      if (targetContent) {
        targetContent.classList.add("active", "fade-in");
        updateModalHeight(targetContent);
      } else {
        console.error(`Элемент с data-content="${targetTab}" не найден.`);
      }
    });
  });

  const initialActiveTab = document.querySelector(".intro__tab.active");
  if (initialActiveTab) updateModalHeight(initialActiveTab);
}
