const arg = process.argv.slice(2);

let array1 = [];
for (i = 0; i < arg.length; i++) {
  if (arg[i] == "fusion") {
    break;
  } else {
    array1.push(arg[i]);
  }
}

let array2 = [];
for (i = 0; i < arg.length; i++) {
  if (arg[i] == "fusion") {
    for (j = i + 1; j < arg.length; j++) {
      array2.push(arg[j]);
    }
  }
}

// Fonction
const mergeTwoSortedArrays = (array1, array2) => {
  let newArrayMerge = [];
  let pushNumber;
  for (i = 0; i < array1.length; i++) {
    for (j = 0; j < array2.length; j++) {
      if (array1[0] > array2[j]) {
        newArrayMerge.push(pushNumber);
      }
      if (
        (array1[i] < array2[j] && array1[i + 1] > array2[j]) ||
        (array1[i] < array2[j] && array1[i + 1] == undefined)
      ) {
        pushNumber = array2[j];
      }
    }
    newArrayMerge.push(array1[i], pushNumber);
  }
  console.log(newArrayMerge);
};

// Gestion des erreurs

// Parsing

// Résolution

// Résultat
mergeTwoSortedArrays(array1, array2);
