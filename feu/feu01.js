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

const findOperator = (argv, operator) => {
  let numberBeforeOperator = "";
  let numbersOperatorCalcul = [];
  for (i = 0; i < argv.length; i++) {
    if (!isNaN(+argv[i])) numberBeforeOperator += argv[i];
    if (argv[i] == operator) {
      let numbersAfterOperator = "";
      for (j = i + 1; j < argv.length; j++) {
        if (!isNaN(+argv[j])) numbersAfterOperator += argv[j];
        if (!isNaN(+argv[j]) == false) break;
      }
      numbersOperatorCalcul.push(
        numberBeforeOperator,
        argv[i],
        numbersAfterOperator
      );
      numbersAfterOperator = "";
      console.log(numbersOperatorCalcul);
    }
    if (!isNaN(+argv[i]) == false) numberBeforeOperator = "";
  }
};
// Gestion des erreurs

// Parsing
const argvSplit = removeSpace(argv);

// Résolution

// Résultat
findOperator(argvSplit, "+");
