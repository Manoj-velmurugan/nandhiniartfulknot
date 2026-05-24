// Navbar scroll shadow
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// Mobile hamburger
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('nav-links');
hamburger?.addEventListener('click', () => navLinks.classList.toggle('open'));
document.querySelectorAll('#nav-links a').forEach(a =>
  a.addEventListener('click', () => navLinks.classList.remove('open'))
);

// Scroll reveal
const ro = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('up'); });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => ro.observe(el));

// Stagger service cards
document.querySelectorAll('.srv-card').forEach((c, i) =>
  c.style.transitionDelay = `${i * 0.07}s`
);

// Lightbox
const lb     = document.getElementById('lightbox');
const lbImg  = document.getElementById('lightbox-img');
const lbClose= document.getElementById('lightbox-close');

document.querySelectorAll('[data-lightbox]').forEach(el => {
  el.addEventListener('click', () => {
    lbImg.src = el.dataset.lightbox;
    lb.classList.add('active');
    document.body.style.overflow = 'hidden';
  });
});
const closeLb = () => {
  lb.classList.remove('active');
  document.body.style.overflow = '';
  lbImg.src = '';
};
lbClose?.addEventListener('click', closeLb);
lb?.addEventListener('click', e => { if (e.target === lb) closeLb(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLb(); });
