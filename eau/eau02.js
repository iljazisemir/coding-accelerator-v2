const arguments = process.argv.slice(2);

// Fonction
const upsideDownSentence = (arg) => {
  for (i = arg.length - 1; i >= 0; i--) {
    console.log(arg[i]);
  }
};

// Gestion des erreurs
if (!arguments.length) console.log("error");

// Parsing

// Résolution

// Résultat
upsideDownSentence(arguments);
