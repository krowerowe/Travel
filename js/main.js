import { headerContent } from './header.js';
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
const headerContainer = document.getElementById('header-container');
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

const drawPath = () => {
    const pathSvg = document.getElementById('path-svg');
    const navList = document.querySelector('.nav-list');
    const activeDot = document.querySelector('.nav-item.active .dot');
    const allDots = document.querySelectorAll('.nav-item .dot');

    if (!pathSvg || !activeDot || allDots.length < 2) {
        pathSvg.innerHTML = '';
        return;
    }

    const navRect = navList.getBoundingClientRect();
    const activeRect = activeDot.getBoundingClientRect();

    let pathData = '';
    const isFirstItem = activeDot === allDots[0];
    const isLastItem = activeDot === allDots[allDots.length - 1];

    if (!isFirstItem) {
        const prevDot = allDots[Array.from(allDots).indexOf(activeDot) - 1];
        const prevRect = prevDot.getBoundingClientRect();
        const startX = (prevRect.left + prevRect.width / 2) - navRect.left;
        const startY = (prevRect.top + prevRect.height / 2) - navRect.top;
        const endX = (activeRect.left + activeRect.width / 2) - navRect.left;
        const endY = (activeRect.top + activeRect.height / 2) - navRect.top;
        const midX = (startX + endX) / 2;
        const controlY = Math.min(startY, endY) - (endX - startX) * 0.7; // Adjust curve height
        pathData += `M ${startX} ${startY} Q ${midX} ${controlY} ${endX} ${endY}`;
    }

    if (!isLastItem) {
        const nextDot = allDots[Array.from(allDots).indexOf(activeDot) + 1];
        const nextRect = nextDot.getBoundingClientRect();
        const startX = (activeRect.left + activeRect.width / 2) - navRect.left;
        const startY = (activeRect.top + activeRect.height / 2) - navRect.top;
        const endX = (nextRect.left + nextRect.width / 2) - navRect.left;
        const endY = (nextRect.top + nextRect.height / 2) - navRect.top;
        const midX = (startX + endX) / 2;
        const controlY = Math.min(startY, endY) - (endX - startX) * 0.7; // Adjust curve height
        pathData += `M ${startX} ${startY} Q ${midX} ${controlY} ${endX} ${endY}`;
    }

    pathSvg.innerHTML = `<path d="${pathData}" stroke="#3b82f6" stroke-width="2" stroke-dasharray="8, 8" fill="none"/>`;
    pathSvg.setAttribute('viewBox', `0 0 ${navRect.width} ${navRect.height}`);
};


// Initial page load and event listeners
document.addEventListener('DOMContentLoaded', () => {
    headerContainer.innerHTML = headerContent;
    footerContainer.innerHTML = footerContent;
    
    // Add event listeners for navigation links
    const navBar = document.querySelector('.nav-list');
    if (navBar) {
        navBar.addEventListener('click', (event) => {
            event.preventDefault();
            const link = event.target.closest('a');
            if (link) {
                const page = link.getAttribute('data-page');
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