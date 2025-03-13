// Project Modal Functionality
document.addEventListener('DOMContentLoaded', () => {
    // Get all project cards
    const projectCards = document.querySelectorAll('.project-card');
    const modalContainer = document.querySelector('.project-modal');
    const modalContent = document.querySelector('.modal-content');
    const closeModal = document.querySelector('.close-modal');
    
    // Project data
    const projects = [
        {
            id: 'ecommerce',
            title: 'E-commerce Platform',
            image: 'https://picsum.photos/id/3/800/600',
            description: 'A full-featured e-commerce platform with product catalog, shopping cart, user authentication, and payment processing. The application is built with a responsive design to ensure optimal user experience across all devices.',
            longDescription: 'This comprehensive e-commerce solution provides businesses with everything they need to sell products online. Features include product categorization, advanced filtering, user reviews, wishlist functionality, and a streamlined checkout process. The admin dashboard offers inventory management, order tracking, and sales analytics. Built with scalability in mind, the platform can handle thousands of products and concurrent users without performance degradation.',
            technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Redux', 'Stripe API', 'AWS S3'],
            liveLink: '#',
            sourceLink: '#'
        },
        {
            id: 'fitness',
            title: 'Fitness Tracker App',
            image: 'https://picsum.photos/id/17/800/600',
            description: 'A mobile-first fitness tracking application that allows users to log workouts, track progress, and set fitness goals. Includes data visualization and social sharing features.',
            longDescription: 'This fitness tracking application helps users maintain their health and fitness goals through comprehensive workout logging, nutrition tracking, and progress visualization. Users can create custom workout routines, follow pre-designed programs, and track their performance over time with detailed charts and statistics. The app includes social features allowing users to share achievements, participate in challenges, and connect with friends. Integration with wearable devices provides real-time heart rate monitoring and step counting.',
            technologies: ['React Native', 'Firebase', 'Chart.js', 'Google Fit API', 'Apple HealthKit'],
            liveLink: '#',
            sourceLink: '#'
        },
        {
            id: 'portfolio',
            title: 'Portfolio Website',
            image: 'https://picsum.photos/id/24/800/600',
            description: 'A personal portfolio website showcasing projects, skills, and professional experience. Features a clean, modern design with smooth animations and responsive layout.',
            longDescription: 'This portfolio website serves as a professional showcase of skills, projects, and experience. Built with modern web technologies, it features smooth scrolling, engaging animations, and an intuitive user interface. The site includes sections for project highlights, technical skills, professional experience, and contact information. The responsive design ensures optimal viewing experience across all devices from mobile phones to large desktop monitors. Dark mode support and accessibility features make the site usable for all visitors.',
            technologies: ['HTML5', 'CSS3', 'JavaScript', 'GSAP', 'Particles.js'],
            liveLink: '#',
            sourceLink: '#'
        }
    ];

    // Create modal HTML if it doesn't exist
    if (!modalContainer) {
        const modalHTML = `
            <div class="project-modal">
                <div class="modal-content">
                    <span class="close-modal">&times;</span>
                    <div class="modal-img">
                        <img src="" alt="Project Image">
                    </div>
                    <div class="modal-body">
                        <h2></h2>
                        <p></p>
                        <div class="modal-tech">
                            <h3>Technologies Used</h3>
                            <div class="tech-tags"></div>
                        </div>
                        <div class="modal-links">
                            <a href="#" class="live-link" target="_blank">
                                <i class="fas fa-external-link-alt"></i> Live Demo
                            </a>
                            <a href="#" class="source-link" target="_blank">
                                <i class="fab fa-github"></i> Source Code
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', modalHTML);
        
        // Update references after creating the modal
        modalContainer = document.querySelector('.project-modal');
        modalContent = document.querySelector('.modal-content');
        closeModal = document.querySelector('.close-modal');
    }

    // Add click event to each project card
    projectCards.forEach(card => {
        const viewDetailsBtn = card.querySelector('.view-details');
        if (viewDetailsBtn) {
            viewDetailsBtn.addEventListener('click', (e) => {
                e.preventDefault();
                const projectId = card.getAttribute('data-id');
                openProjectModal(projectId);
            });
        }
    });

    // Function to open modal with project details
    function openProjectModal(projectId) {
        const project = projects.find(p => p.id === projectId);
        
        if (!project) return;
        
        // Update modal content
        const modalImg = modalContainer.querySelector('.modal-img img');
        const modalTitle = modalContainer.querySelector('.modal-body h2');
        const modalDesc = modalContainer.querySelector('.modal-body p');
        const techTags = modalContainer.querySelector('.tech-tags');
        const liveLink = modalContainer.querySelector('.live-link');
        const sourceLink = modalContainer.querySelector('.source-link');
        
        modalImg.src = project.image;
        modalImg.alt = project.title;
        modalTitle.textContent = project.title;
        modalDesc.textContent = project.longDescription || project.description;
        
        // Clear and add tech tags
        techTags.innerHTML = '';
        project.technologies.forEach(tech => {
            const span = document.createElement('span');
            span.textContent = tech;
            techTags.appendChild(span);
        });
        
        // Update links
        liveLink.href = project.liveLink;
        sourceLink.href = project.sourceLink;
        
        // Show modal with animation
        modalContainer.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
        
        // Animate with GSAP if available
        if (window.gsap) {
            gsap.from('.tech-tags span', {
                opacity: 0,
                y: 20,
                stagger: 0.1,
                duration: 0.4,
                ease: 'power2.out'
            });
        }
    }
    
    // Close modal when clicking the close button
    if (closeModal) {
        closeModal.addEventListener('click', () => {
            closeProjectModal();
        });
    }
    
    // Close modal when clicking outside the content
    modalContainer?.addEventListener('click', (e) => {
        if (e.target === modalContainer) {
            closeProjectModal();
        }
    });
    
    // Close modal with ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalContainer?.classList.contains('active')) {
            closeProjectModal();
        }
    });
    
    // Function to close modal
    function closeProjectModal() {
        modalContainer.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    }
    
    // Add "View Details" buttons to project cards if they don't exist
    function addViewDetailsButtons() {
        projectCards.forEach(card => {
            if (!card.querySelector('.view-details')) {
                const projectLinks = card.querySelector('.project-links');
                if (projectLinks) {
                    const viewDetailsBtn = document.createElement('a');
                    viewDetailsBtn.href = '#';
                    viewDetailsBtn.className = 'project-link view-details';
                    viewDetailsBtn.innerHTML = '<i class="fas fa-info-circle"></i> View Details';
                    
                    projectLinks.appendChild(viewDetailsBtn);
                    
                    viewDetailsBtn.addEventListener('click', (e) => {
                        e.preventDefault();
                        const projectId = card.getAttribute('data-id');
                        openProjectModal(projectId);
                    });
                }
            }
        });
    }
    
    // Initialize
    addViewDetailsButtons();
}); 