# 🔴 RESPONSIVENESS FIXES - Critical Differences Between Breakpoints

The biggest issue is that things look VERY different between desktop, tablet, and mobile. Here are the exact differences that need to be fixed.

---

## 📊 RESPONSIVE SIZE COMPARISON

### Hero Padding & Height
- **Desktop:** `padding: 5.46rem 0 4rem; min-height: 85vh;`
- **Tablet (1024px):** `padding: 4.78rem 0 5.2rem; min-height: 80vh;`
- **Mobile (768px):** `padding: 0.68rem 0 3.12rem; min-height: 70vh;`

### Hero Title Font Size
- **Desktop:** `font-size: 3rem` (or `3.75rem` at 640px+)
- **Tablet (1024px):** `font-size: var(--font-size-h1-tablet)` = `2rem`
- **Mobile (768px):** `font-size: 1.4rem`

### Person Image Sizes
- **Desktop:** `person-img-1: 68px×68px`, `person-img-2: 92px×66px`
- **Desktop Large (640px+):** `person-img-1: 85px×85px`, `person-img-2: 127px×90px`
- **Tablet (1024px):** `person-img-1: 45px×45px`, `person-img-2: 80px×56px`
- **Mobile (768px):** `person-img-1: 30px×30px`, `person-img-2: 50px×35px`

### Map SVG Sizes (CRITICAL - Very Different!)
- **Desktop:** `width: 138%; height: 138%;`
- **Tablet (1024px):** `width: 180%; height: 180%;`
- **Mobile (768px):** `width: 360%; height: 360%;`

### Container Padding & Width
- **Desktop:** `padding: 0 2rem; max-width: 1280px;`
- **Tablet (1024px):** `padding: 0 1.75rem;`
- **Mobile (768px):** `padding: 0 2.5%; max-width: 95%; width: 95%;` + `transform: scale(0.91);`

### Text Alignment (CRITICAL!)
- **Desktop/Tablet:** `text-align: center; justify-content: center;`
- **Mobile (768px):** `align-items: flex-start; justify-content: flex-start;` (LEFT ALIGNED!)

### Text Display (Shows Different Content!)
- **Desktop/Tablet:** `.desktop-text { display: inline; }` `.mobile-text { display: none; }`
- **Mobile (768px):** `.desktop-text { display: none !important; }` `.mobile-text { display: inline !important; }`

---

## 🎯 PROMPTS TO FIX RESPONSIVENESS

### Prompt 1: Fix Hero Padding & Height for All Breakpoints
```
Please ensure the hero section has different padding and min-height at each breakpoint:

Desktop (default):
.hero-nowlb {
    padding: 5.46rem 0 4rem;
    min-height: 85vh;
}

Tablet (@media max-width: 1024px):
.hero-nowlb {
    padding: 4.78rem 0 5.2rem;
    min-height: 80vh;
}

Mobile (@media max-width: 768px):
.hero-nowlb {
    padding: 0.68rem 0 3.12rem;
    min-height: 70vh;
}
```

### Prompt 2: Fix Hero Title Sizes for All Breakpoints
```
Please ensure the hero title has different font sizes at each breakpoint:

Desktop (default):
.hero-title-nowlb {
    font-size: 3rem;
}

Desktop Large (@media min-width: 640px):
.hero-title-nowlb {
    font-size: 3.75rem;
    letter-spacing: -0.92px;
}

Tablet (@media max-width: 1024px):
.hero-title-nowlb {
    font-size: var(--font-size-h1-tablet); /* which is 2rem */
}

Mobile (@media max-width: 768px):
.hero-title-nowlb {
    font-size: 1.4rem;
    line-height: 1.35;
}
```

### Prompt 3: Fix Person Image Sizes for All Breakpoints
```
Please ensure person images have different sizes at each breakpoint:

Desktop (default):
.person-img-1 { width: 68px; height: 68px; }
.person-img-2 { width: 92px; height: 66px; }

Desktop Large (@media min-width: 640px):
.person-img-1 { width: 85px; height: 85px; }
.person-img-2 { width: 127px; height: 90px; }

Tablet (@media max-width: 1024px):
.person-img-1 { width: 45px; height: 45px; }
.person-img-2 { width: 80px; height: 56px; }

Mobile (@media max-width: 768px):
.person-img-1 { width: 30px; height: 30px; margin: 0 0.3rem; margin-top: -0.3rem; }
.person-img-2 { width: 50px; height: 35px; margin: 0 0.3rem; margin-top: -0.5rem; }
```

### Prompt 4: Fix Map SVG Sizes for All Breakpoints (CRITICAL - Very Different!)
```
Please ensure the map SVG has dramatically different sizes at each breakpoint:

Desktop (default):
.world-map-svg {
    width: 138%;
    height: 138%;
    opacity: 1;
}

Tablet (@media max-width: 1024px):
.world-map-svg {
    width: 180%;
    height: 180%;
    max-width: none;
    max-height: none;
    opacity: 1;
}

Mobile (@media max-width: 768px):
.world-map-svg {
    width: 360%;
    height: 360%;
    max-width: none;
    max-height: none;
    opacity: 1 !important;
}
```

### Prompt 5: Fix Container Padding & Width for All Breakpoints
```
Please ensure containers have different padding and width at each breakpoint:

Desktop (default):
.container, .container-wide {
    padding: 0 2rem;
    max-width: 1280px;
}

Tablet (@media max-width: 1024px):
.container, .container-wide {
    padding: 0 1.75rem;
}

Mobile (@media max-width: 768px):
.container, .container-wide {
    padding: 0 2.5%;
    max-width: 95%;
    width: 95%;
}
```

### Prompt 6: Fix Mobile Container Scale (CRITICAL!)
```
Please ensure on mobile, the hero container is scaled down:

Mobile (@media max-width: 768px):
.hero-nowlb .container-wide {
    transform: scale(0.91);
    transform-origin: top center;
    width: 95% !important;
    max-width: 95% !important;
}
```

### Prompt 7: Fix Text Alignment - Center on Desktop/Tablet, Left on Mobile (CRITICAL!)
```
Please ensure text alignment changes between breakpoints:

Desktop/Tablet (default):
.hero-title-nowlb {
    text-align: center;
    align-items: center;
    justify-content: center;
}

.hero-title-line {
    justify-content: center;
}

Mobile (@media max-width: 768px):
.hero-title-nowlb {
    align-items: flex-start;
    text-align: left;
}

.hero-title-line {
    justify-content: flex-start;
    flex-direction: row;
    align-items: center;
}
```

### Prompt 8: Fix Text Display - Show Different Content on Mobile (CRITICAL!)
```
Please ensure different text is shown on mobile vs desktop:

Desktop/Tablet (default):
.desktop-text {
    display: inline;
}

.mobile-text {
    display: none;
}

Mobile (@media max-width: 768px):
.desktop-text {
    display: none !important;
}

.mobile-text {
    display: inline !important;
}
```

### Prompt 9: Fix Hero Badge Sizes for All Breakpoints
```
Please ensure the hero badge has different sizes at each breakpoint:

Desktop (default):
.hero-badge-nowlb {
    font-size: 1rem;
    padding: 0.575rem 1.725rem;
    gap: 0.86rem;
    margin-bottom: 2.3rem;
}

.flag-emoji-large {
    font-size: 1.7rem;
}

Mobile (@media max-width: 768px):
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

### Prompt 10: Fix Search Input Sizes for All Breakpoints
```
Please ensure the search input has different sizes at each breakpoint:

Desktop (default):
.search-wrapper-nowlb {
    padding: 1.15rem 1.25rem;
    min-height: 60px;
    border-radius: 32px;
}

.search-placeholder-nowlb {
    left: 1.5rem;
    font-size: 1.15rem;
}

.hero-input-nowlb {
    font-size: 1.15rem;
}

Mobile (@media max-width: 768px):
.search-wrapper-nowlb {
    padding: 1rem 1rem;
    min-height: 56px;
    border-radius: 28px;
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
    min-width: 44px;
}
```

### Prompt 11: Fix Mobile Image2 Size and Position
```
Please ensure on mobile, image2 is smaller and positioned differently:

Mobile (@media max-width: 768px):
.hero-title-line.hero-line-2 .mobile-text .person-img-2-mobile {
    display: inline-block !important;
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

### Prompt 12: Fix Product Gallery Sizes for All Breakpoints
```
Please ensure the product gallery has different sizes at each breakpoint:

Desktop (default):
.product-scroll-item {
    width: 280px;
    margin: 0 1rem;
}

Mobile (@media max-width: 768px):
.product-gallery-wrapper .product-scroll-item {
    width: 200px !important;
    margin: 0 0.75rem !important;
}
```

---

## ✅ CHECKLIST - Verify These Are Different at Each Breakpoint

After applying fixes, verify:

- [ ] Hero padding changes: 5.46rem → 4.78rem → 0.68rem
- [ ] Hero min-height changes: 85vh → 80vh → 70vh
- [ ] Hero title size changes: 3rem → 2rem → 1.4rem
- [ ] Person images change: 68px → 45px → 30px
- [ ] Map SVG changes: 138% → 180% → 360%
- [ ] Container padding changes: 2rem → 1.75rem → 2.5%
- [ ] Container width changes: 1280px → 1280px → 95%
- [ ] Mobile has scale(0.91) transform
- [ ] Text alignment: center → center → left
- [ ] Text content: desktop-text → desktop-text → mobile-text
- [ ] Search input sizes change appropriately
- [ ] Product gallery items change: 280px → 200px

---

## 🎯 QUICK FIX SUMMARY

The main responsiveness issues are:
1. **Sizes don't scale properly** - Everything should get smaller on mobile
2. **Map SVG is way too small on mobile** - Should be 360% not 138%
3. **Text alignment is wrong on mobile** - Should be left, not center
4. **Wrong text is showing on mobile** - Should show mobile-text, not desktop-text
5. **Container needs scale transform on mobile** - Should be scale(0.91)
6. **Padding/margins don't adjust** - Should be much smaller on mobile

Send these prompts in order to fix all responsiveness issues!

