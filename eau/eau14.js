const arguments = process.argv.slice(2);

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

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
        rouge = bleu;
        index = j;
      }
    }
    if (rouge !== numbers[i]) {
      numbers[index] = numbers[i];
      numbers[i] = rouge;
    }
  }
  return numbers;
};

const asciiOrder = (arg, alphabet) => {
  const alphabetSplit = alphabet.split("");
  let index = [];
  for (i = 0; i < arg.length; i++) {
    for (j = 0; j < alphabetSplit.length; j++) {
      if (arg[i][0] == alphabetSplit[j]) {
        index.push(j);
      }
    }
  }
  const indexTri = sortSelection(index);
  let newAsciiOrder = [];
  for (i = 0; i < indexTri.length; i++) {
    for (j = 0; j < arg.length; j++) {
      if (alphabetSplit[indexTri[i]] == arg[j][0]) {
        newAsciiOrder.push(arg[j]);
      }
    }
  }
  console.log(newAsciiOrder);
};

// Résultat
asciiOrder(arguments, alphabet);
