// GSAP Animations
document.addEventListener('DOMContentLoaded', function() {
    // Register ScrollTrigger plugin if GSAP is available
    if (window.gsap && window.ScrollTrigger) {
        gsap.registerPlugin(ScrollTrigger);
        initAnimations();
    }
});

function initAnimations() {
    // Hero section animations
    animateHero();
    
    // About section animations
    animateAbout();
    
    // Skills section animations
    animateSkills();
    
    // Projects section animations
    animateProjects();
    
    // Contact section animations
    animateContact();
}

function animateHero() {
    const heroContent = document.querySelector('.hero-content');
    if (!heroContent) return;
    
    const tl = gsap.timeline();
    
    tl.from('.hero-content h1', {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    })
    .from('.hero-content h2', {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    }, '-=0.7')
    .from('.hero-content p', {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    }, '-=0.7')
    .from('.cta-buttons', {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    }, '-=0.7');
}

function animateAbout() {
    if (!document.querySelector('.about-content')) return;
    
    gsap.from('.about-image', {
        scrollTrigger: {
            trigger: '.about-content',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        x: -100,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out'
    });
    
    gsap.from('.about-text', {
        scrollTrigger: {
            trigger: '.about-content',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        x: 100,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out'
    });
    
    // Timeline animation
    gsap.from('.timeline-item', {
        scrollTrigger: {
            trigger: '.timeline',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: 'power3.out'
    });
}

function animateSkills() {
    if (!document.querySelector('.skills-content')) return;
    
    // Animate the text section
    gsap.from('.skills-text', {
        scrollTrigger: {
            trigger: '.skills-content',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        x: -100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    });
    
    // Animate each skill card
    gsap.from('.skill-card', {
        scrollTrigger: {
            trigger: '.skills-grid',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        onComplete: animateProgressBars
    });
}

function animateProgressBars() {
    // Ensure all progress bars are visible
    const progressBars = document.querySelectorAll('.progress-bar');
    
    progressBars.forEach(bar => {
        const progress = bar.getAttribute('data-progress');
        bar.style.width = progress + '%';
    });
}

function animateProjects() {
    if (!document.querySelector('.projects-grid')) return;
    
    gsap.from('.project-card', {
        scrollTrigger: {
            trigger: '.projects-grid',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out'
    });
}

function animateContact() {
    if (!document.querySelector('.contact-content')) return;
    
    gsap.from('.contact-info', {
        scrollTrigger: {
            trigger: '.contact-content',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        x: -100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    });
    
    gsap.from('.contact-form', {
        scrollTrigger: {
            trigger: '.contact-content',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        x: 100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    });
} 