// Shopping Cart System for Virtual RPM
class ShoppingCart {
    constructor() {
        this.items = this.loadCart();
        this.init();
    }

    init() {
        this.updateCartUI();
        this.attachEventListeners();
    }

    loadCart() {
        const saved = localStorage.getItem('virtualRPMCart');
        return saved ? JSON.parse(saved) : [];
    }

    saveCart() {
        localStorage.setItem('virtualRPMCart', JSON.stringify(this.items));
        this.updateCartUI();
    }

    addItem(product, quantity = 1, selectedColor = null, selectedVariant = null, finalPrice = null) {
        // Build a unique ID that includes color and variant to distinguish different versions of same product
        let uniqueId = product.id;
        if (selectedVariant) uniqueId += `-${selectedVariant.name.toLowerCase().replace(/\s+/g, '-')}`;
        if (selectedColor) uniqueId += `-${selectedColor.toLowerCase().replace(/\s+/g, '-')}`;

        const existingItem = this.items.find(item => (item.uniqueId || item.id) === uniqueId);

        // Priority: Passed finalPrice > Variant price > Base product price
        const itemPrice = finalPrice || (selectedVariant ? selectedVariant.price : product.price);

        if (existingItem) {
            existingItem.quantity += quantity;
            // Update price in case it changed (though usually constant)
            existingItem.price = itemPrice;
        } else {
            this.items.push({
                ...product,
                uniqueId: uniqueId,
                selectedColor: selectedColor,
                selectedVariant: selectedVariant,
                price: itemPrice, 
                quantity: quantity
            });
        }

        this.saveCart();
        
        // Show notification with details
        let details = '';
        if (selectedVariant && selectedColor) details = ` (${selectedVariant.name} - ${selectedColor})`;
        else if (selectedVariant) details = ` (${selectedVariant.name})`;
        else if (selectedColor) details = ` (${selectedColor})`;
        
        this.showNotification(product.name + details);
        this.animateCartIcon();
    }

    removeItem(uniqueId) {
        this.items = this.items.filter(item => (item.uniqueId || item.id) !== uniqueId);
        this.saveCart();
    }

    updateQuantity(uniqueId, quantity) {
        const item = this.items.find(item => (item.uniqueId || item.id) === uniqueId);
        if (item) {
            if (quantity <= 0) {
                this.removeItem(uniqueId);
            } else {
                item.quantity = quantity;
                this.saveCart();
            }
        }
    }

    getTotal() {
        return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    }

    getItemCount() {
        return this.items.reduce((count, item) => count + item.quantity, 0);
    }

    clearCart() {
        this.items = [];
        this.saveCart();
    }

    updateCartUI() {
        this.updateCartCount();
        this.updateCartItems();
        this.updateCartTotal();
        this.updatePersuasiveMessages();
    }

    updatePersuasiveMessages() {
        const cartItemsContainer = document.getElementById('cartItems');
        if (!cartItemsContainer) return;

        // Remove existing messages
        const existingMessages = cartItemsContainer.querySelectorAll('.cart-message');
        existingMessages.forEach(msg => msg.remove());

        const total = this.getTotal();
        const freeShippingThreshold = 300000;
        const remaining = freeShippingThreshold - total;

        // Create message container
        const messageContainer = document.createElement('div');
        messageContainer.className = 'cart-messages';

        // Free shipping progress message
        if (remaining > 0) {
            const shippingMsg = document.createElement('div');
            shippingMsg.className = 'cart-message shipping-progress';
            shippingMsg.innerHTML = `
                <div class="message-icon">🚚</div>
                <div class="message-content">
                    <strong>¡Estás cerca del envío GRATIS!</strong>
                    <p>Agrega $${remaining.toLocaleString('es-CO')} más para envío gratis</p>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${(total / freeShippingThreshold * 100)}%"></div>
                    </div>
                </div>
            `;
            messageContainer.appendChild(shippingMsg);
        } else {
            const shippingMsg = document.createElement('div');
            shippingMsg.className = 'cart-message success celebrated';
            shippingMsg.innerHTML = `
                <div class="message-icon">🎉</div>
                <div class="message-content">
                    <strong>¡PEDIDO PREMIUM LOGRADO!</strong>
                    <p>Tienes envío GRATIS y prioridad en el despacho</p>
                </div>
                <div class="confetti-cannon"></div>
            `;
            messageContainer.appendChild(shippingMsg);
        }

        // Urgency message - random stock warning
        if (this.items.length > 0) {
            const randomItem = this.items[Math.floor(Math.random() * this.items.length)];
            const stockLeft = Math.floor(Math.random() * 5) + 2; // 2-6 items

            const urgencyMsg = document.createElement('div');
            urgencyMsg.className = 'cart-message urgency';
            urgencyMsg.innerHTML = `
                <div class="message-icon">⚡</div>
                <div class="message-content">
                    <strong>¡Últimas unidades!</strong>
                    <p>Solo quedan ${stockLeft} de "${randomItem.name}"</p>
                </div>
            `;
            messageContainer.appendChild(urgencyMsg);
        }

        // Discount message
        if (total > 200000 && total < 300000) {
            const discountMsg = document.createElement('div');
            discountMsg.className = 'cart-message discount';
            discountMsg.innerHTML = `
                <div class="message-icon">🎁</div>
                <div class="message-content">
                    <strong>¡Oferta especial!</strong>
                    <p>Agrega un producto más y obtén 10% OFF en tu compra</p>
                </div>
            `;
            messageContainer.appendChild(discountMsg);
        }

        // Insert messages at the top of cart items
        if (this.items.length > 0) {
            cartItemsContainer.insertBefore(messageContainer, cartItemsContainer.firstChild);
        }
    }

    updateCartCount() {
        const cartCount = document.getElementById('cartCount');
        const cartFloatCount = document.getElementById('cartFloatCount');
        const itemCount = this.getItemCount();
        const cartFloat = document.getElementById('cartFloat');

        if (cartCount) {
            cartCount.textContent = itemCount;
            cartCount.style.display = itemCount > 0 ? 'flex' : 'none';
        }

        if (cartFloatCount) {
            cartFloatCount.textContent = itemCount;
            cartFloatCount.style.display = itemCount > 0 ? 'flex' : 'none';
        }

        if (cartFloat) {
            cartFloat.style.display = itemCount > 0 ? 'flex' : 'none';
        }
    }

    updateCartItems() {
        const cartItemsContainer = document.getElementById('cartItems');
        const cartEmpty = document.getElementById('cartEmpty');
        const cartContent = document.getElementById('cartContent');

        if (!cartItemsContainer) return;

        if (this.items.length === 0) {
            if (cartEmpty) cartEmpty.style.display = 'block';
            if (cartContent) cartContent.style.display = 'none';
            return;
        }

        if (cartEmpty) cartEmpty.style.display = 'none';
        if (cartContent) cartContent.style.display = 'block';

        cartItemsContainer.innerHTML = this.items.map(item => `
            <div class="cart-item" data-id="${item.uniqueId || item.id}">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-details">
                    <h4 class="cart-item-name">${item.name}</h4>
                    ${item.selectedColor ? `
                        <p class="cart-item-color" style="font-size: 0.85rem; color: var(--color-accent); margin: 4px 0; display: flex; align-items: center; gap: 6px;">
                            <span class="bg-${item.selectedColor.toLowerCase().replace(/\s+/g, '-')}" style="width: 10px; height: 10px; border-radius: 50%; border: 1px solid rgba(255,255,255,0.2);"></span>
                            Color: ${item.selectedColor}
                        </p>
                    ` : ''}
                    <p class="cart-item-price">$${this.formatPrice(item.price)}</p>
                    <div class="cart-item-quantity">
                        <button class="qty-btn qty-minus" data-id="${item.uniqueId || item.id}">-</button>
                        <span class="qty-value">${item.quantity}</span>
                        <button class="qty-btn qty-plus" data-id="${item.uniqueId || item.id}">+</button>
                    </div>
                </div>
                <button class="cart-item-remove" data-id="${item.uniqueId || item.id}">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
            </div>
        `).join('');

        // Reattach event listeners for cart items
        this.attachCartItemListeners();
    }

    updateCartTotal() {
        const cartTotal = document.getElementById('cartTotal');
        if (cartTotal) {
            cartTotal.textContent = `$${this.formatPrice(this.getTotal())}`;
        }
    }

    attachEventListeners() {
        // Toggle cart sidebar
        const cartIcon = document.getElementById('cartIcon');
        const cartSidebar = document.getElementById('cartSidebar');
        const cartClose = document.getElementById('cartClose');
        const cartOverlay = document.getElementById('cartOverlay');

        if (cartIcon) {
            cartIcon.addEventListener('click', () => this.toggleCart());
        }

        const cartFloat = document.getElementById('cartFloat');
        if (cartFloat) {
            cartFloat.addEventListener('click', () => this.toggleCart());
        }

        if (cartClose) {
            cartClose.addEventListener('click', () => this.closeCart());
        }

        if (cartOverlay) {
            cartOverlay.addEventListener('click', () => this.closeCart());
        }

        // Checkout button
        const checkoutBtn = document.getElementById('checkoutBtn');
        if (checkoutBtn) {
            checkoutBtn.addEventListener('click', () => this.checkout());
        }
    }

    attachCartItemListeners() {
        // Quantity buttons
        document.querySelectorAll('.qty-plus').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = e.currentTarget.dataset.id;
                const item = this.items.find(i => (i.uniqueId || i.id) === id);
                if (item) this.updateQuantity(id, item.quantity + 1);
            });
        });

        document.querySelectorAll('.qty-minus').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = e.currentTarget.dataset.id;
                const item = this.items.find(i => (i.uniqueId || i.id) === id);
                if (item) this.updateQuantity(id, item.quantity - 1);
            });
        });

        // Remove buttons
        document.querySelectorAll('.cart-item-remove').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = e.currentTarget.dataset.id;
                this.removeItem(id);
            });
        });
    }

    toggleCart() {
        const cartSidebar = document.getElementById('cartSidebar');
        const cartOverlay = document.getElementById('cartOverlay');

        if (cartSidebar && cartOverlay) {
            const isOpen = cartSidebar.classList.contains('active');

            if (isOpen) {
                this.closeCart();
            } else {
                cartSidebar.classList.add('active');
                cartOverlay.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        }
    }

    closeCart() {
        const cartSidebar = document.getElementById('cartSidebar');
        const cartOverlay = document.getElementById('cartOverlay');

        if (cartSidebar) cartSidebar.classList.remove('active');
        if (cartOverlay) cartOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    animateCartIcon() {
        const cartIcon = document.getElementById('cartIcon');
        const cartFloat = document.getElementById('cartFloat');

        if (cartIcon) {
            cartIcon.classList.add('cart-bounce');
            setTimeout(() => cartIcon.classList.remove('cart-bounce'), 500);
        }

        if (cartFloat) {
            cartFloat.classList.add('cart-bounce');
            setTimeout(() => cartFloat.classList.remove('cart-bounce'), 500);
        }
    }

    showNotification(productName) {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = 'cart-notification';
        notification.innerHTML = `
            <div class="cart-notification-content">
                <div class="cart-notification-title">Agregado al carrito</div>
                <div class="cart-notification-message">${productName}</div>
            </div>
        `;
        document.body.appendChild(notification);

        // Trigger animation
        setTimeout(() => notification.classList.add('show'), 10);

        // Remove after 3 seconds
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 400);
        }, 3000);
    }

    checkout() {
        if (this.items.length === 0) {
            alert('Tu carrito está vacío');
            return;
        }

        // Generate WhatsApp message
        let message = '🏍️ *PEDIDO VIRTUAL RPM*\n\n';

        this.items.forEach(item => {
            message += `📦 *${item.name}*\n`;
            if (item.selectedVariant) {
                message += `   Opción: ${item.selectedVariant.name}\n`;
            }
            if (item.selectedColor) {
                message += `   Color: ${item.selectedColor}\n`;
            }
            message += `   Cantidad: ${item.quantity}\n`;
            message += `   Precio: $${this.formatPrice(item.price)}\n`;
            message += `   Subtotal: $${this.formatPrice(item.price * item.quantity)}\n\n`;
        });

        message += `💰 *TOTAL: $${this.formatPrice(this.getTotal())}*\n\n`;
        message += '¡Quiero realizar este pedido!';

        // Encode message for URL
        const encodedMessage = encodeURIComponent(message);
        const whatsappURL = `https://wa.me/573128378782?text=${encodedMessage}`;

        // Open WhatsApp
        window.open(whatsappURL, '_blank');

        // Optional: Clear cart after checkout
        // this.clearCart();
        // this.closeCart();
    }

    formatPrice(price) {
        return price.toLocaleString('es-CO');
    }
}

// Initialize cart when DOM is ready
let cart;
document.addEventListener('DOMContentLoaded', () => {
    cart = new ShoppingCart();
});
