// Mutables
const persona = {nombre: 'Kelly'}
function cambiarNombre(per){
    return per.nombre = 'Kelly Baldeon'; 
}
cambiarNombre(persona)
console.log(persona);

//Inmutable libreria de javascript
// npm install immutable
const { Map } = require('immutable');
var ciudad = Map({distrito: 'Lima', habitantes:2000});
var ciudad2 = ciudad.set('habitantes',25000);
console.log(ciudad.get('habitantes')); //2000
console.log(ciudad2.get('habitantes')); //25000

