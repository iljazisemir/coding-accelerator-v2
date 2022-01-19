const arg = process.argv.slice(2);

var arg1 = Number(arg[0]);
var arg2 = Number(arg[1]);

// Fonction
const findNumberBetweenarg = (arg1, arg2) => {
  let n = [];
  if (arg1 > arg2) {
    for (i = arg1 - 1; i >= arg2; i--) {
      n.push(i);
    }
  } else {
    for (i = arg1; i < arg2; i++) {
      n.push(i);
    }
  }
  if (n.length == 0) {
    console.log("Erreur");
  } else {
    console.log(n);
  }
};

// Gestion des erreurs

// Parsing

// Résolution

// Résultat
findNumberBetweenarg(arg1, arg2);
