// Projects section functionality - Fixed version
document.addEventListener('DOMContentLoaded', function() {
    // Initialize project filtering
    initProjectFilters();
    
    // Make project cards clickable to show details
    initProjectCards();
});

// Project filtering functionality
function initProjectFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    if (filterBtns.length && projectCards.length) {
        // Set initial state - show all projects
        projectCards.forEach(card => {
            card.style.display = 'flex';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
            card.style.transition = 'all 0.4s ease';
        });
        
        // Add click event to filter buttons
        filterBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                // Update active button
                filterBtns.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                
                const filterValue = this.getAttribute('data-filter');
                
                // Filter projects
                projectCards.forEach(card => {
                    const category = card.getAttribute('data-category');
                    
                    // Hide all cards first
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    
                    setTimeout(() => {
                        if (filterValue === 'all' || category === filterValue) {
                            card.style.display = 'flex';
                            setTimeout(() => {
                                card.style.opacity = '1';
                                card.style.transform = 'translateY(0)';
                            }, 50);
                        } else {
                            card.style.display = 'none';
                        }
                    }, 300);
                });
            });
        });
    }
}

// Make project cards clickable
function initProjectCards() {
    const projectCards = document.querySelectorAll('.project-card');
    const modal = document.querySelector('.project-modal');
    
    if (projectCards.length && modal) {
        projectCards.forEach(card => {
            card.addEventListener('click', function() {
                const projectTitle = this.querySelector('h3').textContent;
                const projectDesc = this.querySelector('p').textContent;
                const projectImg = this.querySelector('img').src;
                const projectTech = this.querySelector('.project-tech').innerHTML;
                
                // Populate modal content
                const modalBody = modal.querySelector('.modal-body');
                if (modalBody) {
                    modalBody.innerHTML = `
                        <div class="modal-header">
                            <h2>${projectTitle}</h2>
                            <div class="modal-tech">${projectTech}</div>
                        </div>
                        <div class="modal-gallery">
                            <img src="${projectImg}" alt="${projectTitle}">
                        </div>
                        <div class="modal-description">
                            <h3>Project Overview</h3>
                            <p>${projectDesc}</p>
                            <p>This project showcases my skills in web development and problem-solving. I focused on creating a clean, efficient solution that addresses real-world needs.</p>
                        </div>
                    `;
                    
                    // Show modal
                    modal.style.display = 'flex';
                    setTimeout(() => {
                        modal.classList.add('show');
                        document.body.style.overflow = 'hidden';
                    }, 10);
                }
            });
        });
        
        // Close modal functionality
        const closeBtn = modal.querySelector('.close-modal');
        if (closeBtn) {
            closeBtn.addEventListener('click', closeModal);
        }
        
        // Close when clicking outside
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeModal();
            }
        });
        
        // Close with Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && modal.classList.contains('show')) {
                closeModal();
            }
        });
    }
    
    function closeModal() {
        if (modal) {
            modal.classList.remove('show');
            setTimeout(() => {
                modal.style.display = 'none';
                document.body.style.overflow = '';
            }, 300);
        }
    }
} 