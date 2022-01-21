const argv = process.argv.slice(2);

const line = argv[0];
const column = argv[1];

// Fonction
const rectangle = (line, column) => {
  let theLine = "";
  for (i = 0; i < line; i++) {
    if (i == 0 || i == line - 1) {
      theLine += "o";
    } else {
      theLine += "-";
    }
  }
  if (column !== 0) {
    console.log(theLine);
    let spaceBetweenColumn;
    line < 2 ? (spaceBetweenColumn = line) : (spaceBetweenColumn = line - 2);
    for (i = 0; i < column - 2; i++) {
      if (line > 1) {
        console.log("|" + " ".repeat(spaceBetweenColumn) + "|");
      } else {
        console.log("|");
      }
    }
    if (column > 1) {
      console.log(theLine);
    }
  }
};

// Gestion des erreurs
const error = (argv, line, column) => {
  if (!argv || argv.length < 2 || argv.length > 2) {
    return true;
  } else if (line == 0 || column == 0) {
    return true;
  } else if (!isNaN(+line) == false || !isNaN(+column) == false) {
    return true;
  }
};

// Résultat
error(argv, line, column) ? console.log("Error") : rectangle(line, column);
