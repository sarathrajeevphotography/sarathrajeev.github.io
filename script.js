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

/* ============================================================
   WEDDING PORTFOLIO — STORIES DATA
   ------------------------------------------------------------
   Edit this array to add, remove, or update wedding stories.
   Everything on the Portfolio page is generated from this list.

   - id:       short unique slug, used only internally
   - couple:   names shown on the card and gallery header
   - date:     optional — leave as '' to hide it
   - location: optional — leave as '' to hide it
   - cover:    the large photo shown on the portfolio card
   - gallery:  the full set of photos shown when that card is opened

   PLACEHOLDER IMAGES: the paths below point to an images/portfolio/
   folder that doesn't exist yet. Until you add real photos at those
   paths, each image will gracefully show a soft placeholder instead
   of a broken image icon — so the page still looks finished. To go
   live, create the folders below and drop in photos with matching
   filenames (or change the paths to match your own file structure).
   ============================================================ */
const weddingStories = [
  {
    id: 'arjun-meera',
    couple: 'Arjun & Meera',
    date: 'Jan 2026',
    location: 'Munnar',
    cover: 'images/portfolio/arjun-meera/cover.jpg',
    gallery: [
      'images/portfolio/arjun-meera/01.jpg',
      'images/portfolio/arjun-meera/02.jpg',
      'images/portfolio/arjun-meera/03.jpg',
      'images/portfolio/arjun-meera/04.jpg',
      'images/portfolio/arjun-meera/05.jpg',
      'images/portfolio/arjun-meera/06.jpg',
    ]
  },
  {
    id: 'rahul-anjali',
    couple: 'Rahul & Anjali',
    date: 'Feb 2026',
    location: 'Fort Kochi',
    cover: 'images/portfolio/rahul-anjali/cover.jpg',
    gallery: [
      'images/portfolio/rahul-anjali/01.jpg',
      'images/portfolio/rahul-anjali/02.jpg',
      'images/portfolio/rahul-anjali/03.jpg',
      'images/portfolio/rahul-anjali/04.jpg',
      'images/portfolio/rahul-anjali/05.jpg',
      'images/portfolio/rahul-anjali/06.jpg',
    ]
  },
  {
    id: 'akhil-diya',
    couple: 'Akhil & Diya',
    date: 'Nov 2025',
    location: 'Goa',
    cover: 'images/portfolio/akhil-diya/cover.jpg',
    gallery: [
      'images/portfolio/akhil-diya/01.jpg',
      'images/portfolio/akhil-diya/02.jpg',
      'images/portfolio/akhil-diya/03.jpg',
      'images/portfolio/akhil-diya/04.jpg',
      'images/portfolio/akhil-diya/05.jpg',
      'images/portfolio/akhil-diya/06.jpg',
    ]
  },
  {
    id: 'vivek-nandini',
    couple: 'Vivek & Nandini',
    date: 'Dec 2025',
    location: 'Alleppey',
    cover: 'images/portfolio/vivek-nandini/cover.jpg',
    gallery: [
      'images/portfolio/vivek-nandini/01.jpg',
      'images/portfolio/vivek-nandini/02.jpg',
      'images/portfolio/vivek-nandini/03.jpg',
      'images/portfolio/vivek-nandini/04.jpg',
      'images/portfolio/vivek-nandini/05.jpg',
      'images/portfolio/vivek-nandini/06.jpg',
    ]
  },
  {
    id: 'kiran-priya',
    couple: 'Kiran & Priya',
    date: 'Oct 2025',
    location: 'Wayanad',
    cover: 'images/portfolio/kiran-priya/cover.jpg',
    gallery: [
      'images/portfolio/kiran-priya/01.jpg',
      'images/portfolio/kiran-priya/02.jpg',
      'images/portfolio/kiran-priya/03.jpg',
      'images/portfolio/kiran-priya/04.jpg',
      'images/portfolio/kiran-priya/05.jpg',
      'images/portfolio/kiran-priya/06.jpg',
    ]
  },
  {
    id: 'aditya-kavya',
    couple: 'Aditya & Kavya',
    date: 'Mar 2026',
    location: 'Udaipur',
    cover: 'images/portfolio/aditya-kavya/cover.jpg',
    gallery: [
      'images/portfolio/aditya-kavya/01.jpg',
      'images/portfolio/aditya-kavya/02.jpg',
      'images/portfolio/aditya-kavya/03.jpg',
      'images/portfolio/aditya-kavya/04.jpg',
      'images/portfolio/aditya-kavya/05.jpg',
      'images/portfolio/aditya-kavya/06.jpg',
    ]
  },
  {
    id: 'rohit-sneha',
    couple: 'Rohit & Sneha',
    date: 'Sep 2025',
    location: 'Kumarakom',
    cover: 'images/portfolio/rohit-sneha/cover.jpg',
    gallery: [
      'images/portfolio/rohit-sneha/01.jpg',
      'images/portfolio/rohit-sneha/02.jpg',
      'images/portfolio/rohit-sneha/03.jpg',
      'images/portfolio/rohit-sneha/04.jpg',
      'images/portfolio/rohit-sneha/05.jpg',
      'images/portfolio/rohit-sneha/06.jpg',
    ]
  },
  {
    id: 'varun-lakshmi',
    couple: 'Varun & Lakshmi',
    date: 'Aug 2025',
    location: 'Coorg',
    cover: 'images/portfolio/varun-lakshmi/cover.jpg',
    gallery: [
      'images/portfolio/varun-lakshmi/01.jpg',
      'images/portfolio/varun-lakshmi/02.jpg',
      'images/portfolio/varun-lakshmi/03.jpg',
      'images/portfolio/varun-lakshmi/04.jpg',
      'images/portfolio/varun-lakshmi/05.jpg',
      'images/portfolio/varun-lakshmi/06.jpg',
    ]
  },
];

/* ============================================================
   RENDER PORTFOLIO CARDS
   ============================================================ */
const storiesGrid = document.getElementById('qaStories');

function metaLine(story){
  return [story.date, story.location].filter(Boolean).join(' · ');
}

function renderStories(){
  storiesGrid.innerHTML = weddingStories.map((story, i) => `
    <button class="qa-story-card" data-index="${i}" aria-label="View ${story.couple} gallery">
      <span class="qa-story-media">
        <img src="${story.cover}" alt="${story.couple} wedding cover photo" loading="lazy">
        <span class="qa-story-view">View Gallery →</span>
      </span>
      <span class="qa-story-info">
        <span class="qa-story-num">No. ${String(i + 1).padStart(2, '0')}</span>
        <span class="qa-story-name">${story.couple}</span>
        ${metaLine(story) ? `<span class="qa-story-meta">${metaLine(story)}</span>` : ''}
      </span>
    </button>
  `).join('');

  // Graceful fallback if a cover image hasn't been added yet
  storiesGrid.querySelectorAll('.qa-story-media img').forEach(img => {
    img.addEventListener('error', () => {
      img.closest('.qa-story-media').classList.add('qa-img-fallback');
      img.style.display = 'none';
    }, { once: true });
  });

  storiesGrid.querySelectorAll('.qa-story-card').forEach(card => {
    card.addEventListener('click', () => openGallery(parseInt(card.dataset.index, 10)));
  });
}
renderStories();

/* ============================================================
   WEDDING GALLERY OVERLAY — open/close + single-image viewer
   ============================================================ */
const lightbox   = document.getElementById('qaLightbox');
const lbName     = document.getElementById('qaLbName');
const lbMeta     = document.getElementById('qaLbMeta');
const lbGrid     = document.getElementById('qaLbGrid');
const lbClose    = document.getElementById('qaLbClose');
const lbScrim    = lightbox.querySelector('.qa-lightbox-scrim');

const viewer      = document.getElementById('qaViewer');
const viewerImg   = document.getElementById('qaViewerImg');
const viewerClose = document.getElementById('qaViewerClose');
const viewerPrev  = document.getElementById('qaViewerPrev');
const viewerNext  = document.getElementById('qaViewerNext');

let activeStory = null;
let activePhotoIndex = 0;
let lastFocusedEl = null;

function openGallery(index){
  activeStory = weddingStories[index];
  lastFocusedEl = document.activeElement;

  lbName.textContent = activeStory.couple;
  lbMeta.textContent = metaLine(activeStory);

  lbGrid.innerHTML = activeStory.gallery.map((src, i) => `
    <img src="${src}" alt="${activeStory.couple} photo ${i + 1}" loading="lazy" data-i="${i}">
  `).join('');

  lbGrid.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', () => {
      img.classList.add('qa-img-fallback');
      img.style.minHeight = '260px';
    }, { once: true });
    img.addEventListener('click', () => openViewer(parseInt(img.dataset.i, 10)));
  });

  document.body.classList.add('qa-lock');
  lightbox.classList.add('is-open');
  lightbox.setAttribute('aria-hidden', 'false');
  lbClose.focus();
}

function closeGallery(){
  lightbox.classList.remove('is-open');
  lightbox.setAttribute('aria-hidden', 'true');
  closeViewer();
  document.body.classList.remove('qa-lock');
  if (lastFocusedEl) lastFocusedEl.focus();
}

function openViewer(i){
  activePhotoIndex = i;
  viewerImg.src = activeStory.gallery[i];
  viewerImg.alt = `${activeStory.couple} photo ${i + 1}`;
  viewer.classList.add('is-open');
  viewer.setAttribute('aria-hidden', 'false');
}

function closeViewer(){
  viewer.classList.remove('is-open');
  viewer.setAttribute('aria-hidden', 'true');
}

function stepViewer(dir){
  const total = activeStory.gallery.length;
  activePhotoIndex = (activePhotoIndex + dir + total) % total;
  viewerImg.src = activeStory.gallery[activePhotoIndex];
  viewerImg.alt = `${activeStory.couple} photo ${activePhotoIndex + 1}`;
}

lbClose.addEventListener('click', closeGallery);
lbScrim.addEventListener('click', closeGallery);
viewerClose.addEventListener('click', closeViewer);
viewerPrev.addEventListener('click', () => stepViewer(-1));
viewerNext.addEventListener('click', () => stepViewer(1));

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    if (viewer.classList.contains('is-open')) closeViewer();
    else if (lightbox.classList.contains('is-open')) closeGallery();
  }
  if (viewer.classList.contains('is-open')) {
    if (e.key === 'ArrowRight') stepViewer(1);
    if (e.key === 'ArrowLeft') stepViewer(-1);
  }
});
