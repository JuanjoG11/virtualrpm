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
        'linear-gradient(135deg, #007bff 0%, #0056b3 100%)',
        'linear-gradient(135deg, #00b4d8 0%, #0077b6 100%)',
        'linear-gradient(135deg, #48cae4 0%, #0096c7 100%)',
        'linear-gradient(135deg, #90e0ef 0%, #00b4d8 100%)',
        'linear-gradient(135deg, #ade8f4 0%, #48cae4 100%)',
        'linear-gradient(135deg, #caf0f8 0%, #90e0ef 100%)',
        'linear-gradient(135deg, #03045e 0%, #023e8a 100%)',
        'linear-gradient(135deg, #003049 0%, #0077b6 100%)',
        'linear-gradient(135deg, #023e8a 0%, #0077b6 100%)'
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

// Initialize Brand Selector
function initBrandSelector() {
    const brandsGrid = document.getElementById('brandsGrid');
    if (!brandsGrid) return;

    brandsGrid.innerHTML = motorcycles.map(brand => `
        <div class="brand-card" data-brand-id="${brand.id}">
            <div class="brand-logo-container">
                <img src="${brand.logo}" alt="${brand.name}" class="brand-logo" onerror="this.parentElement.innerHTML='<span style=\'font-weight:bold;color:#007bff;font-size:1.2rem\'>${brand.name.charAt(0)}</span>';">
            </div>
            <span class="brand-name">${brand.name}</span>
        </div>
    `).join('');

    // Brand click events
    brandsGrid.querySelectorAll('.brand-card').forEach(card => {
        card.addEventListener('click', () => {
            const brandId = card.dataset.brandId;
            selectBrand(brandId, card);
        });
    });
}

let selectedBrand = null;
let selectedModel = null;

function selectBrand(brandId, cardElement) {
    // UI Update
    document.querySelectorAll('.brand-card').forEach(c => c.classList.remove('active'));
    cardElement.classList.add('active');

    selectedBrand = motorcycles.find(b => b.id === brandId);
    selectedModel = null; // Reset model on brand change

    // Show models area
    const modelArea = document.getElementById('modelSelectionArea');
    const modelsList = document.getElementById('modelsList');

    modelArea.style.display = 'block';
    modelsList.innerHTML = selectedBrand.models.map(model => `
        <button class="model-btn" data-model-id="${model.id}">${model.name}</button>
    `).join('');

    // Model click events
    modelsList.querySelectorAll('.model-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            selectModel(btn.dataset.modelId, btn);
        });
    });

    // Initial filter by brand
    renderProducts('all', brandId);

    // Smooth scroll to models
    setTimeout(() => {
        modelArea.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 100);
}

function selectModel(modelId, btnElement) {
    document.querySelectorAll('.model-btn').forEach(b => b.classList.remove('active'));
    btnElement.classList.add('active');

    selectedModel = modelId;

    // Filter by brand AND model
    renderProducts('all', selectedBrand.id, modelId);

    // Scroll to products
    setTimeout(() => {
        const productsSection = document.getElementById('productos');
        productsSection.scrollIntoView({ behavior: 'smooth' });
    }, 300);
}

// Updated Product Catalog Rendering with Brand/Model Filtering
function renderProducts(category = 'all', brandId = null, modelId = null) {
    const catalogGrid = document.getElementById('catalogGrid');
    if (!catalogGrid) return;

    let filteredProducts = products;

    // Filter by category if not 'all'
    if (category !== 'all') {
        filteredProducts = filteredProducts.filter(p => p.category === category);
    }

    // Filter by brand/model if provided
    if (brandId) {
        filteredProducts = filteredProducts.filter(p => {
            if (!p.compatible_brands) return true; // Generic products show for everyone
            return p.compatible_brands.includes(brandId);
        });
    }

    if (modelId) {
        filteredProducts = filteredProducts.filter(p => {
            if (!p.compatible_models) return true; // Generic products show for everyone
            return p.compatible_models.includes(modelId);
        });
    }

    if (filteredProducts.length === 0) {
        catalogGrid.innerHTML = `
            <div class="no-products">
                <p>No encontramos productos específicos para esta selección, pero estos podrían interesarte:</p>
            </div>
        `;
        // Fallback to show all products or category products
        filteredProducts = category === 'all' ? products : products.filter(p => p.category === category);
    }

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

    // Initialize Brand Selector
    initBrandSelector();
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

    // Filter using current brand/model if they exist
    const brandId = selectedBrand ? selectedBrand.id : null;
    const modelId = selectedModel ? selectedModel : null;

    // Slight delay before rendering for smoother feel
    setTimeout(() => {
        renderProducts(category, brandId, modelId);
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
