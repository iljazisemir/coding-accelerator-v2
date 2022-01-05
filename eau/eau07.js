const sentence = process.argv[2];

// Fonction
const firstWordIsUppercase = (sentence) => {
  let newSentence = "";
  for (i = 0; i < sentence.length; i++) {
    if (sentence[i - 1] == " " || sentence[i - 1] == undefined) {
      newSentence += sentence[i].toUpperCase();
    } else {
      newSentence += sentence[i].toLowerCase();
    }
  }
  console.log(newSentence);
};
// Gestion des erreurs

// Parsing

// Résolution

// Résultat
firstWordIsUppercase(sentence);
