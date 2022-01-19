const arg = process.argv.slice(2);

// Fonction
const concat = (arg, separator) => {
  let sentences = "";
  for (i = 0; i < arg.length - 1; i++) {
    sentences += arg[i] + separator;
  }
  console.log(sentences);
};

const findSeparator = (arg) => {
  let separator = arg[arg.length - 1];
  return separator;
};

// Gestion des erreurs

// Parsing
const separator = findSeparator(arg);

// Résolution

// Résultat
concat(arg, separator);
