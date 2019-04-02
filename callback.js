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

let getSalario = (id, callback) => {
    let empleadoDB = empleados.find(empleado => empleado.id === id);
    if (empleadoDB){
        let salarioDB = salarios.find(salario => salario.id === id)
        if (!salarioDB){
            callback(`No se encontro un salario para el empledo ${empleadoDB.nombre}`)
        }else{
            salarioEmpleado = {
                id: empleadoDB.id,
                nombre: empleadoDB.nombre,
                salario: salarioDB.salario
            }
            callback(null, salarioEmpleado)
        }
    }else {
        callback(null,`No existe empleado`)
    }
}

let getEmpleado = (id, callback) => {
    let empleadoDB = empleados.find(empleado => empleado.id === id);
    if (!empleadoDB){
        callback(`No existe un empleado con el ID ${id}`)
    } else{
        callback(null, empleadoDB)
    }
}

getEmpleado(1, (err, empleado) => {
    if (err) {
        return console.log(err)
    }
    //console.log(empleado)
})

getSalario(4, (err, salarioEmpleado) => {
    if (err) {
        return console.log(err);
    }
    console.log(salarioEmpleado)
})
