const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Fonction
const threeDigitCombination = (numbers) => {
  let arrayCombination = [];
  for (i = 0; i < numbers.length; i++) {
    for (j = i + 1; j < numbers.length; j++) {
      if (numbers[i] !== numbers[j]) {
        for (k = j + 1; k < numbers.length; k++) {
          if (numbers[i] !== numbers[k] && numbers[j] !== numbers[k]) {
            arrayCombination.push(numbers[i] + numbers[j] + numbers[k]);
          }
        }
      }
    }
  }
  console.log(arrayCombination);
};

// Résultat
threeDigitCombination(numbers);
