const sentence = process.argv[2];

// Fonction
const uppercaseOverTwo = (sentence) => {
  let newSentence = "";
  let cpt = 0;
  for (i = 0; i < sentence.length; i++) {
    if (sentence[i] == " ") {
      newSentence += " ";
      cpt++;
    } else if (cpt % 2 == 0) {
      newSentence += sentence[i].toLowerCase();
    } else {
      newSentence += sentence[i].toUpperCase();
    }
    cpt++;
  }

  console.log(newSentence);
};

// Gestion des erreurs

// Parsing

// Résolution

// Résultat
if (String(sentence)) {
  uppercaseOverTwo(sentence);
} else {
  console.log("Erreur");
}
