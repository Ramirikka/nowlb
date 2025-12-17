# Complete CSS Fixes for Lovable Deployment

This document contains ALL the CSS changes needed to match the original NOWLB design exactly. Apply these fixes to your generated CSS file.

## 🔴 CRITICAL FIXES - Apply These First

### 1. Hero Background (Currently solid white, should be gradient)
```css
.hero-nowlb {
    background: linear-gradient(180deg, #f9fafb 0%, #ffffff 100%);
    padding: 5.46rem 0 4rem;
    min-height: 85vh;
    margin-top: 0;
}
```

### 2. Hero Map Background - Desktop
```css
.hero-map-background {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    z-index: 0;
    opacity: 1;
    pointer-events: none;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
}

.world-map-svg {
    width: 138%;
    height: 138%;
    max-width: none;
    object-fit: contain;
    object-position: center;
    opacity: 1;
}
```

### 3. Hero Badge Styling
```css
.hero-badge-nowlb {
    display: inline-flex;
    align-items: center;
    gap: 0.86rem;
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(0, 0, 0, 0.1);
    padding: 0.575rem 1.725rem;
    border-radius: 100px;
    font-size: 1rem;
    font-weight: 500;
    color: var(--gray-700);
    margin-bottom: 2.3rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.flag-emoji-large {
    font-size: 1.7rem;
    line-height: 1;
}

.hero-badge-text {
    font-size: 0.875rem;
    letter-spacing: -0.01em;
}
```

### 4. Hero Title Styling
```css
.hero-title-nowlb {
    font-size: var(--font-size-title);
    font-weight: var(--font-weight-medium);
    font-family: var(--font-family);
    line-height: var(--line-height-title);
    color: var(--gray-900);
    margin: -1.15rem auto var(--spacing-xl);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    letter-spacing: var(--letter-spacing-tight);
    max-width: 1150px;
}
```

### 5. Person Images - Desktop
```css
.person-img-1 {
    margin: 0 0.575rem;
    margin-top: -0.575rem;
    display: inline-block;
    width: 68px;
    height: 68px;
    object-fit: contain;
    vertical-align: middle;
}

.person-img-2 {
    margin: 0 0.575rem;
    margin-top: -0.86rem;
    display: inline-block;
    width: 92px;
    height: 66px;
    object-fit: contain;
    vertical-align: middle;
}

.person-img-2-mobile {
    display: none !important;
}
```

### 6. Search Wrapper Styling
```css
.search-wrapper-nowlb {
    position: relative;
    display: flex;
    align-items: center;
    background: var(--white);
    border: 1px solid #e5e7eb;
    border-radius: 32px;
    padding: 1.15rem 1.25rem;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
    transition: all 0.3s;
    min-height: 60px;
}

.search-wrapper-nowlb:focus-within {
    border-color: #d1d5db;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}
```

---

## 📱 TABLET FIXES (max-width: 1024px)

```css
@media (max-width: 1024px) {
    .container,
    .container-wide {
        padding: 0 1.75rem;
    }
    
    .hero-nowlb {
        padding: 4.78rem 0 5.2rem;
        margin-top: 0;
        min-height: 80vh;
    }
    
    .hero-title-nowlb {
        font-size: var(--font-size-h1-tablet);
    }
    
    .person-img-1 {
        width: 45px;
        height: 45px;
    }
    
    .person-img-2 {
        width: 80px;
        height: 56px;
    }
    
    .hero-search-nowlb {
        max-width: 90%;
    }
    
    .hero-map-background {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        overflow: hidden;
        opacity: 1;
    }
    
    .world-map-svg {
        width: 180%;
        height: 180%;
        max-width: none;
        max-height: none;
        opacity: 1;
        object-fit: contain;
    }
}
```

---

## 📱 MOBILE FIXES (max-width: 768px) - CRITICAL

### Mobile Containers
```css
@media (max-width: 768px) {
    .container,
    .container-wide {
        padding: 0 2.5%;
        max-width: 95%;
        width: 95%;
    }
    
    .nav-container {
        padding: 0 1.5rem;
        position: relative;
    }
```

### Mobile Hero Section
```css
    .hero-nowlb {
        padding: 0.68rem 0 3.12rem;
        overflow: hidden;
        margin-top: 0;
        min-height: 70vh;
    }
    
    .hero-map-background {
        top: 30%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        height: 100%;
        overflow: hidden;
        opacity: 1;
    }
    
    .world-map-svg {
        width: 360%;
        height: 360%;
        max-width: none;
        max-height: none;
        opacity: 1 !important;
        object-fit: contain;
    }
```

### Mobile Hero Badge
```css
    .hero-badge-nowlb {
        font-size: 0.875rem;
        padding: 0.5rem 1rem;
        gap: 0.5rem;
        margin-bottom: 1.5rem;
    }
    
    .flag-emoji-large {
        font-size: 1.2rem;
    }
```

### Mobile Hero Title - LEFT ALIGNED
```css
    .hero-title-nowlb {
        font-size: 1.4rem;
        line-height: 1.35;
        align-items: flex-start;
        max-width: 100%;
        margin: -0.5rem auto 2rem;
    }
    
    .hero-title-line {
        white-space: normal;
        flex-wrap: wrap;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        width: 100%;
        line-height: 1.35;
    }
    
    .desktop-text {
        display: none !important;
    }
    
    .mobile-text {
        display: inline !important;
    }
    
    .hero-line-1 {
        margin-bottom: 0.25rem;
    }
    
    .hero-line-2 {
        margin-top: 0.25rem;
    }
```

### Mobile Person Images
```css
    .person-img-1 {
        width: 30px;
        height: 30px;
        margin: 0 0.3rem;
        margin-top: -0.3rem;
    }
    
    .person-img-2 {
        width: 50px;
        height: 35px;
        margin: 0 0.3rem;
        margin-top: -0.5rem;
    }
```

### Mobile Container Scale - CRITICAL
```css
    .hero-nowlb .container-wide {
        transform: scale(0.91);
        transform-origin: top center;
        width: 95% !important;
        max-width: 95% !important;
    }
```

### Mobile Search
```css
    .hero-search-nowlb {
        max-width: 95% !important;
        padding: 0;
        width: 95% !important;
        margin: 0 auto;
    }
    
    .search-wrapper-nowlb {
        padding: 1rem 1rem;
        border-radius: 28px;
        min-height: 56px;
        width: 100%;
        max-width: 100%;
    }
    
    .search-placeholder-nowlb {
        left: 1.25rem;
        font-size: 1rem;
    }
    
    .hero-input-nowlb {
        font-size: 1rem;
        margin-right: 0.75rem;
    }
    
    .hero-search-icon-btn {
        width: 44px;
        height: 44px;
        padding: 0;
        min-width: 44px;
    }
    
    .hero-search-icon-btn span {
        display: none;
    }
    
    .hero-search-icon-btn i {
        font-size: 1rem;
    }
```

### Mobile Image2 - FIX SIZE (Currently too big)
```css
    .hero-title-line.hero-line-2 .mobile-text {
        display: inline-flex !important;
        align-items: center;
        gap: 0.5rem;
    }
    
    .hero-title-line.hero-line-2 .mobile-text .person-img-2-mobile {
        display: inline-block !important;
        vertical-align: middle !important;
        width: 75px !important;
        height: 53px !important;
        margin-left: 0.5rem !important;
        margin-right: 0 !important;
        margin-top: 0 !important;
        margin-bottom: 0 !important;
    }
    
    .hero-title-line.hero-line-2 .person-img-2 {
        display: none !important;
    }
```

### Mobile Product Gallery
```css
    .product-gallery-wrapper {
        position: relative !important;
        bottom: auto !important;
        margin-top: 1.5rem !important;
        margin-bottom: 0;
        padding: 0 !important;
        left: 0 !important;
        right: 0 !important;
        width: 100% !important;
        max-width: 100% !important;
        overflow: hidden !important;
        transform: none !important;
    }
    
    .product-gallery-wrapper > div {
        max-width: 100% !important;
        padding-left: 1.5rem !important;
        padding-right: 1.5rem !important;
        margin: 0 !important;
        width: 100% !important;
        overflow-x: hidden !important;
    }
    
    .product-gallery-wrapper .product-scroll-container {
        -webkit-mask-image: linear-gradient(rgb(0, 0, 0) 0%, rgb(0, 0, 0) 30%, rgba(0, 0, 0, 0.4) 70%, rgba(0, 0, 0, 0) 100%) !important;
        mask-image: linear-gradient(rgb(0, 0, 0) 0%, rgb(0, 0, 0) 30%, rgba(0, 0, 0, 0.4) 70%, rgba(0, 0, 0, 0) 100%) !important;
    }
    
    .product-gallery-wrapper .product-scroll-item {
        width: 200px !important;
        margin: 0 0.75rem !important;
        flex-shrink: 0 !important;
    }
```

### Mobile Opportunity Section
```css
    .opportunity-wrapper {
        margin-top: 0.5rem !important;
        margin-bottom: 1rem !important;
    }
    
    .opportunity-title {
        font-size: 1.75rem !important;
    }
    
    .nowlb-title {
        font-size: 2.25rem !important;
    }
```

### Mobile Sections
```css
    .nowlb-section {
        padding: 3rem 0;
    }
    
    .nowlb-features-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }
```

### Mobile How Section
```css
    #how {
        padding: 100px 0 50px 0;
    }
    
    .how-steps-container {
        padding: 0 1.5rem;
    }
    
    .how-steps-container:after {
        height: 0vh;
    }
    
    .how-step-card {
        flex-direction: column !important;
        padding: 30px;
        position: sticky;
        margin-bottom: 20px;
        min-height: 300px;
        gap: 30px;
    }
    
    .how-step-card[data-step="1"] {
        top: 80px;
        z-index: 1;
    }
    
    .how-step-card[data-step="2"] {
        top: 105px;
        z-index: 2;
    }
    
    .how-step-card[data-step="3"] {
        top: 90px;
        z-index: 3;
    }
    
    .how-step-spacer {
        height: 5vh;
    }
    
    .how-step-number {
        font-size: 40px;
    }
    
    .how-step-title {
        font-size: 28px;
    }
    
    .how-step-description {
        font-size: 16px;
    }
    
    .how-step-image {
        aspect-ratio: 16 / 9;
    }
}
```

---

## 🖥️ DESKTOP LARGE (min-width: 640px)

```css
@media (min-width: 640px) {
    .hero-title-nowlb {
        font-size: 3.75rem;
        letter-spacing: -0.92px;
    }
    
    .person-img-1 {
        width: 85px;
        height: 85px;
    }
    
    .person-img-2 {
        width: 127px;
        height: 90px;
    }
}
```

---

## ✅ SUMMARY OF KEY ISSUES FIXED

1. ✅ Hero background changed from solid white to gradient
2. ✅ Map SVG sizes corrected for all breakpoints (138% desktop, 180% tablet, 360% mobile)
3. ✅ Mobile hero title now left-aligned instead of centered
4. ✅ Mobile image2 size reduced from 108px×76px to 75px×53px
5. ✅ Container scale (0.91) properly applied on mobile
6. ✅ Hero badge padding and gap corrected
7. ✅ Person image margins and sizes corrected
8. ✅ Search wrapper styling corrected
9. ✅ Product gallery mobile positioning and fade mask restored
10. ✅ All mobile responsive breakpoints properly configured

---

## 📝 NOTES FOR LOVABLE

- All `!important` flags are intentional to override conflicting styles
- The mobile container scale (0.91) is critical for proper mobile layout
- The hero title must be left-aligned on mobile, not centered
- Image2 mobile size must be 75px×53px, not 108px×76px
- The product gallery fade mask is essential for the mobile design

Apply all these fixes in order, starting with the critical fixes at the top.

