const arguments = process.argv.slice(2);

// Fonction
const findNextPrimeNumber = (n) => {
  let nextPrimeNumber = n;
  for (i = 0; nextPrimeNumber < 20; i++) {
    if (nextPrimeNumber % i === 0) console.log(nextPrimeNumber);
    nextPrimeNumber += i;
  }
  console.log(nextPrimeNumber);
};

// Gestion des erreurs

// Parsing

// Résolution

// Résultat
findNextPrimeNumber(Number(arguments));
