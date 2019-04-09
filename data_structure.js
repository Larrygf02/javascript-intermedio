//MAP

let map = new Map();

map.set('1', 'hola')
map.set(1, 'num1')


console.log(map.get('1'));
console.log(map.get(1));
console.log(map.size);

let raul = {
    name: "raul"
}

let visitCount = new Map();
visitCount.set(raul, 123);
console.log(visitCount);
console.log(visitCount.get(raul));


let mapCadena = new Map();
mapCadena.set('1',1)
        .set('2', 2)
        .set('3',3)
console.log(mapCadena);


//SET: Conjuntos
let set = new Set()

set.add(1)
set.add(2)
set.add(3)
set.add(1)
set.add(2)

console.log(set);