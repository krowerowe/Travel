// main.js - The core router and content loader for the SPA

// Import content from other files.
import { headerContent } from './header.js';
import { footerContent } from './footer.js';
import { homeContent } from './home.js';
import { countriesContent, runCountriesPageLogic } from './countries.js';
import { aboutContent } from './about.js';
import { contactContent } from './contact.js';

// Map URL hashes to content modules and their optional run functions.
const routes = {
    'home': { content: homeContent, run: null },
    'countries': { content: countriesContent, run: runCountriesPageLogic },
    'about': { content: aboutContent, run: null },
    'contact': { content: contactContent, run: null },
};

// Get the main containers from the DOM
const headerContainer = document.getElementById('header-container');
const mainContentContainer = document.getElementById('main-content-container');
const footerContainer = document.getElementById('footer-container');

// A function to load the page content based on the URL hash.
const loadPage = () => {
    // Get the current page from the URL hash, default to 'home' if empty.
    const page = window.location.hash.slice(1) || 'home';
    const route = routes[page];

    if (route) {
        // Update the main content with the new HTML.
        mainContentContainer.innerHTML = route.content;

        // Run any page-specific JavaScript logic.
        if (route.run) {
            route.run();
        }

        // Update active class on navigation links.
        updateNavLinks(page);
    } else {
        // Handle a 404 Not Found case if the route doesn't exist.
        mainContentContainer.innerHTML = `
            <div class="text-center py-16">
                <h1 class="text-4xl font-bold mb-4">404 - Page Not Found</h1>
                <p class="text-gray-600">The page you're looking for does not exist. Please use the navigation above.</p>
            </div>
        `;
        updateNavLinks(null);
    }
};

// Update the navigation links to show which page is active.
const updateNavLinks = (activePage) => {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        if (item.getAttribute('data-page') === activePage) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
};

// Load the header and footer content when the DOM is ready.
document.addEventListener('DOMContentLoaded', () => {
    headerContainer.innerHTML = headerContent;
    footerContainer.innerHTML = footerContent;
    
    // Initial page load based on the URL hash.
    loadPage();
});

// Listen for hash changes to navigate between pages.
window.addEventListener('hashchange', loadPage);
