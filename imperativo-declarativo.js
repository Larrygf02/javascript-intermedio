// Programar de manera imperativa
const numbers = [1,2,3,4];
let doubled = [];

for(let i=0; i <numbers.length; i++){
	doubled.push(numbers[i]*2);
}
console.log(doubled);

//Programar de forma declarativa (Programacion Funcional)
const numeros = [1,2,3,4];
let dobles = numeros.map(n => n*2);
console.log(dobles);