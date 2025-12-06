  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const navLinks = document.querySelector('.nav-links');
        
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        });
 
        const cards = document.querySelectorAll('.ai-card');
        cards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                cards.forEach(c => {
                    if (c !== card) {
                        c.style.opacity = '0.6';
                    }
                });
            });
            
            card.addEventListener('mouseleave', () => {
                cards.forEach(c => {
                    c.style.opacity = '1';
                });
            });
        });