const arg = process.argv.slice(2);

let arrayOfWords = [];
for (i = 0; i < arg.length - 1; i++) {
  arrayOfWords.push(arg[i]);
}
let letter = arg[arg.length - 1];

// Fonction
const passSanitaire = (arg, string) => {
  let words = [];
  for (i = 0; i < arg.length; i++) {
    words.push(arg[i].split(""));
  }
  let newArrayOfWords = [];
  let check = 0;
  for (i = 0; i < words.length; i++) {
    for (j = 0; j < words[i].length; j++) {
      if (words[i][j].toLowerCase() == string.toLowerCase()) {
        check++;
      }
    }
    if (check == 0) {
      newArrayOfWords.push(words[i]);
    }
    check = 0;
  }
  for (i = 0; i < newArrayOfWords.length; i++) {
    console.log(newArrayOfWords[i].join(""));
  }
};
// Gestion des erreurs

// Parsing

// Résolution

// Résultat
passSanitaire(arrayOfWords, letter);
