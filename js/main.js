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
 * The drawPath function recalculates and draws the SVG path
 * connecting all the blue dots in the navigation bar with a single,
 * continuous, downward-facing arch.
 */
function drawPath() {
    const pathSvg = document.getElementById('path-svg');
    const dots = document.querySelectorAll('.nav-item .dot');
    if (dots.length < 2 || !pathSvg) {
        if (pathSvg) pathSvg.innerHTML = '';
        return;
    }

    const navList = document.querySelector('.nav-list');
    const navRect = navList.getBoundingClientRect();
    
    // Check for negative width or height
    if (navRect.width <= 0 || navRect.height <= 0) {
        return;
    }

    const firstDotRect = dots[0].getBoundingClientRect();
    const lastDotRect = dots[dots.length - 1].getBoundingClientRect();
    
    // Calculate SVG dimensions
    const svgWidth = lastDotRect.right - firstDotRect.left;
    const svgHeight = navRect.height;
    
    // Adjusted left position to correctly align with the first dot's container
    pathSvg.style.width = `${svgWidth}px`;
    pathSvg.style.height = `${svgHeight}px`;
    pathSvg.style.left = `${firstDotRect.left - navList.getBoundingClientRect().left}px`;
    pathSvg.style.top = `0px`;
    pathSvg.setAttribute('viewBox', `0 0 ${svgWidth} ${svgHeight}`);

    const pathData = [];
    const curveHeight = svgWidth * 0.10; // Slightly reduced curve height for a better visual

    for (let i = 0; i < dots.length; i++) {
        const dotRect = dots[i].getBoundingClientRect();
        // Calculate the center point of the dot relative to the SVG container
        const x = (dotRect.left + dotRect.width / 2) - firstDotRect.left;
        const y = (dotRect.top + dotRect.height / 2) - navRect.top;
        pathData.push({ x, y });
    }

    let pathString = `M ${pathData[0].x} ${pathData[0].y}`;
    for (let i = 1; i < pathData.length; i++) {
        const prevPoint = pathData[i - 1];
        const currentPoint = pathData[i];
        const controlX = (prevPoint.x + currentPoint.x) / 2;
        const controlY = Math.max(prevPoint.y, currentPoint.y) + curveHeight;
        pathString += ` Q ${controlX} ${controlY} ${currentPoint.x} ${currentPoint.y}`;
    }

    pathSvg.innerHTML = `<path d="${pathString}" stroke="#3b82f6" stroke-width="2" stroke-dasharray="8, 8" fill="none"/>`;
}


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
    
    drawPath();
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
window.addEventListener('resize', drawPath);