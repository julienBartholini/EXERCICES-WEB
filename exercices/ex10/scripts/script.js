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
    tabVisuelsSections[i].style.backgroundImage = `url(imgs/${monScenario[i].emplacement}/${monScenario[i].visuel}.${monScenario[i].extention})`;
    tabNotesSections[i].querySelector('h3').textContent = monScenario[i].nom;
    tabNotesSections[i].querySelector('p').textContent = monScenario[i].description;
    pourcentage = pourcentage + monScenario[i].nbPts;
    tauxDeSurvie.innerHTML = `${pourcentage}%`;

    let texteRemarqueFinale;

    if (pourcentage <= 10) {
      texteRemarqueFinale = 'Si vous survivez, jouez au loto...';
    } else if (pourcentage > 10 && pourcentage <= 15) {
      texteRemarqueFinale = 'Vous ne partez pas gagnant...';
    } else if (pourcentage > 15 && pourcentage <= 20) {
      texteRemarqueFinale = 'Vous aurez beaucoup de mal à survivre...';
    } else if (pourcentage > 20 && pourcentage <= 25) {
      texteRemarqueFinale = 'Vous aurez du mal à survivre...';
    } else if (pourcentage > 25 && pourcentage <= 30) {
      texteRemarqueFinale = 'Vos chances sont encore faible. Accrochez-vous !';
    } else if (pourcentage > 30 && pourcentage <= 35) {
      texteRemarqueFinale = 'Vos chances sont encore un peu faible. Accrochez-vous !';
    } else if (pourcentage > 35 && pourcentage <= 40) {
      texteRemarqueFinale = 'Ce sera compliqué mais ne baissez surtout pas les bras.';
    } else if (pourcentage > 40 && pourcentage <= 45) {
      texteRemarqueFinale = 'Ce sera un peu compliqué. Ne lachez rien !';
    } else if (pourcentage > 45 && pourcentage <= 50) {
      texteRemarqueFinale = 'Ne lachez rien et ne baissez surtout pas la garde !';
    } else if (pourcentage > 50 && pourcentage <= 55) {
      texteRemarqueFinale = 'Plus d\'une chance sur 2 mais ne baissez surtout pas la garde !';
    } else if (pourcentage > 55 && pourcentage <= 60) {
      texteRemarqueFinale = 'Restez concentré, faites très attention !';
    } else if (pourcentage > 60 && pourcentage <= 65) {
      texteRemarqueFinale = 'Pas trop mal mais faites très attention !';
    } else if (pourcentage > 65 && pourcentage <= 70) {
      texteRemarqueFinale = 'Pas mal mais faites attention !';
    } else if (pourcentage > 70 && pourcentage <= 75) {
      texteRemarqueFinale = 'Bien... Mais ne baissez pas votre garde...';
    } else if (pourcentage > 75 && pourcentage <= 80) {
      texteRemarqueFinale = 'Bien ! On reste concentré...';
    } else if (pourcentage > 80 && pourcentage <= 85) {
      texteRemarqueFinale = 'Très bien. Restez tout de même vigilant.';
    } else if (pourcentage > 85 && pourcentage <= 90) {
      texteRemarqueFinale = 'Vos chance de survie sont très bonnes mais on reste concentré...';
    } else if (pourcentage > 90 && pourcentage <= 95) {
      texteRemarqueFinale = 'Vos chances de survie sont exellentes. On se concentre encore un peu.';
    } else if (pourcentage > 95 && pourcentage <= 100) {
      texteRemarqueFinale = 'Vous avez toutes vos chances !!! Mais n\'oubliez pas que le risque 0 n\'existe pas. Surtout à SILENT HILL...';
    }

    remarqueFinale.textContent = texteRemarqueFinale;
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

  tauxDeSurvie = document.querySelector('#tauxDeSurvie'),
  remarqueFinale = document.querySelector('#remarqueFinale'),

  tabSections = [sectionLieu, sectionArme, sectionSurvivant, sectionMonstre, sectionResultat],
  tabVisuelsSections = [visuelLieu, visuelArme, visuelSurvivant, visuelMonstre],
  tabNotesSections = [noteLieu, noteArme, noteSurvivant, noteMonstre],
  tabBtnsSections = [btnLieu, btnArme, btnSurvivant, btnMonstre],

  nomsDossiersImgs = ['lieux', 'armes', 'survivants', 'monstres'],
  extentions = ['jpg', 'png'];

// OBJETS LIEUX :
const rues = new Elements(nomsDossiersImgs[0], 'rues', 'Les Rues', 'Les rues de SILENT HILL bien que peuplées de créatures, restent un endroit relativement calme. L\'espace et la clareté environnante vous permettront de voir arriver vos ennemis bien avant que ceci vous atteignent. A condition bien sûre de ne pas vous laisser surprendre par l\épais brouillard qui englobe la ville...', 25, extentions[0]),
  hotel = new Elements(nomsDossiersImgs[0], 'hotel', 'Hotel Lakeview', 'Cet hotel autrefois calme et paisible fut construit au bord du lac Tuluca, au Nord de la ville. Un terible incendie veint cloturer à jamais ce bel endroit. Pourtant, certaines personnes s\'étant aventuré près de celui-ci ces dernières années, confirment que ce dernier serait encore dans son état d\'origine, avant les flammes... Avant les morts...', 21, extentions[0]),
  ecole = new Elements(nomsDossiersImgs[0], 'ecole', 'Ecole Primaire Midwish', 'Une école à première vue saine et pronant les valeurs chretiennes. Bien réputée à l\'époque où SILENT HILL était encore une petite ville paisible. Pourtant, des rumeurs disent que cette institut cachée en son sein des membres de l\'Ordre, une organisation pronant un culte païen aux dogme douteux, remontant à la construction de la ville...', 17, extentions[0]),
  hopital = new Elements(nomsDossiersImgs[0], 'hopital', 'Hopital Alchemia', 'Il s\'agit du plus vieil hopital de la ville. Il est spécialisé dans les opérations et les soins physique. Il existerait un second sous-sol accéssible via la remise. Les employés de l\'institut auraient d\'ailleurs pour ordre de ne jamais y mettre les pieds sous peine de sanction immédiate...', 13, extentions[0]),
  egouts = new Elements(nomsDossiersImgs[0], 'egouts', 'Les Egouts', 'Un lieu sombre et humide, mais également immense et peuplé de créatures. Certaines sorties meneraient directement dans des lieux clées de la ville. Des lieux ayant un lien étroit avec l\'Ordre, une organisation pronant un culte païen aux dogme douteux, remontant à la construction de la ville...', 9, extentions[0]),
  prison = new Elements(nomsDossiersImgs[0], 'prison', 'La Prison Lacustre', 'Une grande structure de béton qui semblerait avoir été construite sur le lac Toluca au nord de la ville. Un lieu de mort et de torture. Les enfants de l\'orphelinat "Wish House", lieux régit par l\'Ordre, une organisation pronant un culte païen aux dogme douteux, y sont enfermés, maltraités, voir tué, pour ne pas avoir respecté le dogme de l\'Ordre.', 3, extentions[0]),
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
