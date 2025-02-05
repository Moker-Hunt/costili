// Cookie banner functionality
function acceptCookies() {
    const banner = document.getElementById('cookieBanner');
    banner.style.display = 'none';
    localStorage.setItem('cookiesAccepted', 'true');
}

// Check if cookies were already accepted
window.addEventListener('load', function() {
    const banner = document.getElementById('cookieBanner');
    if (localStorage.getItem('cookiesAccepted') === 'true') {
        banner.style.display = 'none';
    }
});

// Smooth scroll for navigation links
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    for (const link of links) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }
});
