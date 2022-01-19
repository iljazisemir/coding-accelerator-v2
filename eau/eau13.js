const arg = process.argv.slice(2);

// Fonction
const sortSelection = (arg) => {
  const numbers = [];
  for (i = 0; i < arg.length; i++) {
    numbers.push(Number(arg[i]));
  }
  let rouge;
  let bleu;
  let index = 0;
  for (i = 0; i < numbers.length; i++) {
    rouge = numbers[i];
    for (j = i; j < numbers.length; j++) {
      bleu = numbers[j];
      if (rouge > bleu && bleu !== undefined) {
        console.log(rouge, bleu);
        rouge = bleu;
        index = j;
      }
    }
    if (rouge !== numbers[i]) {
      numbers[index] = numbers[i];
      numbers[i] = rouge;
    }
  }
  console.log(numbers);
};

// Gestion des erreurs

// Parsing

// Résolution

// Résultat
sortSelection(arg);
