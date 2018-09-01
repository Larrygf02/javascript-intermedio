/*Las funciones puras son aquellas que operan utilizando
parametros de entrada sin recurrir a ningun elemento fuera de ellas */

function pureSuma(a,b){
	return a + b;
}

console.log(pureSuma(1,2));
// Impura
const time = () => Date.now();
console.log(time());
console.log(time());
//Otro ejemplo de funcion impura
function sumador(suma=0){
	return function(cantidad){
		suma = suma + cantidad;
		return suma;
	}
}
const sumx = sumador();
console.log(sumx(2));// 2
console.log(sumx(2));// 4

//Convirtiendo la funcion sumador a pura
function sumadorPure(suma=0){
	return function(cantidad){
		return suma + cantidad;
	}
}
const sump = sumadorPure();
console.log(sump(2));// 2
console.log(sump(2));// 2

// funcion impura
var min = 10;
function comparaMinimo(num){
	return num < min;
}
// Esta funcion es impura ya que depende de un estado externo

//Funcion pura
function comparaMinimo(num){
	var min = 10;
	return num < min;
}
