const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion:{
        ciudad: 'New York',
        zip: 55321321,
        lat: 14.3232,
        log: 34.93213
    }
};

//console.table({persona});
console.log({persona});

const persona2 = {...persona};
persona2.nombre = 'Peter';

console.log(persona2);