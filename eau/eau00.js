const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// Fonction
const threeDigitCombination = (numbers) => {
  let checkNumber = numbers[0];
  let arrayCombination = [];
  for (i = 0; i < numbers.length - 1; i++) {
    if (checkNumber !== numbers[i + 1]) {
      for (j = numbers[checkNumber + 1]; j < numbers.length; j++) {
        if (checkNumber !== j && checkNumber !== j + 1 && j !== j + 1) {
          console.log(
            checkNumber.toLocaleString() +
              j.toLocaleString() +
              (j + 1).toLocaleString()
          );
        }
      }
    }
  }
};

// Résultat
threeDigitCombination(numbers);
