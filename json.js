let student = {
    name: 'raul',
    age: 25,
    isAdmin: true
}

let json = JSON.stringify(student)

console.log(json);
//El segundo parametro indica las propiedades que quieres parsear
let json_student = JSON.stringify(student, ['age', 'name'],2)
console.log(json_student);

let user = {
    sayHi() {
        console.log('hola');
    },
    [Symbol("id")]: 123,
    something: undefined
};

let user_json = JSON.stringify(user)

console.log(user);

let room = {
    number: 23
}

let meetup = {
    title: 'Conference'
}

meetup.place = room
room.occupied = meetup
// console.log(JSON.stringify(meetup)); -> Esto saldrá un error de converting circular

