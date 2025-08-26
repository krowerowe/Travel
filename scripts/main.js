// Function to load an HTML component into a specified placeholder
async function loadComponent(placeholderId, filePath) {
    try {
        const response = await fetch(filePath);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status} for ${filePath}`);
        }
        const html = await response.text();
        document.getElementById(placeholderId).innerHTML = html;
        console.log(`Successfully loaded ${filePath}`);
    } catch (error) {
        console.error(`Failed to load component from ${filePath}:`, error);
    }
}

/**
 * The drawPath function recalculates and draws the SVG path
 * connecting the blue dots in the navigation bar.
 */
function drawPath() {
    const pathSvg = document.getElementById('path-svg');
    const dots = document.querySelectorAll('.nav-item .dot');
    if (!pathSvg || dots.length < 2) return;

    // Get the bounding box of the nav-list to normalize coordinates
    const navList = document.querySelector('.nav-list');
    const navRect = navList.getBoundingClientRect();

    let pathData = '';
    let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;

    // Loop through each pair of dots to create a path segment
    for (let i = 0; i < dots.length - 1; i++) {
        const startDot = dots[i];
        const endDot = dots[i + 1];

        const startRect = startDot.getBoundingClientRect();
        const endRect = endDot.getBoundingClientRect();

        // Calculate coordinates relative to the nav-list container
        const startX = (startRect.left + startRect.width / 2) - navRect.left;
        const startY = (startRect.top + startRect.height / 2) - navRect.top;
        const endX = (endRect.left + endRect.width / 2) - navRect.left;
        const endY = (endRect.top + endRect.height / 2) - navRect.top;

        // Calculate control points for a downward-facing arch
        const midX = (startX + endX) / 2;
        const archDepth = 55; // Use a fixed depth for consistent arches
        const controlY = Math.max(startY, endY) + archDepth;

        if (i === 0) {
            pathData += `M ${startX} ${startY} `;
        }

        pathData += `C ${midX} ${controlY}, ${midX} ${controlY}, ${endX} ${endY} `;
        
        // Update bounding box for the new points, including the control points
        minX = Math.min(minX, startX, endX);
        minY = Math.min(minY, startY, endY);
        maxX = Math.max(maxX, startX, endX);
        maxY = Math.max(maxY, startY, endY, controlY);
    }

    pathSvg.innerHTML = `<path d="${pathData}" stroke="#3b82f6" stroke-width="2" stroke-dasharray="8, 8" fill="none"/>`;
    
    // Add a small margin to the viewBox to prevent clipping of the stroke
    const margin = 5;
    const viewBoxX = minX - margin;
    const viewBoxY = minY - margin;
    const viewBoxWidth = maxX - minX + 2 * margin;
    const viewBoxHeight = maxY - minY + 2 * margin;

    pathSvg.setAttribute('viewBox', `${viewBoxX} ${viewBoxY} ${viewBoxWidth} ${viewBoxHeight}`);
}

/**
 * Initializes the navigation bar by setting the active state
 * and adding event listeners for clicks.
 */
function initializeNav() {
    const navItems = document.querySelectorAll('.nav-item');
    const currentPath = window.location.pathname.split('/').pop();

    navItems.forEach(item => {
        const link = item.querySelector('a');
        // Check if the link's href matches the current file name.
        if (link && link.getAttribute('href') === currentPath) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
        
        item.addEventListener('click', () => {
            navItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
            drawPath();
        });
    });

    drawPath();
}

/**
 * Main function to load all page components and initialize scripts
 */
async function initializePage() {
    // Determine the content file to load
    const contentPage = window.location.pathname.split('/').pop().split('.')[0] || 'index';
    const contentFilePath = `content/${contentPage}.html`;

    // Load components in parallel. The 'await' keyword ensures this finishes before continuing.
    await Promise.all([
        loadComponent('header-placeholder', 'includes/header.html'),
        loadComponent('content-placeholder', contentFilePath),
        loadComponent('footer-placeholder', 'includes/footer.html')
    ]);

    // Now that all components are loaded, we can safely initialize the navigation
    initializeNav();

    // Re-draw path on window resize
    window.addEventListener('resize', drawPath);
}

// Start the whole process when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initializePage);