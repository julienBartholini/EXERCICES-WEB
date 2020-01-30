const main = document.querySelector('main'),
    nomsExos = ['JCVD et Co','Les Positionnements','Flex Box','Grid','Les Animations','','','','','','','','','','','','','','','FIL ROUGE'];

for (let i = 0; i < nomsExos.length; i++) {
  const lien = document.createElement('a');
  if (nomsExos[i] !== '') {
    lien.href = `exercices/ex${i + 1}/index.html`;
    lien.textContent = `EXERCICE ${i + 1} : ${nomsExos[i]}`;
    lien.target = '_blank';
  } else {
    lien.href = '#';
    lien.textContent = `INDISPONIBLE`;
    lien.style.opacity = .25;
  }
  main.appendChild(lien);
}