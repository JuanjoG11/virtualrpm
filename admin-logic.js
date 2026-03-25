// ============================================
// VIRTUAL RPM - Admin Logic "V-CORE"
// ============================================

let localInventory = [];
let localMovements = [];
const LOW_STOCK_THRESHOLD = 5;

// DOM Elements
const sidebarItems = document.querySelectorAll('.nav-item');
const viewSections = document.querySelectorAll('.view-section');
const viewTitle = document.getElementById('viewTitle');
const inventoryTableBody = document.getElementById('inventory-table-body');
const searchInput = document.getElementById('inventory-search');
const brandChips = document.querySelectorAll('.brand-chip');
const statTotalValue = document.getElementById('stat-total-value');
const statTotalItems = document.getElementById('stat-total-items');
const statLowStock = document.getElementById('stat-low-stock');
const statRecentMovements = document.getElementById('stat-recent');
const recentActivityList = document.getElementById('recent-activity-list');
const allMovementsTableBody = document.getElementById('all-movements-table');

// Modal/Toast
const editModal = document.getElementById('edit-modal-overlay');
const modalTitle = document.getElementById('modal-title-main');
const editForm = document.getElementById('edit-stock-form');
const editIdInput = document.getElementById('edit-product-id');
const editSkuInput = document.getElementById('edit-product-sku');
const editNameInput = document.getElementById('edit-product-name');
const editPriceInput = document.getElementById('edit-product-price');
const editStockInput = document.getElementById('edit-product-stock');
const editCategoryInput = document.getElementById('edit-product-category');
const editImgInput = document.getElementById('edit-product-img');
const deleteBtn = document.getElementById('delete-product-btn');
const closeModalBtn = document.getElementById('close-modal-btn');
const toast = document.getElementById('admin-toast');

// Helpers
function formatPrice(price) { return price.toLocaleString('es-CO'); }
function formatDate(dateStr) {
    const d = new Date(dateStr);
    return d.toLocaleDateString() + ' ' + d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

// ---------------------------------------------
// 0. INITIALIZATION
// ---------------------------------------------
function initAdmin() {
    if (!checkAuth()) {
        setupAuth();
        return;
    }

    // Once authenticated, show UI and init logic
    showAdminUI();
    loadData();
    setupNavigation();
    setupModals();
    setupSearch();
    setupBrandFilters();
    setupMobileMenu();
    updateDateDisplay();

    // Sync across tabs/windows (Real-time update)
    window.addEventListener('storage', (e) => {
        if (e.key === 'vrpm_inventory' || e.key === 'vrpm_movements') {
            loadData();
            showToast('Actualización remota detectada 🔄');
        }
    });

    // Auto-update stats every minute
    setInterval(updateStats, 60000);
}

// ---------------------------------------------
// 0. AUTHENTICATION
// ---------------------------------------------
const ADMIN_ACCESS_KEY = '123';

function checkAuth() {
    return sessionStorage.getItem('vrpm_authenticated') === 'true';
}

function setupAuth() {
    const overlay = document.getElementById('admin-login-overlay');
    const input = document.getElementById('admin-password-input');
    const btn = document.getElementById('login-submit-btn');
    const error = document.getElementById('login-error');

    overlay.style.display = 'flex';

    const attemptLogin = () => {
        if (input.value === ADMIN_ACCESS_KEY) {
            sessionStorage.setItem('vrpm_authenticated', 'true');
            overlay.style.opacity = '0';
            setTimeout(() => {
                overlay.style.display = 'none';
                showAdminUI();
                initAdmin(); // Re-run to initialize all modules
            }, 500);
        } else {
            error.style.display = 'block';
            input.value = '';
            input.focus();
            // Shake effect
            overlay.querySelector('.login-card').classList.add('shake');
            setTimeout(() => overlay.querySelector('.login-card').classList.remove('shake'), 500);
        }
    };

    btn.onclick = attemptLogin;
    input.onkeypress = (e) => { if (e.key === 'Enter') attemptLogin(); };
}

function showAdminUI() {
    document.getElementById('admin-login-overlay').style.display = 'none';
    document.getElementById('mainSidebar').style.display = 'flex';
    document.querySelector('.main-content').style.display = 'flex';
}

function loadData() {
    const savedInventory = localStorage.getItem('vrpm_inventory');
    const savedMovements = localStorage.getItem('vrpm_movements');

    if (savedInventory) {
        localInventory = JSON.parse(savedInventory);
    } else {
        // First boot: Init from static data
        if (typeof products !== 'undefined') {
            localInventory = products.map(p => ({
                ...p,
                stock: Math.floor(Math.random() * 20) + 5
            }));
            localStorage.setItem('vrpm_inventory', JSON.stringify(localInventory));
        }
    }

    localMovements = savedMovements ? JSON.parse(savedMovements) : [];

    renderAll();
    updateStats();
}

function renderAll() {
    const activeBrand = getActiveBrand();
    renderInventoryTable(searchInput ? searchInput.value : '', activeBrand);
    renderRecentMovements();
    renderAllMovements();
}

function getActiveBrand() {
    const active = document.querySelector('.brand-chip.active');
    return active ? active.dataset.brand : 'all';
}

// ---------------------------------------------
// 1. NAVIGATION (SPA Logic)
// ---------------------------------------------
function setupNavigation() {
    const allNavItems = document.querySelectorAll('.nav-item');
    allNavItems.forEach(item => {
        item.addEventListener('click', (e) => {
            const view = e.currentTarget.dataset.view;
            if (view) {
                e.preventDefault();
                changeView(view);
                // On mobile, close sidebar after click
                const sidebar = document.getElementById('mainSidebar');
                if (sidebar) sidebar.classList.remove('active');
            }
        });
    });

    // Support "Ver todos" link from Dashboard
    document.querySelectorAll('[data-view]').forEach(link => {
        if (link.tagName === 'A' && !link.classList.contains('nav-item')) {
            link.onclick = (e) => {
                e.preventDefault();
                changeView(link.dataset.view);
            }
        }
    });
}

function changeView(viewId) {
    // UI Update - Both sidebar and mobile nav
    const allNavItems = document.querySelectorAll('.nav-item');
    allNavItems.forEach(i => i.classList.toggle('active', i.dataset.view === viewId));
    
    viewSections.forEach(s => s.classList.toggle('active', s.id === `view-${viewId}`));

    // Titles
    const titles = {
        dashboard: 'CONTROL <span>DASHBOARD</span>',
        inventory: 'GESTIÓN <span>CATÁLOGO</span>',
        movements: 'HISTORIAL <span>LOGS</span>',
        reports: 'REPORTES <span>ANÁLISIS</span>'
    };
    viewTitle.innerHTML = titles[viewId] || 'V-RPM <span>ADMIN</span>';
}

// ---------------------------------------------
// 2. RENDERING TABLES
// ---------------------------------------------
function renderInventoryTable(filter = '', brand = 'all') {
    if (!inventoryTableBody) return;
    inventoryTableBody.innerHTML = '';

    let filtered = localInventory.filter(p =>
        p.name.toLowerCase().includes(filter.toLowerCase()) ||
        p.id.toLowerCase().includes(filter.toLowerCase())
    );

    if (brand !== 'all') {
        filtered = filtered.filter(p => 
            p.compatible_brands && (p.compatible_brands.includes(brand) || p.compatible_brands.includes('universal'))
        );
    }

    filtered.forEach(p => {
        const status = p.stock === 0 ? { t: 'AGOTADO', c: 'out' } : (p.stock < LOW_STOCK_THRESHOLD ? { t: 'BAJO STOCK', c: 'low' } : { t: 'EN STOCK', c: 'high' });
        const cat = (typeof categories !== 'undefined' && categories[p.category]) ? categories[p.category].name : p.category;

        const tr = document.createElement('tr');
        tr.className = 'product-row';
        tr.innerHTML = `
            <td data-label="Imagen"><img src="${getImg(p.image)}" class="product-img-thumb"></td>
            <td data-label="Producto" class="product-name-cell">${p.name}<br><small>ID: ${p.id}</small></td>
            <td data-label="Categoría"><span class="category-tag">${cat}</span></td>
            <td data-label="Precio">$${formatPrice(p.price)}</td>
            <td data-label="Stock"><strong>${p.stock}</strong> und.</td>
            <td data-label="Estado"><span class="stock-badge ${status.c}">${status.t}</span></td>
            <td data-label="Acciones" class="action-btns">
                <button class="action-btn edit" onclick="window.openEdit('${p.id}')">✏️</button>
            </td>
        `;
        inventoryTableBody.appendChild(tr);
    });
}

function renderRecentMovements() {
    if (!recentActivityList) return;
    recentActivityList.innerHTML = '';

    // Last 5 movements - Displayed as Activity Cards instead of table
    const recent = localMovements.slice(0, 5);
    
    if (recent.length === 0) {
        recentActivityList.innerHTML = '<div style="padding: 2rem; text-align: center; opacity: 0.5;">No hay actividad reciente</div>';
        return;
    }

    recent.forEach(m => {
        const div = document.createElement('div');
        div.className = 'activity-card';
        div.style.cssText = 'background: rgba(255,255,255,0.03); border-radius: 8px; padding: 1rem; margin-bottom: 0.75rem; border-left: 3px solid ' + (m.quantity < 0 ? 'var(--admin-danger)' : 'var(--admin-success)');
        
        div.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 4px;">
                <strong style="font-size: 0.9rem;">${m.productName}</strong>
                <span style="font-size: 0.7rem; color: var(--admin-text-dim);">${formatDate(m.date)}</span>
            </div>
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <span class="category-tag" style="font-size: 0.6rem; background: rgba(255,255,255,0.05);">${m.type}</span>
                <span style="font-weight: 800; color: ${m.quantity < 0 ? 'var(--admin-danger)' : 'var(--admin-success)'}">
                    ${m.quantity > 0 ? '+' : ''}${m.quantity} und.
                </span>
            </div>
        `;
        recentActivityList.appendChild(div);
    });
}

function renderAllMovements() {
    if (!allMovementsTableBody) return;
    allMovementsTableBody.innerHTML = '';

    localMovements.forEach(m => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td data-label="Fecha/Hora">${formatDate(m.date)}</td>
            <td data-label="Producto">${m.productName}<br><small>${m.productId}</small></td>
            <td data-label="Categoría/Tipo"><span class="category-tag">${m.type}</span></td>
            <td data-label="Cantidad" style="font-weight: 800; color: ${m.quantity < 0 ? 'var(--admin-danger)' : 'var(--admin-success)'}">
                ${m.quantity > 0 ? '+' : ''}${m.quantity}
            </td>
            <td data-label="Stock Previo">${m.prevStock}</td>
            <td data-label="Stock Final"><strong>${m.newStock}</strong></td>
        `;
        allMovementsTableBody.appendChild(tr);
    });
}

// ---------------------------------------------
// 3. STATS LOGIC
// ---------------------------------------------
function updateStats() {
    const val = localInventory.reduce((a, b) => a + (b.price * (b.stock || 0)), 0);
    const units = localInventory.reduce((a, b) => a + (b.stock || 0), 0);
    const low = localInventory.filter(p => p.stock < LOW_STOCK_THRESHOLD).length;

    // Count movements in last 24h
    const now = new Date();
    const recentCount = localMovements.filter(m => (now - new Date(m.date)) < 86400000).length;

    statTotalValue.textContent = `$${(val / 1000000).toFixed(1)}M`;
    statTotalItems.textContent = units.toLocaleString();
    statLowStock.textContent = low;
    statRecentMovements.textContent = recentCount;
}

// ---------------------------------------------
// 4. INVENTORY ACTIONS
// ---------------------------------------------
window.openAddProduct = () => {
    editForm.reset();
    editIdInput.value = ''; // Empty ID means NEW product
    modalTitle.textContent = 'AÑADIR NUEVO PRODUCTO';
    deleteBtn.style.display = 'none';
    editSkuInput.disabled = false;

    editModal.style.display = 'flex';
    requestAnimationFrame(() => editModal.style.opacity = '1');
}

window.openEdit = (id) => {
    const p = localInventory.find(i => i.id === id);
    if (!p) return;

    modalTitle.textContent = 'EDITAR PRODUCTO';
    deleteBtn.style.display = 'block';

    editIdInput.value = p.id; // Hidden ID for reference
    editSkuInput.value = p.id;
    editSkuInput.disabled = true; // Don't change SKU on edit to avoid breaking relations
    editNameInput.value = p.name;
    editPriceInput.value = p.price;
    editStockInput.value = p.stock || 0;
    editCategoryInput.value = p.category || 'accesorios';
    editImgInput.value = p.image || '';

    editModal.style.display = 'flex';
    requestAnimationFrame(() => editModal.style.opacity = '1');
}

function setupModals() {
    closeModalBtn.onclick = () => {
        editModal.style.opacity = '0';
        setTimeout(() => editModal.style.display = 'none', 300);
    };

    deleteBtn.onclick = () => {
        const id = editIdInput.value;
        if (confirm(`¿Estás seguro de eliminar "${editNameInput.value}"? Esta acción no se puede deshacer.`)) {
            const index = localInventory.findIndex(p => p.id === id);
            if (index !== -1) {
                localInventory.splice(index, 1);
                save();
                renderAll();
                updateStats();
                showToast('Producto eliminado');
                closeModalBtn.click();
            }
        }
    };

    editForm.onsubmit = (e) => {
        e.preventDefault();
        const existingId = editIdInput.value;
        const sku = editSkuInput.value;

        const productData = {
            id: sku,
            name: editNameInput.value,
            price: parseInt(editPriceInput.value),
            stock: parseInt(editStockInput.value),
            category: editCategoryInput.value,
            image: editImgInput.value,
            description: 'Producto gestionado desde V-CORE'
        };

        if (existingId) {
            // UPDATE
            const index = localInventory.findIndex(p => p.id === existingId);
            if (index !== -1) {
                const prevStock = localInventory[index].stock;
                const newStock = productData.stock;

                localInventory[index] = { ...localInventory[index], ...productData };

                // If stock changed, log it
                if (prevStock !== newStock) {
                    localMovements.unshift({
                        id: Date.now(),
                        productId: sku,
                        productName: productData.name,
                        type: 'AJUSTE MANUAL',
                        quantity: newStock - prevStock,
                        prevStock: prevStock,
                        newStock: newStock,
                        date: new Date().toISOString()
                    });
                }
            }
        } else {
            // CREATE
            // Check if SKU already exists
            if (localInventory.some(p => p.id === sku)) {
                alert('Ya existe un producto con este ID / SKU. Usa uno diferente.');
                return;
            }
            localInventory.push(productData);

            localMovements.unshift({
                id: Date.now(),
                productId: sku,
                productName: productData.name,
                type: 'ALTA PRODUCTO',
                quantity: productData.stock,
                prevStock: 0,
                newStock: productData.stock,
                date: new Date().toISOString()
            });
        }

        save();
        renderAll();
        updateStats();
        showToast('Inventario actualizado con éxito');
        closeModalBtn.click();
    };
}

function save() {
    localStorage.setItem('vrpm_inventory', JSON.stringify(localInventory));
    localStorage.setItem('vrpm_movements', JSON.stringify(localMovements));
}

function showToast(msg) {
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
}

// ---------------------------------------------
// 5. SEARCH & UI
// ---------------------------------------------
function setupSearch() {
    if (!searchInput) return;
    searchInput.oninput = (e) => renderInventoryTable(e.target.value, getActiveBrand());
}

function setupBrandFilters() {
    const chips = document.querySelectorAll('.brand-chip');
    chips.forEach(chip => {
        chip.onclick = () => {
            chips.forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            renderInventoryTable(searchInput.value, chip.dataset.brand);
        };
    });
}

function setupMobileMenu() {
    const toggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('mainSidebar');
    if (toggle && sidebar) {
        toggle.onclick = () => sidebar.classList.toggle('active');
    }
}

function updateDateDisplay() {
    const options = { weekday: 'long', day: 'numeric', month: 'long' };
    const today = new Date().toLocaleDateString('es-ES', options);
    document.getElementById('currentDate').textContent = today.charAt(0).toUpperCase() + today.slice(1);
}

function getImg(path) {
    if (!path) return 'https://via.placeholder.com/80';
    if (path.startsWith('http')) return path;
    return `https://behzsuxortqycipoqwip.supabase.co/storage/v1/object/public/productos/${path}`;
}

// Start
document.addEventListener('DOMContentLoaded', initAdmin);
