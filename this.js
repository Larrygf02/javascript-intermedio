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

let user1 = makeUser()
console.log(user1.ref.name)