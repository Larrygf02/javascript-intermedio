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