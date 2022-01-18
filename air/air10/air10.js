import fs from "fs";
const txt = fs.readFileSync(process.argv[2], "utf8").split("\n");

console.log(txt);
