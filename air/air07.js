const arg = process.argv.slice(2);

let arrayOfNumbers = [];
for (i = 0; i < arg.length - 1; i++) {
  arrayOfNumbers.push(Number(arg[i]));
}
let number = Number(arg[arg.length - 1]);

// Fonction
const insertionSortArray = (arrayOfNumbers, number) => {
  let smallNumber;
  let bigNumber;
  let array = [];
  for (i = 0; i < arrayOfNumbers.length; i++) {
    if (arrayOfNumbers[i] < number && arrayOfNumbers[i + 1] > number) {
      array.push(arrayOfNumbers[i], number);
    } else {
      array.push(arrayOfNumbers[i]);
    }
  }
  console.log(array);
};

// Gestion des erreurs

// Parsing

// Résolution

// Résultat
insertionSortArray(arrayOfNumbers, number);
