// Modal functionality for project details

document.addEventListener('DOMContentLoaded', function() {
    initProjectModals();
});

function initProjectModals() {
    const projectCards = document.querySelectorAll('.project-card');
    const modal = document.querySelector('.project-modal');
    const closeModal = document.querySelector('.close-modal');
    const modalBody = document.querySelector('.modal-body');
    
    if (projectCards.length && modal && closeModal && modalBody) {
        // Open modal when clicking on project card
        projectCards.forEach(card => {
            card.addEventListener('click', function() {
                // Get project data
                const projectId = this.getAttribute('data-id');
                const projectTitle = this.querySelector('h3').textContent;
                const projectDesc = this.querySelector('p').textContent;
                const projectImg = this.querySelector('img').src;
                const projectTech = this.querySelector('.project-tech').innerHTML;
                
                // Populate modal content
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
                
                // Show modal with animation
                modal.style.display = 'flex';
                setTimeout(() => {
                    modal.classList.add('show');
                    document.body.style.overflow = 'hidden'; // Prevent scrolling
                }, 10);
            });
        });
        
        // Close modal when clicking on close button
        closeModal.addEventListener('click', () => {
            closeProjectModal();
        });
        
        // Close modal when clicking outside of modal content
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeProjectModal();
            }
        });
        
        // Close modal with Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('show')) {
                closeProjectModal();
            }
        });
    }
}

function closeProjectModal() {
    const modal = document.querySelector('.project-modal');
    
    if (modal) {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.style.display = 'none';
            document.body.style.overflow = ''; // Restore scrolling
        }, 300);
    }
}

// Helper function to extract technology names from HTML
function extractTechNames(techHTML) {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = techHTML;
    
    const techSpans = tempDiv.querySelectorAll('span');
    const techNames = Array.from(techSpans).map(span => span.textContent);
    
    return techNames.join(', ');
} 