class Elements {
  constructor(visuel, nom, description, nbPts) {
    this.visuel = visuel;
    this.nom = nom;
    this.description = description;
    this.nbPts = nbPts;
  }
}

function scenariste(mesCategories, monScenario) {
  for (let i = 0; i < mesCategories.length; i++) {
    let iRandom = Math.floor(Math.random() * mesCategories[i].length);
    monScenario.push(mesCategories[i][iRandom]);
  }
}

function realisateur(monScenario, tabVisuelsSections, tabNotesSections, pourcentage) {
  for (let i = 0; i < monScenario.length; i++) {
    tabVisuelsSections[i].style.backgroundImage = `url(../imgs/lieux/${monScenario[i].visuel}.jpg)`;
    tabNotesSections[i].querySelector('h3').textContent = monScenario[i].nom;
    tabNotesSections[i].querySelector('p').textContent = monScenario[i].description;
    pourcentage = pourcentage + monScenario[i].nbPts;
  }
}

function monteur(boutonClique, sectionActuelle, noteActuelle) {
  console.log(boutonClique);
  console.log(sectionActuelle);
  console.log(noteActuelle);
}

// -------------------------------------------------------------------------------------------------------------

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
  }
}

// -------------------------------------------------------------------------------------------------------------

let opacityCard = 0,
    opacityIntro = 0,
    opacityReveil = 0,
    compteur = 0,
    pourcentage = 0;
    // TABLEAUX DES ELTS DU SCENARIO PRE-GENERE (lieu, arme, survivant, monstre)
    monScenario = [];

const audio = document.querySelector('audio'),
    carteInfos = document.querySelector('#carteInfos'),
    btnFermer = document.querySelector('#btnFermer'),

    sectionIntro = document.querySelector('#sectionIntro'),
    sectionReveil = document.querySelector('#sectionReveil'),
    sectionLieu = document.querySelector('#sectionLieu'),
    sectionArme = document.querySelector('#sectionArme'),
    sectionSurvivant = document.querySelector('#sectionSurvivant'),
    sectionMonstre = document.querySelector('#sectionMonstre'),
    sectionResultat = document.querySelector('#sectionResultat'),

    visuelLieu = document.querySelector('#visuelLieu'),
    visuelArme = document.querySelector('#visuelArme'),
    visuelSurvivant = document.querySelector('#visuelSurvivant'),
    visuelMonstre = document.querySelector('#visuelMonstre'),

    noteLieu = document.querySelector('#noteLieu'),
    noteArme = document.querySelector('#noteArme'),
    noteSurvivant = document.querySelector('#noteSurvivant'),
    noteMonstre = document.querySelector('#noteMonstre'),

    btnCommencer = document.querySelector('#btnCommencer'),
    btnInfos = document.querySelector('#btnInfos'),
    btnSuivant = document.querySelector('#btnSuivant'),
    btnLieu = document.querySelector('#btnLieu'),
    btnArme = document.querySelector('#btnArme'),
    btnSurvivant = document.querySelector('#btnSurvivant'),
    btnMonstre = document.querySelector('#btnMonstre'),

    tabSections = [sectionLieu, sectionArme, sectionSurvivant, sectionMonstre],
    tabVisuelsSections = [visuelLieu, visuelArme, visuelSurvivant, visuelMonstre],
    tabNotesSections = [noteLieu, noteArme, noteSurvivant, noteMonstre],
    tabBtnsSections = [btnLieu, btnArme, btnSurvivant, btnMonstre];

// OBJETS LIEUX :
const rues = new Elements('rues', 'Les Rues', '...', 25),
hotel = new Elements('hotel', 'Hotel Lakeview', '...', 21),
ecole = new Elements('ecole', 'Ecole Primaire Midwish', '...', 17),
hopital = new Elements('hopital', 'Hopital Alchemia', '...', 13),
egouts = new Elements('egouts', 'Les Egouts', '...', 9),
prison = new Elements('prison', 'La Prison Lacustre', '...', 3),
// OBJETS ARMES :
colt = new Elements('colt', 'Colt', '...', 25),
fusil = new Elements('fusil', 'Fusil', '...', 18),
pistolet = new Elements('pistole', 'Pistolet', '...', 11),
tuyau = new Elements('tuyau', "Tuyau d'Acier", '...', 3),
// OBJETS SURVIVANTS :
harry = new Elements('harry', 'Harry Mason', '...', 25),
heather = new Elements('heather', 'Heather Mason', '...', 22),
henry = new Elements('henry', 'Henry Townshend', '...', 19),
james = new Elements('james', 'James Sunderland', '...', 16),
cybil = new Elements('cybil', 'Cybil Bennett', '...', 13),
douglas = new Elements('douglas', 'Douglas Cartland', '...', 10),
eileen = new Elements('eileen', 'Eileen Galvin', '...', 7),
laura = new Elements('laura', 'Laura', '...', 2),
// OBJETS MONSTRES
lyingFigure = new Elements('lyingFigure', 'Lying Figure', '...', 25),
mumbler = new Elements('mumbler', 'Mumbler', '...', 21),
nightFlutter = new Elements('nightFlutter', 'Night Flutter', '...', 17),
nurse = new Elements('nurse', 'Nurse', '...', 13),
rubberFace = new Elements('rubberFace', 'Rubber Face', '...', 9),
scraper = new Elements('scraper', 'Scraper', '...', 5),
pyramid = new Elements('pyramid', 'Pyramid Head', '...', 1);

// TABLEAUX DES CATEGORIES :
const mesLieux = [rues, hotel, ecole, hopital, egouts, prison],
mesArmes = [colt, fusil, pistolet, tuyau],
mesSurvivants = [harry, heather, henry, james, cybil, douglas, eileen, laura],
mesMonstres = [lyingFigure, mumbler, nightFlutter, nurse, rubberFace, scraper, pyramid],

mesCategories = [mesLieux, mesArmes, mesSurvivants, mesMonstres];

// APPEL DE LA FONCTION 'SCENARISTE' :
scenariste(mesCategories, monScenario);

// APPEL DE LA FONCTION 'SCRIPTE' :
realisateur(monScenario, tabVisuelsSections, tabNotesSections, pourcentage);

// GESTION EVENT BOUTONS DES SECTIONS :
for (let i = 0; i < tabBtnsSections.length; i++) {
  tabBtnsSections[i].addEventListener('click', function () {
    monteur(tabBtnsSections[i], tabSections[i], tabNotesSections[i]);
  });
}

// -------------------------------------------------------------------------------------------------------------

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