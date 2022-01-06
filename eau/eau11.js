const arguments = process.argv.slice(2);

// Fonction
const findAbsoluteMinimum = (arg) => {
  const numbers = [];
  for (i = 0; i < arg.length; i++) {
    numbers.push(Number(arg[i]));
  }
  let checkNumber = numbers[0];
  let cpt = 0;
  let absoluteMinimum;
  let absoluteMinimumDifference;
  for (i = 0; i < numbers.length - 1; i++) {
    if (numbers[i + 1] !== undefined) {
      checkNumber > numbers[i + 1]
        ? (absoluteMinimumDifference = checkNumber - numbers[i + 1])
        : (absoluteMinimumDifference = numbers[i + 1] - checkNumber);
      if (absoluteMinimum == undefined) {
        absoluteMinimum = absoluteMinimumDifference;
      }
      if (absoluteMinimumDifference < absoluteMinimum) {
        absoluteMinimum = absoluteMinimumDifference;
      }
      if (i + 1 == numbers.length - 1) {
        checkNumber = numbers[cpt + 1];
        i = cpt;
        cpt++;
      }
    }
  }
  if (absoluteMinimum == undefined) {
    console.log("Error");
  } else {
    console.log(absoluteMinimum);
  }
};

// Résultat
findAbsoluteMinimum(arguments);
