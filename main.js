// Bowiri Traditional Council — main.js
document.addEventListener('DOMContentLoaded', function(){
  // Year in footer
  document.getElementById('year').textContent = new Date().getFullYear();

  // Mobile nav toggle
  var navToggle = document.getElementById('nav-toggle');
  var mainNav = document.getElementById('main-nav');
  navToggle.addEventListener('click', function(){
    var expanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', !expanded);
    if (mainNav.style.display === 'block') { mainNav.style.display = ''; }
    else { mainNav.style.display = 'block'; }
  });

  // Smooth anchor scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor){
    anchor.addEventListener('click', function(e){
      var target = document.querySelector(this.getAttribute('href'));
      if (target){ e.preventDefault(); target.scrollIntoView({behavior:'smooth', block:'start'}); 
        // close mobile nav if open
        if(window.innerWidth < 700 && mainNav.style.display === 'block'){ mainNav.style.display = ''; }
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

  // Simple contact form handler (no backend) - show success message
  var form = document.getElementById('contact-form');
  form.addEventListener('submit', function(e){
    e.preventDefault();
    alert('Thank you — your message has been noted. Please send donation details via the contact email or phone.');
    form.reset();
  });
});
