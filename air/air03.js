const arg = process.argv.slice(2);

// Fonction
const findIntruder = (arg) => {
  let arrayOfDouble = [];
  for (i = 0; i < arg.length; i++) {
    for (j = i + 1; j < arg.length; j++) {
      if (arg[i] == arg[j]) {
        arrayOfDouble.push(arg[i]);
      }
    }
  }
  for (i = 0; i < arg.length; i++) {
    for (j = 0; j < arrayOfDouble.length; j++) {
      if (arg[i] == arrayOfDouble[j]) {
        arg.splice(i, 1);
        i = 0;
      }
    }
  }
  console.log(arg);
};

// Gestion des erreurs

// Parsing

// Résolution

// Résultat
findIntruder(arg);
