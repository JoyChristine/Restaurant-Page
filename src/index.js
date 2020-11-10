import './HeaderModule.js';
import { home } from './HomeModule.js';
import { menu } from './MenuModule.js';
import { contact } from './ContactModule.js';



const header = document.querySelector('header');

const swapContent = function(event) {
    const newSectionLink = event.target.closest('a');
    const mainSection = document.querySelector('.main-section');

    if (!newSectionLink.dataset.content) return;

    const highlight = function(element) {
        const previousHighlight = header.querySelector('.sections_link');
        if (previousHighlight) {
            previousHighlight.classList.remove('sections_link');
        }
        element.classList.add('sections_link');
    };

    if (mainSection) {
        mainSection.remove();
    }


    if (newSectionLink.dataset.content === 'home') {
        home();
    } else if (newSectionLink.dataset.content === 'menu') {
        menu();
    } else if (newSectionLink.dataset.content === 'contact') {
        contact();
    }
    highlight(newSectionLink);
};

header.addEventListener('click', swapContent);
header.querySelector('.sections-link[data-content="home"]').click();;