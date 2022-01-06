const arguments = process.argv.slice(2);

const firstWord = arguments[0].slice("").split("");
const secondWord = arguments[1] ? arguments[1].slice("").split("") : NaN;

// Fonction
const findSecondWordInFirstWord = (first, second) => {
  let word = [];
  for (i = 0; i < first.length; i++) {
    if (first[i] == second[0]) {
      for (j = 0; j < second.length; j++) {
        if (first[i + j] === second[j]) {
          word.push(first[i + j]);
        } else {
          word = [];
          i++;
        }
      }
    }
  }
  if (word.join("") == second.join("")) {
    return true;
  } else {
    return false;
  }
};

// Gestion des erreurs

// Parsing
if (arguments[0] && arguments[1]) {
  console.log(findSecondWordInFirstWord(firstWord, secondWord));
} else {
  console.log("Error");
}

// Résolution

// Résultat
