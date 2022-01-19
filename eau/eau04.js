const arg = process.argv.slice(2);
const number = Number(arg);

// Fonction
const findNextPrimeNumber = (n) => {
  let nextPrimeNumber = n + 1;
  for (var i = 2; i < nextPrimeNumber; i++)
    if (nextPrimeNumber % i === 0) {
      nextPrimeNumber++;
    }
  console.log(nextPrimeNumber);
};

// Gestion des erreurs

// Parsing

// Résolution

// Résultat
findNextPrimeNumber(number);
