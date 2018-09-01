const comer = {
    comer(comida = ''){
        console.log(`Estoy comiendo ${comida}`);
    }
}
const caminar = {
    caminar(){ console.log(`Estoy caminando`)}
}
// Objects assign permite componer objetos o hacer mixins
const obrero = Object.assign({nombre: 'Juan'}, comer, caminar);
console.log(obrero);
obrero.comer('Arroz con pollito');