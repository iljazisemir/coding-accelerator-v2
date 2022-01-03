const argument = process.argv.slice(2).toLocaleString();

let arrayOfArgument = argument.slice("").split("");

let lengthOfArgument = 0;

if (Number(argument) || !argument || process.argv.length > 3) {
  console.log("Erreur");
} else {
  for (
    lengthOfArgument;
    lengthOfArgument <= arrayOfArgument.length - 1;
    lengthOfArgument++
  ) {}
  console.log(lengthOfArgument);
}
