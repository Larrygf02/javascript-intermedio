let user = {
    name: 'Raul',
    age: 23,
}
console.log(user);
//Agregar una propiedad
user.isAdmin = true;
console.log(user)
//Borrar una propiedad
delete user.age
console.log(user)
user["full name"] = 'Raul Alfonso Larriega Gallegos'
console.log(user);

//REPASO DE FUNCIONES
function makeUSer(name, age) {
    /*
    return {
        name: name,
        age: age
    };*/
    return {
        name, //same is name:name
        age
    }
}
let user1 = makeUSer("Kelly" ,25)
console.log(user1)

//verificando las propiedades
let isProperty = (user.age !== undefined)
console.log(`age property of user is: ${isProperty}`)


let obj = {
    test: undefined
}

//Test is property of obj but the result is undefined
console.log(obj.test)
var property = "test"
if (property in obj) {
    console.log(`${property} es una propiedad de obj`)
}else {
    console.log(`${property} no es una propiedad de obj`)
}

//Comparison of objects
let a = { 
    test: true
}
let b = a;
let e = {
    ...a
}
console.log(a);
console.log(e);
console.log(`a == b: ${a==b} y a===b : ${a===b}`);
console.log(`a == e: ${a==e} y a===e : ${a===e}`);

let c = {}
let d = {}
console.log(`c == d: ${c==d}`);