const btnMobile = document.getElementById('btn-mobile');

function toggleMenu() {
  document.getElementById('nav').classList.toggle('active');
  document.getElementById('main-content').classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);
