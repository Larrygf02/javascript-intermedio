function saludo() {
    console.log('hola')
}

console.log(saludo.name);

function hola(name){
    console.log(`Hola ${name}`);
    hola.counter++;
}
hola.counter = 0;
//cuenta el numero de parametros de la funcion
console.log(saludo.length);
console.log(hola.length);
hola('kelly');
hola('raul');

console.log(`la funcion ${hola.name} a sido ejecutada ${hola.counter}`);