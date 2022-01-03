const argument = process.argv.slice(2).toLocaleString();

let heure = Number(argument.slice(0, 2));
let minute = Number(argument.slice(3, 5));

if (heure < 1 || heure > 13 || minute > 59) {
  console.log("Erreur");
} else {
  if (heure > 0 && heure < 12 && argument.slice(5) == "PM") {
    heure = heure + 12;
  } else if (heure == 12 && argument.slice(5) == "PM") {
    heure = 00;
  }
  console.log(heure + ":" + minute);
}
