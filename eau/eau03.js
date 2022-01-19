const arg = process.argv.slice(2);

// Fonction
const fibonacci = (n) => {
  let arrayOfSequence = [0, 1];
  for (i = 0; arrayOfSequence[i] <= n; i++) {
    arrayOfSequence.push(arrayOfSequence[i] + arrayOfSequence[i + 1]);
    if (arrayOfSequence[i] == n) return arrayOfSequence[i - 1];
  }
};

// Gestion des erreurs
const checkError = (fibonnaciFunction) => {
  if (!fibonnaciFunction) return -1;
};

// Parsing

// Résolution

// Résultat
fibonacci(arg)
  ? console.log(fibonacci(arg))
  : console.log(checkError(fibonacci(arg)));
