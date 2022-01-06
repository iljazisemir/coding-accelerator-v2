const arguments = process.argv[2].slice("").split("");

// Fonction
const checkIsNumber = (arg) => {
  let checkNumber = [];
  for (i = 0; i < arg.length; i++) {
    if (arg[i] == Number(arg[i]) && arg[i] !== " ") {
      checkNumber.push(arg[i]);
    }
  }
  if (checkNumber.length == arg.length) {
    return true;
  } else {
    return false;
  }
};
// Gestion des erreurs

// Parsing

// Résolution

// Résultat
console.log(checkIsNumber(arguments));
