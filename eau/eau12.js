const arguments = process.argv.slice(2);

// Fonction
const bubbleSorting = (arg) => {
  const numbers = [];
  for (i = 0; i < arg.length; i++) {
    numbers.push(Number(arg[i]));
  }
  let checkNumber = numbers[0];
  let cpt = 0;
  for (i = 0; i < numbers.length; i++) {
    console.log(checkNumber, numbers[i]);
    if (checkNumber < numbers[i]) {
      checkNumber = numbers[i];
    }
    if (i + 1 == numbers.length - 1) {
      i = cpt;
      cpt++;
    }
  }
};

// Gestion des erreurs

// Parsing

// Résolution

// Résultat
bubbleSorting(arguments);
