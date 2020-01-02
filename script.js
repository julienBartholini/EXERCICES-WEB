const main = document.querySelector('main'),
    nomsExos = ['JCVD et Co'];

for (let i = 0; i < nomsExos.length; i++) {
    const lien = document.createElement('a');
    
    lien.href = `exercices/ex${i + 1}/index.html`;
    lien.target = '_blank';
    
    lien.textContent = `EXERCICE ${i + 1} : ${nomsExos[i]}`;
    
    main.appendChild(lien);
}