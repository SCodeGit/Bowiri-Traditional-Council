// main.js — Bowiri Royal site (animated fade + reveal + nav)
document.addEventListener('DOMContentLoaded', () => {
  // Year in footer
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // Mobile nav toggle
  const navToggle = document.getElementById('nav-toggle');
  const mainNav = document.getElementById('main-nav');
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', !expanded);
      mainNav.style.display = expanded ? '' : 'block';
      mainNav.style.animation = expanded ? 'fadeOut 0.4s forwards' : 'fadeIn 0.4s forwards';
    });
  }

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        if (window.innerWidth < 720 && mainNav && mainNav.style.display === 'block') {
          mainNav.style.display = '';
        }
      }
    });
  });

  // Reveal animation
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // Contact form
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      alert('Your message has been received. The palace will reach out soon.');
      form.reset();
    });
  }
});

// Extra keyframes for fade
const style = document.createElement('style');
style.textContent = `
@keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
@keyframes fadeOut { from { opacity: 1 } to { opacity: 0 } }
`;
document.head.appendChild(style);
