const arguments = process.argv.slice(2);

// Fonction
const sortSelection = (arg) => {
  const numbers = [];
  for (i = 0; i < arg.length; i++) {
    numbers.push(Number(arg[i]));
  }
  let smaller;
  for (i = 0; i < numbers.length; i++) {
    if (numbers[i] < numbers[i + 1]) {
      smaller = numbers[i];
    } else {
      smaller = numbers[i + 1];
    }
    if (numbers[i + 1] !== undefined) {
      numbers[i] = smaller;
      i--;
    }
  }
  console.log(numbers);
};

// Gestion des erreurs

// Parsing

// Résolution

// Résultat
sortSelection(arguments);
