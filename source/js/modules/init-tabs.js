// export function initTabs() {
//   const tabs = document.querySelectorAll(".btn--tab");
//   const contents = document.querySelectorAll(".intro__tab");

//   if (tabs.length === 0 || contents.length === 0) return;

//   tabs.forEach((tab) => {
//     tab.addEventListener("click", () => {
//       let tabIndex = tab.dataset.tab;

//       tabs.forEach((t) => t.classList.remove("active"));
//       contents.forEach((c) => c.classList.remove("active", "fade-in"));

//       tab.classList.add("active");
//       const activeContent = document.querySelector(`.intro__tab[data-content="${tabIndex}"]`);
//       activeContent.classList.add("active", "fade-in"); // Добавляем анимацию
//     });
//   });
// }

// export function initTabs() {
//   const tabButtons = document.querySelectorAll("[data-tab]");
//   const tabContents = document.querySelectorAll("[data-content]");
//   const modalContainer = document.querySelector(".container--modal-cta");

//   function updateModalHeight(activeTab) {
//     const description = activeTab.querySelector(".intro__tab-details");
//     if (description && modalContainer) {
//       modalContainer.style.height = `${description.offsetHeight}px`;
//     }
//   }

//   tabButtons.forEach((button) => {
//     button.addEventListener("click", function () {
//       const targetTab = this.getAttribute("data-tab");

//       // Удаляем активные классы у кнопок и табов
//       tabButtons.forEach((btn) => btn.classList.remove("active"));
//       tabContents.forEach((content) => content.classList.remove("active", "fade-in"));

//       // Добавляем активный класс к выбранным элементам
//       this.classList.add("active");
//       const targetContent = document.querySelector(`[data-content='${targetTab}']`);

//       if (targetContent) {
//         targetContent.classList.add("active", "fade-in");
//         updateModalHeight(targetContent);
//       } else {
//         console.error(`Элемент с data-content="${targetTab}" не найден.`);
//       }
//     });
//   });

//   // Устанавливаем начальную высоту модалки
//   const initialActiveTab = document.querySelector(".intro__tab.active");
//   if (initialActiveTab) updateModalHeight(initialActiveTab);

// }
