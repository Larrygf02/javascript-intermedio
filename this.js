let user = {
    name: 'Juan',
    hi() { console.log(this.name)},
    bye() { console.log('bye')}
}

user.hi();
//operador ternario
(user.name == 'Juan' ? user.hi: user.bye);


function makeUser() {
    return {
        name: 'Julio',
        ref: this
    }
}
function new_makeUser() {
    return {
        name: 'Juan',
        ref() {
            return this;
        }
    }
}
let user1 = makeUser()
console.log(user1.ref.name)

let user2 = new_makeUser()
console.log(user2.ref().name)