const toggleBtn = document.getElementById('menu-toggle');
const header = document.getElementById('site-header');
const nav = document.getElementById('primary-nav');

toggleBtn.addEventListener('click', () => {
  const abierto = header.classList.toggle('is-open');
  toggleBtn.setAttribute('aria-expanded', abierto);
  document.body.classList.toggle('no-scroll', abierto); // opcional, bloquea scroll
});
