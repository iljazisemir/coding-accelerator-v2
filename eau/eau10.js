const arguments = process.argv.slice(2);

// Fonction
const findIndex = (arg) => {
  const wanted = arg[arg.length - 1];
  let index;
  for (i = 0; i < arg.length - 1; i++) {
    if (arg[i] == wanted) {
      index = i;
      break;
    } else {
      index = -1;
    }
  }
  console.log(index);
};

// Gestion des erreurs

// Parsing

// Résolution

// Résultat
findIndex(arguments);
