document.addEventListener('DOMContentLoaded', () => {
    initAccordion();
});

function initAccordion() {
    const accordions = document.querySelectorAll('[data-accordion]');

    accordions.forEach((accordion) => {
        accordion.addEventListener('click', (e) => {
            const title = e.target.closest('[data-accordion-title]');
            if (!title) return;

            const item = title.closest('[data-accordion-item]');
            const isOpen = item.getAttribute('data-accordion-item') === 'open';

            accordion.querySelectorAll('[data-accordion-item]').forEach((el) => {
                el.setAttribute('data-accordion-item', 'close');
            });

            if (!isOpen) {
                item.setAttribute('data-accordion-item', 'open');
            }
        });
    });
}