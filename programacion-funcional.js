//Programar de forma imperativa, tiene un nivel bajo de abstraccion desde el punto de JavaScript
function intersection(a,b) {
	var result = [];
	for (var i = 0; i < a.length; i++){
		for(var j = 0; j < b.length; j++){
			if (a[i] === b[j]){
				result.push(a[i]);
				break;
			}
		}
	}
	return result.sort();
}
// Utilizamos el metodo indexOf 
function intersection2(a,b){
	var result = [];
	for (var i = 0; i < a.length; i++){
		if (b.indexOf(a[i]) > -1){
			result.push(a[i]);
		}
	}
	return result.sort();
}
//Agregando filter, con esta funcion ya tenemos un nivel de abstraccion mayor
//Esto podriamos decir que es funcional
function intersection3(a,b){
	return a.filter(function(value){
		return b.indexOf(value) > -1;
	}).sort();
}
//El codigo funcional tiende a ser mas conciso y expresivo
const intersection_funcional = (a,b) => a.filter(value => b.indexOf(value) > -1).sort();
var a = ["hola",2,3,5,7];
var b = [1,24,5, "hola"];
console.log(intersection_funcional(a,b));