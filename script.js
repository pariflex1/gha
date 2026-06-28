/* ============================================
   GHA CONSTRUCTION - JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // === DYNAMIC RENDER SERVICES, PROJECTS & TEAM ===
  if (typeof PORTFOLIO_DATA !== 'undefined') {
    // 1. Render services on services.html
    const servicesContainer = document.getElementById('servicesContainer');
    if (servicesContainer && PORTFOLIO_DATA.services) {
      servicesContainer.innerHTML = PORTFOLIO_DATA.services.map((service, index) => {
        const isEven = index % 2 === 0;
        const dirStyle = isEven ? '' : 'direction:rtl;';
        const alignStyle = isEven ? '' : 'direction:ltr;';
        const srNo = String(index + 1).padStart(2, '0');
        return `
          <div class="safety-grid" style="margin-bottom:80px; ${dirStyle}" id="${service.id}">
            <div style="${alignStyle}">
              <div class="overview-image animate-on-scroll">
                <img src="${service.image}" alt="${service.title}">
              </div>
            </div>
            <div style="${alignStyle}">
              <div class="overview-content animate-on-scroll">
                <span class="section-label">Service ${srNo}</span>
                <h2>${service.title}</h2>
                <p>${service.description}</p>
                <div class="overview-features">
                  ${service.features.map(f => `<div class="overview-feature"><span class="check">&#10003;</span> ${f}</div>`).join('')}
                </div>
                <a href="contact.html" class="btn btn-primary">Get a Quote &#8594;</a>
              </div>
            </div>
          </div>
        `;
      }).join('');
    }

    // 2. Render services list on index.html (Our Services section)
    const servicesGrid = document.querySelector('.services-grid');
    if (servicesGrid && PORTFOLIO_DATA.services) {
      servicesGrid.innerHTML = PORTFOLIO_DATA.services.map(service => `
        <div class="service-card animate-on-scroll">
          <div class="service-icon">${service.icon || '&#127959;'}</div>
          <h3>${service.title}</h3>
          <p>${service.description.split('.')[0] + '.'}</p>
          <a href="services.html#${service.id}" class="btn-link">Learn More &#8594;</a>
        </div>
      `).join('');
    }

    // 3. Render projects on projects.html
    const projectsGrid = document.getElementById('projectsGrid');
    if (projectsGrid && PORTFOLIO_DATA.projects) {
      projectsGrid.innerHTML = PORTFOLIO_DATA.projects.map(project => `
        <div class="project-card animate-on-scroll" data-category="${project.category}">
          <div class="project-image">
            <img src="${project.image}" alt="${project.title}">
            <span class="project-category">${project.category.charAt(0).toUpperCase() + project.category.slice(1)}</span>
          </div>
          <div class="project-info">
            <h3>${project.title}</h3>
            <span class="location">&#128205; ${project.city}</span>
            <div style="display:flex;gap:16px;margin:12px 0;font-size:0.85rem;color:var(--gray-400);">
              <span>&#128207; ${project.area}</span>
              <span style="color:${project.status === 'Ongoing' ? '#22c55e' : 'var(--orange)'};font-weight:600;">${project.status}</span>
            </div>
            <div style="font-size:0.85rem;color:var(--gray-500);margin-bottom:12px;">Cost: ${project.cost} | Year: ${project.year}</div>
            <p style="font-size:0.9rem;color:var(--gray-600);margin-bottom:16px;">${project.description}</p>
          </div>
        </div>
      `).join('');
    }

    // 4. Render featured projects on index.html
    const featuredProjectsGrid = document.querySelector('.featured-projects .projects-grid');
    if (featuredProjectsGrid && PORTFOLIO_DATA.projects) {
      featuredProjectsGrid.innerHTML = PORTFOLIO_DATA.projects.slice(0, 3).map(project => `
        <div class="project-card animate-on-scroll">
          <div class="project-image">
            <img src="${project.image}" alt="${project.title}">
            <span class="project-category">${project.category.charAt(0).toUpperCase() + project.category.slice(1)}</span>
          </div>
          <div class="project-info">
            <h3>${project.title}</h3>
            <span class="location">&#128205; ${project.city}</span>
            <a href="projects.html" class="btn-link">View Details &#8594;</a>
          </div>
        </div>
      `).join('');
    }

    // 5. Render team members on who-we-are.html
    const teamGrid = document.querySelector('.team-grid');
    if (teamGrid && PORTFOLIO_DATA.team) {
      teamGrid.innerHTML = PORTFOLIO_DATA.team.map(member => `
        <div class="team-card animate-on-scroll">
          <div class="team-card-image">
            <img src="${member.image}" alt="${member.name}">
          </div>
          <div class="team-card-info">
            <h3>${member.name}</h3>
            <p style="color:var(--orange);font-weight:600;margin-bottom:4px;">${member.designation}</p>
            <p style="font-size:0.85rem;color:var(--gray-400);margin-bottom:4px;">Expertise: ${member.expertise}</p>
            ${member.staff !== '—' ? `<p style="font-size:0.85rem;color:var(--gray-400);">Staff Managed: ${member.staff}</p>` : ''}
          </div>
        </div>
      `).join('');
    }
  }

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

  // === STAGGER REVEAL ON PAGE LOAD ===
  const staggerElements = document.querySelectorAll('[data-reveal="stagger"]');
  if (staggerElements.length > 0) {
    staggerElements.forEach((el, i) => {
      const delay = parseInt(el.getAttribute('data-stagger-index')) * 200 + 2200;
      setTimeout(() => {
        el.classList.add('revealed');
      }, delay);
    });
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

  // === HERO SCROLL PARALLAX — text moves left/right ===
  const hero = document.getElementById('hero');
  const heroHeading = hero?.querySelector('h1');
  const heroParagraph = hero?.querySelector('p');
  const heroBadge = hero?.querySelector('.hero-badge');
  const heroActions = hero?.querySelector('.hero-actions');

  if (hero) {
    const handleHeroParallax = () => {
      const rect = hero.getBoundingClientRect();
      const progress = Math.max(0, Math.min(1, -rect.top / rect.height));

      if (heroHeading) {
        const moveX = progress * 60;
        heroHeading.style.transform = `translateX(-${moveX}px)`;
      }
      if (heroParagraph) {
        const moveX = progress * 40;
        heroParagraph.style.transform = `translateX(${moveX}px)`;
      }
      if (heroBadge) {
        const moveX = progress * 30;
        heroBadge.style.transform = `translateX(-${moveX}px)`;
      }
      if (heroActions) {
        const moveX = progress * 25;
        heroActions.style.transform = `translateX(${moveX}px)`;
      }
    };

    window.addEventListener('scroll', handleHeroParallax, { passive: true });
  }

  // === SCROLL INDICATOR CLICK — SMOOTH SCROLL TO NEXT SECTION ===
  const scrollIndicator = document.getElementById('scrollIndicator');
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
