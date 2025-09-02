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

    const header = document.querySelector('header');
    const headerRect = header.getBoundingClientRect();
    const navRect = document.querySelector('.nav-list').getBoundingClientRect();

    const pathData = [];
    
    // Calculate the precise coordinates of each dot relative to the header.
    for (let i = 0; i < dots.length; i++) {
        const dotRect = dots[i].getBoundingClientRect();
        const x = dotRect.left + dotRect.width / 2 - headerRect.left;
        const y = dotRect.top + dotRect.height / 2 - headerRect.top;
        pathData.push({ x, y });
    }

    // Determine the total SVG width and height needed.
    const svgWidth = navRect.width;
    const svgHeight = 50; 
    
    // Position the SVG container
    pathSvg.style.width = `${svgWidth}px`;
    pathSvg.style.height = `${svgHeight}px`;
    pathSvg.style.left = `${pathData[0].x - navRect.left}px`;
    pathSvg.style.top = `${pathData[0].y}px`;
    pathSvg.setAttribute('viewBox', `0 0 ${svgWidth} ${svgHeight}`);

    const curveHeight = svgWidth * 0.1; // Make the curve proportional to the width.
    
    let pathString = `M 0 0`; // Start at the relative origin of the new SVG.
    for (let i = 1; i < pathData.length; i++) {
        const prevPoint = pathData[i - 1];
        const currentPoint = pathData[i];
        
        const controlX1 = prevPoint.x - navRect.left + (currentPoint.x - prevPoint.x) / 2;
        const controlY1 = currentPoint.y + curveHeight;

        const controlX2 = prevPoint.x - navRect.left + (currentPoint.x - prevPoint.x) / 2;
        const controlY2 = prevPoint.y - curveHeight;

        pathString += ` C ${controlX1} ${controlY1}, ${controlX2} ${controlY2}, ${currentPoint.x - navRect.left} ${currentPoint.y - navRect.top}`;
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