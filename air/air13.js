import fs from "fs";
const files = fs.readdirSync("../air/");
let folder = [];
for (let i = 0; i < 14; i++) {
  //   console.log(files[i].split("air").pop());
  let words = files[i].split("air");
  console.log(words[1]);
  if (files[i].split(".").pop() == "js") {
    folder.push(files[i]);
  }
}

// Fonction

// Gestion des erreurs

// Parsing

// Résolution

// Résultat
// console.log(folder);
