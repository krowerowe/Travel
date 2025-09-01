export const headerContent = `
<div class="map-nav relative py-4 px-8 flex justify-between items-center rounded-b-3xl">
    <!-- Dotted Path SVG -->
    <div class="dotted-path">
        <svg id="path-svg" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"></svg>
    </div>
    <nav class="nav-list w-full max-w-7xl mx-auto">
        <a href="#home" class="nav-item active" data-page="home">
            <span class="nav-pin-container"><span class="nav-pin"></span></span>
            <span class="nav-link">Home</span>
            <span class="dot"></span>
        </a>
        <a href="#countries" class="nav-item" data-page="countries">
            <span class="nav-pin-container"><span class="nav-pin"></span></span>
            <span class="nav-link">Countries</span>
            <span class="dot"></span>
        </a>
        <a href="#about" class="nav-item" data-page="about">
            <span class="nav-pin-container"><span class="nav-pin"></span></span>
            <span class="nav-link">About</span>
            <span class="dot"></span>
        </a>
        <a href="#contact" class="nav-item" data-page="contact">
            <span class="nav-pin-container"><span class="nav-pin"></span></span>
            <span class="nav-link">Contact</span>
            <span class="dot"></span>
        </a>
    </nav>
</div>
`;