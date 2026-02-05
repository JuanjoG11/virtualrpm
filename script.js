// Navigation
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Gallery generation with placeholder images
const galleryGrid = document.getElementById('galleryGrid');
const galleryItems = [
    { title: 'Cúpulas Premium', category: 'cupulas' },
    { title: 'Indumentaria Racing', category: 'indumentaria' },
    { title: 'Exostos Deportivos', category: 'exostos' },
    { title: 'Espejos Aerodinámicos', category: 'espejos' },
    { title: 'Caballetes Pro', category: 'caballetes' },
    { title: 'Maletas Touring', category: 'maletas' },
    { title: 'Stickers Personalizados', category: 'stickers' },
    { title: 'Protecciones', category: 'protecciones' },
    { title: 'Accesorios Premium', category: 'accesorios' }
];

// Generate gallery items with gradient placeholders
galleryItems.forEach((item, index) => {
    const galleryItem = document.createElement('div');
    galleryItem.className = 'gallery-item';

    // Create gradient background based on category
    const gradients = [
        'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
        'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
        'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
        'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
        'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
        'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)'
    ];

    galleryItem.innerHTML = `
        <div style="width: 100%; height: 100%; background: ${gradients[index % gradients.length]}; display: flex; align-items: center; justify-content: center;">
            <div style="text-align: center; color: white; text-shadow: 0 2px 10px rgba(0,0,0,0.5);">
                <svg style="width: 60px; height: 60px; margin-bottom: 10px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                    <path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
            </div>
        </div>
        <div class="gallery-overlay">
            <div class="gallery-title">${item.title}</div>
        </div>
    `;

    galleryGrid.appendChild(galleryItem);
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Animate elements on scroll
document.querySelectorAll('.product-card, .benefit-card, .gallery-item, .contact-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Stats counter animation
const animateCounter = (element, target) => {
    let current = 0;
    const increment = target / 100;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target.toString().includes('K') ? target : target + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current).toString();
        }
    }, 20);
};

// Observe stats section
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const text = stat.textContent;
                if (text.includes('K')) {
                    stat.textContent = '23.6K+';
                } else if (text === '284') {
                    animateCounter(stat, 284);
                } else if (text === '100%') {
                    stat.textContent = '100%';
                }
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const aboutStats = document.querySelector('.about-stats');
if (aboutStats) {
    statsObserver.observe(aboutStats);
}

// Parallax effect for hero
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-content');
    if (hero && scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        hero.style.opacity = 1 - (scrolled / window.innerHeight);
    }
});

// Product card hover effects and dynamic glow
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    });
});

// Product Catalog Rendering
function renderProducts(category = 'all') {
    const catalogGrid = document.getElementById('catalogGrid');
    if (!catalogGrid) return;

    const filteredProducts = category === 'all'
        ? products
        : products.filter(p => p.category === category);

    catalogGrid.innerHTML = filteredProducts.map(product => `
        <div class="product-card-shop" data-category="${product.category}">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            ${product.featured ? '<span class="product-badge">DESTACADO</span>' : ''}
            <div class="product-info">
                <div class="product-category">${categories[product.category].name}</div>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-desc">${product.description}</p>
                <div class="product-footer">
                    <span class="product-price">$${product.price.toLocaleString('es-CO')}</span>
                    <button class="add-to-cart-btn" data-product-id="${product.id}">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="9" cy="21" r="1"></circle>
                            <circle cx="20" cy="21" r="1"></circle>
                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                        </svg>
                        AGREGAR
                    </button>
                </div>
            </div>
        </div>
    `).join('');

    // Attach add to cart listeners
    attachAddToCartListeners();
}

// Category Filter Functionality
function setupCategoryFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(b => b.classList.remove('active'));

            // Add active class to clicked button
            btn.classList.add('active');

            // Get category and render products
            const category = btn.dataset.category;
            renderProducts(category);
        });
    });
}

// Attach Add to Cart Event Listeners
function attachAddToCartListeners() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');

    addToCartButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const productId = btn.dataset.productId;
            const product = products.find(p => p.id === productId);

            if (product && cart) {
                cart.addItem(product);

                // Button success feedback
                const originalText = btn.innerHTML;
                btn.classList.add('success-state');
                btn.innerHTML = '<svg style="width:20px;height:20px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg> AÑADIDO';

                setTimeout(() => {
                    btn.classList.remove('success-state');
                    btn.innerHTML = originalText;
                }, 2000);
            }
        });
    });
}

// Initialize Product Catalog
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Content Loaded - Initializing catalog');

    // Initially hide the catalog grid
    const catalogGrid = document.getElementById('catalogGrid');
    if (catalogGrid) {
        catalogGrid.style.display = 'none';
        console.log('Catalog grid hidden initially');
    }

    // Setup category card filters
    setupCategoryCardFilters();
});

// Category Card Filter Functionality
function setupCategoryCardFilters() {
    const categoryCards = document.querySelectorAll('.product-card[data-filter]');
    console.log('Found category cards:', categoryCards.length);

    categoryCards.forEach(card => {
        console.log('Setting up card:', card.dataset.filter);

        // Add click handler to the entire card
        card.style.cursor = 'pointer';
        card.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();

            const category = this.dataset.filter;
            console.log('Card clicked:', category);

            showCategoryProducts(category);

            return false;
        });

        // Also add to button as backup
        const button = card.querySelector('.product-link');
        if (button) {
            button.addEventListener('click', function (e) {
                e.preventDefault();
                e.stopPropagation();

                const category = card.dataset.filter;
                console.log('Button clicked:', category);

                showCategoryProducts(category);

                return false;
            });
        }
    });
}

// Show products for a category
function showCategoryProducts(category) {
    console.log('showCategoryProducts called with:', category);

    const catalogGrid = document.getElementById('catalogGrid');
    if (!catalogGrid) {
        console.error('catalogGrid not found!');
        return;
    }

    // Update active state of cards
    document.querySelectorAll('.product-card').forEach(c => {
        c.classList.remove('active-category');
        if (c.dataset.filter === category) {
            c.classList.add('active-category');
        }
    });

    // Show the grid with animation
    catalogGrid.style.display = 'grid';
    catalogGrid.style.opacity = '0';
    catalogGrid.style.transform = 'translateY(20px)';
    catalogGrid.style.transition = 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)';

    console.log('Grid display set to grid');

    // Slight delay before rendering for smoother feel
    setTimeout(() => {
        renderProducts(category);
        catalogGrid.style.opacity = '1';
        catalogGrid.style.transform = 'translateY(0)';
        console.log('Products rendered and animated');
    }, 50);

    // Smooth scroll to catalog
    setTimeout(() => {
        const scrollTarget = catalogGrid.getBoundingClientRect().top + window.pageYOffset - 100;
        window.scrollTo({
            top: scrollTarget,
            behavior: 'smooth'
        });
        console.log('Scrolled to catalog - target:', scrollTarget);
    }, 300);
}
