const arg = process.argv.slice(2);

// Fonction
const split = (arg, separator) => {
  let word = "";
  let array = [];
  for (i = 0; i < arg.length; i++) {
    for (j = 0; j <= arg[i].length; j++) {
      if (j == arg[i].length) {
        array.push(word);
        word = "";
      }
      if (arg[i][j] !== separator) {
        word += arg[i][j];
      } else {
        array.push(word);
        word = "";
      }
    }
  }
  for (i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
};

// Gestion des erreurs
const error = (arg) => {
  if (arg.length > 1) {
    return true;
  }
};

// Parsing
if (error(arg)) console.log("Erreur");

// Résolution

// Résultat
if (!error(arg)) split(arg, " ");
