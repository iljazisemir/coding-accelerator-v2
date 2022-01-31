import fs from "fs";
const board = fs.readFileSync(process.argv[2], "utf8").split("\n");
const toFind = fs.readFileSync(process.argv[3], "utf8").split("\n");

// Fonction
function rectangle(tab1, tab2) {
  for (let i = 0; i < tab2.length; i++) {
    for (let j = 0; j < tab2[i].length; j++) {
      if (
        tab2[i][j] == tab1[0][0] &&
        tab2[i][j + 1] == tab1[0][1] &&
        tab2[i + 1][j + 1] == tab1[1][1]
      ) {
        console.log("Ligne " + i);
        console.log("Colone " + j);
      }
    }
  }
}

// Gestion des erreurs

// Parsing

// Résolution

// Résultat
rectangle(toFind, board);
