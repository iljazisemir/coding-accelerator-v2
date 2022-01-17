// Fonction
const twoNumbersCombination = () => {
  let arrayCombination = [];
  for (i = 0; i < 100; i++) {
    for (j = i + 1; j < 100; j++) {
      if (i !== j) {
        // if (i < 10 || j < 10) {
        // }
        arrayCombination.push(i + " " + j);
      }
    }
  }
  console.log(arrayCombination);
};

// Résultat
twoNumbersCombination();
