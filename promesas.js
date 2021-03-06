let empleados = [{
    id: 1,
    nombre: 'Raul'
},{
    id: 2,
    nombre: 'Kelly'
},{
    id: 3,
    nombre: 'Josue'
}];

let salarios = [{
    id: 1,
    salario: 2000
},{
    id: 2,
    salario: 2000
}];


let getEmpleado = (id) => {
    return new Promise( (resolve, reject) => {
        let empleadoDB = empleados.find(empleado => empleado.id === id);
        if (!empleadoDB){
            reject(`No existe un empleado con el ID ${id}`)
        } else{
            resolve(empleadoDB)
        }
    })
}
let getSalario = (empleado) => {
    return new Promise( (resolve, reject) => {
        let salarioDB = salarios.find(salario => salario.id === empleado.id)
        if (!salarioDB) {
            reject(`No se encontro un salario para el empleado ${empleado.nombre}`)
        }else {
            resolve({
                nombre: empleado.nombre,
                salario: salarioDB.salario,
                id: empleado.id
            })
        }
    })
}



getEmpleado(3).then(empleado => {
    console.log(`Empledo DB`, empleado)
    /*getSalario(empleado).then(salario => {
        console.log(`Salario DB`, salario)
    }, (err) => {
        console.log(err)
    })*/
}, (err) => console.log(err))

//  PROMESAS EN CADENA

getEmpleado(4).then(empleado => {
    return getSalario(empleado)
})
.then(salario => {
    console.log(`El salario de ${salario.nombre} es ${salario.salario}`)
})
.catch(err => console.log(err))

