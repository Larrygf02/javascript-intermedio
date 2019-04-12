//Verifica si un objeto pertenece a una clase

class Person {}
let person = new Person()

console.log(person instanceof Person);

class Student extends Person {}
let student = new Student()

console.log(student instanceof Person);

/*Si algun objeto tiene la propiedad teaches
  entonces asumira que pertenece a la clase 
  Teacher*/
class Teacher {
    static [Symbol.hasInstance](obj) {
        if (obj.teaches) return true;
    }
}

let obj = { teaches: true }
let obj2 = { other: true }
console.log(obj instanceof Teacher);
console.log(obj2 instanceof Teacher);

//ToString
let s = Object.prototype.toString

console.log(`123: ${s.call(123)}`);
console.log(`null: ${s.call(null)}`);
//console.log(`alert: ${s.call(alert)}`);