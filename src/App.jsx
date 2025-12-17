import { useState, useEffect, useRef } from 'react'
import './styles.css'

function App() {
  // Ensure component mounts
  useEffect(() => {
    console.log('NOWLB App mounted successfully')
    // Verify root element exists
    const root = document.getElementById('root')
    if (root) {
      console.log('Root element found:', root)
    } else {
      console.error('Root element not found!')
    }
  }, [])
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const [typingText, setTypingText] = useState('')
  const [showPlaceholder, setShowPlaceholder] = useState(true)
  const [activeNav, setActiveNav] = useState('home')
  const [scrolled, setScrolled] = useState(false)
  const typingRef = useRef(null)
  const typingStateRef = useRef({
    currentMessageIndex: 0,
    isDeleting: false,
    currentCharIndex: 0
  })

  // Smooth scroll handler
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault()
    const target = document.querySelector(targetId)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setMobileMenuOpen(false)
    }
  }

  // Typing animation effect
  useEffect(() => {
    if (!showPlaceholder || searchValue) {
      setTypingText('')
      return
    }

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
    ]

    const typingSpeed = 60
    const deletingSpeed = 30
    const pauseAfterComplete = 2500
    const pauseAfterDelete = 800

    const typeBrandMessage = () => {
      if (!showPlaceholder || searchValue) {
        setTypingText('')
        return
      }

      const state = typingStateRef.current
      const currentMessage = brandMessages[state.currentMessageIndex]

      if (state.isDeleting) {
        setTypingText(currentMessage.substring(0, state.currentCharIndex - 1))
        state.currentCharIndex--

        if (state.currentCharIndex === 0) {
          state.isDeleting = false
          state.currentMessageIndex = (state.currentMessageIndex + 1) % brandMessages.length
          typingRef.current = setTimeout(typeBrandMessage, pauseAfterDelete)
          return
        }
        typingRef.current = setTimeout(typeBrandMessage, deletingSpeed)
      } else {
        setTypingText(currentMessage.substring(0, state.currentCharIndex + 1))
        state.currentCharIndex++

        if (state.currentCharIndex === currentMessage.length) {
          state.isDeleting = true
          typingRef.current = setTimeout(typeBrandMessage, pauseAfterComplete)
          return
        }
        typingRef.current = setTimeout(typeBrandMessage, typingSpeed)
      }
    }

    const timer = setTimeout(() => {
      if (showPlaceholder && !searchValue) {
        typeBrandMessage()
      }
    }, 1500)

    return () => {
      clearTimeout(timer)
      if (typingRef.current) {
        clearTimeout(typingRef.current)
        typingRef.current = null
      }
    }
  }, [showPlaceholder, searchValue])

  // Scroll handler for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      // Update active nav link
      const sections = document.querySelectorAll('section[id]')
      let current = 'home'
      sections.forEach(section => {
        const sectionTop = section.offsetTop
        if (window.scrollY >= sectionTop - 200) {
          current = section.getAttribute('id') || 'home'
        }
      })
      setActiveNav(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Handle search
  const handleSearch = () => {
    if (searchValue.trim()) {
      console.log('Launching brand:', searchValue)
      // You can redirect or show modal here
      window.location.href = `#home?idea=${encodeURIComponent(searchValue)}`
    }
  }

  const handleSearchKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  return (
    <>
      {/* Navigation */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} role="navigation" aria-label="Main navigation">
        <div className="nav-container">
          <a href="#home" className="nav-logo" aria-label="NOWLB Home" onClick={(e) => handleSmoothScroll(e, '#home')}>
            <img src="/images/nowlb-logo.svg" alt="NOWLB Logo" className="logo-img" />
          </a>
          <button 
            className={`mobile-menu-toggle ${mobileMenuOpen ? 'active' : ''}`}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
            <a 
              href="#home" 
              className={`nav-link smooth-scroll ${activeNav === 'home' ? 'active' : ''}`}
              onClick={(e) => handleSmoothScroll(e, '#home')}
            >
              HOME
            </a>
            <a 
              href="#how" 
              className={`nav-link smooth-scroll ${activeNav === 'how' ? 'active' : ''}`}
              onClick={(e) => handleSmoothScroll(e, '#how')}
            >
              HOW
            </a>
            <a 
              href="#why" 
              className={`nav-link smooth-scroll ${activeNav === 'why' ? 'active' : ''}`}
              onClick={(e) => handleSmoothScroll(e, '#why')}
            >
              WHY
            </a>
            <a 
              href="#impact" 
              className={`nav-link smooth-scroll ${activeNav === 'impact' ? 'active' : ''}`}
              onClick={(e) => handleSmoothScroll(e, '#impact')}
            >
              IMPACT
            </a>
          </div>
          <div className="nav-actions">
            <a href="#home" className="nav-link smooth-scroll" onClick={(e) => handleSmoothScroll(e, '#home')}>Login</a>
            <a href="#home" className="nav-link nav-cta smooth-scroll" onClick={(e) => handleSmoothScroll(e, '#home')}>Get Started</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-nowlb">
        <div className="hero-map-background">
          <img src="/images/Map.svg" alt="World Map" className="world-map-svg" />
        </div>
        <div className="container-wide">
          <div className="hero-badge-nowlb">
            <span className="flag-emoji-large">🇱🇧</span>
            <span className="hero-badge-text">Lebanon's First B2B Marketplace powered by AI</span>
          </div>

          <div className="hero-title-nowlb">
            <div className="hero-title-line hero-line-1">
              <span className="desktop-text">Connect</span>
              <span className="mobile-text">Connect with</span>
              <img 
                alt="Person 1" 
                loading="eager" 
                fetchPriority="high"
                width="65" 
                height="65" 
                decoding="async" 
                className="person-img-1" 
                src="/images/image1.webp" 
                style={{ color: 'transparent' }}
              />
              <span className="desktop-text">with Lebanese suppliers</span>
              <span className="mobile-text">Lebanese suppliers &</span>
            </div>
            <div className="hero-title-line hero-line-2">
              <span className="desktop-text">&amp; create <span className="highlight-products">products</span></span>
              <span className="mobile-text">create <span className="highlight-products">products</span> <img 
                alt="Person 2" 
                loading="eager" 
                fetchPriority="high"
                width="105" 
                height="74" 
                decoding="async" 
                className="person-img-2-mobile" 
                src="/images/image2.webp" 
                style={{ color: 'transparent' }}
              /></span>
              <img 
                alt="Person 2" 
                loading="eager" 
                fetchPriority="high"
                width="105" 
                height="74" 
                decoding="async" 
                className="person-img-2" 
                src="/images/image2.webp" 
                style={{ color: 'transparent' }}
              />
              <span className="desktop-text">with AI</span>
              <span className="mobile-text mobile-line-3">with AI</span>
            </div>
          </div>

          <div className="hero-search-nowlb">
            <div className="search-wrapper-nowlb">
              <div 
                className="search-placeholder-nowlb" 
                id="searchPlaceholder"
                style={{ opacity: showPlaceholder && !searchValue ? 1 : 0, pointerEvents: showPlaceholder && !searchValue ? 'auto' : 'none' }}
              >
                <span className="typing-text" id="typingText">{typingText}</span>
                <span className="typing-cursor">|</span>
              </div>
              <input 
                type="text" 
                id="nowlbSearchInput" 
                className="hero-input-nowlb" 
                placeholder=""
                aria-label="What do you want to design?"
                value={searchValue}
                onChange={(e) => {
                  setSearchValue(e.target.value)
                  setShowPlaceholder(e.target.value === '')
                }}
                onFocus={() => setShowPlaceholder(false)}
                onBlur={() => {
                  if (searchValue === '') {
                    setShowPlaceholder(true)
                  }
                }}
                onKeyPress={handleSearchKeyPress}
              />
              <button 
                className={`hero-search-icon-btn ${searchValue ? 'active' : ''}`}
                id="heroSearchBtn"
                onClick={handleSearch}
                aria-label="Submit"
              >
                <span>Launch Brand</span>
                <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Product Gallery Scroller */}
        <div className="product-gallery-wrapper" style={{ position: 'absolute', bottom: 0, left: 0, right: 0, overflow: 'hidden', zIndex: 2, pointerEvents: 'none' }}>
          <div style={{ maxWidth: '1136px', margin: 0, padding: 0, paddingLeft: '2rem' }}>
            <div 
              className="product-scroll-container" 
              style={{ 
                display: 'flex', 
                width: 'max-content', 
                animation: 'scrollLeft 60s linear infinite',
                WebkitMaskImage: 'linear-gradient(rgb(0, 0, 0) 0%, rgb(0, 0, 0) 30%, rgba(0, 0, 0, 0.4) 70%, rgba(0, 0, 0, 0) 100%)',
                maskImage: 'linear-gradient(rgb(0, 0, 0) 0%, rgb(0, 0, 0) 30%, rgba(0, 0, 0, 0.4) 70%, rgba(0, 0, 0, 0) 100%)',
                pointerEvents: 'auto'
              }}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8].map((num, idx) => (
                <div key={idx} className="product-scroll-item" style={{ flexShrink: 0, width: '240px', margin: '0 0.75rem' }}>
                  <div style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', aspectRatio: '5/4' }}>
                    <img 
                      alt="Product" 
                      className="product-scroll-image" 
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                      src={`/images/Product-${num}.webp`} 
                      loading="lazy" 
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HOW Section */}
      <section id="how" className="nowlb-section">
        <div className="container">
          <div className="nowlb-header how-header">
            <span className="nowlb-label">How it works</span>
            <h2 className="nowlb-title">Build your brand in <span className="highlight-steps">3 easy steps</span></h2>
          </div>

          <div className="how-steps-container">
            <div className="how-step-card how-card" data-step="1">
              <div className="how-step-content">
                <span className="how-step-number">01</span>
                <h3 className="how-step-title">Pick products</h3>
                <p className="how-step-description">Choose from 150+ Lebanese manufacturer products to find those that best match your brand.</p>
              </div>
              <div className="how-step-image">
                <img src="/images/Step1.webp" alt="Pick products from catalog" loading="lazy" />
              </div>
            </div>

            <div className="how-step-spacer" aria-hidden="true"></div>

            <div className="how-step-card how-card how-step-reverse" data-step="2">
              <div className="how-step-image">
                <img src="/images/Step2.webp" alt="Add your branding and customize labels" loading="lazy" />
                <div className="nowlb-badge">AI-powered</div>
              </div>
              <div className="how-step-content">
                <span className="how-step-number">02</span>
                <h3 className="how-step-title">Add your branding</h3>
                <p className="how-step-description">Customize your product labels to represent your brand.</p>
              </div>
            </div>

            <div className="how-step-spacer" aria-hidden="true"></div>

            <div className="how-step-card how-card" data-step="3">
              <div className="how-step-content">
                <span className="how-step-number">03</span>
                <h3 className="how-step-title">Make Sales</h3>
                <p className="how-step-description">List products on your store and set your profit margins, we take care of fulfillment.</p>
              </div>
              <div className="how-step-image">
                <img src="/images/Step3.webp" alt="Make sales and start selling" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Lebanon */}
      <section id="why" className="nowlb-section nowlb-section-dark nowlb-section-green">
        <div className="container">
          <div className="nowlb-header">
            <span className="nowlb-label">Why Lebanon</span>
            <h2 className="nowlb-title">Why Lebanon?</h2>
            <p className="nowlb-description">
              Lebanon is the perfect <strong>hidden manufacturing engine</strong> for global micro-brands
            </p>
          </div>

          <div className="nowlb-features-grid">
            {[
              { num: '01', title: 'Thousands of small, flexible workshops', desc: 'Plastic, metal, wood, textiles, assembly – all able to work with low minimum order quantities' },
              { num: '02', title: 'Extremely low MOQs vs Alibaba', desc: "Compared to Alibaba's high minimum order quantities (1,000+ units) and long shipping times, Lebanese manufacturers offer MOQs as low as 50 units—making it ideal for testing new ideas without committing to large inventories." },
              { num: '03', title: 'Creative hub of the Middle East', desc: 'Lebanese designers, brand strategists, and packaging experts ready to build unique brands' },
              { num: '04', title: 'Multilingual operations', desc: 'Arabic / French / English — perfect for selling into MENA, Europe, and Africa' },
              { num: '05', title: 'Diaspora logistics paths', desc: 'Strong ties and routes to EU, GCC, and Africa make export paths easier' },
              { num: '06', title: 'Fast prototyping culture', desc: 'Lebanese suppliers are used to improvising, adapting, and delivering quickly' }
            ].map((feature, idx) => (
              <div key={idx} className="nowlb-feature-card">
                <div className="nowlb-icon-wrapper">
                  <div className="nowlb-icon-number">{feature.num}</div>
                </div>
                <div className="nowlb-feature-content">
                  <h3 className="nowlb-feature-title">{feature.title}</h3>
                  <p className="nowlb-feature-description">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="nowlb-section">
        <div className="container">
          <div className="nowlb-header">
            <span className="nowlb-label">Social Impact</span>
            <h2 className="nowlb-title">🇱🇧 Impact on <span className="highlight-lebanon">Lebanon</span></h2>
            <div className="opportunity-wrapper" style={{ textAlign: 'center', marginTop: '0.5rem', marginBottom: '2rem' }}>
              <div className="opportunity-title" style={{ fontSize: '3rem', fontWeight: 'bold', color: '#1B734A', marginBottom: '0.5rem' }}>The $100M Opportunity</div>
              <p className="nowlb-description" style={{ marginTop: '1rem' }}>
                This isn't a feel-good project. It's a massive market opportunity.
              </p>
            </div>
          </div>

          <div style={{ background: 'linear-gradient(135deg, #f0fff7, #ffffff)', padding: '3rem', borderRadius: '1rem', border: '2px solid #1B734A', maxWidth: '1210px', margin: '0 auto', boxShadow: '0 10px 30px rgba(0,0,0,0.08)' }}>
            <h3 style={{ marginBottom: '2rem', color: '#1B734A', fontSize: '1.75rem', textAlign: 'center', fontWeight: 600 }}>Market Size Analysis</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '3rem', fontWeight: 'bold', color: 'var(--gray-900)', marginBottom: '0.5rem' }}>$2.3B</div>
                <div style={{ fontSize: '1rem', color: 'var(--gray-600)', lineHeight: 1.6 }}>Lebanese manufacturing output (pre-crisis, 2018)</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '3rem', fontWeight: 'bold', color: 'var(--gray-900)', marginBottom: '0.5rem' }}>$847M</div>
                <div style={{ fontSize: '1rem', color: 'var(--gray-600)', lineHeight: 1.6 }}>Export-ready capacity currently offline &amp; recoverable</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '3rem', fontWeight: 'bold', color: 'var(--gray-900)', marginBottom: '0.5rem' }}>92%</div>
                <div style={{ fontSize: '1rem', color: 'var(--gray-600)', lineHeight: 1.6 }}>Of Lebanese manufacturers have NO online presence. Lets fix that</div>
              </div>
            </div>
          </div>

          <div className="nowlb-features-grid" style={{ marginTop: '4rem' }}>
            {[
              { icon: 'fas fa-user-friends', title: 'Job Creation &amp; Economic Resilience', desc: 'Connects thousands of small Lebanese workshops to global demand. Creates steady work for skilled workers and encourages youth to stay and build careers in Lebanon.' },
              { icon: 'fas fa-globe-americas', title: 'Reducing Import Dependence', desc: 'Lebanese retailers can buy local, high-quality products instead of imports. Keeps value inside the economy and supports local industries.' },
              { icon: 'fas fa-store', title: 'Upgrading "Made in Lebanon"', desc: 'Exporting under strong brands shows Lebanon can build premium, global-ready products with exceptional craftsmanship.' }
            ].map((feature, idx) => (
              <div key={idx} className="nowlb-feature-card">
                <div className="nowlb-icon-wrapper">
                  <i className={`${feature.icon} nowlb-icon-fa`}></i>
                </div>
                <div className="nowlb-feature-content">
                  <h3 className="nowlb-feature-title" dangerouslySetInnerHTML={{ __html: feature.title }}></h3>
                  <p className="nowlb-feature-description">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="nowlb-section nowlb-section-dark nowlb-section-green nowlb-cta">
        <div className="container">
          <div className="nowlb-header">
            <h2 className="nowlb-title">Ready to launch your brand?</h2>
            <p className="nowlb-description">
              Join the revolution. Made in Lebanon 🇱🇧, sold to the world 🌍
            </p>
            <a href="#home" className="nowlb-btn nowlb-btn-primary smooth-scroll" onClick={(e) => handleSmoothScroll(e, '#home')}>
              Get Started
              <i className="fas fa-arrow-right"></i>
            </a>
            <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', paddingBottom: '1.5rem', borderTop: '1px solid rgba(255, 255, 255, 0.2)', textAlign: 'center', color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.875rem' }}>
              Copyright © 2025 NOWLB • Made with ❤️ in Lebanon
              <div style={{ marginTop: '1rem', textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src="/images/nowlb-logo.svg" alt="NOWLB Logo" style={{ height: '40px', width: 'auto', filter: 'brightness(0) invert(1)' }} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default App

