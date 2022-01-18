const arguments = process.argv.slice(2);

let arrayOfNumbers = [];
for (i = 0; i < arguments.length - 1; i++) {
  arrayOfNumbers.push(Number(arguments[i]));
}
let number = Number(arguments[arguments.length - 1]);

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
