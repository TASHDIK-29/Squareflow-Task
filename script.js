
const menuToggle = document.getElementById('mobile-menu-btn');
const navMenu = document.getElementById('nav-menu-id');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('display');
});