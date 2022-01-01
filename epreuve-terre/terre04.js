const number = process.argv.slice(2);

if (Number(number)) {
  number % 2 == 0 ? console.log("Pair") : console.log("Impair");
} else {
  console.log("Tu ne me la mettras pas à l’envers.");
}
