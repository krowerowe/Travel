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

const loadPage = () => {
    // Get the current page from the URL hash, default to 'home' if empty.
    const page = window.location.hash.slice(1) || 'home';
    const route = routes[page];

    if (route) {
        // Update the main content with the new HTML.
        const content = typeof route.content === 'function' ? route.content() : route.content;
        mainContentContainer.innerHTML = content;

        // Run any page-specific JavaScript logic after content is loaded.
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

const updateNavLinks = (activePage) => {
    navItems.forEach(item => {
        if (item.getAttribute('data-page') === activePage) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });

    // Re-draw the SVG path after the active class is updated
    drawPath();
};

/**
 * The drawPath function recalculates and draws the SVG path
 * connecting all the blue dots in the navigation bar with a single,
 * continuous, upward-facing arch.
 */
const drawPath = () => {
    const pathSvg = document.getElementById('path-svg');
    const dots = document.querySelectorAll('.nav-item .dot');
    if (dots.length < 2 || !pathSvg) {
        if (pathSvg) pathSvg.innerHTML = '';
        return;
    }

    // Get the bounding box of the nav-list to normalize coordinates
    const navList = document.querySelector('.nav-list');
    const navRect = navList.getBoundingClientRect();

    let pathData = '';

    // Get the coordinates for the first dot to start the path
    const firstDot = dots[0];
    const firstRect = firstDot.getBoundingClientRect();
    const startX = (firstRect.left + firstRect.width / 2) - navRect.left;
    const startY = (firstRect.top + firstRect.height / 2) - navRect.top;
    pathData += `M ${startX} ${startY} `;

    // Loop through each dot from the second one to create a continuous path
    for (let i = 1; i < dots.length; i++) {
        const endDot = dots[i];
        const startPoint = dots[i - 1];

        const endRect = endDot.getBoundingClientRect();
        const startRect = startPoint.getBoundingClientRect();

        // Calculate coordinates relative to the nav-list container
        const newStartX = (startRect.left + startRect.width / 2) - navRect.left;
        const newStartY = (startRect.top + startRect.height / 2) - navRect.top;
        const endX = (endRect.left + endRect.width / 2) - navRect.left;
        const endY = (endRect.top + endRect.height / 2) - navRect.top;

        // Control points for the half-circle arc
        const midX = (newStartX + endX) / 2;
        // This formula flips the arc to connect above the dots
        const controlY = Math.min(newStartY, endY) - (endX - newStartX) * 0.7; 

        // Create a quadratic Bezier curve for the arc
        pathData += `Q ${midX} ${controlY} ${endX} ${endY} `;
    }

    // Set the path data on the SVG element
    pathSvg.innerHTML = `<path d="${pathData}" stroke="#3b82f6" stroke-width="2" stroke-dasharray="8, 8" fill="none"/>`;
    
    // Adjust the SVG viewBox to fit the content, making it responsive
    pathSvg.setAttribute('viewBox', `0 0 ${navRect.width} ${navRect.height}`);
};


// Initial page load and event listeners
document.addEventListener('DOMContentLoaded', () => {
    footerContainer.innerHTML = footerContent;
    
    // Add event listeners for navigation links
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

    // Handle initial page load based on URL hash
    const initialPage = window.location.hash ? window.location.hash.substring(1) : 'home';
    loadPage();
});

// Listen for hash changes to navigate between pages.
window.addEventListener('hashchange', loadPage);

// Re-draw the path on window resize
window.addEventListener('resize', drawPath);