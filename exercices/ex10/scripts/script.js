class Elements {
  constructor(emplacement, visuel, nom, description, nbPts, extention) {
    this.emplacement = emplacement;
    this.visuel = visuel;
    this.nom = nom;
    this.description = description;
    this.nbPts = nbPts;
    this.extention = extention;
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
    tabVisuelsSections[i].style.backgroundImage = `url(../imgs/${monScenario[i].emplacement}/${monScenario[i].visuel}.${monScenario[i].extention})`;
    tabNotesSections[i].querySelector('h3').textContent = monScenario[i].nom;
    tabNotesSections[i].querySelector('p').textContent = monScenario[i].description;
    pourcentage = pourcentage + monScenario[i].nbPts;
  }
}

function monteur(tabSections, sectionActuelle) {
  sectionActuelle.style.display = 'none';
  let iSuivant = (tabSections.indexOf(sectionActuelle)) + 1;
  tabSections[iSuivant].style.display = 'block';
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
  opacitySection = 1,
  compteur = 0,
  pourcentage = 0,
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
  tabBtnsSections = [btnLieu, btnArme, btnSurvivant, btnMonstre],

  nomsDossiersImgs = ['lieux', 'armes', 'survivants', 'monstres'],
  extentions = ['jpg', 'png'];

// OBJETS LIEUX :
const rues = new Elements(nomsDossiersImgs[0], 'rues', 'Les Rues', '...', 25, extentions[0]),
  hotel = new Elements(nomsDossiersImgs[0], 'hotel', 'Hotel Lakeview', '...', 21, extentions[0]),
  ecole = new Elements(nomsDossiersImgs[0], 'ecole', 'Ecole Primaire Midwish', '...', 17, extentions[0]),
  hopital = new Elements(nomsDossiersImgs[0], 'hopital', 'Hopital Alchemia', '...', 13, extentions[0]),
  egouts = new Elements(nomsDossiersImgs[0], 'egouts', 'Les Egouts', '...', 9, extentions[0]),
  prison = new Elements(nomsDossiersImgs[0], 'prison', 'La Prison Lacustre', '...', 3, extentions[0]),
  // OBJETS ARMES :
  colt = new Elements(nomsDossiersImgs[1], 'colt', 'Colt', 'Une arme particulièrement puissante. Elle sera venir à bout de la plupart des menaces en un temps record.', 25, extentions[0]),
  fusil = new Elements(nomsDossiersImgs[1], 'fusil', 'Fusil', 'Une très bonne arme. Vous ne devriez pas trop craindre pour votre vie... En théorie...', 18, extentions[0]),
  pistolet = new Elements(nomsDossiersImgs[1], 'pistolet', 'Pistolet', 'Une bonne arme. Pratique si vous prenez garde de ne pas louper votre tir', 11, extentions[0]),
  tuyau = new Elements(nomsDossiersImgs[1], 'tuyau', "Tuyau d'Acier", 'Cette arme pourra vous aider à venir à bout des ennemis, mais le corps à corps augmentera grandement les risques d\'être mortellement blaissé...', 3, extentions[0]),
  // OBJETS SURVIVANTS :
  harry = new Elements(nomsDossiersImgs[2], 'harry', 'Harry Mason', '...', 25, extentions[0]),
  heather = new Elements(nomsDossiersImgs[2], 'heather', 'Heather Mason', '...', 22, extentions[0]),
  henry = new Elements(nomsDossiersImgs[2], 'henry', 'Henry Townshend', '...', 19, extentions[0]),
  james = new Elements(nomsDossiersImgs[2], 'james', 'James Sunderland', '...', 16, extentions[0]),
  cybil = new Elements(nomsDossiersImgs[2], 'cybil', 'Cybil Bennett', '...', 13, extentions[0]),
  douglas = new Elements(nomsDossiersImgs[2], 'douglas', 'Douglas Cartland', '...', 10, extentions[0]),
  eileen = new Elements(nomsDossiersImgs[2], 'eileen', 'Eileen Galvin', '...', 7, extentions[0]),
  laura = new Elements(nomsDossiersImgs[2], 'laura', 'Laura', '...', 2, extentions[0]),
  // OBJETS MONSTRES
  lyingFigure = new Elements(nomsDossiersImgs[3], 'lyingFigure', 'Lying Figure', '...', 25, extentions[1]),
  mumbler = new Elements(nomsDossiersImgs[3], 'mumbler', 'Mumbler', '...', 21, extentions[1]),
  nightFlutter = new Elements(nomsDossiersImgs[3], 'nightFlutter', 'Night Flutter', '...', 17, extentions[1]),
  nurse = new Elements(nomsDossiersImgs[3], 'nurse', 'Nurse', '...', 13, extentions[1]),
  rubberFace = new Elements(nomsDossiersImgs[3], 'rubberFace', 'Rubber Face', '...', 9, extentions[1]),
  scraper = new Elements(nomsDossiersImgs[3], 'scraper', 'Scraper', '...', 5, extentions[1]),
  pyramid = new Elements(nomsDossiersImgs[3], 'pyramid', 'Pyramid Head', '...', 1, extentions[1]);

// TABLEAUX DES CATEGORIES :
const mesLieux = [rues, hotel, ecole, hopital, egouts, prison],
  mesArmes = [colt, fusil, pistolet, tuyau],
  mesSurvivants = [harry, heather, henry, james, cybil, douglas, eileen, laura],
  mesMonstres = [lyingFigure, mumbler, nightFlutter, nurse, rubberFace, scraper, pyramid],

  mesCategories = [mesLieux, mesArmes, mesSurvivants, mesMonstres];

// APPEL DE LA FONCTION 'SCENARISTE' :
scenariste(mesCategories, monScenario);

// APPEL DE LA FONCTION 'REALISATEUR' :
realisateur(monScenario, tabVisuelsSections, tabNotesSections, pourcentage);

// GESTION EVENT BOUTONS DES SECTIONS :
for (let i = 0; i < tabBtnsSections.length; i++) {
  tabBtnsSections[i].addEventListener('click', function () {
    monteur(tabSections, tabSections[i]);
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
