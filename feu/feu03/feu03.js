import fs from "fs";
const board = fs.readFileSync(process.argv[2], "utf8");
const toFind = fs.readFileSync(process.argv[3], "utf8");

// Fonction
function rectangle(tab1, tab2) {
  for (var i = 0; i < tab2.length; i++) {
    // i = Ligne
    for (var j = 0; j < tab2[i].length; j++) {
      // j = Colone

      if (
        tab2[i][j] == tab1[0][0] &&
        tab2[i][j + 1] == tab1[0][1] &&
        tab2[i][j + 2] == tab1[0][2]
      ) {
        if (
          tab2[i + 1][j] == tab1[1][0] &&
          tab2[i + 1][j + 1] == tab1[1][1] &&
          tab2[i + 1][j + 2] == tab1[1][2]
        ) {
          if (
            tab2[i + 2][j] == tab1[2][0] &&
            tab2[i + 2][j + 1] == tab1[2][1] &&
            tab2[i + 2][j + 2] == tab1[2][2]
          ) {
            console.log("Ligne " + i);
            console.log("Colone " + j);
          }
        }
      }
    }
  }
}

// Gestion des erreurs

// Parsing

// Résolution

// Résultat
rectangle(toFind, board);
