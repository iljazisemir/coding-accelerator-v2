const argument = process.argv.slice(2).toLocaleString();

let heure = Number(argument.slice(0, 2));
let minute = Number(argument.slice(3));
let formatHeure = "";

if (heure > 23 || minute > 59) {
  console.log("Erreur");
} else {
  if (heure > 12 && heure < 24) {
    heure = heure - 12;
    formatHeure = "PM";
  } else if (heure == 00) {
    heure = 12;
    formatHeure = "PM";
  } else if (heure > 1 && heure < 13) {
    formatHeure = "AM";
  }
  console.log(heure + ":" + minute + formatHeure);
}
