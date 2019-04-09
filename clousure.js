let name = "Juan"

function say() {
    console.log(`Hola ${name}`);
}

name = "Peter"
say()


let countGeneral = 0;
function makeCounter() {
    let count = 0;
    return function() {
      countGeneral++
      return count++;
    };
    
  }
  
  let counter1 = makeCounter();
  let counter2 = makeCounter();
  
  console.log( counter1() ); // 0
  console.log( counter1() ); // 1
  
  console.log( counter2() ); // 0 (independent)

  console.log(countGeneral);