const alphabet = "AbCdeFghijklmnopqrstuvwxyz";

let arrayOfAlphabet = alphabet.slice("").split("");

let alphabetInLowerCase = "";

arrayOfAlphabet.map((letter) => {
  alphabetInLowerCase += letter.toLowerCase();
});

console.log(alphabetInLowerCase);
