const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menuButton.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));
document.getElementById('year').textContent = new Date().getFullYear();

const roles = ['Android Developer', 'Web Developer'];
let roleIndex = 0;
const roleText = document.getElementById('role-text');
setInterval(() => {
  roleIndex = (roleIndex + 1) % roles.length;
  roleText.style.opacity = '0';
  setTimeout(() => {
    roleText.textContent = roles[roleIndex];
    roleText.style.opacity = '1';
  }, 220);
}, 2600);
roleText.style.transition = 'opacity .22s ease';
