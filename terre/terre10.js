const argument = process.argv.slice(2);

const number = Number(argument);

const nbrPremier = (nbr) => {
  for (var i = 2; i < nbr; i++) if (nbr % i === 0) return false;
  return nbr > 1;
};

nbrPremier(number)
  ? console.log("Oui " + number + " est un nombre premier")
  : console.log("Non " + number + " n'est pas un nombre premier");
