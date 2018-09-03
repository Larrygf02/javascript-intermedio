//Igualdar abstracta ==
console.log('hola' == 'hola'); //true
console.log('1' == 1); //true

//Igualdad estricta ===
console.log('hola' === 'hola'); //true
console.log('1' === 1); //false
console.log(1 === 1); //true

//Object.is
console.log(Object.is('hola','hola')); // true
console.log(Object.is(NaN,NaN)); // true