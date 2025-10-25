 // main.js - Bowiri Royal site (reveal + nav + contact form)
document.addEventListener('DOMContentLoaded', function(){
  // Year in footer
  var y = document.getElementById('year');
  if(y) y.textContent = new Date().getFullYear();

  // Mobile nav toggle
  var navToggle = document.getElementById('nav-toggle');
  var mainNav = document.getElementById('main-nav');
  if(navToggle){
    navToggle.addEventListener('click', function(){
      var expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', !expanded);
      if (mainNav.style.display === 'block') { mainNav.style.display = ''; }
      else { mainNav.style.display = 'block'; }
    });
  }

  // Smooth anchor scroll for same-page anchors
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor){
    anchor.addEventListener('click', function(e){
      var target = document.querySelector(this.getAttribute('href'));
      if (target){ e.preventDefault(); target.scrollIntoView({behavior:'smooth', block:'start'}); 
        if(window.innerWidth < 720 && mainNav && mainNav.style.display === 'block'){ mainNav.style.display = ''; }
      }
    });
  });

  // Reveal on scroll (IntersectionObserver)
  var observer = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(entry.isIntersecting){
        entry.target.classList.add('in-view');
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, {threshold: 0.12});
  document.querySelectorAll('.reveal').forEach(function(el){ observer.observe(el); });

  // Simple contact form handler
  var form = document.getElementById('contact-form');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      alert('Thank you — your message has been noted. Please contact the palace for donation instructions.');
      form.reset();
    });
  }
});
