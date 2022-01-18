const arguments = process.argv.slice(2);

// Fonction
const rotateLeft = (arg) => {
  const firtElement = arg[0];
  let newArray = [];
  for (i = 1; i < arg.length; i++) {
    newArray.push(arg[i]);
  }
  newArray.push(firtElement);
  console.log(newArray);
};

// Gestion des erreurs

// Parsing

// Résolution

// Résultat
rotateLeft(arguments);
