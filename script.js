// Mobile Navigation Toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

if (navToggle) {
  navToggle.addEventListener('click', function() {
    navMenu.classList.toggle('active');
  });

  // Close menu when clicking outside
  document.addEventListener('click', function(event) {
    const isClickInsideNav = navMenu.contains(event.target) || navToggle.contains(event.target);
    if (!isClickInsideNav && navMenu.classList.contains('active')) {
      navMenu.classList.remove('active');
    }
  });

  // Close menu when clicking on a link
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      navMenu.classList.remove('active');
    });
  });
}

// Back to Top Button
const backToTopButton = document.getElementById('backToTop');

if (backToTopButton) {
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      backToTopButton.classList.add('visible');
    } else {
      backToTopButton.classList.remove('visible');
    }
  });

  backToTopButton.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// Smooth Scroll for All Internal Links
document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Highlight Active Navigation Link Based on Current Page
document.addEventListener('DOMContentLoaded', function() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(function(link) {
    const linkPath = new URL(link.href).pathname;
    if (currentPath === linkPath || (currentPath === '/' && linkPath.includes('index.html'))) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});

// Animate elements on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe feature cards and sections
document.addEventListener('DOMContentLoaded', function() {
  const animatedElements = document.querySelectorAll('.feature-card, .guide-section, .legal-section, .contact-card');
  
  animatedElements.forEach(function(el) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
});