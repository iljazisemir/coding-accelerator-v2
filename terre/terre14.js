const arg = process.argv.slice(2);

const numbers = [];

arg.map((n) => {
  numbers.push(Number(n));
});

let check = false;

for (i = 0; i < numbers.length - 1; i++) {
  if (numbers[i] < numbers[i + 1]) {
    check = true;
  } else {
    check = false;
  }
}

if (check) {
  console.log("Triée");
} else {
  console.log("Pas triée");
}
