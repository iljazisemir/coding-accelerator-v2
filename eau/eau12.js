const arg = process.argv.slice(2);

// Fonction
const bubbleSorting = (arg) => {
  const numbers = [];
  for (i = 0; i < arg.length; i++) {
    numbers.push(Number(arg[i]));
  }
  let transition;
  let cpt = 0;
  for (i = 0; i < numbers.length; i++) {
    if (numbers[i + 1] !== undefined) {
      if (numbers[i] > numbers[i + 1]) {
        transition = numbers[i];
        numbers[i] = numbers[i + 1];
        numbers[i + 1] = transition;
      }
    } else {
      cpt++;
      i = -1;
      if (cpt == numbers.length) {
        break;
      }
    }
  }

  console.log(numbers);
};

// Gestion des erreurs

// Parsing

// Résolution

// Résultat
bubbleSorting(arg);
