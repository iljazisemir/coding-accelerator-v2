const arguments = process.argv[2];
const stringSeparator = process.argv[3];

// Fonction
const split = (arg, stringSeparator) => {
  let word = "";
  let array = [];
  for (i = 0; i <= arg.length; i++) {
    if (i == arg.length) {
      array.push(word);
      word = "";
    }
    if (arg[i] !== " ") {
      word += arg[i];
    } else {
      array.push(word);
      word = "";
    }
  }
  let partToSplit = "";
  let arraySplit = [];
  for (i = 0; i <= array.length - 1; i++) {
    if (array[i] == stringSeparator) {
      arraySplit.push(partToSplit);
      partToSplit = "";
    } else {
      partToSplit += array[i] + " ";
    }
  }
  arraySplit.push(partToSplit);
  for (i = 0; i < arraySplit.length; i++) console.log(arraySplit[i]);
};

// Gestion des erreurs
const error = (arguments, stringSeparator) => {
  if (arguments == undefined || stringSeparator == undefined) {
    return true;
  }
};

// Parsing
if (error(arguments, stringSeparator)) console.log("Error");

// Résolution

// Résultat
if (!error(arguments, stringSeparator)) split(arguments, stringSeparator);
