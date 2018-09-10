//Similar a la construccion de un JSON 
let calculadora = {
    suma: (a,b) => {
        let result = a + b;
        console.log(`El resultado de la suma de ${a} y ${b} es ${result}`);
    },
    resta: (a,b) => {
        let result = a - b;
        console.log(`El resultado de la resta de ${a} y ${b} es ${result}`);
    },
    multiplicacion: (a,b) => {
        let result = a * b;
        console.log(`El resultado de la multiplicacion de ${a} y ${b} es ${result}`);
    }
}
calculadora.suma(1,2);
calculadora.resta(1,2);
calculadora.multiplicacion(4,4);