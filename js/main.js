// Data for the 'Countries' page, as it is still dynamic content
const countryData = {
    'austria': {
        name: 'Austria',
        description: 'A country in Central Europe known for its rich history, imperial architecture in Vienna, and alpine scenery.',
        gallery: [
            'https://placehold.co/400x300/F4B400/FFFFFF?text=Vienna+Opera+House',
            'https://placehold.co/400x300/F4B400/FFFFFF?text=Hallstatt',
            'https://placehold.co/400x300/F4B400/FFFFFF?text=Austrian+Alps'
        ],
        shop: [
            { title: 'Austrian Chocolate', imageUrl: 'https://placehold.co/300x200/F4B400/FFFFFF?text=Chocolate', url: '#' },
            { title: 'Mozartkugel', imageUrl: 'https://placehold.co/300x200/F4B400/FFFFFF?text=Mozartkugel', url: '#' },
        ]
    },
    'belgium': {
        name: 'Belgium',
        description: 'A country in Western Europe known for medieval towns, Renaissance architecture, and as the headquarters of the European Union.',
        gallery: [
            'https://placehold.co/400x300/FF5733/FFFFFF?text=Grand-Place+Brussels',
            'https://placehold.co/400x300/FF5733/FFFFFF?text=Bruges+Canal',
            'https://placehold.co/400x300/FF5733/FFFFFF?text=Antwerp+Cathedral'
        ],
        shop: [
            { title: 'Belgian Waffles', imageUrl: 'https://placehold.co/300x200/FF5733/FFFFFF?text=Waffles', url: '#' },
            { title: 'Belgian Chocolate', imageUrl: 'https://placehold.co/300x200/FF5733/FFFFFF?text=Chocolate', url: '#' },
        ]
    },
    'canada': {
        name: 'Canada',
        description: 'The world\'s second-largest country by total area. Known for its vast, pristine landscapes, multicultural cities like Toronto and Vancouver, and its friendly population.',
        gallery: [
            'https://placehold.co/400x300/808E9D/FFFFFF?text=Banff+National+Park',
            'https://placehold.co/400x300/808E9D/FFFFFF?text=Niagara+Falls',
            'https://placehold.co/400x300/808E9D/FFFFFF?text=Toronto+Skyline',
            'https://placehold.co/400x300/808E9D/FFFFFF?text=The+Rockies'
        ],
        shop: [
            { title: 'Maple Syrup', imageUrl: 'https://placehold.co/300x200/808E9D/FFFFFF?text=Maple+Syrup', url: '#' },
            { title: 'Ice Hockey Gear', imageUrl: 'https://placehold.co/300x200/808E9D/FFFFFF?text=Hockey+Puck', url: '#' },
        ]
    },
    'denmark': {
        name: 'Denmark',
        description: 'A Scandinavian country known for its fairy-tale castles, Viking history, and modern design.',
        gallery: [
            'https://placehold.co/400x300/4C9B81/FFFFFF?text=Copenhagen+Harbor',
            'https://placehold.co/400x300/4C9B81/FFFFFF?text=The+Little+Mermaid',
            'https://placehold.co/400x300/4C9B81/FFFFFF?text=Kronborg+Castle'
        ],
        shop: [
            { title: 'Lego Set', imageUrl: 'https://placehold.co/300x200/4C9B81/FFFFFF?text=Lego', url: '#' },
            { title: 'Danish Pastries', imageUrl: 'https://placehold.co/300x200/4C9B81/FFFFFF?text=Pastries', url: '#' },
        ]
    },
    'dominican-republic': {
        name: 'Dominican Republic',
        description: 'A Caribbean nation sharing the island of Hispaniola. It\'s known for its beautiful beaches, resorts, and a mix of Spanish, Taino, and African cultures.',
        gallery: [
            'https://placehold.co/400x300/6A8E48/FFFFFF?text=Punta+Cana+Beach',
            'https://placehold.co/400x300/6A8E48/FFFFFF?text=Zona+Colonial',
            'https://placehold.co/400x300/6A8E48/FFFFFF?text=El+Limón+Waterfall'
        ],
        shop: [
            { title: 'Dominican Coffee', imageUrl: 'https://placehold.co/300x200/6A8E48/FFFFFF?text=Coffee', url: '#' },
            { title: 'Larimar Jewelry', imageUrl: 'https://placehold.co/300x200/6A8E48/FFFFFF?text=Jewelry', url: '#' },
        ]
    },
    'england': {
        name: 'England',
        description: 'A country in the United Kingdom known for its history, iconic landmarks like Big Ben and Buckingham Palace, and cultural influence.',
        gallery: [
            'https://placehold.co/400x300/445479/FFFFFF?text=Big+Ben',
            'https://placehold.co/400x300/445479/FFFFFF?text=Stonehenge',
            'https://placehold.co/400x300/445479/FFFFFF?text=Tower+of+London'
        ],
        shop: [
            { title: 'Earl Grey Tea', imageUrl: 'https://placehold.co/300x200/445479/FFFFFF?text=Tea', url: '#' },
            { title: 'London Souvenir', imageUrl: 'https://placehold.co/300x200/445479/FFFFFF?text=Souvenir', url: '#' },
        ]
    },
    'france': {
        name: 'France',
        description: 'Known for its fashion, cuisine, and fine wines, France is a country in Western Europe that encompasses medieval cities, alpine villages, and Mediterranean beaches.',
        gallery: [
            'https://placehold.co/400x300/D05353/FFFFFF?text=Eiffel+Tower',
            'https://placehold.co/400x300/D05353/FFFFFF?text=Louvre+Museum',
            'https://placehold.co/400x300/D05353/FFFFFF?text=French+Alps',
            'https://placehold.co/400x300/D05353/FFFFFF?text=Lavender+Fields'
        ],
        shop: [
            { title: 'French Wine', imageUrl: 'https://placehold.co/300x200/D05353/FFFFFF?text=French+Wine', url: '#' },
            { title: 'Eiffel Tower Keychain', imageUrl: 'https://placehold.co/300x200/D05353/FFFFFF?text=Keychain', url: '#' },
        ]
    },
    'germany': {
        name: 'Germany',
        description: 'A Western European country with a diverse landscape of forests, rivers, mountain ranges, and North Sea beaches.',
        gallery: [
            'https://placehold.co/400x300/2C5331/FFFFFF?text=Brandenburg+Gate',
            'https://placehold.co/400x300/2C5331/FFFFFF?text=Neuschwanstein+Castle',
            'https://placehold.co/400x300/2C5331/FFFFFF?text=Black+Forest'
        ],
        shop: [
            { title: 'German Beer Stein', imageUrl: 'https://placehold.co/300x200/2C5331/FFFFFF?text=Beer+Stein', url: '#' },
            { title: 'Cuckoo Clock', imageUrl: 'https://placehold.co/300x200/2C5331/FFFFFF?text=Cuckoo+Clock', url: '#' },
        ]
    },
    'greece': {
        name: 'Greece',
        description: 'A country in southeastern Europe with thousands of islands. It\'s known for its ancient civilization, philosophical heritage, and beautiful beaches.',
        gallery: [
            'https://placehold.co/400x300/1D447A/FFFFFF?text=The+Acropolis',
            'https://placehold.co/400x300/1D447A/FFFFFF?text=Santorini',
            'https://placehold.co/400x300/1D447A/FFFFFF?text=Mykonos'
        ],
        shop: [
            { title: 'Greek Olive Oil', imageUrl: 'https://placehold.co/300x200/1D447A/FFFFFF?text=Olive+Oil', url: '#' },
            { title: 'Feta Cheese', imageUrl: 'https://placehold.co/300x200/1D447A/FFFFFF?text=Feta+Cheese', url: '#' },
        ]
    },
    'italy': {
        name: 'Italy',
        description: 'A European country with a long Mediterranean coastline, Italy has left a powerful mark on Western culture and cuisine.',
        gallery: [
            'https://placehold.co/400x300/9C1B2B/FFFFFF?text=Colosseum',
            'https://placehold.co/400x300/9C1B2B/FFFFFF?text=Venice+Canal',
            'https://placehold.co/400x300/9C1B2B/FFFFFF?text=Leaning+Tower+of+Pisa'
        ],
        shop: [
            { title: 'Italian Pasta', imageUrl: 'https://placehold.co/300x200/9C1B2B/FFFFFF?text=Pasta', url: '#' },
            { title: 'Espresso Machine', imageUrl: 'https://placehold.co/300x200/9C1B2B/FFFFFF?text=Espresso', url: '#' },
        ]
    },
    'mexico': {
        name: 'Mexico',
        description: 'A country in the southern part of North America, known for its Pacific and Gulf of Mexico beaches and its diverse landscapes, including mountains, deserts, and jungles.',
        gallery: [
            'https://placehold.co/400x300/5A6C35/FFFFFF?text=Chichen+Itza',
            'https://placehold.co/400x300/5A6C35/FFFFFF?text=Mexico+City',
            'https://placehold.co/400x300/5A6C35/FFFFFF?text=Tulum+Ruins',
            'https://placehold.co/400x300/5A6C35/FFFFFF?text=Oaxaca+Street'
        ],
        shop: [
            { title: 'Authentic Tequila', imageUrl: 'https://placehold.co/300x200/5A6C35/FFFFFF?text=Tequila', url: '#' },
            { title: 'Mexican Sombrero', imageUrl: 'https://placehold.co/300x200/5A6C35/FFFFFF?text=Sombrero', url: '#' },
        ]
    },
    'monaco': {
        name: 'Monaco',
        description: 'A sovereign city-state on the French Riviera. Known for its glamorous casinos, yacht-filled harbor, and the prestigious Formula One Grand Prix.',
        gallery: [
            'https://placehold.co/400x300/E3A000/FFFFFF?text=Monte+Carlo+Casino',
            'https://placehold.co/400x300/E3A000/FFFFFF?text=Monaco+Harbor',
            'https://placehold.co/400x300/E3A000/FFFFFF?text=Prince\'s+Palace'
        ],
        shop: [
            { title: 'Formula 1 Merchandise', imageUrl: 'https://placehold.co/300x200/E3A000/FFFFFF?text=F1+Merchandise', url: '#' },
            { title: 'Luxury Watch', imageUrl: 'https://placehold.co/300x200/E3A000/FFFFFF?text=Watch', url: '#' },
        ]
    },
    'netherlands': {
        name: 'Netherlands',
        description: 'A country in Northwestern Europe known for its flat landscape of canals, tulip fields, and windmills, and cycling routes.',
        gallery: [
            'https://placehold.co/400x300/2A7F62/FFFFFF?text=Amsterdam+Canals',
            'https://placehold.co/400x300/2A7F62/FFFFFF?text=Kinderdijk+Windmills',
            'https://placehold.co/400x300/2A7F62/FFFFFF?text=Tulip+Fields'
        ],
        shop: [
            { title: 'Dutch Cheese', imageUrl: 'https://placehold.co/300x200/2A7F62/FFFFFF?text=Cheese', url: '#' },
            { title: 'Wooden Clogs', imageUrl: 'https://placehold.co/300x200/2A7F62/FFFFFF?text=Clogs', url: '#' },
        ]
    },
    'norway': {
        name: 'Norway',
        description: 'A Scandinavian country known for its dramatic coastlines with fjords, mountains, and the Northern Lights.',
        gallery: [
            'https://placehold.co/400x300/6C46A2/FFFFFF?text=Norwegian+Fjords',
            'https://placehold.co/400x300/6C46A2/FFFFFF?text=Northern+Lights',
            'https://placehold.co/400x300/6C46A2/FFFFFF?text=Oslo+Opera+House'
        ],
        shop: [
            { title: 'Viking Helmet', imageUrl: 'https://placehold.co/300x200/6C46A2/FFFFFF?text=Viking+Helmet', url: '#' },
            { title: 'Wool Sweater', imageUrl: 'https://placehold.co/300x200/6C46A2/FFFFFF?text=Sweater', url: '#' },
        ]
    },
    'spain': {
        name: 'Spain',
        description: 'A country on Europe\'s Iberian Peninsula, with diverse geography and culture, including the flamenco music of the south, the bullfighting traditions, and the artistic heritage of Picasso and Gaudi.',
        gallery: [
            'https://placehold.co/400x300/D04C5A/FFFFFF?text=La+Sagrada+Familia',
            'https://placehold.co/400x300/D04C5A/FFFFFF?text=Alhambra',
            'https://placehold.co/400x300/D04C5A/FFFFFF?text=Park+Guel',
            'https://placehold.co/400x300/D04C5A/FFFFFF?text=Flamenco+Dancer'
        ],
        shop: [
            { title: 'Spanish Olive Oil', imageUrl: 'https://placehold.co/300x200/D04C5A/FFFFFF?text=Olive+Oil', url: '#' },
            { title: 'Paella Pan', imageUrl: 'https://placehold.co/300x200/D04C5A/FFFFFF?text=Paella+Pan', url: '#' },
        ]
    },
    'sweden': {
        name: 'Sweden',
        description: 'A Scandinavian nation with thousands of coastal islands and inland lakes, along with vast boreal forests and glaciated mountains.',
        gallery: [
            'https://placehold.co/400x300/4089A0/FFFFFF?text=Stockholm+Old+Town',
            'https://placehold.co/400x300/4089A0/FFFFFF?text=Icehotel',
            'https://placehold.co/400x300/4089A0/FFFFFF?text=Götakanal'
        ],
        shop: [
            { title: 'Swedish Candy', imageUrl: 'https://placehold.co/300x200/4089A0/FFFFFF?text=Candy', url: '#' },
            { title: 'Dala Horse', imageUrl: 'https://placehold.co/300x200/4089A0/FFFFFF?text=Dala+Horse', url: '#' },
        ]
    },
    'switzerland': {
        name: 'Switzerland',
        description: 'A mountainous Central European country, home to numerous lakes, villages and the high peaks of the Alps.',
        gallery: [
            'https://placehold.co/400x300/A83333/FFFFFF?text=Matterhorn',
            'https://placehold.co/400x300/A83333/FFFFFF?text=Lake+Lucerne',
            'https://placehold.co/400x300/A83333/FFFFFF?text=Interlaken'
        ],
        shop: [
            { title: 'Swiss Chocolate', imageUrl: 'https://placehold.co/300x200/A83333/FFFFFF?text=Chocolate', url: '#' },
            { title: 'Swiss Army Knife', imageUrl: 'https://placehold.co/300x200/A83333/FFFFFF?text=Knife', url: '#' },
        ]
    },
    'turkey': {
        name: 'Turkey',
        description: 'A country straddling Western Asia and Southeastern Europe. It\'s known for its diverse cultures, ancient ruins, and vibrant bazaars.',
        gallery: [
            'https://placehold.co/400x300/5E35B1/FFFFFF?text=Hagia+Sophia',
            'https://placehold.co/400x300/5E35B1/FFFFFF?text=Blue+Mosque',
            'https://placehold.co/400x300/5E35B1/FFFFFF?text=Cappadocia'
        ],
        shop: [
            { title: 'Turkish Delight', imageUrl: 'https://placehold.co/300x200/5E35B1/FFFFFF?text=Turkish+Delight', url: '#' },
            { title: 'Evil Eye Amulet', imageUrl: 'https://placehold.co/300x200/5E35B1/FFFFFF?text=Amulet', url: '#' },
        ]
    },
    'united-states': {
        name: 'United States',
        description: 'A large North American country with diverse landscapes, from the vibrant coasts to the majestic national parks. It is known for its cultural influence, technological innovation, and iconic landmarks.',
        gallery: [
            'https://placehold.co/400x300/1E40AF/FFFFFF?text=Statue+of+Liberty',
            'https://placehold.co/400x300/1E40AF/FFFFFF?text=Grand+Canyon',
            'https://placehold.co/400x300/1E40AF/FFFFFF?text=Hollywood+Sign',
            'https://placehold.co/400x300/1E40AF/FFFFFF?text=Golden+Gate+Bridge'
        ],
        shop: [
            { title: 'Baseball Cap', imageUrl: 'https://placehold.co/300x200/1E40AF/FFFFFF?text=Baseball+Cap', url: '#' },
            { title: 'Classic Denim Jeans', imageUrl: 'https://placehold.co/300x200/1E40AF/FFFFFF?text=Jeans', url: '#' },
        ]
    },
    'vatican-city': {
        name: 'Vatican City',
        description: 'A city-state surrounded by Rome, Italy, and the headquarters of the Roman Catholic Church. It is home to the Pope and a trove of iconic art and architecture.',
        gallery: [
            'https://placehold.co/400x300/966F33/FFFFFF?text=St.+Peter\'s+Basilica',
            'https://placehold.co/400x300/966F33/FFFFFF?text=Sistine+Chapel',
            'https://placehold.co/400x300/966F33/FFFFFF?text=Vatican+Museums'
        ],
        shop: [
            { title: 'Religious Rosary', imageUrl: 'https://placehold.co/300x200/966F33/FFFFFF?text=Rosary', url: '#' },
            { title: 'Papal Souvenir', imageUrl: 'https://placehold.co/300x200/966F33/FFFFFF?text=Souvenir', url: '#' },
        ]
    }
};

// Select the content containers from the DOM
const contentContainer = document.getElementById('content-container');
const headerContainer = document.getElementById('header-container');
const footerContainer = document.getElementById('footer-container');

/**
 * Loads and injects an HTML file's content into a specified container.
 * @param {string} url The URL of the HTML file to fetch.
 * @param {HTMLElement} container The DOM element to inject the content into.
 */
async function loadComponent(url, container) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to load component: ${response.statusText}`);
        }
        const html = await response.text();
        container.innerHTML = html;
        return true;
    } catch (error) {
        console.error('Error loading component:', error);
        // Display a 404-like message if a content page fails to load
        if (container.id === 'content-container') {
            container.innerHTML = `
                <div class="p-8 text-center text-red-500">
                    <h1 class="text-3xl font-bold">404 - Page Not Found</h1>
                    <p class="mt-4">The page you are looking for does not exist: ${url}</p>
                </div>
            `;
        }
        return false;
    }
}

/**
 * Renders the content for the 'Countries' page, including the dynamic dropdown.
 * This function must be called after the 'countries' page HTML is loaded.
 */
function renderCountriesPage() {
    // Re-select elements within the new content
    const selectElement = document.getElementById('country-select');
    const infoSection = document.getElementById('country-info-section');
    const countryNameElement = document.getElementById('country-name');
    const countryDescriptionElement = document.getElementById('country-description');
    const galleryContainer = document.getElementById('image-gallery');
    const shopContainer = document.getElementById('shop-section');

    selectElement.addEventListener('change', (event) => {
        const selectedCountry = event.target.value;
        if (selectedCountry && countryData[selectedCountry]) {
            const data = countryData[selectedCountry];

            // Update text content with country data
            countryNameElement.textContent = data.name;
            countryDescriptionElement.textContent = data.description; // Corrected to use 'description'

            // Clear and populate the gallery
            galleryContainer.innerHTML = '';
            data.gallery.forEach(imageUrl => {
                const img = document.createElement('img');
                img.src = imageUrl;
                img.alt = `Image of ${data.name}`;
                img.className = 'w-full h-auto object-cover rounded-lg shadow';
                galleryContainer.appendChild(img);
            });

            // Clear and populate the shop section
            shopContainer.innerHTML = '';
            data.shop.forEach(product => {
                const productDiv = document.createElement('div');
                productDiv.className = 'bg-gray-50 rounded-lg p-4 shadow-sm flex flex-col items-center text-center';
                productDiv.innerHTML = `
                    <img src="${product.imageUrl}" alt="${product.title}" class="w-full h-32 object-cover rounded-md mb-2">
                    <h3 class="font-semibold text-gray-800 mb-2">${product.title}</h3>
                    <a href="${product.url}" target="_blank" class="w-full py-2 px-4 rounded-md text-sm font-medium text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400">
                        Shop on Amazon
                    </a>
                `;
                shopContainer.appendChild(productDiv);
            });

            // Show the info section with a fade-in effect
            if (infoSection.classList.contains('hidden')) {
                infoSection.classList.remove('hidden');
                setTimeout(() => infoSection.classList.remove('opacity-0'), 10);
            }
        }
    });
}

/**
 * Loads the main content for a given page by fetching its HTML file.
 * @param {string} pageName The name of the page to load (e.g., 'home', 'about').
 */
async function loadContent(pageName) {
    const success = await loadComponent(`${pageName}.html`, contentContainer);
    if (success) {
        // Handle page-specific logic after the content is successfully loaded
        if (pageName === 'countries') {
            renderCountriesPage();
        }

        // Update active nav link
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
        });
        const activeNavItem = document.querySelector(`.nav-item[data-page="${pageName}"]`);
        if (activeNavItem) {
            activeNavItem.classList.add('active');
        }
    }
}

/**
 * Handles navigation by updating the URL and loading new content without a full page reload.
 * @param {Event} event The click event from a navigation link.
 */
function handleNavigation(event) {
    event.preventDefault();
    const link = event.target.closest('a');
    if (!link) return;

    // Get the page name from the href attribute (#page)
    const page = link.getAttribute('href').substring(1); 
    
    // Push state for back/forward browser button functionality
    history.pushState({ page: page }, '', link.getAttribute('href'));
    
    loadContent(page);
}

// Add event listeners and load initial content when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', async () => {
    // Load header and footer first
    const headerLoaded = await loadComponent('header.html', headerContainer);
    const footerLoaded = await loadComponent('footer.html', footerContainer);

    if (headerLoaded) {
        // Add event listeners to the navigation links after the header is loaded
        const navBar = document.querySelector('.map-nav');
        if (navBar) {
            navBar.addEventListener('click', handleNavigation);
        } else {
            console.warn('Navigation bar not found. Event listeners not attached.');
        }

        // Handle initial page load based on URL hash
        const initialPage = window.location.hash ? window.location.hash.substring(1) : 'home';
        loadContent(initialPage);
    }

    // Handle browser back/forward button events
    window.addEventListener('popstate', (event) => {
        const page = event.state && event.state.page ? event.state.page : 'home';
        loadContent(page);
    });
});
