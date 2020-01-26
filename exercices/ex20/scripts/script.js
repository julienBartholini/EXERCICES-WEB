function openCarteInfos() {
  if (opacityCart < 1) {
    opacityCart += .1;
    carteInfos.style.opacity = opacityCart;
    requestAnimationFrame(openCarteInfos);
  } else {
    cancelAnimationFrame(requestAnimationFrame(closeCarteInfos));
  }
}

function closeCarteInfos() {
  if (opacityCart > 0) {
    opacityCart -= .1;
    carteInfos.style.opacity = opacityCart;
    requestAnimationFrame(closeCarteInfos);
  } else {
    carteInfos.style.display = 'none';
    cancelAnimationFrame(requestAnimationFrame(closeCarteInfos));
  }
}

let opacityCart = 0;

const btnInfos = document.querySelector('#btnInfos'),
    carteInfos = document.querySelector('#carteInfos'),
    btnFermer = document.querySelector('#btnFermer');

btnInfos.addEventListener('click', function () {
  carteInfos.style.display = 'flex';
  requestAnimationFrame(openCarteInfos);
});

btnFermer.addEventListener('click', function () {
  requestAnimationFrame(closeCarteInfos);
});