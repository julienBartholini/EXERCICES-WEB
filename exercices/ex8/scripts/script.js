const btnHamburger = document.querySelector('#btnHamburger'),
  xsMenu = document.querySelector('#xsMenu'),
  btnRetour = document.querySelector('#btnRetour');

btnHamburger.addEventListener('click', function () {
  xsMenu.style.display = 'block';
});

btnRetour.addEventListener('click', function () {
  xsMenu.style.display = 'none';
});