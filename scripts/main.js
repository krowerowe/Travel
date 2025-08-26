// --- File paths for reusable components and content ---
const COMPONENT_PATHS = {
    header: '/components/header.html',
    footer: '/components/footer.html'
};

const CONTENT_PATH_BASE = '/content/';

// --- Main DOM elements ---
const contentContainer = document.getElementById('content-container');

// --- Functions to load and update content ---

/**
 * Loads an HTML component from a given URL and inserts it at a specified position.
 * @param {string} url The URL of the HTML file to fetch.
 * @param {string} position The position relative to the body to insert the content ('afterbegin' or 'beforeend').
 */
async function loadComponent(url, position) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const html = await response.text();
        document.body.insertAdjacentHTML(position, html);
    } catch (error) {
        console.error(`Error loading component from ${url}:`, error);
    }
}

/**
 * Loads the main content for a given page and inserts it into the content container.
 * @param {string} pageName The name of the content page to load (e.g., 'home', 'about').
 */
async function loadContent(pageName) {
    const filePath = `${CONTENT_PATH_BASE}${pageName}.html`;

    try {
        const response = await fetch(filePath);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const content = await response.text();
        contentContainer.innerHTML = content;

        // Reset the active state on all nav items
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
            item.setAttribute('aria-selected', 'false');
        });

        // Set the active state on the current nav item
        const activeNavItem = document.querySelector(`.nav-item[data-page="${pageName}"]`);
        if (activeNavItem) {
            activeNavItem.classList.add('active');
            activeNavItem.setAttribute('aria-selected', 'true');
        }

        // Re-run any page-specific scripts if they exist
        const scriptElements = contentContainer.querySelectorAll('script');
        scriptElements.forEach(oldScript => {
            const newScript = document.createElement('script');
            // Copy attributes
            for (const attr of oldScript.attributes) {
                newScript.setAttribute(attr.name, attr.value);
            }
            newScript.textContent = oldScript.textContent;
            oldScript.parentNode.replaceChild(newScript, oldScript);
        });

    } catch (error) {
        console.error(`Error loading content for page "${pageName}":`, error);
        contentContainer.innerHTML = `<div class="p-8 text-center text-red-500">
            <h1 class="text-3xl font-bold">404 - Page Not Found</h1>
            <p class="mt-4">The page you are looking for does not exist.</p>
        </div>`;
    }
}

/**
 * Handles navigation by updating the URL and loading new content without a full page reload.
 * @param {Event} event The click event from a navigation link.
 */
function handleNavigation(event) {
    // Stop the browser from doing a full page refresh
    event.preventDefault();

    // Get the new page path from the link's href
    const link = event.target.closest('a');
    if (!link) return;

    const href = link.getAttribute('href');
    const urlParams = new URLSearchParams(href);
    const page = urlParams.get('page');

    if (page) {
        // Use the History API to change the URL without a reload
        window.history.pushState({ page: page }, '', href);
        // Load the new content
        loadContent(page);
    }
}

/**
 * Initializes the website on page load.
 */
document.addEventListener('DOMContentLoaded', async () => {
    // 1. Load the reusable components first
    await loadComponent(COMPONENT_PATHS.header, 'afterbegin');
    await loadComponent(COMPONENT_PATHS.footer, 'beforeend');

    // 2. Add event listeners to the navigation links
    const navBar = document.querySelector('.map-nav');
    if (navBar) {
        navBar.addEventListener('click', handleNavigation);
    } else {
        console.warn('Navigation bar not found. Event listeners not attached.');
    }

    // 3. Load the initial content based on the URL
    const initialUrl = new URL(window.location.href);
    const initialPage = initialUrl.searchParams.get('page') || 'home'; // Default to 'home'
    loadContent(initialPage);

    // 4. Handle browser back/forward button events
    window.addEventListener('popstate', (event) => {
        const page = event.state && event.state.page ? event.state.page : 'home';
        loadContent(page);
    });
});