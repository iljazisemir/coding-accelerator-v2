const arguments = process.argv.slice(2);

// Fonction
const calculInArray = (arg) => {
  let numbers = [];
  let calculator = arg[arg.length - 1].split("");
  for (i = 0; i < arg.length - 1; i++) {
    numbers.push(Number(arg[i]));
  }
  let symboleCalcul = calculator[0];
  let numberCalcul = Number(calculator[1]);
  let arrayResult = [];
  for (i = 0; i < numbers.length; i++) {
    if (symboleCalcul == "+") {
      arrayResult.push(numbers[i] + numberCalcul);
    }
    if (symboleCalcul == "-") {
      arrayResult.push(numbers[i] - numberCalcul);
    }
    if (symboleCalcul == "*") {
      arrayResult.push(numbers[i] * numberCalcul);
    }
    if (symboleCalcul == "/") {
      arrayResult.push(numbers[i] / numberCalcul);
    }
  }
  console.log(arrayResult);
};

// Gestion des erreurs

// Parsing

// Résolution

// Résultat
calculInArray(arguments);
