// Nav scroll state
const nav = document.getElementById('qaNav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('is-scrolled', window.scrollY > 40);
}, { passive: true });

// Mobile nav toggle
const navToggle = document.getElementById('qaNavToggle');
const navLinks = document.getElementById('qaNavLinks');
navToggle.addEventListener('click', () => {
  const open = navLinks.classList.toggle('is-open');
  navToggle.classList.toggle('is-open', open);
  navToggle.setAttribute('aria-expanded', open);
});
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  navLinks.classList.remove('is-open');
  navToggle.classList.remove('is-open');
  navToggle.setAttribute('aria-expanded', false);
}));

// Reveal on scroll
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('is-visible');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.15 });
revealEls.forEach(el => io.observe(el));

// Testimonial carousel
const quotes = document.querySelectorAll('.qa-quote');
const dots = document.querySelectorAll('.qa-dot');
let qIndex = 0;

function showQuote(i){
  quotes.forEach(q => q.classList.remove('is-active'));
  dots.forEach(d => d.classList.remove('is-active'));
  qIndex = (i + quotes.length) % quotes.length;
  quotes[qIndex].classList.add('is-active');
  dots[qIndex].classList.add('is-active');
}

document.getElementById('qaPrev').addEventListener('click', () => showQuote(qIndex - 1));
document.getElementById('qaNext').addEventListener('click', () => showQuote(qIndex + 1));
dots.forEach(d => d.addEventListener('click', () => showQuote(parseInt(d.dataset.i, 10))));
