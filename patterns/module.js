let myModule = (() => console.log("Me ejecutare solo cuando se invoque el modulo"))();
//Ejecutando el modulo
myModule;

//Similar a la construccion de un JSON 
let calculadora = (() => {
    let publicFunction = {};
    privateFunction = () => '439294392';

    publicFunction.suma = (a,b) => {
        let result = a + b;
        console.log(`El resultado de la suma de ${a} y ${b} es ${result}`);
    };
    return publicFunction;
})();
calculadora.suma(4,3);
calculadora.privateFunction();// no se puede acceder a esta funcion
