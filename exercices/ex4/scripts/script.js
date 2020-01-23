const main = document.querySelector('main'),
    btn = document.querySelector('button');

btn.addEventListener('click', function () {
  main.style.animation = 'groovy 3s linear infinite';
  document.body.removeChild(btn);
});