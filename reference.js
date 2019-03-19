
let number = 1;
let otherNumber = number;
number = 2;
console.log(otherNumber);

const person = {
    name: "Raul"
}

const otherPerson = person;
person.name = "Kelly"
console.log(otherPerson)

const other = {
    ...person
}
person.name = "Juan"
console.log(other)


