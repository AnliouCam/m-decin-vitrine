// Menu mobile toggle
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

// Ouvrir/fermer le menu mobile
menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Fermer le menu mobile quand on clique sur un lien
const mobileLinks = mobileMenu.querySelectorAll('a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});
