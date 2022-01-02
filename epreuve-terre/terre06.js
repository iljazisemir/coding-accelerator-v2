const argument = process.argv.slice(2).toLocaleString();

let arrayOfArgument = argument.slice("").split("");

let newArrayOfArgument = [];
let newArgument = "";

for (i = arrayOfArgument.length - 1; i >= 0; i--) {
  newArrayOfArgument.push(arrayOfArgument[i]);
}

for (i = 0; i <= newArrayOfArgument.length - 1; i++) {
  newArgument += newArrayOfArgument[i];
}

console.log(newArgument);
