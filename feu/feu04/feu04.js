import fs from "fs";
const sudoku = fs.readFileSync(process.argv[2], "utf8");
console.log(sudoku + "\n" + "\n***********\n");
var lines = sudoku.split("\n");

// Etape 1 : Trouver les coordonées des Underscores

var unknowns = [];
for (var i = 0; i < lines.length; i++) {
  for (var j = 0; j < lines[i].length; j++) {
    if (lines[i][j] === "_") {
      unknowns.push({ lineNumber: i, columnNumber: j });
    }
  }
}

// Etape 2 : Pour chaque inconnu détérminer les possibilités sur la ligne

/**
 * Fonction permettant de récupérer chaque ligne avec un Underscore
 * @param {Array<String>} unknowns
 */
function getOneLine(unknowns) {
  var line = [];
  for (var u = 0; u < unknowns.length; u++) {
    var unknown = unknowns[u];
    line += lines[unknown.lineNumber];
    getNumbersOnLine(line);
    line = [];
  }
}

/**
 * Fonction permettant de recupérer les nombres de la ligne
 * @param {String} line
 */
function getNumbersOnLine(line) {
  var numbersOnLine = [];
  for (var i = 0; i < line.length; i++) {
    if (line[i] !== "|" && line[i] !== "_") {
      numbersOnLine.push(Number(line[i]));
    }
  }
  findPossibilitieOnLine(numbersOnLine);
}

/**
 * Fonction permettant de trouver les possibilités sur chaque ligne
 * @param {Number} numbersOnLine
 */
function findPossibilitieOnLine(numbersOnLine) {
  var possibilities = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (var numberOnLine of numbersOnLine) {
    for (var possibilitie of possibilities) {
      if (numberOnLine === possibilitie) {
        removePossibilitie(possibilitie, possibilities);
      }
    }
  }
  unknownOnLine.push(possibilities);
  return unknownOnLine;
}

var unknownOnLine = [];
getOneLine(unknowns);

// Etape 3 : Pour chaque inconnu determiner les possibilités sur la colonne

/**
 * Fonction permettant de récupérer chaque colonne avec un Underscore
 * @param {Array<String>} unknowns
 */
function getOneColumn(unknowns) {
  var column = [];
  for (var u = 0; u < unknowns.length; u++) {
    var unknown = unknowns[u];
    for (var i = 0; i < lines.length; i++) {
      for (var j = 0; j < lines[i].length; j++) {
        if (j == unknown.columnNumber) {
          column.push(lines[i][j]);
        }
      }
    }
    getNumbersOnColumn(column);
    column = [];
  }
}

/**
 * Fonction permettant de recupérer les nombres sur la colonne
 * @param {String} column
 */
function getNumbersOnColumn(column) {
  var numbersOnColumn = [];
  for (var i = 0; i < column.length; i++) {
    if (column[i] !== "-" && column[i] !== "_") {
      numbersOnColumn.push(Number(column[i]));
    }
  }
  findPossibilitieOnColumn(numbersOnColumn);
}

/**
 * Fonction permettant de trouver les possibilités sur chaque colonne
 * @param {Number} numbersOnColumn
 */
function findPossibilitieOnColumn(numbersOnColumn) {
  var possibilities = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (var numberOnColumn of numbersOnColumn) {
    for (var possibilitie of possibilities) {
      if (numberOnColumn === possibilitie) {
        removePossibilitie(possibilitie, possibilities);
      }
    }
  }
  unknownOnColumn.push(possibilities);
  return unknownOnColumn;
}

var unknownOnColumn = [];
getOneColumn(unknowns);

// Etape 4 : Pour chaque inconnu determiner les possibilités sur le carré

/**
 * Fonction permettant de chaque carré avec un underscore
 * @param {Array<String>} unknowns
 */
function getOneSquare(unknowns) {
  var square = [];
  for (var u = 0; u < unknowns.length; u++) {
    var unknown = unknowns[u];
    for (var i = 0; i < lines.length; i++) {
      for (var j = 0; j < lines[i].length; j++) {
        if (i == unknown.lineNumber && j == unknown.columnNumber) {
          var squareBeginLine = Math.floor(i / 4) * 4;
          var squareBeginColumn = Math.floor(j / 4) * 4;
          for (var x = 0; x < 3; x++) {
            for (var y = 0; y < 3; y++) {
              square.push(lines[squareBeginLine + x][squareBeginColumn + y]);
            }
          }
        }
      }
    }
    getNumbersOnSquare(square);
    square = [];
  }
}

/**
 * Fonction permettant de recupérer les nombres du carré
 * @param {String} square
 */
function getNumbersOnSquare(square) {
  var numbersOnSquare = [];
  for (var i = 0; i < square.length; i++) {
    if (square[i] !== "_") {
      numbersOnSquare.push(Number(square[i]));
    }
  }
  findPossibilitieOnSquare(numbersOnSquare);
}

/**
 * Fonction permettant de trouver les possibilités sur chaque carré
 * @param {Number} numbersOnSquare
 */
function findPossibilitieOnSquare(numbersOnSquare) {
  var possibilities = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (var numberOnSquare of numbersOnSquare) {
    for (var possibilitie of possibilities) {
      if (numberOnSquare === possibilitie) {
        removePossibilitie(possibilitie, possibilities);
      }
    }
  }
  unknownOnSquare.push(possibilities);
  return unknownOnSquare;
}

/**
 * Fonction permettant de retirer du tableau possibilities, les valeurs manquantes
 * de la ligne, de la colonne et du carré
 * @param {Number} n
 * @param {Number} possibilities
 */
function removePossibilitie(n, possibilities) {
  var indexToDelete = possibilities.indexOf(n);
  if (indexToDelete > -1) {
    possibilities.splice(indexToDelete, 1);
  }
  return possibilities;
}

var unknownOnSquare = [];
getOneSquare(unknowns);

// Etape 5 : Verifier quelle possibilité concorde avec le sudoku puis afficher le Sudoku

/**
 * Fonction permettant de verifier quelles possibilités match entre la ligne, la colonne et le carré
 * @param {*} unknownOnLine
 * @param {*} unknownOnColumn
 * @param {*} unknownOnSquare
 */
function getMatches(unknownOnLine, unknownOnColumn, unknownOnSquare) {
  for (var i = 0; i < unknownOnLine.length; i++) {
    for (var j = 0; j < unknownOnLine[i].length; j++) {
      for (var k = 0; k < unknownOnColumn[i].length; k++) {
        for (var l = 0; l < unknownOnSquare[i].length; l++) {
          if (
            unknownOnLine[i][j] === unknownOnColumn[i][k] &&
            unknownOnLine[i][j] == unknownOnSquare[i][l] &&
            unknownOnColumn[i][k] == unknownOnSquare[i][l]
          ) {
            matches.push(unknownOnLine[i][j]);
          }
        }
      }
    }
  }
}

var matches = [];
getMatches(unknownOnLine, unknownOnColumn, unknownOnSquare);

/**
 * Fonction permettant de remplacer les underscores par la possibilité exacte
 * @param {String} lines
 */
function solveSudoku(lines, matches) {
  var sudoku = "";
  for (var i = 0; i < lines.length; i++) {
    for (var j = 0; j < lines[i].length; j++) {
      if (lines[i][j] === "_") {
        sudoku += getMatch(matches);
      } else sudoku += lines[i][j];
    }
    sudoku += "\n";
  }
  console.log(sudoku);
}

/**
 * Fonction permettant de recuperer un seul match par boucle et ensuite de le supprimer
 * @param {Array<Number>} matches
 */
function getMatch(matches) {
  for (var m = 0; m < matches.length; m++) {
    var lost = [];
    lost.push(matches[m]);
    matches.splice(m, 1);
    return lost;
  }
}

solveSudoku(lines, matches);
