// Initialize GSAP animations
document.addEventListener('DOMContentLoaded', () => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);
    
    // Navbar animations
    animateNavbar();
    
    // Hero section animations
    animateHero();
    
    // About section animations
    animateAbout();
    
    // Projects section animations
    animateProjects();
    
    // Skills section animations
    animateSkills();
    
    // Contact section animations
    animateContact();
    
    // Initialize back to top button
    initBackToTop();
});

// Navbar animations
function animateNavbar() {
    const navbar = document.querySelector('header');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Animate nav links
    gsap.from(navLinks, {
        opacity: 0,
        y: -20,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.5
    });
}

// Hero section animations
function animateHero() {
    const heroContent = document.querySelector('.hero-content');
    const heroImage = document.querySelector('.hero-image');
    
    if (heroContent) {
        gsap.from(heroContent.children, {
            opacity: 0,
            y: 50,
            stagger: 0.2,
            duration: 1,
            ease: "power3.out"
        });
    }
    
    if (heroImage) {
        gsap.from(heroImage, {
            opacity: 0,
            x: 100,
            duration: 1.2,
            ease: "power3.out",
            delay: 0.5
        });
    }
}

// About section animations
function animateAbout() {
    const aboutImage = document.querySelector('.about-image');
    const aboutText = document.querySelector('.about-text');
    const timeline = document.querySelector('.timeline');
    
    if (aboutImage && aboutText) {
        gsap.from(aboutImage, {
            scrollTrigger: {
                trigger: '.about',
                start: "top 80%"
            },
            opacity: 0,
            x: -100,
            duration: 1,
            ease: "power3.out"
        });
        
        gsap.from(aboutText.children, {
            scrollTrigger: {
                trigger: '.about',
                start: "top 80%"
            },
            opacity: 0,
            y: 50,
            stagger: 0.2,
            duration: 0.8,
            ease: "power3.out"
        });
    }
    
    if (timeline) {
        gsap.from('.timeline-item', {
            scrollTrigger: {
                trigger: '.timeline',
                start: "top 80%"
            },
            opacity: 0,
            x: -50,
            stagger: 0.2,
            duration: 0.8,
            ease: "power3.out"
        });
    }
}

// Projects section animations
function animateProjects() {
    const projectCards = document.querySelectorAll('.project-card');
    
    if (projectCards.length > 0) {
        gsap.from(projectCards, {
            scrollTrigger: {
                trigger: '.projects',
                start: "top 80%"
            },
            opacity: 0,
            y: 50,
            stagger: 0.2,
            duration: 0.8,
            ease: "power3.out"
        });
    }
    
    // Project filter animation
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active button
            filterBtns.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter projects
            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');
                
                if (filter === 'all' || category === filter) {
                    gsap.to(card, {
                        opacity: 1,
                        scale: 1,
                        duration: 0.4,
                        ease: "power2.out",
                        onComplete: () => {
                            card.style.display = 'block';
                        }
                    });
                } else {
                    gsap.to(card, {
                        opacity: 0,
                        scale: 0.8,
                        duration: 0.4,
                        ease: "power2.out",
                        onComplete: () => {
                            card.style.display = 'none';
                        }
                    });
                }
            });
        });
    });
}

// Skills section animations
function animateSkills() {
    const skillCards = document.querySelectorAll('.skill-card');
    
    if (skillCards.length > 0) {
        gsap.from(skillCards, {
            scrollTrigger: {
                trigger: '.skills',
                start: "top 80%"
            },
            opacity: 0,
            y: 50,
            stagger: 0.1,
            duration: 0.6,
            ease: "power3.out"
        });
        
        // Animate progress bars
        const progressBars = document.querySelectorAll('.progress-bar');
        
        progressBars.forEach(bar => {
            const progress = bar.getAttribute('data-progress');
            
            gsap.to(bar, {
                scrollTrigger: {
                    trigger: '.skills',
                    start: "top 70%"
                },
                width: `${progress}%`,
                duration: 1.5,
                ease: "power3.out",
                delay: 0.5
            });
        });
    }
}

// Contact section animations
function animateContact() {
    const contactInfo = document.querySelector('.contact-info');
    const contactForm = document.querySelector('.contact-form');
    
    if (contactInfo && contactForm) {
        gsap.from(contactInfo.children, {
            scrollTrigger: {
                trigger: '.contact',
                start: "top 80%"
            },
            opacity: 0,
            x: -50,
            stagger: 0.2,
            duration: 0.8,
            ease: "power3.out"
        });
        
        gsap.from(contactForm.children, {
            scrollTrigger: {
                trigger: '.contact',
                start: "top 80%"
            },
            opacity: 0,
            x: 50,
            stagger: 0.2,
            duration: 0.8,
            ease: "power3.out"
        });
    }
}

// Back to top button
function initBackToTop() {
    const backToTopBtn = document.querySelector('.back-to-top');
    
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        });
    }
} 