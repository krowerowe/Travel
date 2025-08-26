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
    const navList = document.querySelector('.nav-list');
    if (!pathSvg || dots.length < 2) return;

<<<<<<< Updated upstream
    // Get the bounding box of the entire document to get absolute coordinates
    const docRect = document.body.getBoundingClientRect();
=======
    // Get the bounding rectangle of the nav-list container to use as the reference
    const navRect = navList.getBoundingClientRect();
>>>>>>> Stashed changes

    let pathData = '';
    let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;

    // Loop through each pair of dots to create a path segment
    for (let i = 0; i < dots.length - 1; i++) {
        const startDot = dots[i];
        const endDot = dots[i + 1];

        // Get the bounding rectangles of the dots
        const startRect = startDot.getBoundingClientRect();
        const endRect = endDot.getBoundingClientRect();

<<<<<<< Updated upstream
        // Calculate absolute coordinates relative to the top-left of the document
        const startX = startRect.left + startRect.width / 2;
        const startY = startRect.top + startRect.height / 2;
        const endX = endRect.left + endRect.width / 2;
        const endY = endRect.top + endRect.height / 2;
=======
        // Calculate coordinates relative to the nav-list container
        const startX = startRect.left - navRect.left + startRect.width / 2;
        const startY = startRect.top - navRect.top + startRect.height / 2;
        const endX = endRect.left - navRect.left + endRect.width / 2;
        const endY = endRect.top - navRect.top + endRect.height / 2;
>>>>>>> Stashed changes

        // Calculate control points for a downward-facing arch
        const midX = (startX + endX) / 2;
        const archDepth = 50; 
        const controlY = Math.max(startY, endY) + archDepth;

        if (i === 0) {
            pathData += `M ${startX} ${startY} `;
        }

        pathData += `C ${midX} ${controlY}, ${midX} ${controlY}, ${endX} ${endY} `;
        
        // Update bounding box for the new points
        minX = Math.min(minX, startX, endX, midX);
        minY = Math.min(minY, startY, endY, controlY);
        maxX = Math.max(maxX, startX, endX, midX);
        maxY = Math.max(maxY, startY, endY, controlY);
    }

    // Set the SVG path data
    pathSvg.innerHTML = `<path d="${pathData}" stroke="#3b82f6" stroke-width="2" stroke-dasharray="8, 8" fill="none"/>`;
    
    // Add a small margin to prevent clipping of the stroke
    const margin = 5;
    const viewBoxX = minX - margin;
    const viewBoxY = minY - margin;
    const viewBoxWidth = maxX - minX + 2 * margin;
    const viewBoxHeight = maxY - minY + 2 * margin;

    // Set the viewBox and the SVG element's dimensions and position
    pathSvg.setAttribute('viewBox', `${viewBoxX} ${viewBoxY} ${viewBoxWidth} ${viewBoxHeight}`);
    pathSvg.style.width = `${viewBoxWidth}px`;
    pathSvg.style.height = `${viewBoxHeight}px`;
    pathSvg.style.top = `${viewBoxY}px`;
    pathSvg.style.left = `${viewBoxX}px`;
}

/**
 * Initializes the navigation bar by setting the active state
 * and adding event listeners for clicks.
 */
function initializeNav() {
    const navItems = document.querySelectorAll('.nav-item');
    let currentPath = window.location.pathname.split('/').pop();
    
    // Fix for the homepage URL
    if (currentPath === '' || currentPath === '/') {
        currentPath = 'index.html';
    }

    navItems.forEach(item => {
        const link = item.querySelector('a');
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