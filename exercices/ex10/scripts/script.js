class Scenariste {
  constructor(visuel, nom, description, nbPts) {
    this.visuel = visuel;
    this.nom = nom;
    this.description = description;
    this.nbPts = nbPts;
  }
  affiche() {
    return `VISUEL : ${this.visuel} / NOM : ${this.nom} / DESCRIP : ${this.description} / PTS : ${this.nbPts}`;
  }
}

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
    tabLieux = ['rue', 'ecole', 'hopital', 'hotel', 'prison', 'egouts'],
    tabArmes = ['tuyau', 'pistolet', 'fusil', 'colt'],
    tabSurvivants = ['harry', 'cybil', 'james', 'laura', 'heather', 'douglas', 'henry', 'eileen'],
    tabMonstres = ['mumbler', 'nightFlutter', 'lyingFigure', 'nurse', 'scraper', 'rubberFace', 'pyramid'],

    tabReactions = ['Où suis-je ?...', "?!... Ca pourrait servir.", 'Qui êtes vous ?...', "C'est quoi ça ?!..."];

// OBJETS LIEUX :
const rue = new Scenariste('rue', 'Les Rues', '...', 25),
hotel = new Scenariste('hotel', 'Hotel Lakeview', '...', 21),
ecole = new Scenariste('ecole', 'Ecole Primaire Midwish', '...', 17),
hopital = new Scenariste('hopital', 'Hopital Alchemia', '...', 13),
egouts = new Scenariste('egouts', 'Les Egouts', '...', 9),
prison = new Scenariste('prison', 'La Prison Lacustre', '...', 3);

// TABLEAUX DES CATEGORIES :
const mesLieux = [rue, hotel, ecole, hopital, egouts, prison];

for (let i = 0; i < mesLieux.length; i++) {
  console.log(mesLieux[i].affiche());
}

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