// ============================================
// PROGRESS BAR ON SCROLL
// ============================================
window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;
    document.getElementById('progressBar').style.width = progress + '%';
});

// ============================================
// NAVBAR SCROLL EFFECT
// ============================================
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ============================================
// MOBILE NAV TOGGLE
// ============================================
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => navLinks.classList.toggle('show'));
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) navLinks.classList.remove('show');
        });
    });
}

// ============================================
// SMOOTH SCROLL
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId && targetId !== '#') {
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                const offset = 80;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({ top: targetPosition, behavior: 'smooth' });
            }
        }
    });
});

// ============================================
// TYPEWRITER EFFECT
// ============================================
const subtitle = document.getElementById('typewriterText');
const originalText = 'Inbox Management · Calendar Coordination · Workflow Automation · Operations Systems';
subtitle.textContent = '';
let charIndex = 0;

function typeWriter() {
    if (charIndex < originalText.length) {
        subtitle.textContent += originalText.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, 30);
    }
}
setTimeout(typeWriter, 1200);

// ============================================
// GLOW TRAIL
// ============================================
const glowTrail = document.getElementById('glowTrail');
let glowTimeout;

document.addEventListener('mousemove', (e) => {
    if (window.innerWidth <= 768) return;
    glowTrail.style.left = e.clientX + 'px';
    glowTrail.style.top = e.clientY + 'px';
    glowTrail.classList.add('active');

    clearTimeout(glowTimeout);
    glowTimeout = setTimeout(() => {
        glowTrail.classList.remove('active');
    }, 3000);
});

document.addEventListener('mouseleave', () => {
    glowTrail.classList.remove('active');
});

// ============================================
// CUSTOM CURSOR
// ============================================
const customCursor = document.getElementById('customCursor');
let cursorTimeout;

if (customCursor) {
    document.addEventListener('mousemove', (e) => {
        if (window.innerWidth <= 768) return;
        customCursor.style.left = e.clientX + 'px';
        customCursor.style.top = e.clientY + 'px';
        customCursor.classList.add('active');

        clearTimeout(cursorTimeout);
        cursorTimeout = setTimeout(() => {
            customCursor.classList.remove('active');
        }, 2000);
    });

    document.addEventListener('mouseleave', () => {
        customCursor.classList.remove('active');
    });

    document.querySelectorAll('a, .btn, .work-card-new, .service-card-horizontal, .testimonial-card-new, .tilt-card, .worksample-card')
        .forEach(el => {
            el.addEventListener('mouseenter', () => {
                customCursor.classList.add('hover');
            });
            el.addEventListener('mouseleave', () => {
                customCursor.classList.remove('hover');
            });
        });
}

// ============================================
// PARTICLES
// ============================================
function createParticles() {
    const container = document.getElementById('particlesContainer');
    if (!container) return;
    if (window.innerWidth < 768) return;

    const particleCount = 35;
    const colors = ['rgba(212,175,55,0.6)', 'rgba(212,175,55,0.3)', 'rgba(232,200,74,0.4)'];

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        const size = Math.random() * 5 + 2;
        const duration = Math.random() * 12 + 8;
        const delay = Math.random() * 10;
        const drift = (Math.random() - 0.5) * 200;
        const opacity = Math.random() * 0.3 + 0.1;
        const color = colors[Math.floor(Math.random() * colors.length)];

        particle.style.cssText = `
            width: ${size}px;
            height: ${size}px;
            background: ${color};
            left: ${Math.random() * 100}%;
            --duration: ${duration}s;
            --delay: ${delay}s;
            --drift: ${drift}px;
            --opacity: ${opacity};
            animation-delay: ${delay}s;
        `;

        container.appendChild(particle);
    }
}

// ============================================
// 3D TILT ON CARDS
// ============================================
document.querySelectorAll('.tilt-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        if (window.innerWidth <= 768) return;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -8;
        const rotateY = ((x - centerX) / centerX) * 8;

        card.style.setProperty('--rotateX', rotateX + 'deg');
        card.style.setProperty('--rotateY', rotateY + 'deg');
    });

    card.addEventListener('mouseleave', () => {
        card.style.setProperty('--rotateX', '0deg');
        card.style.setProperty('--rotateY', '0deg');
    });
});

// ============================================
// BUTTON RIPPLE EFFECT
// ============================================
document.querySelectorAll('.btn-ripple').forEach(btn => {
    btn.addEventListener('click', function (e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const ripple = document.createElement('span');
        ripple.style.cssText = `
            position: absolute;
            top: ${y}px;
            left: ${x}px;
            width: 0;
            height: 0;
            border-radius: 50%;
            background: rgba(255,255,255,0.3);
            transform: translate(-50%, -50%);
            pointer-events: none;
            transition: width 0.6s ease, height 0.6s ease;
        `;
        this.appendChild(ripple);
        setTimeout(() => {
            ripple.style.width = '300px';
            ripple.style.height = '300px';
        }, 10);
        setTimeout(() => {
            ripple.remove();
        }, 700);
    });
});

// ============================================
// ACTIVE NAV LINK HIGHLIGHT
// ============================================
const sections = document.querySelectorAll('section');
const navLinkItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });
    navLinkItems.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ============================================
// SMOOTH SECTION TRANSITIONS
// ============================================
const hiddenSections = document.querySelectorAll('.section-hidden');

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

hiddenSections.forEach(section => {
    sectionObserver.observe(section);
});

// ============================================
// STATS COUNTER (with suffix support)
// ============================================
const counters = document.querySelectorAll('.counter');

const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = parseInt(entry.target.getAttribute('data-target'));
            const suffix = entry.target.getAttribute('data-suffix') || '';
            const duration = 2000;
            const startTime = performance.now();

            function updateCounter(currentTime) {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const eased = 1 - Math.pow(1 - progress, 3);
                const current = Math.floor(eased * target);
                entry.target.textContent = current + suffix;

                if (progress < 1) {
                    requestAnimationFrame(updateCounter);
                } else {
                    entry.target.textContent = target + suffix;
                }
            }
            requestAnimationFrame(updateCounter);
            counterObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

counters.forEach(counter => {
    counterObserver.observe(counter);
});

// ============================================
// CASE STUDY MODAL SYSTEM
// ============================================
const caseStudies = {
    case1: {
        title: "Inbox Management",
        subtitle: "From 100+ emails daily to inbox zero",
        problem: "My client was struggling with an overwhelming inbox, receiving over 100 emails daily. Important messages were getting lost and response times were delayed.",
        process: "I set up folders and labels to categorize emails - urgent, follow-ups, newsletters etc. Implemented filters, flagged, archived emails to maintain daily inbox zero system.",
        result: "✅ Reduced inbox clutter by 85%\n✅ Improved response time from 48 hours to 12 hours\n✅ Ensured no important emails were missed\n✅ Created sustainable system for long term management",
        tools: ["Gmail", "Google Workspace", "Email Filters"]
    },
    case2: {
        title: "Calendar Management",
        subtitle: "Seamless scheduling & coordination",
        problem: "Client was struggling with scheduling conflicts, double-bookings, and missed appointments.",
        process: "Implemented Calendly with custom booking rules and time zone detection. Set up calendar sync across multiple devices.",
        result: "✅ 100% elimination of double-bookings\n✅ 2+ hours saved weekly on scheduling\n✅ Improved client experience",
        tools: ["Calendly", "Google Calendar"]
    },
    case3: {
        title: "Client Onboarding System",
        subtitle: "Structured onboarding for new clients",
        problem: "The business had no standardized onboarding process, leading to confusion and delayed start times.",
        process: "Created comprehensive client onboarding system including welcome emails, task briefs, and shared Google Drive folders.",
        result: "✅ Faster client onboarding\n✅ Clear communication from day one\n✅ Professional first impression",
        tools: ["Google Drive", "Notion", "Email"]
    },
    case4: {
        title: "Project Management",
        subtitle: "Trello & ClickUp coordination",
        problem: "The team was struggling with task coordination, missed deadlines, and lack of visibility.",
        process: "Set up Trello and ClickUp workspaces with custom task statuses, automations, and dashboards.",
        result: "✅ 100% on-time project delivery\n✅ Improved team accountability\n✅ Real-time project visibility",
        tools: ["Trello", "ClickUp", "Slack"]
    },
    case5: {
        title: "File Management",
        subtitle: "Google Drive organization",
        problem: "Files were scattered across Google Drive with no naming conventions or folder structure.",
        process: "Organized Google Drive with clear folder structures and naming conventions. Set up shared drives for collaboration.",
        result: "✅ Document retrieval improved by 40%\n✅ Better team collaboration\n✅ Professional file management",
        tools: ["Google Drive", "Google Workspace"]
    },
    case6: {
        title: "Google Sheets Reporting",
        subtitle: "Data entry & reporting systems",
        problem: "Manual data entry and reporting was consuming hours of the client's time every week.",
        process: "Created automated Google Sheets systems for data entry, tracking, and reporting.",
        result: "✅ 3+ hours saved weekly\n✅ Accurate data records\n✅ Clean reports ready when needed",
        tools: ["Google Sheets", "Google Forms", "Zapier"]
    }
};

const modalOverlay = document.getElementById('caseModal');
const modalContent = document.getElementById('modalContent');
const modalClose = document.getElementById('modalClose');

document.querySelectorAll('.work-card-new').forEach(card => {
    card.addEventListener('click', function () {
        const caseKey = this.dataset.case;
        const study = caseStudies[caseKey];
        if (!study) return;

        modalContent.innerHTML = `
            <h2>${study.title}</h2>
            <p class="modal-subtitle">${study.subtitle}</p>

            <div class="modal-section">
                <h3><i class="fas fa-exclamation-triangle" style="color:var(--blonde);"></i> The Challenge</h3>
                <p>${study.problem}</p>
            </div>

            <div class="modal-section">
                <h3><i class="fas fa-cogs" style="color:var(--blonde);"></i> What I Did</h3>
                <p>${study.process}</p>
            </div>

            <div class="modal-section">
                <h3><i class="fas fa-chart-line" style="color:var(--blonde);"></i> The Outcome</h3>
                <div class="modal-result">
                    <p>${study.result.replace(/\n/g, '<br>')}</p>
                </div>
            </div>

            <div class="modal-section" style="margin-bottom:0;">
                <h3><i class="fas fa-tools" style="color:var(--blonde);"></i> Tools Used</h3>
                <div class="modal-tags">
                    ${study.tools.map(tool => `<span>${tool}</span>`).join('')}
                </div>
            </div>
        `;

        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});

function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
}

modalClose.addEventListener('click', closeModal);

modalOverlay.addEventListener('click', function (e) {
    if (e.target === this) {
        closeModal();
    }
});

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// ============================================
// TESTIMONIALS CAROUSEL
// ============================================
let currentTestimonialIndex = 0;
const testimonialCards = document.querySelectorAll('.testimonial-card-new');
const testimonialTrack = document.getElementById('testimonialCarouselTrack');
const testimonialPrevBtn = document.getElementById('testimonialPrev');
const testimonialNextBtn = document.getElementById('testimonialNext');
const testimonialDotsContainer = document.getElementById('testimonialDots');

let testimonialItemsPerView = getTestimonialItemsPerView();
const totalTestimonialCards = testimonialCards.length;
let testimonialAutoSlideInterval;

function getTestimonialItemsPerView() {
    if (window.innerWidth < 480) return 1;
    if (window.innerWidth < 768) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
}

function updateTestimonialCarousel() {
    testimonialItemsPerView = getTestimonialItemsPerView();
    const maxIndex = Math.max(0, totalTestimonialCards - testimonialItemsPerView);
    if (currentTestimonialIndex > maxIndex) currentTestimonialIndex = maxIndex;
    const gap = 20;
    const cardWidth = testimonialCards[0]?.offsetWidth || 300;
    const offset = currentTestimonialIndex * (cardWidth + gap);
    testimonialTrack.style.transform = `translateX(-${offset}px)`;

    const totalDots = Math.ceil(totalTestimonialCards / testimonialItemsPerView);
    const dots = testimonialDotsContainer.querySelectorAll('.dot');
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === Math.floor(currentTestimonialIndex / testimonialItemsPerView));
    });
}

function createTestimonialDots() {
    const totalDots = Math.ceil(totalTestimonialCards / testimonialItemsPerView);
    testimonialDotsContainer.innerHTML = '';
    for (let i = 0; i < totalDots; i++) {
        const dot = document.createElement('button');
        dot.className = `dot ${i === 0 ? 'active' : ''}`;
        dot.addEventListener('click', () => {
            const newIndex = i * testimonialItemsPerView;
            currentTestimonialIndex = Math.min(newIndex, totalTestimonialCards - testimonialItemsPerView);
            updateTestimonialCarousel();
            resetTestimonialAutoSlide();
        });
        testimonialDotsContainer.appendChild(dot);
    }
}

function goToTestimonialNext() {
    const maxIndex = Math.max(0, totalTestimonialCards - testimonialItemsPerView);
    if (currentTestimonialIndex + testimonialItemsPerView < totalTestimonialCards) {
        currentTestimonialIndex += testimonialItemsPerView;
    } else {
        currentTestimonialIndex = 0;
    }
    updateTestimonialCarousel();
}

function goToTestimonialPrev() {
    const maxIndex = Math.max(0, totalTestimonialCards - testimonialItemsPerView);
    if (currentTestimonialIndex - testimonialItemsPerView >= 0) {
        currentTestimonialIndex -= testimonialItemsPerView;
    } else {
        currentTestimonialIndex = maxIndex;
    }
    updateTestimonialCarousel();
}

function startTestimonialAutoSlide() {
    if (testimonialAutoSlideInterval) clearInterval(testimonialAutoSlideInterval);
    testimonialAutoSlideInterval = setInterval(goToTestimonialNext, 5000);
}

function resetTestimonialAutoSlide() {
    if (testimonialAutoSlideInterval) {
        clearInterval(testimonialAutoSlideInterval);
        startTestimonialAutoSlide();
    }
}

if (testimonialPrevBtn) testimonialPrevBtn.addEventListener('click', () => {
    goToTestimonialPrev();
    resetTestimonialAutoSlide();
});
if (testimonialNextBtn) testimonialNextBtn.addEventListener('click', () => {
    goToTestimonialNext();
    resetTestimonialAutoSlide();
});

let testimonialResizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(testimonialResizeTimeout);
    testimonialResizeTimeout = setTimeout(() => {
        const newItemsPerView = getTestimonialItemsPerView();
        if (newItemsPerView !== testimonialItemsPerView) {
            createTestimonialDots();
            currentTestimonialIndex = 0;
            updateTestimonialCarousel();
            resetTestimonialAutoSlide();
        } else {
            updateTestimonialCarousel();
        }
    }, 200);
});

createTestimonialDots();
updateTestimonialCarousel();
startTestimonialAutoSlide();

// ============================================
// CONTACT FORM
// ============================================
const form = document.getElementById('contactForm');
if (form) {
    form.addEventListener('submit', function (e) {
        const btn = this.querySelector('.btn-submit');
        const original = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        btn.disabled = true;

        setTimeout(() => {
            btn.innerHTML = original;
            btn.disabled = false;
        }, 3000);
    });
}

// ============================================
// BACK TO TOP
// ============================================
const backToTopBtn = document.getElementById('backToTop');

if (backToTopBtn) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ============================================
// INITIALIZE PARTICLES
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    createParticles();

    let particleTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(particleTimeout);
        particleTimeout = setTimeout(() => {
            const container = document.getElementById('particlesContainer');
            if (container) container.innerHTML = '';
            createParticles();
        }, 500);
    });
});

console.log('✨ Ebere John · Certified Virtual Assistant Portfolio ready!');