export function initSmoothScroll() {
  const smoothScroll = () => {

    const scrollLinks = document.querySelectorAll('.scroll-link');

    scrollLinks.forEach((link) => {
      link.addEventListener('click', function (event) {

        event.preventDefault();

        const targetSelector = link.getAttribute('data-scroll-to');
        const targetElement = document.querySelector(`[data-scroll-target="${targetSelector}"]`);

        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      });
    });
  };

  smoothScroll();
}
