const numbers = process.argv.slice(2);

var n1 = Number(numbers[0]);
var n2 = Number(numbers[1]);

let result = n1;
let reste = 0;

if (n2 !== 0) {
  for (i = 0; result - n2 > 0; i++) {
    result -= n2;
    reste++;
  }
}

if (n2 == 0 || n2 > n1) {
  console.log("Erreur");
} else {
  console.log("Résultat : " + result);
  console.log("Reste : " + reste);
}
