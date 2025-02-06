document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('nav.container');
    const menuToggle = document.createElement('button');
    menuToggle.className = 'menu-toggle';
    menuToggle.innerHTML = '☰';
    menuToggle.setAttribute('aria-label', 'Toggle menu');

    // Insert toggle button before the nav-right div
    const logoContainer = nav.querySelector('.logo-container');
    nav.insertBefore(menuToggle, logoContainer.nextSibling);

    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('menu-active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!nav.contains(event.target) && nav.classList.contains('menu-active')) {
            nav.classList.remove('menu-active');
        }
    });

    // Close menu when window is resized above breakpoint
    window.addEventListener('resize', function() {
        if (window.innerWidth > 1024 && nav.classList.contains('menu-active')) {
            nav.classList.remove('menu-active');
        }
    });
});
