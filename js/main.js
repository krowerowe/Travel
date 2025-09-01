import { footerContent } from './footer.js';
import { homeContent } from './home.js';
import { generateCountriesPageContent, renderCountriesPageLogic } from './countries.js';
import { aboutContent } from './about.js';
import { contactContent } from './contact.js';

// Map URL hashes to content functions and their optional run functions.
const routes = {
    'home': { content: homeContent, run: null },
    'countries': { content: generateCountriesPageContent, run: renderCountriesPageLogic },
    'about': { content: aboutContent, run: null },
    'contact': { content: contactContent, run: null },
};

// Get the main containers from the DOM
const mainContentContainer = document.getElementById('main-content-container');
const footerContainer = document.getElementById('footer-container');
const navItems = document.querySelectorAll('.nav-item');

/**
 * Loads the page content based on the URL hash.
 */
const loadPage = () => {
    const page = window.location.hash.slice(1) || 'home';
    const route = routes[page];

    if (route) {
        const content = typeof route.content === 'function' ? route.content() : route.content;
        mainContentContainer.innerHTML = content;

        if (route.run) {
            route.run();
        }

        updateNavLinks(page);
    } else {
        mainContentContainer.innerHTML = `
            <div class="text-center py-16">
                <h1 class="text-4xl font-bold mb-4">404 - Page Not Found</h1>
                <p class="text-gray-600">The page you're looking for does not exist. Please use the navigation above.</p>
            </div>
        `;
        updateNavLinks(null);
    }
};

/**
 * Updates the active class on navigation links to control pin visibility.
 * @param {string} activePage The page that should be active.
 */
const updateNavLinks = (activePage) => {
    navItems.forEach(item => {
        if (item.getAttribute('data-page') === activePage) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
};

// Event listener for navigation clicks
document.addEventListener('DOMContentLoaded', () => {
    footerContainer.innerHTML = footerContent;
    
    const navBar = document.querySelector('.nav-list');
    if (navBar) {
        navBar.addEventListener('click', (event) => {
            const listItem = event.target.closest('li.nav-item');
            if (listItem) {
                event.preventDefault();
                const page = listItem.getAttribute('data-page');
                history.pushState({ page: page }, '', `#${page}`);
                loadPage();
            }
        });
    }

    const initialPage = window.location.hash ? window.location.hash.substring(1) : 'home';
    loadPage();
});

// Listen for hash changes to navigate between pages.
window.addEventListener('hashchange', loadPage);