// #region agent log
fetch('http://127.0.0.1:7243/ingest/562aedea-5de9-436c-82ca-f7d2be6ec23c',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'script.js:1',message:'Script loaded',data:{timestamp:Date.now()},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
// #endregion

// Smooth Scroll
document.querySelectorAll('.smooth-scroll').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Old typeEffect function removed - replaced by initRotatingSearchTerms() which is working correctly

// Rotating Images in Hero
const heroImages = [
    {
        img1: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=200&h=200&fit=crop',
        img2: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=200&h=200&fit=crop'
    },
    {
        img1: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=200&h=200&fit=crop',
        img2: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop'
    },
    {
        img1: 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=200&h=200&fit=crop',
        img2: 'https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?w=200&h=200&fit=crop'
    }
];

let currentImageSet = 0;

function rotateHeroImages() {
    const img1 = document.getElementById('heroImage1');
    const img2 = document.getElementById('heroImage2');
    
    if (img1 && img2) {
        currentImageSet = (currentImageSet + 1) % heroImages.length;
        
        img1.style.opacity = '0';
        img2.style.opacity = '0';
        
        setTimeout(() => {
            img1.src = heroImages[currentImageSet].img1;
            img2.src = heroImages[currentImageSet].img2;
            img1.style.opacity = '1';
            img2.style.opacity = '1';
        }, 300);
    }
}

// Start animations on page load
document.addEventListener('DOMContentLoaded', function() {
    try {
        // #region agent log
        fetch('http://127.0.0.1:7243/ingest/562aedea-5de9-436c-82ca-f7d2be6ec23c',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'script.js:103',message:'DOMContentLoaded fired',data:{timestamp:Date.now()},timestamp:Date.now(),sessionId:'debug-session',runId:'post-fix',hypothesisId:'C'})}).catch(()=>{});
        // #endregion
        
        // Duplicate product cards for infinite scroll
        if (typeof duplicateProductCards === 'function') {
            duplicateProductCards();
        }
    } catch (error) {
        console.error('Error in DOMContentLoaded:', error);
    }
});

// Duplicate product cards for seamless infinite scroll
function duplicateProductCards() {
    const column1 = document.getElementById('column1');
    const column2 = document.getElementById('column2');
    
    if (column1 && column2) {
        // Clone cards in column 1
        const column1Cards = column1.innerHTML;
        column1.innerHTML += column1Cards;
        
        // Clone cards in column 2
        const column2Cards = column2.innerHTML;
        column2.innerHTML += column2Cards;
    }
}

// Hero Brand Input Handler
// Removed setBrandIdea() and handleBrandIdea() - these functions referenced non-existent 'brandInput' element
// The current hero section uses 'nowlbSearchInput' and handleNowlbSearch() instead

function showBrandModal(idea) {
    // Create modal overlay
    const modal = document.createElement('div');
    modal.className = 'brand-modal';
    modal.innerHTML = `
        <div class="brand-modal-content">
            <div class="brand-modal-icon">
                <i class="fas fa-rocket"></i>
            </div>
            <h2>Amazing! 🎉</h2>
            <p class="brand-modal-idea">"${idea}"</p>
            <p class="brand-modal-text">
                NOWLB can help you turn this idea into reality in just 30 days!<br>
                We'll connect you with Lebanese manufacturers, AI-powered branding, and fulfillment.
            </p>
            <button class="brand-modal-btn" onclick="closeBrandModal()">
                Let's Build This Brand
                <i class="fas fa-arrow-right"></i>
            </button>
            <button class="brand-modal-close" onclick="closeBrandModal()">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Add styles dynamically
    if (!document.getElementById('modal-styles')) {
        const style = document.createElement('style');
        style.id = 'modal-styles';
        style.textContent = `
            .brand-modal {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: rgba(0, 0, 0, 0.8);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 10000;
                animation: fadeIn 0.3s ease;
                padding: 1rem;
            }
            
            .brand-modal-content {
                background: white;
                padding: 3rem;
                border-radius: 20px;
                max-width: 600px;
                width: 100%;
                text-align: center;
                position: relative;
                animation: slideUp 0.4s ease;
                box-shadow: 0 20px 60px rgba(0,0,0,0.3);
            }
            
            .brand-modal-icon {
                width: 100px;
                height: 100px;
                background: linear-gradient(135deg, #d1f2e0 0%, #1b734a 100%);
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 0 auto 2rem;
                font-size: 3rem;
                color: white;
            }
            
            .brand-modal-content h2 {
                font-size: 2.5rem;
                margin-bottom: 1rem;
                color: #111827;
            }
            
            .brand-modal-idea {
                font-size: 1.3rem;
                font-style: italic;
                color: #1b734a;
                margin-bottom: 1.5rem;
                font-weight: 600;
            }
            
            .brand-modal-text {
                font-size: 1.1rem;
                color: #4b5563;
                line-height: 1.7;
                margin-bottom: 2rem;
            }
            
            .brand-modal-btn {
                background: #1b734a;
                color: white;
                border: none;
                padding: 1.2rem 2.5rem;
                border-radius: 60px;
                font-size: 1.1rem;
                font-weight: 700;
                cursor: pointer;
                transition: all 0.3s;
                display: inline-flex;
                align-items: center;
                gap: 0.75rem;
            }
            
            .brand-modal-btn:hover {
                background: #134d32;
                transform: translateY(-3px);
                box-shadow: 0 10px 30px rgba(27, 115, 74, 0.3);
            }
            
            .brand-modal-close {
                position: absolute;
                top: 1.5rem;
                right: 1.5rem;
                background: #f3f4f6;
                border: none;
                width: 40px;
                height: 40px;
                border-radius: 50%;
                cursor: pointer;
                transition: all 0.3s;
                display: flex;
                align-items: center;
                justify-content: center;
                color: #4b5563;
            }
            
            .brand-modal-close:hover {
                background: #e5e7eb;
                transform: rotate(90deg);
            }
            
            @keyframes slideUp {
                from {
                    opacity: 0;
                    transform: translateY(30px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            
            @media (max-width: 768px) {
                .brand-modal-content {
                    padding: 2rem;
                }
                
                .brand-modal-content h2 {
                    font-size: 2rem;
                }
                
                .brand-modal-idea {
                    font-size: 1.1rem;
                }
                
                .brand-modal-text {
                    font-size: 1rem;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Trigger animation
    setTimeout(() => {
        modal.style.opacity = '1';
    }, 10);
}

function closeBrandModal() {
    const modal = document.querySelector('.brand-modal');
    if (modal) {
        modal.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => {
            modal.remove();
        }, 300);
    }
}

// Removed keypress handler for non-existent 'brandInput' element
// Enter key handling for nowlbSearchInput is already implemented in initRotatingSearchTerms()

// Get Started CTA
function handleGetStarted() {
    showGetStartedModal();
}

// Brand Signup Handler
function handleBrandSignup() {
    showBrandSignupModal();
}

// Manufacturer Signup Handler
function handleManufacturerSignup() {
    showManufacturerSignupModal();
}

function showGetStartedModal() {
    const modal = document.createElement('div');
    modal.className = 'brand-modal';
    modal.innerHTML = `
        <div class="brand-modal-content">
            <div class="brand-modal-icon">
                <i class="fas fa-check-circle"></i>
            </div>
            <h2>Let's Launch Your Brand! 🚀</h2>
            <p class="brand-modal-text">
                Welcome to NOWLB! This is our MVP demo.<br><br>
                In the full version, you'll be able to:<br>
                ✓ Browse 150+ Lebanese manufacturers<br>
                ✓ Design your branding with AI assistance<br>
                ✓ Set up fulfillment and start selling<br><br>
                <strong>All in just 30 days.</strong>
            </p>
            <button class="brand-modal-btn" onclick="closeBrandModal()">
                Explore the Platform
                <i class="fas fa-arrow-right"></i>
            </button>
            <button class="brand-modal-close" onclick="closeBrandModal()">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    document.body.appendChild(modal);
}

function showBrandSignupModal() {
    const modal = document.createElement('div');
    modal.className = 'brand-modal';
    modal.innerHTML = `
        <div class="brand-modal-content">
            <div class="brand-modal-icon">
                <i class="fas fa-store"></i>
            </div>
            <h2>Start Your Brand Journey 🎯</h2>
            <p class="brand-modal-text">
                Join NOWLB as a brand and get access to:<br><br>
                ✓ 150+ vetted Lebanese manufacturers<br>
                ✓ AI-powered branding tools<br>
                ✓ Zero upfront investment<br>
                ✓ Full fulfillment support<br>
                ✓ Launch in 30 days<br><br>
                <strong>Ready to get started?</strong>
            </p>
            <button class="brand-modal-btn" onclick="closeBrandModal()">
                Sign Up as Brand
                <i class="fas fa-arrow-right"></i>
            </button>
            <button class="brand-modal-close" onclick="closeBrandModal()">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    document.body.appendChild(modal);
}

function showManufacturerSignupModal() {
    const modal = document.createElement('div');
    modal.className = 'brand-modal';
    modal.innerHTML = `
        <div class="brand-modal-content">
            <div class="brand-modal-icon">
                <i class="fas fa-industry"></i>
            </div>
            <h2>Join as Manufacturer 🏭</h2>
            <p class="brand-modal-text">
                Connect your Lebanese manufacturing business with global brands:<br><br>
                ✓ Access hundreds of brand projects<br>
                ✓ Expand your customer base globally<br>
                ✓ Digital platform for easy management<br>
                ✓ Fair pricing and transparent processes<br>
                ✓ Support for scaling your business<br><br>
                <strong>Let's grow together!</strong>
            </p>
            <button class="brand-modal-btn" onclick="closeBrandModal()">
                Join as Manufacturer
                <i class="fas fa-arrow-right"></i>
            </button>
            <button class="brand-modal-close" onclick="closeBrandModal()">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    document.body.appendChild(modal);
}

// Add fadeOut animation to styles
const fadeOutStyle = document.createElement('style');
fadeOutStyle.textContent = `
    @keyframes fadeOut {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }
`;
document.head.appendChild(fadeOutStyle);

// Track scroll for nav shadow, active links, and progress bar
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
        navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
    } else {
        navbar.classList.remove('scrolled');
        navbar.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)';
    }
    
    // Update active nav link
    updateActiveNavLink();
});

// Update active navigation link based on scroll position
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link.smooth-scroll');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    try {
        const mobileToggle = document.querySelector('.mobile-menu-toggle');
        const navMenu = document.querySelector('.nav-menu');
        
        if (mobileToggle) {
            mobileToggle.addEventListener('click', function() {
                const isExpanded = this.getAttribute('aria-expanded') === 'true';
                this.setAttribute('aria-expanded', !isExpanded);
                navMenu.classList.toggle('active');
                this.classList.toggle('active');
            });
        }
        
        // Close mobile menu when clicking a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    navMenu.classList.remove('active');
                    mobileToggle.classList.remove('active');
                    mobileToggle.setAttribute('aria-expanded', 'false');
                }
            });
        });
        
        // Update current year
        const yearElement = document.getElementById('current-year');
        if (yearElement) {
            yearElement.textContent = new Date().getFullYear();
        }
        
        // Initialize FAQ accordion
        if (typeof initFAQ === 'function') {
            initFAQ();
        }
        
        // Initialize rotating text animation
        if (typeof initRotatingText === 'function') {
            initRotatingText();
        }
        
        // Initialize typing animation
        if (typeof initRotatingSearchTerms === 'function') {
            initRotatingSearchTerms();
        }
        
        // Initialize Lottie star animations
        if (typeof initLottieStars === 'function') {
            initLottieStars();
        }
        
        // Initialize suggestion chips
        if (typeof initSuggestionChips === 'function') {
            initSuggestionChips();
        }
    } catch (error) {
        console.error('Error initializing page:', error);
    }
});

// Initialize Suggestion Chips
function initSuggestionChips() {
    const chips = document.querySelectorAll('.suggestion-chip');
    const searchInput = document.getElementById('nowlbSearchInput');
    const searchBtn = document.getElementById('heroSearchBtn');
    const searchPlaceholder = document.getElementById('searchPlaceholder');
    
    function activateButton() {
        if (searchBtn) {
            searchBtn.classList.add('active');
        }
        if (searchPlaceholder) {
            searchPlaceholder.style.opacity = '0';
            searchPlaceholder.style.pointerEvents = 'none';
        }
    }
    
    function deactivateButton() {
        if (searchInput && searchInput.value.trim() === '') {
            if (searchBtn) {
                searchBtn.classList.remove('active');
            }
            if (searchPlaceholder) {
                searchPlaceholder.style.opacity = '1';
                searchPlaceholder.style.pointerEvents = 'auto';
            }
        }
    }
    
    chips.forEach(function(chip) {
        chip.addEventListener('click', function() {
            // Remove active class from all chips
            chips.forEach(function(c) {
                c.classList.remove('active');
            });
            
            // Add active class to clicked chip
            this.classList.add('active');
            
            if (searchInput) {
                searchInput.value = this.textContent.trim();
                searchInput.focus();
                activateButton();
            }
        });
    });
    
    // Input handlers
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            if (this.value.trim().length > 0) {
                activateButton();
            } else {
                deactivateButton();
            }
        });
        
        searchInput.addEventListener('focus', function() {
            if (this.value.trim().length > 0) {
                activateButton();
            }
        });
        
        searchInput.addEventListener('blur', function() {
            deactivateButton();
        });
        
        // Enter key handler
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                handleNowlbSearch();
            }
        });
    }
}

// Initialize Lottie Star Animations
function initLottieStars() {
    if (typeof lottie === 'undefined') {
        console.warn('Lottie library not loaded');
        return;
    }
    
    const starIcons = document.querySelectorAll('.new-home_heading-icon');
    
    starIcons.forEach(function(icon) {
        const lottieSrc = icon.getAttribute('data-src');
        if (lottieSrc) {
            const animation = lottie.loadAnimation({
                container: icon,
                renderer: 'svg',
                loop: icon.getAttribute('data-loop') === '1',
                autoplay: icon.getAttribute('data-autoplay') === '1',
                path: lottieSrc
            });
            
            // Store animation reference
            icon.lottieAnimation = animation;
            
            // Apply gradient to SVG after animation loads
            animation.addEventListener('DOMLoaded', function() {
                const svg = icon.querySelector('svg');
                if (svg) {
                    // Create gradient definition
                    const defs = svg.querySelector('defs') || document.createElementNS('http://www.w3.org/2000/svg', 'defs');
                    if (!svg.querySelector('defs')) {
                        svg.insertBefore(defs, svg.firstChild);
                    }
                    
                    // Apply color #1B734A to all paths in the SVG
                    const paths = svg.querySelectorAll('path');
                    paths.forEach(function(path) {
                        path.setAttribute('fill', '#1B734A');
                    });
                }
            });
        }
    });
}

// Typing Animation for Brand Search (ChatGPT Style)
function initRotatingSearchTerms() {
    // #region agent log
    fetch('http://127.0.0.1:7243/ingest/562aedea-5de9-436c-82ca-f7d2be6ec23c',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'script.js:591',message:'initRotatingSearchTerms called',data:{timestamp:Date.now()},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'D'})}).catch(()=>{});
    // #endregion
    const typingText = document.getElementById('typingText');
    const searchInput = document.getElementById('nowlbSearchInput');
    const searchPlaceholder = document.getElementById('searchPlaceholder');
    // #region agent log
    fetch('http://127.0.0.1:7243/ingest/562aedea-5de9-436c-82ca-f7d2be6ec23c',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'script.js:594',message:'Element lookups for typing animation',data:{typingTextFound:!!typingText,searchInputFound:!!searchInput,searchPlaceholderFound:!!searchPlaceholder},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'D'})}).catch(()=>{});
    // #endregion
    if (!typingText) return;
    
    const brandMessages = [
        'What product do you want to build?',
        'Build a beauty product line..',
        'Create a skin care brand',
        'Launch a makeup bag...',
        'Create sunglasses collection..',
        'Create kitchen storage containers..',
        'Create a lip balm brand...',
        'Make a sparkling drink..',
        'Create baby wipes brand..',
        'Launch a cosmetics brand..'
    ];
    
    let currentMessageIndex = 0;
    let isDeleting = false;
    let currentCharIndex = 0;
    const typingSpeed = 60;
    const deletingSpeed = 30;
    const pauseAfterComplete = 2500;
    const pauseAfterDelete = 800;
    
    function typeBrandMessage() {
        const currentMessage = brandMessages[currentMessageIndex];
        
        if (isDeleting) {
            // Deleting characters
            typingText.textContent = currentMessage.substring(0, currentCharIndex - 1);
            currentCharIndex--;
            
            if (currentCharIndex === 0) {
                isDeleting = false;
                currentMessageIndex = (currentMessageIndex + 1) % brandMessages.length;
                setTimeout(typeBrandMessage, pauseAfterDelete);
                return;
            }
            setTimeout(typeBrandMessage, deletingSpeed);
        } else {
            // Typing characters
            typingText.textContent = currentMessage.substring(0, currentCharIndex + 1);
            currentCharIndex++;
            
            if (currentCharIndex === currentMessage.length) {
                isDeleting = true;
                setTimeout(typeBrandMessage, pauseAfterComplete);
                return;
            }
            setTimeout(typeBrandMessage, typingSpeed);
        }
    }
    
    // Hide placeholder when user focuses on input
    if (searchInput) {
        searchInput.addEventListener('focus', function() {
            searchPlaceholder.style.opacity = '0';
            searchPlaceholder.style.pointerEvents = 'none';
        });
        
        searchInput.addEventListener('blur', function() {
            if (this.value === '') {
                searchPlaceholder.style.opacity = '1';
                searchPlaceholder.style.pointerEvents = 'auto';
            }
        });
        
        // When user starts typing, stop animation
        searchInput.addEventListener('input', function() {
            if (this.value.length > 0) {
                searchPlaceholder.style.opacity = '0';
            }
        });
    }
    
    // Start typing animation after a short delay
    setTimeout(typeBrandMessage, 1500);
    
    // Allow Enter key to trigger search
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                handleNowlbSearch();
            }
        });
    }
}

// Launch Brand Handler
function handleNowlbSearch() {
    const searchInput = document.getElementById('nowlbSearchInput');
    const brandIdea = searchInput ? searchInput.value.trim() : '';
    
    if (brandIdea) {
        // Redirect to get-started page or show modal
        console.log('Launching brand:', brandIdea);
        // You can redirect to get-started page or show a modal
        window.location.href = 'get-started.html?idea=' + encodeURIComponent(brandIdea);
    } else {
        // If empty, focus the input
        if (searchInput) {
            searchInput.focus();
        }
    }
}

// Hero Scale on Scroll Effect (like supliful.com)
function initHeroScaleOnScroll() {
    const heroSection = document.querySelector('.hero-split');
    if (!heroSection) return;
    
    let ticking = false;
    
    function updateHeroScale() {
        const scrollY = window.scrollY;
        const heroHeight = heroSection.offsetHeight;
        const heroTop = heroSection.offsetTop;
        const heroBottom = heroTop + heroHeight;
        const viewportHeight = window.innerHeight;
        
        // Calculate when hero starts to fade out (when bottom of hero enters viewport)
        const fadeStart = heroBottom - viewportHeight;
        const fadeEnd = heroBottom;
        const fadeRange = fadeEnd - fadeStart;
        
        if (scrollY <= heroHeight * 0.5) {
            // First half: scale down effect
            const maxScroll = heroHeight * 0.5;
            const scale = 1 - (scrollY / maxScroll) * 0.05; // Scale down by 5%
            const opacity = 1 - (scrollY / maxScroll) * 0.1; // Slight opacity change
            
            heroSection.style.transform = `scale(${scale})`;
            heroSection.style.opacity = opacity;
            heroSection.style.transformOrigin = 'center top';
        } else if (scrollY >= fadeStart && scrollY <= fadeEnd) {
            // Fade out phase: gradually fade to transparent
            const fadeProgress = (scrollY - fadeStart) / fadeRange;
            const opacity = Math.max(0, 1 - fadeProgress);
            const scale = 0.95 - (fadeProgress * 0.05); // Continue scaling down slightly
            
            heroSection.style.transform = `scale(${scale})`;
            heroSection.style.opacity = opacity;
            heroSection.style.transformOrigin = 'center top';
        } else if (scrollY > fadeEnd) {
            // Fully faded out
            heroSection.style.transform = 'scale(0.9)';
            heroSection.style.opacity = 0;
        } else {
            // Between scale phase and fade phase
            heroSection.style.transform = 'scale(0.95)';
            heroSection.style.opacity = 0.9;
        }
        
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            window.requestAnimationFrame(updateHeroScale);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestTick, { passive: true });
    
    // Initial call
    updateHeroScale();
}

// Rotating Text Animation (like Globy.com)
function initRotatingText() {
    const items = document.querySelectorAll('.rotating-text-item');
    if (items.length === 0) return;
    
    let currentIndex = 0;
    let isAnimating = false;
    let rotationInterval = null;
    
    // Initialize: show first item, hide others
    items.forEach((item, index) => {
        item.classList.remove('active', 'leaving');
        if (index === 0) {
            item.classList.add('active');
        }
    });
    
    function rotateText() {
        // Prevent overlapping animations
        if (isAnimating) return;
        isAnimating = true;
        
        const currentItem = items[currentIndex];
        const nextIndex = (currentIndex + 1) % items.length;
        const nextItem = items[nextIndex];
        
        // Reset next item to starting position
        nextItem.classList.remove('active', 'leaving');
        nextItem.offsetHeight; // Force reflow
        
        // Start next item sliding in
        requestAnimationFrame(() => {
            nextItem.classList.add('active');
            
            // Start current item sliding out (slight delay for overlap)
            requestAnimationFrame(() => {
                currentItem.classList.remove('active');
                currentItem.classList.add('leaving');
            });
        });
        
        // Update index and reset animation flag after transition completes
        setTimeout(() => {
            currentItem.classList.remove('leaving');
            currentIndex = nextIndex;
            isAnimating = false;
        }, 600); // Match CSS animation duration
    }
    
    // Start rotation after initial delay
    setTimeout(() => {
        rotateText(); // First rotation
        rotationInterval = setInterval(rotateText, 3000); // Continue every 3 seconds
    }, 2000);
}

// FAQ Accordion
function initFAQ() {
    const faqQuestions = document.querySelectorAll('.nowlb-faq-question, .faq-question, .nowlb-faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            const faqItem = this.closest('.nowlb-faq-item') || this.closest('.faq-item') || this.closest('.nowlb-faq-item');
            
            // Close all other items
            document.querySelectorAll('.nowlb-faq-item, .faq-item, .nowlb-faq-item').forEach(item => {
                if (item !== faqItem) {
                    item.classList.remove('active');
                    const q = item.querySelector('.nowlb-faq-question') || item.querySelector('.faq-question') || item.querySelector('.nowlb-faq-question');
                    if (q) q.setAttribute('aria-expanded', 'false');
                }
            });
            
            // Toggle current item
            if (isExpanded) {
                this.setAttribute('aria-expanded', 'false');
                if (faqItem) faqItem.classList.remove('active');
            } else {
                this.setAttribute('aria-expanded', 'true');
                if (faqItem) faqItem.classList.add('active');
            }
        });
    });
}

// Hero Scroll Animation (mttw.studio style)
function initHeroScrollAnimation() {
    const heroTitle = document.querySelector('.hero-title-nowlb');
    const heroBadge = document.querySelector('.hero-badge-nowlb');
    const heroSearch = document.querySelector('.hero-search-nowlb');
    
    if (!heroTitle || !heroBadge || !heroSearch) return;
    
    let ticking = false;
    
    function updateHeroOnScroll() {
        const heroSection = document.querySelector('.hero-nowlb');
        if (!heroSection) return;
        
        const scrollY = window.scrollY;
        const heroHeight = heroSection.offsetHeight;
        const heroTop = heroSection.getBoundingClientRect().top + scrollY;
        const scrollProgress = (scrollY - heroTop) / heroHeight;
        
        // Fade out completely by 50% scroll (fade from 0% to 50%)
        if (scrollProgress >= 0.5) {
            // Completely faded
            heroTitle.style.opacity = '0';
            heroBadge.style.opacity = '0';
            heroSearch.style.opacity = '0';
            heroTitle.style.transform = 'translate3d(0px, -20px, 0px) scale3d(0.95, 0.95, 1)';
            heroBadge.style.transform = 'translate3d(0px, -20px, 0px) scale3d(0.95, 0.95, 1)';
            heroSearch.style.transform = 'translate3d(0px, -20px, 0px) scale3d(0.95, 0.95, 1)';
            heroTitle.classList.add('scrolled');
            heroBadge.classList.add('scrolled');
            heroSearch.classList.add('scrolled');
        } else if (scrollProgress > 0) {
            // Fade from 0% to 50%
            const fadeProgress = scrollProgress / 0.5; // 0 to 1 as we go from 0% to 50%
            const opacity = Math.max(0, 1 - fadeProgress);
            const scale = Math.max(0.95, 1 - fadeProgress * 0.05);
            const translateY = -20 * fadeProgress;
            
            heroTitle.style.opacity = opacity;
            heroBadge.style.opacity = opacity;
            heroSearch.style.opacity = opacity;
            heroTitle.style.transform = `translate3d(0px, ${translateY}px, 0px) scale3d(${scale}, ${scale}, 1)`;
            heroBadge.style.transform = `translate3d(0px, ${translateY}px, 0px) scale3d(${scale}, ${scale}, 1)`;
            heroSearch.style.transform = `translate3d(0px, ${translateY}px, 0px) scale3d(${scale}, ${scale}, 1)`;
        } else {
            // At top, fully visible
            heroTitle.style.opacity = '1';
            heroBadge.style.opacity = '1';
            heroSearch.style.opacity = '1';
            heroTitle.style.transform = 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1)';
            heroBadge.style.transform = 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1)';
            heroSearch.style.transform = 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1)';
            heroTitle.classList.remove('scrolled');
            heroBadge.classList.remove('scrolled');
            heroSearch.classList.remove('scrolled');
        }
        
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            window.requestAnimationFrame(updateHeroOnScroll);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestTick, { passive: true });
}

