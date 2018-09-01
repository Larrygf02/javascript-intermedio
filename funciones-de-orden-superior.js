/*Las funciones de orden superior son aquellas que reciban una o mas funciones
como parametro, un ejemplo de esto puede ser map, filter, reduce
*/

[2,3,4,5,6].map(n => n*2);
[2,3,4,5,6].filter(n => n %2 == 0);
[2,3,4,5,6].reduce((x, y) => x + y);


//Currificar consiste en convertir una funcion de multiples variables en una secuencia de funciones de unarias

const suma = (a,b) => a + b;

console.log(suma(1,2)); //3
//console.log(suma(1)(2)); //indefinido

//Para currificar quedaria así

const sumar = (a) => (b) => a + b;
console.log(sumar(1)(2));

const sumPend = suma(5);
console.log(sumPend(2));