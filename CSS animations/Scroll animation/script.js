// script.js
document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.scroll-element');
    
    function checkVisibility() {
        const triggerBottom = window.innerHeight / 5 * 4;
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            
            if (elementTop < triggerBottom) {
                element.classList.add('visible');
            } else {
                element.classList.remove('visible');
            }
        });
    }
    
    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Initial check in case some elements are already in view
});
