const saludar =  function (nombre){
    return `Hola ${nombre}`;
}


const saludar2 = (nombre) => {
    return `Hola ${nombre}`;
}

const saludar3 = (nombre) =>  `Hola ${nombre}`;

const saludar4 = () => `Hola Mundo`;

console.log(saludar("Goku"));
console.log(saludar2("Vegeta"));
console.log(saludar2("Picoro"));
console.log(saludar4());

const getUser = () => ({
    uid: "ABC123",
    username: "El_Papi1112321"
})

const user = getUser();
console.log(user);

//tarea
//1. Transformar a una funcion de flecha
//2. Tiene que retornar a un objeto implicito
//3. Pruebas

// function getUsuarioActivo(nombre){
//     return{
//         uid: "ABC456",
//         username: nombre
//     }
// }

const getUsuarioActivo = (nombre) => ({uid: "ABC456", username: nombre})

const usuarioActivo = getUsuarioActivo('Fernando');
console.log(usuarioActivo);
