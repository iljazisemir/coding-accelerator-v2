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
  const resultBracket = resultOfCalcul(insideBracket);
  return pushResultOfBracketInArray(
    argv,
    resultBracket,
    indexFirstBracket,
    indexLastBracket
  );
};

// Trouver un opérateur spécifique en paramètre
const findOperatorAndCalcul = (array, operator) => {
  let arrayOfIndex = [];
  let index1;
  let index2;
  let numberBeforeOperator = "";
  console.log(array);
  for (i = 0; i < array.length; i++) {
    if (array[i] == operator) {
      for (j = 0; j < i; j++) {
        if (!isNaN(+array[j])) {
          numberBeforeOperator += array[j];
          arrayOfIndex.push(j);
          index1 = arrayOfIndex[0];
        } else {
          numberBeforeOperator = "";
          arrayOfIndex = [];
        }
      }
      let numberAfterOperator = "";
      for (k = i + 1; k < array.length; k++) {
        if (!isNaN(+array[k])) {
          numberAfterOperator += array[k];
          index2 = k;
        }
        if (!isNaN(+array[k + 1]) == false) break;
      }
      console.log(+numberBeforeOperator, operator, +numberAfterOperator);
      const result = calcul(
        +numberBeforeOperator,
        operator,
        +numberAfterOperator
      );
      const objOfIndexAndResult = { index1, index2, result };
      return objOfIndexAndResult;
    }
  }
  console.log("///");
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

// Return l'argument avec le résultat des opérations dans les parenthèse dans le tableau
const resultOfCalcul = (insideBracket) => {
  let newInsideBracket = insideBracket;
  let operator;
  let objOfIndexAndResult;
  let index1;
  let index2;
  let result;
  const arraySortOfOperator = sortOperator(insideBracket);
  for (x = 0; x < arraySortOfOperator.length; x++) {
    operator = arraySortOfOperator[x];
    objOfIndexAndResult = findOperatorAndCalcul(newInsideBracket, operator);
    newInsideBracket = [];
    index1 = objOfIndexAndResult.index1;
    index2 = objOfIndexAndResult.index2;
    result = objOfIndexAndResult.result;
    for (y = 0; y < index1; y++) {
      newInsideBracket.push(insideBracket[y]);
    }
    newInsideBracket.push(result);
    for (z = index2 + 1; z < insideBracket.length; z++) {
      newInsideBracket.push(insideBracket[z]);
    }
    insideBracket = newInsideBracket;
  }
  return newInsideBracket[0];
};

const pushResultOfBracketInArray = (array, result, index1, index2) => {
  let newArray = [];
  for (y = 0; y < index1; y++) {
    newArray.push(array[y]);
  }
  newArray.push(result);
  for (z = index2 + 1; z < array.length; z++) {
    newArray.push(array[z]);
  }
  return newArray;
};

// Résultat
const argvWithoutBracket = findBracket(argvSplit);
console.log(resultOfCalcul(argvWithoutBracket));
