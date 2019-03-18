
let string = "I love Javascript"
let regexp = /love/
console.log(string.search(regexp))

string = "Expresiones regulares"
//La bandera i, no distingue entre mayusculas y minusculas
let result = string.match(/REGULARES/i)
console.log(result)

//la bandera ig, busca todas las coincidencias
string = "hola-hola-hola"
result = string.match(/hola/ig)
console.log(result)

string = "Javascript or javascript, should we uppercase"
//result = string.matchAll(/java/ig) //Esta funcion es nueva asi que probablemente no funcione
//console.log(result)

string = "12-34-56"
result = string.replace("-",":")
console.log(result)

string = "12-34-56"
//busca en todas las coincidencias y las reemplaza
result = string.replace(/-/g, ":")
console.log(result)

string = "John Doe, John Smith"
result = string.replace(/John/g, 'Sr.$&')
console.log(result)

let i = 0
result = "Ho-ho-ho".replace(/ho/gi, function() {
    return ++i;
})
console.log(result)