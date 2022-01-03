const arguments = process.argv.slice(2);

const numbers = []

arguments.map((n) => {
    numbers.push(Number(n))
})

function middleValue(array){
    for (var i = 1; i < array.length; i++){
      var value = array[i];
      var cpt = i;
      while (cpt > 0 && array[cpt - 1] > value){
          array[cpt] = array[cpt - 1];
          cpt = cpt - 1
          array[cpt] = value;
      }
    }
    if (array[0] == array[1] || array[0] == array[2] || array[1] == array[2]) {
        console.log("Erreur")
    } else {
        console.log(array[1]);
    }
    
  }
  
  middleValue(numbers);