// Variables
const header = document.getElementById('header');
const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('siteNav');
const navLinks = document.querySelectorAll('.nav__link');

// Menú hamburguesa
navToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    navToggle.classList.toggle('is-active', isOpen);
    navToggle.setAttribute('aria-expanded', isOpen);
    navToggle.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
});

// Cerrar menú y marcar enlace activo
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('is-open');
        navToggle.classList.remove('is-active');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.setAttribute('aria-label', 'Abrir menú');
        navLinks.forEach(item => item.classList.remove('is-active'));
        link.classList.add('is-active');
    });
});

// Sombra del header al hacer scroll
window.addEventListener('scroll', () => {
    header.classList.toggle('is-scrolled', window.scrollY > 10);
});

// Año automático en el footer
document.getElementById('year').textContent = new Date().getFullYear();
