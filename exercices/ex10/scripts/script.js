function btn() {
  if (compteur !== 3) {
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
    compteur = 0,

    // TABLEAUX DES ELTS DU SCENARIO PRE-GENERE (lieu, arme, survivant, monstre)
    scenarioElts = [];

const audio = document.querySelector('audio'),
    sectionIntro = document.querySelector('#sectionIntro'),
    btnCommencer = document.querySelector('#btnCommencer'),
    btnInfos = document.querySelector('#btnInfos'),
    carteInfos = document.querySelector('#carteInfos'),
    btnFermer = document.querySelector('#btnFermer'),
    sectionReveil = document.querySelector('#sectionReveil'),
    btnSuivant = document.querySelector('#btnSuivant'),
    sectionLieu = document.querySelector('#sectionLieu'),
    visuelLieu = document.querySelector('#visuelLieu'),
    btnLieu = document.querySelector('#btnLieu'),

    // ORIENTE OBJET, JUJU !!! ;^)
    lieux = ['rue', 'ecole', 'hopital', 'hotel', 'prisonlac', 'egouts'],
    armes = ['tuyau', 'pistolet', 'fusil', 'colt'],
    survivants = ['harry', 'cybil', 'james', 'laura', 'heather', 'douglas', 'henry', 'eileen'],
    monstres = ['mumbler', 'nightFlutter', 'lyingfigure', 'nurse', 'scraper', 'rubberface', 'pyramid'],

    btnsSuivantText = ['Où suis-je ?', 'Qui êtes-vous ?', "Qu'est ce que ?..."];

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

/*btnLieu.addEventListener('click', function () {

});*/