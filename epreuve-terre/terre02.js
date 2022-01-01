const arguments = process.argv.slice(2).toLocaleString();

let words = arguments.split(" ");

words.map((word) => {
    console.log(word)
})

