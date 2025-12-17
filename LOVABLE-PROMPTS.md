# Lovable CSS Fix Prompts - Send One at a Time

Copy and paste these prompts one by one to Lovable. Each prompt is a complete instruction.

---

## 🔴 CRITICAL FIXES - Send These First

### Prompt 1: Fix Hero Background
```
Please change the hero background from solid white to a gradient. Update .hero-nowlb to have:
background: linear-gradient(180deg, #f9fafb 0%, #ffffff 100%);
padding: 5.46rem 0 4rem;
min-height: 85vh;
margin-top: 0;
```

### Prompt 2: Fix Hero Map Background - Desktop
```
Please update the hero map background styling. Change .hero-map-background to:
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

And change .world-map-svg to:
width: 138%;
height: 138%;
max-width: none;
object-fit: contain;
object-position: center;
opacity: 1;
```

### Prompt 3: Fix Hero Badge Styling
```
Please update .hero-badge-nowlb to have:
gap: 0.86rem;
padding: 0.575rem 1.725rem;
font-size: 1rem;
font-weight: 500;
margin-bottom: 2.3rem;

And update .flag-emoji-large to:
font-size: 1.7rem;
line-height: 1;

And update .hero-badge-text to:
font-size: 0.875rem;
letter-spacing: -0.01em;
```

### Prompt 4: Fix Hero Title Styling
```
Please update .hero-title-nowlb to have:
font-size: var(--font-size-title);
margin: -1.15rem auto var(--spacing-xl);
max-width: 1150px;
```

### Prompt 5: Fix Person Images - Desktop
```
Please update .person-img-1 to have:
margin: 0 0.575rem;
margin-top: -0.575rem;
width: 68px;
height: 68px;

And update .person-img-2 to have:
margin: 0 0.575rem;
margin-top: -0.86rem;
width: 92px;
height: 66px;

And ensure .person-img-2-mobile has:
display: none !important;
```

### Prompt 6: Fix Search Wrapper
```
Please update .search-wrapper-nowlb to have:
border-radius: 32px;
padding: 1.15rem 1.25rem;
box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);

And update .search-wrapper-nowlb:focus-within to have:
box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
```

---

## 📱 TABLET FIXES (max-width: 1024px)

### Prompt 7: Fix Tablet Containers and Hero
```
Please update the @media (max-width: 1024px) section. Change:
.container, .container-wide to have: padding: 0 1.75rem;

.hero-nowlb to have:
padding: 4.78rem 0 5.2rem;
margin-top: 0;
min-height: 80vh;

.hero-title-nowlb to have: font-size: var(--font-size-h1-tablet);

.person-img-1 to have: width: 45px; height: 45px;

.person-img-2 to have: width: 80px; height: 56px;

.hero-search-nowlb to have: max-width: 90%;
```

### Prompt 8: Fix Tablet Map Sizes
```
Please update the @media (max-width: 1024px) section. Change .world-map-svg to have:
width: 180%;
height: 180%;
max-width: none;
max-height: none;
opacity: 1;
object-fit: contain;
```

---

## 📱 MOBILE FIXES (max-width: 768px) - CRITICAL

### Prompt 9: Fix Mobile Containers
```
Please update the @media (max-width: 768px) section. Change:
.container, .container-wide to have:
padding: 0 2.5%;
max-width: 95%;
width: 95%;

And .nav-container to have:
padding: 0 1.5rem;
position: relative;
```

### Prompt 10: Fix Mobile Hero Section
```
Please update the @media (max-width: 768px) section. Change .hero-nowlb to have:
padding: 0.68rem 0 3.12rem;
overflow: hidden;
margin-top: 0;
min-height: 70vh;
```

### Prompt 11: Fix Mobile Map Background
```
Please update the @media (max-width: 768px) section. Change .hero-map-background to have:
top: 30%;
left: 50%;
transform: translate(-50%, -50%);
width: 100%;
height: 100%;
overflow: hidden;
opacity: 1;

And change .world-map-svg to have:
width: 360%;
height: 360%;
max-width: none;
max-height: none;
opacity: 1 !important;
object-fit: contain;
```

### Prompt 12: Fix Mobile Hero Badge
```
Please update the @media (max-width: 768px) section. Change .hero-badge-nowlb to have:
font-size: 0.875rem;
padding: 0.5rem 1rem;
gap: 0.5rem;
margin-bottom: 1.5rem;

And change .flag-emoji-large to have: font-size: 1.2rem;
```

### Prompt 13: Fix Mobile Hero Title - LEFT ALIGNED (CRITICAL)
```
Please update the @media (max-width: 768px) section. Change .hero-title-nowlb to have:
font-size: 1.4rem;
line-height: 1.35;
align-items: flex-start;
max-width: 100%;
margin: -0.5rem auto 2rem;

And change .hero-title-line to have:
white-space: normal;
flex-wrap: wrap;
flex-direction: row;
align-items: center;
justify-content: flex-start;
width: 100%;
line-height: 1.35;

And ensure .desktop-text has: display: none !important;
And .mobile-text has: display: inline !important;
```

### Prompt 14: Fix Mobile Hero Line Spacing
```
Please update the @media (max-width: 768px) section. Change:
.hero-line-1 to have: margin-bottom: 0.25rem;
.hero-line-2 to have: margin-top: 0.25rem;
```

### Prompt 15: Fix Mobile Person Images
```
Please update the @media (max-width: 768px) section. Change .person-img-1 to have:
width: 30px;
height: 30px;
margin: 0 0.3rem;
margin-top: -0.3rem;

And change .person-img-2 to have:
width: 50px;
height: 35px;
margin: 0 0.3rem;
margin-top: -0.5rem;
```

### Prompt 16: Fix Mobile Container Scale (CRITICAL)
```
Please update the @media (max-width: 768px) section. Change .hero-nowlb .container-wide to have:
transform: scale(0.91);
transform-origin: top center;
width: 95% !important;
max-width: 95% !important;
```

### Prompt 17: Fix Mobile Search
```
Please update the @media (max-width: 768px) section. Change .hero-search-nowlb to have:
max-width: 95% !important;
padding: 0;
width: 95% !important;
margin: 0 auto;

And change .search-wrapper-nowlb to have:
padding: 1rem 1rem;
border-radius: 28px;
min-height: 56px;
width: 100%;
max-width: 100%;

And change .search-placeholder-nowlb to have:
left: 1.25rem;
font-size: 1rem;

And change .hero-input-nowlb to have:
font-size: 1rem;
margin-right: 0.75rem;
```

### Prompt 18: Fix Mobile Search Button
```
Please update the @media (max-width: 768px) section. Change .hero-search-icon-btn to have:
width: 44px;
height: 44px;
padding: 0;
min-width: 44px;

And ensure .hero-search-icon-btn span has: display: none;
And .hero-search-icon-btn i has: font-size: 1rem;
```

### Prompt 19: Fix Mobile Image2 Size (CRITICAL - Currently Too Big)
```
Please update the @media (max-width: 768px) section. Change .hero-title-line.hero-line-2 .mobile-text to have:
display: inline-flex !important;
align-items: center;
gap: 0.5rem;

And change .hero-title-line.hero-line-2 .mobile-text .person-img-2-mobile to have:
display: inline-block !important;
vertical-align: middle !important;
width: 75px !important;
height: 53px !important;
margin-left: 0.5rem !important;
margin-right: 0 !important;
margin-top: 0 !important;
margin-bottom: 0 !important;

And ensure .hero-title-line.hero-line-2 .person-img-2 has: display: none !important;
```

### Prompt 20: Fix Mobile Product Gallery Position
```
Please update the @media (max-width: 768px) section. Change .product-gallery-wrapper to have:
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
```

### Prompt 21: Fix Mobile Product Gallery Container
```
Please update the @media (max-width: 768px) section. Change .product-gallery-wrapper > div to have:
max-width: 100% !important;
padding-left: 1.5rem !important;
padding-right: 1.5rem !important;
margin: 0 !important;
width: 100% !important;
overflow-x: hidden !important;
```

### Prompt 22: Fix Mobile Product Gallery Fade Mask
```
Please update the @media (max-width: 768px) section. Change .product-gallery-wrapper .product-scroll-container to have:
-webkit-mask-image: linear-gradient(rgb(0, 0, 0) 0%, rgb(0, 0, 0) 30%, rgba(0, 0, 0, 0.4) 70%, rgba(0, 0, 0, 0) 100%) !important;
mask-image: linear-gradient(rgb(0, 0, 0) 0%, rgb(0, 0, 0) 30%, rgba(0, 0, 0, 0.4) 70%, rgba(0, 0, 0, 0) 100%) !important;
```

### Prompt 23: Fix Mobile Product Gallery Items
```
Please update the @media (max-width: 768px) section. Change .product-gallery-wrapper .product-scroll-item to have:
width: 200px !important;
margin: 0 0.75rem !important;
flex-shrink: 0 !important;
```

### Prompt 24: Fix Mobile Opportunity Section
```
Please update the @media (max-width: 768px) section. Change .opportunity-wrapper to have:
margin-top: 0.5rem !important;
margin-bottom: 1rem !important;

And change .opportunity-title to have: font-size: 1.75rem !important;

And change .nowlb-title to have: font-size: 2.25rem !important;
```

### Prompt 25: Fix Mobile Sections
```
Please update the @media (max-width: 768px) section. Change .nowlb-section to have:
padding: 3rem 0;

And change .nowlb-features-grid to have:
grid-template-columns: 1fr;
gap: 1.5rem;
```

### Prompt 26: Fix Mobile How Section
```
Please update the @media (max-width: 768px) section. Change #how to have:
padding: 100px 0 50px 0;

And change .how-steps-container to have: padding: 0 1.5rem;

And change .how-steps-container:after to have: height: 0vh;

And change .how-step-card to have:
flex-direction: column !important;
padding: 30px;
position: sticky;
margin-bottom: 20px;
min-height: 300px;
gap: 30px;
```

### Prompt 27: Fix Mobile How Step Positions
```
Please update the @media (max-width: 768px) section. Change:
.how-step-card[data-step="1"] to have: top: 80px; z-index: 1;
.how-step-card[data-step="2"] to have: top: 105px; z-index: 2;
.how-step-card[data-step="3"] to have: top: 90px; z-index: 3;

And change .how-step-spacer to have: height: 5vh;
```

### Prompt 28: Fix Mobile How Step Sizes
```
Please update the @media (max-width: 768px) section. Change:
.how-step-number to have: font-size: 40px;
.how-step-title to have: font-size: 28px;
.how-step-description to have: font-size: 16px;
.how-step-image to have: aspect-ratio: 16 / 9;
```

---

## 🖥️ DESKTOP LARGE (min-width: 640px)

### Prompt 29: Fix Desktop Large Sizes
```
Please update the @media (min-width: 640px) section. Change:
.hero-title-nowlb to have: font-size: 3.75rem; letter-spacing: -0.92px;
.person-img-1 to have: width: 85px; height: 85px;
.person-img-2 to have: width: 127px; height: 90px;
```

---

## ✅ FINAL CHECK

### Prompt 30: Verify All Changes Applied
```
Please verify that all the following are correctly applied:
1. Hero background is gradient (not solid white)
2. Map SVG sizes: 138% desktop, 180% tablet, 360% mobile
3. Mobile hero title is left-aligned (not centered)
4. Mobile image2 is 75px×53px (not 108px×76px)
5. Mobile container has scale(0.91) transform
6. All mobile responsive styles are in place
```

---

## 📝 USAGE INSTRUCTIONS

1. Send prompts 1-6 first (Critical Fixes)
2. Then send prompts 7-8 (Tablet Fixes)
3. Then send prompts 9-28 (Mobile Fixes) - these are the most important
4. Then send prompt 29 (Desktop Large)
5. Finally send prompt 30 (Verification)

You can send them one at a time, or group a few together if they're related (like all the mobile fixes).

