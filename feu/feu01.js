const argv = process.argv.slice(2).toLocaleString();

// Fonction
const removeSpace = (argv) => {
  let argvSplit = [];
  for (i = 0; i < argv.length; i++) {
    if (argv[i] !== " ") {
      argvSplit.push(argv[i]);
    }
  }
  return argvSplit;
};
const argvSplit = removeSpace(argv);

// Chercher les parenthèses
const findBracket = (argv) => {
  let insideBracket = [];
  let indexFirstBracket = "";
  let indexLastBracket = "";
  for (i = 0; i < argv.length; i++) {
    if (argv[i] == "(") {
      indexFirstBracket = i;
      for (j = i + 1; j < argv.length; j++) {
        if (argv[j] == ")") {
          indexLastBracket = j;
          break;
        } else {
          insideBracket.push(argv[j]);
        }
      }
    }
  }
  return pushResultInArray(
    insideBracket,
    indexFirstBracket,
    indexLastBracket,
    argv
  );
};

// Trouver un opérateur spécifique en paramètre
const findOperator = (argv, operator) => {
  let numberBeforeOperator = "";
  for (i = 0; i < argv.length; i++) {
    if (!isNaN(+argv[i])) numberBeforeOperator += argv[i];
    if (argv[i] == operator) {
      let numbersAfterOperator = "";
      for (j = i + 1; j < argv.length; j++) {
        if (!isNaN(+argv[j])) {
          numbersAfterOperator += argv[j];
        } else {
          break;
        }
      }
      return calcul(+numberBeforeOperator, operator, +numbersAfterOperator);
    }
    if (!isNaN(+argv[i]) == false) {
      numberBeforeOperator = "";
      numbersAfterOperator = "";
    }
  }
};

// Calculer une opération en paramètre
const calcul = (n1, operator, n2) => {
  if (operator == "%") return n1 % n2;
  if (operator == "*") return n1 * n2;
  if (operator == "/") return n1 / n2;
  if (operator == "+") return n1 + n2;
  if (operator == "-") return n1 - n2;
};

// Trier les opérateurs dans l'ordre de priorité
const sortOperator = (array) => {
  let arrayOfOperator = [];
  for (i = 0; i < array.length; i++) {
    if (array[i] == "%") {
      arrayOfOperator.push(array[i]);
    }
  }
  for (i = 0; i < array.length; i++) {
    if (array[i] == "/" || array[i] == "*") {
      arrayOfOperator.push(array[i]);
    }
  }
  for (i = 0; i < array.length; i++) {
    if (array[i] == "-" || array[i] == "+") {
      arrayOfOperator.push(array[i]);
    }
  }
  return arrayOfOperator;
};

// Return l'argument avec le résultat de l'opération dans le tableau
const pushResultInArray = (array, firtIndex, lastIndex, argv) => {
  let argvWithoutIndex = [];
  let totalInsideArgv = 0;
  const arraySortOfOperator = sortOperator(array);
  for (i = 0; i < firtIndex; i++) {
    argvWithoutIndex.push(argv[i]);
  }
  for (k = 0; k < arraySortOfOperator.length; k++) {
    totalInsideArgv += findOperator(array, arraySortOfOperator[k]);
  }
  argvWithoutIndex.push(totalInsideArgv);
  for (j = lastIndex + 1; j < argv.length; j++) {
    argvWithoutIndex.push(argv[j]);
  }
  return argvWithoutIndex;
};

// Gestion des erreurs

// Parsing
const argvWithoutBracket = findBracket(argvSplit);
let result = 0;
let newArgv = [];
// Résolution

// Résultat
const newArraySortOfOperator = sortOperator(argvWithoutBracket);
let indexNumberBeforeOperator = "";
for (a = 0; a < newArraySortOfOperator.length; a++) {
  for (b = 0; b < argvWithoutBracket.length; b++) {
    if (argvWithoutBracket[b] == newArraySortOfOperator[a]) {
      for (c = b; c > 0; c--) {
        if (!isNaN(+argvWithoutBracket[c]) == false) {
          indexNumberBeforeOperator = c + 1;
        }
      }
      let indexNmberAfterOperator = "";
      for (d = b; d < argvWithoutBracket.length; d++) {
        if (!isNaN(+argvWithoutBracket[d]) == false) {
          indexNmberAfterOperator = d - 1;
        }
      }
    }
  }
  result += findOperator(argvWithoutBracket, newArraySortOfOperator[a]);
}
console.log(result);
