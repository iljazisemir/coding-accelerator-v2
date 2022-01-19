const symbole = process.argv[2];
const stage = process.argv[3];

// Fonction
const pyramide = (symbole, stage) => {
  let findNumberOfSymbole = 1;
  let space = 0;
  for (i = 0; i < stage; i++) {
    findNumberOfSymbole += 2;
  }
  let numberOfSymbole = 1;
  for (i = 0; i < stage; i++) {
    space = findNumberOfSymbole - numberOfSymbole;
    console.log(
      " ".repeat(space / 2) +
        symbole.repeat(numberOfSymbole) +
        " ".repeat(space / 2)
    );
    numberOfSymbole += 2;
  }
};
// Gestion des erreurs

// Parsing

// Résolution

// Résultat
pyramide(symbole, stage);
