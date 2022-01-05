const arguments = process.argv[2].slice("").split("");

console.log(arguments);

// Fonction
const checkIsNumber = (arg) => {
  for (i = 0; i < arg.length; i++) {
    console.log(typeof arg[i]);
    if (Number(arg[i]) === NaN) {
      console.log("NO");
    } else {
      console.log("OK");
    }
  }
};
// Gestion des erreurs

// Parsing

// Résolution

// Résultat
checkIsNumber(arguments);
