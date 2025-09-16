// js/script.js
// Handles mobile nav toggle, active nav highlighting, and reveal animations

document.addEventListener('DOMContentLoaded', function () {

  // NAV TOGGLE for mobile
  const navToggle = document.querySelector('.nav-toggle');
  const navList = document.querySelector('.nav-list');
  if (navToggle && navList) {
    navToggle.addEventListener('click', () => {
      navList.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', navList.classList.contains('open'));
    });
    // close when clicking a link (mobile)
    navList.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      if (navList.classList.contains('open')) navList.classList.remove('open');
    }));
  }

  // Active link highlighting based on filename
  const pathname = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-list a').forEach(a => {
    try {
      const href = a.getAttribute('href');
      if (href === pathname || (href === 'index.html' && pathname === '')) {
        a.classList.add('active');
      }
    } catch (e) { /* ignore */ }
  });

  // IntersectionObserver for reveal animations
  const revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length) {
    const obs = new IntersectionObserver((entries, ob) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          ob.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(el => obs.observe(el));
  }

  // Smooth internal anchor scrolling
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      e.preventDefault();
      const t = document.querySelector(a.getAttribute('href'));
      if (t) t.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
// Adjust profile image height to match about-me content
const img = document.querySelector('.home-left img');
const content = document.querySelector('.home-content');

function adjustImageHeight() {
  if (img && content) {
    img.style.height = content.offsetHeight + 'px';
  }
}

// Initial adjustment
adjustImageHeight();

// Adjust on window resize
window.addEventListener('resize', adjustImageHeight);

// KineiFelbo Video Modal
// KineiFelbo Video Modal
function openVideoModal(event) {
  event.preventDefault(); // prevents the anchor from navigating
  document.getElementById('videoModal').style.display = 'block';
}

function closeVideoModal() {
  const modal = document.getElementById('videoModal');
  const video = modal.querySelector('video');
  video.pause(); // stop video when modal closes
  modal.style.display = 'none';
}

// Close modal if user clicks outside video
window.addEventListener('click', function(event) {
  const modal = document.getElementById('videoModal');
  if (event.target === modal) {
    const video = modal.querySelector('video');
    video.pause();
    modal.style.display = 'none';
  }
});

});


 // DOMContentLoaded
