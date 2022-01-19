const arg = process.argv.slice(2).toLocaleString();

let words = arg.split(" ");

words.map((word) => {
  console.log(word);
});
