const argument = process.argv.slice(2).toLocaleString();

const alphabet = "AbCdeFghijklmnopqrstuVwxyz";

let arrayOfAlphabet = alphabet.slice("").split("");

let alphabetWhichStartsWithArgument = arrayOfAlphabet.slice(
  arrayOfAlphabet.indexOf(argument)
);

let alphabetInLowerCase = "";

alphabetWhichStartsWithArgument.map((letter) => {
  alphabetInLowerCase += letter.toLowerCase();
});

console.log(alphabetInLowerCase);
