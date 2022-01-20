const arg = process.argv.slice(2);

// Fonction
const myQuickSort = (arg) => {
  let numbers = [];
  for (k = 0; k < arg.length; k++) {
    numbers.push(Number(arg[k]));
  }

  if (numbers.length == 1) {
    return numbers;
  }

  const pivot = numbers[numbers.length - 1];
  let left = [];
  let right = [];
  for (i = 0; i < numbers.length - 1; i++) {
    if (numbers[i] < pivot) {
      left.push(numbers[i]);
    } else if (numbers[i] > pivot) {
      right.push(numbers[i]);
    }
  }

  if (left.length > 0 && right.length > 0) {
    return [...myQuickSort(left), pivot, ...myQuickSort(right)];
  } else if (left.length > 0) {
    return [...myQuickSort(left), pivot];
  } else {
    return [pivot, ...myQuickSort(right)];
  }
};
// Gestion des erreurs

// Parsing

// Résolution

// Résultat
console.log(myQuickSort(arg));
