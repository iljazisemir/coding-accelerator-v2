const arguments = process.argv.slice(2);

const numbers = []

arguments.map((n) => {
    numbers.push(Number(n))
})

for (i=0; i< numbers.length; i++){
    if(numbers[i] < numbers[i + 1]){
        return true
        
    } else return false
}