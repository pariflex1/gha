/* ============================================
   GHA CONSTRUCTION - JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // === HEADER SCROLL EFFECT ===
  const header = document.getElementById('header');
  if (header && !header.classList.contains('scrolled')) {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
  }

  // === MOBILE MENU TOGGLE ===
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      mobileToggle.classList.toggle('active');
    });

    // Close menu when clicking a link
    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        mobileToggle.classList.remove('active');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
        navMenu.classList.remove('active');
        mobileToggle.classList.remove('active');
      }
    });
  }

  // === ANIMATED COUNTERS ===
  const animateCounter = (element, target) => {
    let current = 0;
    const increment = target / 60;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      element.textContent = Math.floor(current) + '+';
    }, 30);
  };

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = parseInt(entry.target.getAttribute('data-target'));
        if (target && !entry.target.classList.contains('counted')) {
          entry.target.classList.add('counted');
          animateCounter(entry.target, target);
        }
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('[data-target]').forEach(el => {
    counterObserver.observe(el);
  });

  // === SCROLL ANIMATIONS ===
  const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        scrollObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    scrollObserver.observe(el);
  });

  // === TESTIMONIAL SLIDER ===
  const track = document.getElementById('testimonialTrack');
  const dots = document.querySelectorAll('.testimonial-dot');
  if (track && dots.length > 0) {
    let currentSlide = 0;
    const totalSlides = dots.length;

    const goToSlide = (index) => {
      currentSlide = index;
      track.style.transform = `translateX(-${index * 100}%)`;
      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
      });
    };

    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => goToSlide(index));
    });

    // Auto-slide
    setInterval(() => {
      currentSlide = (currentSlide + 1) % totalSlides;
      goToSlide(currentSlide);
    }, 5000);
  }

  // === PROJECT FILTER ===
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('[data-category]');
  if (filterBtns.length > 0 && projectCards.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const filter = btn.getAttribute('data-filter');

        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        projectCards.forEach(card => {
          const category = card.getAttribute('data-category');
          if (filter === 'all' || category === filter) {
            card.style.display = '';
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            setTimeout(() => {
              card.style.opacity = '1';
              card.style.transform = 'translateY(0)';
              card.style.transition = 'all 0.4s ease';
            }, 50);
          } else {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            setTimeout(() => {
              card.style.display = 'none';
            }, 300);
          }
        });
      });
    });
  }

  // === HERO SMOOTH SCROLL ANIMATIONS (multi-layer parallax + content effects) ===
  const hero = document.getElementById('hero');
  const heroParallax = document.getElementById('heroParallax');
  const heroBgSecondary = document.getElementById('heroBgSecondary');
  const heroOverlay = document.getElementById('heroOverlay');
  const heroContent = document.getElementById('heroContent');
  const heroGlow = document.getElementById('heroGlow');
  const heroBuilding = document.getElementById('heroBuilding');
  const buildingBody = document.querySelector('.building-body');
  const buildingFloors = document.querySelectorAll('.building-floor');
  const buildingCrane = document.getElementById('buildingCrane');
  const heroStatsContainer = document.getElementById('heroStats');
  const scrollIndicator = document.getElementById('scrollIndicator');
  const heroProgress = document.getElementById('heroProgress');

  if (hero && heroParallax) {
    const handleHeroScroll = () => {
      const rect = hero.getBoundingClientRect();
      const heroHeight = rect.height;
      const scrollProgress = Math.max(0, Math.min(1, -rect.top / heroHeight));

      // 1. Multi-layer parallax background — different speeds for depth
      const primarySpeed = 0.3;
      const secondarySpeed = 0.15;
      heroParallax.style.transform = `translate3d(0, ${scrollProgress * heroHeight * primarySpeed}px, 0) scale(${1 + scrollProgress * 0.05})`;
      if (heroBgSecondary) {
        heroBgSecondary.style.transform = `translate3d(0, ${scrollProgress * heroHeight * secondarySpeed}px, 0)`;
        heroBgSecondary.style.opacity = Math.min(scrollProgress * 2, 0.5);
      }

      // 2. Overlay darkens progressively on scroll
      if (heroOverlay) {
        const overlayOpacity = 0.92 + scrollProgress * 0.08;
        heroOverlay.style.opacity = overlayOpacity;
      }

      // 3. Content scale & opacity — smooth fade-out as user scrolls down
      if (heroContent) {
        const contentProgress = Math.min(scrollProgress * 2, 1);
        const contentScale = 1 - contentProgress * 0.08;
        const contentOpacity = 1 - contentProgress;
        const contentY = scrollProgress * heroHeight * 0.1;
        heroContent.style.transform = `translate3d(0, ${contentY}px, 0) scale(${contentScale})`;
        heroContent.style.opacity = Math.max(contentOpacity, 0);
      }

      // 4. Stats slide out to the right on scroll
      if (heroStatsContainer) {
        const statsProgress = Math.min(scrollProgress * 1.5, 1);
        heroStatsContainer.style.transform = `translate3d(${statsProgress * 120}px, 0, 0)`;
        heroStatsContainer.style.opacity = Math.max(1 - statsProgress * 1.2, 0);
      }

      // 5. Glow orb moves with scroll
      if (heroGlow) {
        heroGlow.style.transform = `translateY(calc(-50% + ${scrollProgress * heroHeight * 0.15}px)) translateX(${scrollProgress * 80}px)`;
        heroGlow.style.opacity = Math.max(1 - scrollProgress * 1.5, 0);
      }

      // 6. Building construction animation — clip-path reveal on scroll
      if (buildingBody) {
        const revealPercent = Math.min(scrollProgress * 1.2, 1) * 100;
        buildingBody.style.clipPath = `inset(${100 - revealPercent}% 0 0 0)`;
      }

      // 6b. Windows light up progressively based on scroll
      if (buildingFloors.length > 0) {
        const totalFloors = buildingFloors.length;
        const floorsToLight = Math.floor(scrollProgress * totalFloors * 1.5);
        buildingFloors.forEach((floor, i) => {
          if (i < floorsToLight) {
            floor.classList.add('lit');
          } else {
            floor.classList.remove('lit');
          }
        });
      }

      // 6c. Crane sway increases with scroll
      if (buildingCrane) {
        const swayIntensity = 2 + scrollProgress * 4;
        buildingCrane.style.setProperty('--sway', `${swayIntensity}deg`);
      }

      // 7. Progress bar
      if (heroProgress) {
        heroProgress.style.width = `${scrollProgress * 100}%`;
      }

      // 8. Scroll indicator visibility
      if (scrollIndicator) {
        scrollIndicator.classList.toggle('hidden', scrollProgress > 0.12);
      }
    };

    window.addEventListener('scroll', handleHeroScroll, { passive: true });
    handleHeroScroll();
  }

  // === STAGGER REVEAL ON PAGE LOAD ===
  const staggerElements = document.querySelectorAll('[data-reveal="stagger"]');
  if (staggerElements.length > 0) {
    staggerElements.forEach((el, i) => {
      const delay = parseInt(el.getAttribute('data-stagger-index')) * 200 + 300;
      setTimeout(() => {
        el.classList.add('revealed');
      }, delay);
    });
  }

  // === STAT REVEAL ON SCROLL (with delay offsets) ===
  const statElements = document.querySelectorAll('[data-reveal="stat"]');
  if (statElements.length > 0) {
    const statObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const delay = parseInt(entry.target.getAttribute('data-stat-delay')) || 0;
          setTimeout(() => {
            entry.target.classList.add('revealed');
          }, delay);
          statObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });
    statElements.forEach(el => statObserver.observe(el));
  }

  // === LEGACY SCROLL REVEAL (for rest of page sections) ===
  const revealElements = document.querySelectorAll('[data-scroll-reveal]');
  if (revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const delay = parseInt(entry.target.getAttribute('data-scroll-delay')) || 0;
          setTimeout(() => {
            entry.target.classList.add('revealed');
          }, delay);
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

    revealElements.forEach(el => revealObserver.observe(el));
  }

  // === SCROLL INDICATOR CLICK — SMOOTH SCROLL TO NEXT SECTION ===
  if (scrollIndicator) {
    scrollIndicator.addEventListener('click', () => {
      const heroEl = document.getElementById('hero');
      if (heroEl) {
        const nextSection = heroEl.nextElementSibling;
        if (nextSection) {
          nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  }

  // === SMOOTH SCROLL FOR ANCHOR LINKS ===
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // === FORM SUBMISSION HANDLERS ===
  document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const originalText = btn.textContent;
      btn.textContent = 'Sending...';
      btn.disabled = true;

      setTimeout(() => {
        btn.textContent = 'Sent Successfully!';
        btn.style.background = '#22c55e';

        setTimeout(() => {
          btn.textContent = originalText;
          btn.style.background = '';
          btn.disabled = false;
          form.reset();
        }, 2000);
      }, 1500);
    });
  });

  // === GALLERY LIGHTBOX ===
  document.querySelectorAll('.project-image img, .news-image img, .media-card-image img, .team-card-image img').forEach(img => {
    img.style.cursor = 'pointer';
    img.addEventListener('click', () => {
      const overlay = document.createElement('div');
      overlay.style.cssText = `
        position: fixed;
        inset: 0;
        background: rgba(0,0,0,0.9);
        z-index: 9999;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        animation: fadeIn 0.3s ease;
      `;

      const largeImg = document.createElement('img');
      largeImg.src = img.src;
      largeImg.style.cssText = `
        max-width: 90%;
        max-height: 90vh;
        object-fit: contain;
        border-radius: 8px;
        box-shadow: 0 25px 50px rgba(0,0,0,0.5);
      `;

      const closeBtn = document.createElement('div');
      closeBtn.innerHTML = '&times;';
      closeBtn.style.cssText = `
        position: absolute;
        top: 20px;
        right: 30px;
        color: white;
        font-size: 2.5rem;
        cursor: pointer;
        z-index: 10000;
        width: 48px;
        height: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(255,255,255,0.1);
        border-radius: 50%;
        transition: background 0.3s;
      `;
      closeBtn.addEventListener('mouseenter', () => closeBtn.style.background = 'rgba(255,255,255,0.2)');
      closeBtn.addEventListener('mouseleave', () => closeBtn.style.background = 'rgba(255,255,255,0.1)');

      overlay.appendChild(largeImg);
      overlay.appendChild(closeBtn);
      document.body.appendChild(overlay);
      document.body.style.overflow = 'hidden';

      const closeLightbox = () => {
        overlay.style.opacity = '0';
        overlay.style.transition = 'opacity 0.3s ease';
        setTimeout(() => {
          overlay.remove();
          document.body.style.overflow = '';
        }, 300);
      };

      overlay.addEventListener('click', closeLightbox);
      closeBtn.addEventListener('click', closeLightbox);
      document.addEventListener('keydown', function handler(e) {
        if (e.key === 'Escape') {
          closeLightbox();
          document.removeEventListener('keydown', handler);
        }
      });
    });
  });

  // === HERO STATS COUNTER ===
  const heroStats = document.querySelectorAll('.hero-stat-number');
  if (heroStats.length > 0) {
    const heroObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = parseInt(entry.target.getAttribute('data-target'));
          if (target && !entry.target.classList.contains('counted')) {
            entry.target.classList.add('counted');
            animateCounter(entry.target, target);
          }
        }
      });
    }, { threshold: 0.5 });

    heroStats.forEach(el => heroObserver.observe(el));
  }

  // === ACTIVE NAV LINK HIGHLIGHT ===
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

});
