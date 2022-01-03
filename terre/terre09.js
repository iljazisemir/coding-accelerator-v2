const number = process.argv.slice(2);

let racineCaree = number;

if (number > 0) {
  for (i = 0; i < number; i++) {
    racineCaree = racineCaree / 2 + number / (racineCaree * 2);
  }
  console.log(racineCaree);
} else {
  console.log("Erreur");
}
