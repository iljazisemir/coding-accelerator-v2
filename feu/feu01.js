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

// Chercher les parenthèses
const findBracket = (argv) => {
  let insideBracket = [];
  for (i = 0; i < argv.length; i++) {
    if (argv[i] == "(") {
      for (j = i + 1; j < argv.length; j++) {
        if (argv[j] == ")") {
          break;
        } else {
          insideBracket.push(argv[j]);
        }
      }
    }
  }
  return insideBracket;
};

// Trouver un opérateur spécifique en paramètre
const findOperator = (argv, operator) => {
  let numberBeforeOperator = "";
  for (i = 0; i < argv.length; i++) {
    if (!isNaN(+argv[i])) numberBeforeOperator += argv[i];
    if (argv[i] == operator) {
      let numbersAfterOperator = "";
      for (j = i + 1; j < argv.length; j++) {
        if (!isNaN(+argv[j])) numbersAfterOperator += argv[j];
        if (!isNaN(+argv[j]) == false) break;
      }
      
      console.log(
        calcul(+numberBeforeOperator, argv[i], +numbersAfterOperator)
      );
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

// Gestion des erreurs

// Parsing
const argvSplit = removeSpace(argv);

// Résolution

// Résultat
console.log(findOperator(findBracket(argvSplit), "/"));
