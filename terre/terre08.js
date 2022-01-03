const numbers = process.argv.slice(2);

var n1 = Number(numbers[0]);
var n2 = Number(numbers[1]);

let result = 1;

if (n2 > 0) {
  for (i = 1; i <= n2; i++) {
    result *= n1;
  }
  console.log(result);
} else {
  console.log("Erreur");
}
