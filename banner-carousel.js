// Banner Carousel System for Virtual RPM
class BannerCarousel {
    constructor() {
        this.currentSlide = 0;
        this.slides = document.querySelectorAll('.banner-slide');
        this.totalSlides = this.slides.length;
        this.autoPlayInterval = null;
        this.autoPlayDelay = 5000; // 5 seconds

        this.init();
    }

    init() {
        if (this.totalSlides === 0) return;

        this.createDots();
        this.attachEventListeners();
        this.showSlide(0);
        this.startAutoPlay();
    }

    createDots() {
        const dotsContainer = document.querySelector('.banner-dots');
        if (!dotsContainer) return;

        dotsContainer.innerHTML = '';
        for (let i = 0; i < this.totalSlides; i++) {
            const dot = document.createElement('button');
            dot.className = 'banner-dot';
            dot.setAttribute('aria-label', `Ir a banner ${i + 1}`);
            dot.addEventListener('click', () => this.goToSlide(i));
            dotsContainer.appendChild(dot);
        }
    }

    attachEventListeners() {
        const prevBtn = document.querySelector('.banner-prev');
        const nextBtn = document.querySelector('.banner-next');

        if (prevBtn) {
            prevBtn.addEventListener('click', () => this.prevSlide());
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => this.nextSlide());
        }

        // Pause on hover
        const carousel = document.querySelector('.banner-carousel');
        if (carousel) {
            carousel.addEventListener('mouseenter', () => this.stopAutoPlay());
            carousel.addEventListener('mouseleave', () => this.startAutoPlay());
        }

        // Touch/swipe support
        this.addSwipeSupport();
    }

    showSlide(index) {
        // Remove active class from all slides
        this.slides.forEach(slide => {
            slide.classList.remove('active');
        });

        // Remove active class from all dots
        const dots = document.querySelectorAll('.banner-dot');
        dots.forEach(dot => {
            dot.classList.remove('active');
        });

        // Add active class to current slide and dot
        if (this.slides[index]) {
            this.slides[index].classList.add('active');
        }

        if (dots[index]) {
            dots[index].classList.add('active');
        }

        this.currentSlide = index;
    }

    nextSlide() {
        const next = (this.currentSlide + 1) % this.totalSlides;
        this.goToSlide(next);
    }

    prevSlide() {
        const prev = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
        this.goToSlide(prev);
    }

    goToSlide(index) {
        this.showSlide(index);
        this.resetAutoPlay();
    }

    startAutoPlay() {
        this.stopAutoPlay();
        this.autoPlayInterval = setInterval(() => {
            this.nextSlide();
        }, this.autoPlayDelay);
    }

    stopAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
            this.autoPlayInterval = null;
        }
    }

    resetAutoPlay() {
        this.stopAutoPlay();
        this.startAutoPlay();
    }

    addSwipeSupport() {
        const carousel = document.querySelector('.banner-carousel');
        if (!carousel) return;

        let touchStartX = 0;
        let touchEndX = 0;

        carousel.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        carousel.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            this.handleSwipe();
        }, { passive: true });

        const handleSwipe = () => {
            const swipeThreshold = 50;
            const diff = touchStartX - touchEndX;

            if (Math.abs(diff) > swipeThreshold) {
                if (diff > 0) {
                    this.nextSlide();
                } else {
                    this.prevSlide();
                }
            }
        };

        this.handleSwipe = handleSwipe;
    }
}

// Initialize banner carousel when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new BannerCarousel();
});
