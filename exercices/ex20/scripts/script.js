function btn() {
  if (compteur !== 5) {
    console.log(compteur);
    compteur = compteur + 1;
  } else {
    btnLieu.style.display = 'block';
    clearInterval(setInterval(btn, 1000));
  }
}

function openIntro() {
  if (opacityIntro < 1) {
    opacityIntro += .01;
    sectionIntro.style.opacity = opacityIntro;
    requestAnimationFrame(openIntro);
  } else {
    cancelAnimationFrame(requestAnimationFrame(openIntro));
  }
}

function closeIntro() {
  if (opacityIntro > 0) {
    opacityIntro -= .025;
    sectionIntro.style.opacity = opacityIntro;
    requestAnimationFrame(closeIntro);
  } else {
    sectionIntro.style.display = 'none';
    cancelAnimationFrame(requestAnimationFrame(closeIntro));
    sectionReveil.style.display = 'flex';
    sectionReveil.style.animation = 'ouverture 3s ease forwards';
    requestAnimationFrame(openReveil);
  }
}

function openCarteInfos() {
  if (opacityCard < 1) {
    opacityCard += .1;
    carteInfos.style.opacity = opacityCard;
    requestAnimationFrame(openCarteInfos);
  } else {
    cancelAnimationFrame(requestAnimationFrame(closeCarteInfos));
  }
}

function closeCarteInfos() {
  if (opacityCard > 0) {
    opacityCard -= .1;
    carteInfos.style.opacity = opacityCard;
    requestAnimationFrame(closeCarteInfos);
  } else {
    carteInfos.style.display = 'none';
    cancelAnimationFrame(requestAnimationFrame(closeCarteInfos));
  }
}

function openReveil() {
  if (opacityReveil < 1) {
    opacityReveil += .01;
    sectionReveil.style.opacity = opacityReveil;
    requestAnimationFrame(openReveil);
  } else {
    cancelAnimationFrame(requestAnimationFrame(openReveil));
  }
}

function closeReveil() {
  if (opacityReveil > 0) {
    opacityReveil -= .01;
    sectionReveil.style.opacity = opacityReveil;
    requestAnimationFrame(closeReveil);
  } else {
    cancelAnimationFrame(requestAnimationFrame(openReveil));
    sectionReveil.style.display = 'none';
    sectionLieu.style.display = 'block';
    setInterval(btn, 1000);
  }
}

let opacityCard = 0,
    opacityIntro = 0,
    opacityReveil = 0,
    eltsScenario = [],
    compteur = 0;

const audio = document.querySelector('audio'),
    sectionIntro = document.querySelector('#sectionIntro'),
    btnCommencer = document.querySelector('#btnCommencer'),
    btnInfos = document.querySelector('#btnInfos'),
    carteInfos = document.querySelector('#carteInfos'),
    btnFermer = document.querySelector('#btnFermer'),
    sectionReveil = document.querySelector('#sectionReveil'),
    btnSuivant = document.querySelector('#btnSuivant'),
    sectionLieu = document.querySelector('#sectionLieu'),
    btnLieu = document.querySelector('#btn'),

    // ORIENTE OBJET, JUJU !!! ;^)
    lieux = ['rue', 'sanitorium', 'theatre', 'ecole', 'alchemia', 'woodside', 'lakeview', 'parc', 'prisonlac', 'egouts'],
    armesBlch = ['baton', 'barre', 'clefanglaise', 'marteau'],
    armesFeu = ['pistolet', 'fusil', 'carabine', 'colt'],
    survivants = ['travis', 'harry', 'cybil', 'james', 'maria', 'laura', 'heather', 'douglas', 'henry', 'eileen'],
    realites = ['normal', 'enfer'],
    monstres = ['mumbler', 'airscreamer', 'lyingfigure', 'nurse', 'scraper', 'rubberface', 'ariel', 'twoback', 'pyramid', 'walter'],

    btnsSuivantText = ['Où suis-je ?', 'Qui êtes-vous ?', 'Que ce passe t-il ?', "Mais qu'est ce que ?..."];

requestAnimationFrame(openIntro);

btnCommencer.addEventListener('click', function () {
  audio.src = 'sons/start.mp3';
  audio.play();
  requestAnimationFrame(closeIntro);
});

btnInfos.addEventListener('click', function () {
  audio.src = 'sons/tic2.mp3';
  audio.play();
  carteInfos.style.display = 'flex';
  requestAnimationFrame(openCarteInfos);
});

btnFermer.addEventListener('click', function () {
  audio.play();
  requestAnimationFrame(closeCarteInfos);
});

btnSuivant.addEventListener('click', function () {
  requestAnimationFrame(closeReveil);
});