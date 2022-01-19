const arg = process.argv.slice(2).toLocaleString();

// Fonction
const oneAtATime = (arg) => {
  const sentences = arg.slice("").split("");
  for (i = 0; i < sentences.length; i++) {
    if (sentences[i] == sentences[i + 1]) {
      sentences.splice(i + 1, 1);
      i--;
    }
  }
  console.log(sentences.join(""));
};

// Gestion des erreurs

// Parsing

// Résolution

// Résultat
oneAtATime(arg);
