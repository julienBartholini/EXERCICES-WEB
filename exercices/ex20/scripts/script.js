function openCarteInfos() {
  if (opacityCard < 1) {
    opacityCard += .05;
    carteInfos.style.opacity = opacityCard;
    requestAnimationFrame(openCarteInfos);
  } else {
    cancelAnimationFrame(requestAnimationFrame(closeCarteInfos));
  }
}

function closeCarteInfos() {
  if (opacityCard > 0) {
    opacityCard -= .05;
    carteInfos.style.opacity = opacityCard;
    requestAnimationFrame(closeCarteInfos);
  } else {
    carteInfos.style.display = 'none';
    cancelAnimationFrame(requestAnimationFrame(closeCarteInfos));
  }
}

let opacityCard = 0;

const audio = document.querySelector('audio'),
    btnInfos = document.querySelector('#btnInfos'),
    carteInfos = document.querySelector('#carteInfos'),
    btnFermer = document.querySelector('#btnFermer');

btnInfos.addEventListener('click', function () {
  carteInfos.style.display = 'flex';
  requestAnimationFrame(openCarteInfos);
});

btnFermer.addEventListener('click', function () {
  requestAnimationFrame(closeCarteInfos);
});