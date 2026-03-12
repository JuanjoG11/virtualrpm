// Image path helper - converts short path to full Supabase URL
function getImageUrl(path) {
    if (!path) return 'https://via.placeholder.com/500?text=Sin+Imagen';
    if (path.startsWith('http') || path.startsWith('images/')) return path;
    return (typeof SUPABASE_URL !== 'undefined' ? SUPABASE_URL : '') + path;
}

// Auto-generate images array from a folder + number of photos
// Usage: buildImageList('mt15/cupula-sport', 5) 
// Returns: ['mt15/cupula-sport/1.jpg', 'mt15/cupula-sport/2.jpg', ...]
function buildImageList(folder, count, ext = 'jpg') {
    return Array.from({ length: count }, (_, i) => `${folder}/${i + 1}.${ext}`);
}

// Get the first image of a folder (used as the main/thumbnail image)
function mainImage(folder, ext = 'jpg') {
    return `${folder}/1.${ext}`;
}

// Navigation
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Navbar scroll effect
window.addEventListener('scroll', () => {
    // Mantener la posición debajo del announcement-bar fijo
    const isMobile = window.innerWidth <= 768;
    const bannerHeight = isMobile ? 28 : 32;
    
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
        const href = this.getAttribute('href');
        
        // Solo para enlaces internos
        if (href.startsWith('#')) {
            e.preventDefault();
            
            // Cerrar menú móvil si está abierto
            if (navMenu && navMenu.classList.contains('active')) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            }

            if (href === '#') return;

            const target = document.querySelector(href);
            if (target) {
                const isMobile = window.innerWidth <= 768;
                // Ajustamos el offset según la altura del banner + navbar (30 + 60 = 90 aprox)
                const bannerHeight = isMobile ? 30 : 32;
                const navHeight = 60;
                const offsetTop = target.offsetTop - (bannerHeight + navHeight);

                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
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
        'linear-gradient(135deg, #333 0%, #111 100%)',
        'linear-gradient(135deg, #555 0%, #222 100%)',
        'linear-gradient(135deg, #d4d4d8 0%, #8c9094 100%)',
        'linear-gradient(135deg, #1f1f1f 0%, #050505 100%)',
        'linear-gradient(135deg, #777 0%, #333 100%)',
        'linear-gradient(135deg, #eee 0%, #a1a1aa 100%)',
        'linear-gradient(135deg, #2a2a2a 0%, #0a0a0a 100%)',
        'linear-gradient(135deg, #a1a1aa 0%, #555 100%)',
        'linear-gradient(135deg, #121212 0%, #000 100%)'
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

    const modelName = btnElement.textContent;
    const brandName = selectedBrand.name;

    // Show the catalog grid directly (skip category cards step)
    const catalogGrid = document.getElementById('catalogGrid');
    const productsSection = document.getElementById('productos');
    const categoryCards = document.querySelector('.products-grid');

    if (catalogGrid) {
        // Hide category cards, show products directly
        if (categoryCards) {
            categoryCards.style.transition = 'all 0.4s ease';
            categoryCards.style.opacity = '0';
            categoryCards.style.transform = 'translateY(-20px)';
            setTimeout(() => { categoryCards.style.display = 'none'; }, 400);
        }

        // Update section header to show selected model
        const sectionHeader = productsSection.querySelector('.section-header');
        if (sectionHeader) {
            sectionHeader.innerHTML = `
                <h2 class="section-title">ACCESORIOS ${brandName} ${modelName}</h2>
                <div class="title-underline"></div>
                <p class="section-description">Productos compatibles con tu moto</p>
                <button id="backToCategoriesBtn" style="
                    margin-top:1rem; background:transparent; border:1px solid var(--color-accent);
                    color:var(--color-accent); padding:0.5rem 1.5rem; border-radius:30px;
                    cursor:pointer; font-family:var(--font-primary); font-size:0.85rem;
                    transition:all 0.3s ease;
                " onmouseover="this.style.background='var(--color-accent)';this.style.color='#fff'"
                   onmouseout="this.style.background='transparent';this.style.color='var(--color-accent)'">
                    ← Ver todas las categorías
                </button>
            `;
            // Back button logic
            document.getElementById('backToCategoriesBtn').addEventListener('click', () => {
                selectedModel = null;
                if (categoryCards) {
                    categoryCards.style.display = 'grid';
                    setTimeout(() => {
                        categoryCards.style.opacity = '1';
                        categoryCards.style.transform = 'translateY(0)';
                    }, 10);
                }
                catalogGrid.style.display = 'none';
                sectionHeader.innerHTML = `
                    <h2 class="section-title">NUESTRO CATÁLOGO</h2>
                    <div class="title-underline"></div>
                    <p class="section-description">Productos exclusivos para la mejor versión de tu moto</p>
                `;
            });
        }

        // Animate and show products
        catalogGrid.style.display = 'grid';
        catalogGrid.style.opacity = '0';
        catalogGrid.style.transform = 'translateY(20px)';
        catalogGrid.style.transition = 'all 0.5s ease';

        setTimeout(() => {
            renderProducts('all', selectedBrand.id, modelId);
            catalogGrid.style.opacity = '1';
            catalogGrid.style.transform = 'translateY(0)';
        }, 100);
    }

    // Scroll to products section
    setTimeout(() => {
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

    // Filter by brand
    if (brandId) {
        filteredProducts = filteredProducts.filter(p => {
            if (!p.compatible_brands) return !modelId;
            return p.compatible_brands.includes(brandId) || p.compatible_brands.includes('universal');
        });
    }

    // Filter by model — strict: only show products for this model
    if (modelId) {
        filteredProducts = filteredProducts.filter(p => {
            // Si el modelo está explícitamente excluido, no lo mostramos
            if (p.excluded_models && p.excluded_models.includes(modelId)) return false;

            if (!p.compatible_models) return false;
            return p.compatible_models.includes(modelId) || p.compatible_models.includes('universal');
        });
    }

    if (filteredProducts.length === 0) {
        const modelLabel = modelId ? modelId.toUpperCase() : '';
        catalogGrid.innerHTML = `
            <div class="no-products" style="grid-column:1/-1; text-align:center; padding:4rem 2rem;">
                <div style="font-size:4rem; margin-bottom:1rem">🏍️</div>
                <h3 style="font-family:var(--font-primary); color:var(--color-accent); margin-bottom:1rem;">
                    Próximamente más productos para ${modelLabel}
                </h3>
                <p style="opacity:0.7; margin-bottom:2rem;">Estamos cargando el catálogo para tu moto. Contáctanos para más info.</p>
                <a href="https://wa.me/573128378782" target="_blank" style="
                    background:var(--color-accent); color:white; padding:1rem 2rem;
                    border-radius:8px; text-decoration:none; font-weight:700;
                    font-family:var(--font-primary);">
                    PREGUNTAR POR WHATSAPP
                </a>
            </div>
        `;
        return;
    }

    catalogGrid.innerHTML = filteredProducts.map(product => `
        <div class="product-card-shop" data-category="${product.category}">
            <div class="product-image-wrapper">
                <div class="product-image-blur" style="background-image: url('${getImageUrl(product.image)}')"></div>
                <img src="${getImageUrl(product.image)}" alt="${product.name}" class="product-image" id="catalog-img-${product.id}" onerror="this.onerror=null; this.src='https://via.placeholder.com/500?text=Cargando...';">
            </div>
            ${product.featured ? '<span class="product-badge">DESTACADO</span>' : ''}
            <div class="product-info">
                <div class="product-category">${categories[product.category].name}</div>
                <h3 class="product-name">${product.name}</h3>
                <div class="product-meta" style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.8rem;">
                    ${product.colors && product.colors.length > 0 ? `
                        <div class="product-colors-preview" style="display:flex; gap:4px;">
                            ${product.colors.slice(0, 5).map(c => `
                                <span class="bg-${c.toLowerCase().replace(/\s+/g, '-')}" style="width:10px; height:10px; border-radius:50%; border:1px solid rgba(255,255,255,0.2);" title="${c}"></span>
                            `).join('')}
                            ${product.colors.length > 5 ? `<span style="font-size:0.7rem; opacity:0.6;">+${product.colors.length - 5}</span>` : ''}
                        </div>
                    ` : '<span></span>'}
                    ${product.compatible_models ? `<span class="product-model-badge" style="font-size:0.7rem; background:rgba(255,255,255,0.1); padding:2px 6px; border-radius:4px; opacity:0.7;">${product.compatible_models[0].toUpperCase()}</span>` : ''}
                </div>
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

    // Fetch dynamic first image for each product that uses a Supabase folder
    filteredProducts.forEach(product => {
        if (product.folder && typeof getImagesFromFolder === 'function') {
            getImagesFromFolder(product.folder).then(images => {
                if (images && images.length > 0) {
                    const imgEl = document.getElementById(`catalog-img-${product.id}`);
                    if (imgEl) {
                        imgEl.src = images[0]; // Set the real auto-detected first image
                    }
                    product.image = images[0]; // Update object to prevent double fetching elsewhere
                }
            }).catch(console.error);
        }
    });

    // Attach add to cart listeners
    attachAddToCartListeners();

    // Attach card click listeners for modal
    attachProductClickListeners();
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
                // If it's the grid button and product has colors, force modal to pick a color
                if (btn.id !== 'modalAddToCart' && product.colors && product.colors.length > 0) {
                    openModal(product);
                    return;
                }

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
// Product Details Modal Logic
const productModal = document.getElementById('productModal');
const modalClose = document.getElementById('modalClose');

if (modalClose) {
    modalClose.addEventListener('click', closeModal);
}

// Close modal on outside click
window.addEventListener('click', (e) => {
    if (e.target === productModal) {
        closeModal();
    }
});

function openModal(product) {
    if (!productModal) return;

    const mainImg = document.getElementById('modalMainImage');
    const thumbGrid = document.getElementById('modalThumbnails');
    const title = document.getElementById('modalTitle');
    const price = document.getElementById('modalPrice');
    const desc = document.getElementById('modalDescription');
    const cat = document.getElementById('modalCategory');
    const addToCartBtn = document.getElementById('modalAddToCart');
    const whatsappBtn = document.getElementById('modalWhatsApp');

    // Fill text data
    title.textContent = product.name;
    price.textContent = `$${product.price.toLocaleString('es-CO')}`;
    desc.textContent = product.description;
    cat.textContent = categories[product.category]?.name || product.category;

    // Show modal immediately with loading state
    mainImg.src = getImageUrl(product.image);
    thumbGrid.innerHTML = '<p style="opacity:0.5;font-size:0.9rem">Cargando fotos...</p>';

    // Show modal right away
    productModal.style.display = 'flex';
    setTimeout(() => {
        productModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }, 10);

    // Load images: auto-detect from Supabase folder OR use static list
    const loadImages = async () => {
        let imageUrls = [];

        if (product.folder && typeof getImagesFromFolder === 'function') {
            // AUTO MODE: Detect ALL files in the Supabase folder (any name!)
            imageUrls = await getImagesFromFolder(product.folder);
        }

        // Fallback: use manual list or single image
        if (imageUrls.length === 0) {
            const fallback = product.images || [product.image];
            imageUrls = fallback.map(src => getImageUrl(src));
        }

        // Set main image to first
        if (imageUrls.length > 0) {
            mainImg.src = imageUrls[0];
        }

        // Render thumbnails
        thumbGrid.innerHTML = '';
        imageUrls.forEach((url, index) => {
            const thumb = document.createElement('div');
            thumb.className = `thumb-item ${index === 0 ? 'active' : ''}`;
            thumb.innerHTML = `<img src="${url}" alt="${product.name} ${index + 1}" onerror="this.parentElement.style.display='none'">`;

            thumb.addEventListener('click', () => {
                mainImg.src = url;
                document.querySelectorAll('.thumb-item').forEach(t => t.classList.remove('active'));
                thumb.classList.add('active');
            });

            thumbGrid.appendChild(thumb);
        });
    };

    loadImages();

    // Handle Colors logic
    const colorWrapper = document.getElementById('modalColorsWrapper');
    const colorPillsContainer = document.getElementById('modalColorPills');
    const colorValueInput = document.getElementById('modalColorValue');

    if (colorWrapper && colorPillsContainer && colorValueInput) {
        colorValueInput.value = ''; // Reset selection

        if (product.colors && product.colors.length > 0) {
            colorWrapper.style.display = 'block';
            colorPillsContainer.innerHTML = product.colors.map(color => {
                const colorClass = color.toLowerCase().replace(/\s+/g, '-');
                return `
                    <div class="color-pill" data-color="${color}">
                        <span class="color-indicator bg-${colorClass}"></span>
                        ${color}
                    </div>
                `;
            }).join('');

            // Add click events to pills
            const pills = colorPillsContainer.querySelectorAll('.color-pill');
            pills.forEach(pill => {
                pill.addEventListener('click', () => {
                    pills.forEach(p => p.classList.remove('active'));
                    pill.classList.add('active');
                    colorValueInput.value = pill.dataset.color;
                });
            });
        } else {
            colorWrapper.style.display = 'none';
            colorPillsContainer.innerHTML = '';
        }
    }

    // Update buttons
    addToCartBtn.onclick = () => {
        if (cart) {
            let selectedColor = null;
            if (product.colors && product.colors.length > 0) {
                if (colorValueInput && colorValueInput.value) {
                    selectedColor = colorValueInput.value;
                } else {
                    // Visual shake effect for the color container to alert user
                    colorWrapper.style.animation = 'none';
                    colorWrapper.offsetHeight; // trigger reflow
                    colorWrapper.style.animation = 'shake 0.5s ease-in-out';

                    if (!document.getElementById('shake-style')) {
                        const style = document.createElement('style');
                        style.id = 'shake-style';
                        style.textContent = `
                            @keyframes shake {
                                0%, 100% { transform: translateX(0); }
                                25% { transform: translateX(-5px); }
                                75% { transform: translateX(5px); }
                            }
                        `;
                        document.head.appendChild(style);
                    }
                    return;
                }
            }
            cart.addItem(product, 1, selectedColor);
            addToCartBtn.textContent = '¡AÑADIDO!';
            addToCartBtn.style.background = '#28a745';
            setTimeout(() => {
                addToCartBtn.textContent = 'AGREGAR AL CARRITO';
                addToCartBtn.style.background = 'var(--color-accent)';
            }, 2000);
        }
    };

    const whatsappMsg = `Hola! Estoy interesado en el producto: ${product.name} que vi en la web.`;
    whatsappBtn.href = `https://wa.me/573128378782?text=${encodeURIComponent(whatsappMsg)}`;
}

function closeModal() {
    productModal.classList.remove('active');
    setTimeout(() => {
        productModal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scroll
    }, 400);
}

function attachProductClickListeners() {
    const productCards = document.querySelectorAll('.product-card-shop');
    productCards.forEach(card => {
        card.style.cursor = 'pointer';
        card.addEventListener('click', (e) => {
            // Don't open if clicked on "Add to Cart" button or its children
            if (e.target.closest('.add-to-cart-btn')) return;

            const productId = card.querySelector('.add-to-cart-btn').dataset.productId;
            const product = products.find(p => p.id === productId);
            if (product) {
                openModal(product);
            }
        });
    });
}
