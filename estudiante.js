var colors = require('colors');
// const estudiante = {
//     id: 1,
//     nombre: 'Valentina',
//     apellido: 'gaviria torres',
//     edad: '17',
// }

const estudiantes = ["Laura", "Carlos", "Ana", "Jorge"]

//desestruturar rl estudiante
//let {nombre, edad}=estudiante 
// let [L,C,A,J]=estudiantes
// console.log(L,C,A,J)

const g1=[  "Sofia",
            "Pelaes",
            "Dilan",]

const g2=[  "Yuliana",
            "Marcos",
            "Valentina",]

const g3=[ ...g1, "Nicolas",
           ...g2, "Daza",
           ]
           const estudiante = {
            id: 1,
            nombre: 'Valentina',
            apellido: 'gaviria torres',
            edad: '17',
            amigos:g3
        }
        console.log (estudiante)



//bsbluee background . color de letra red. estilo
//console.log(`Nombre: Valentina`.bgBlue.red.rainbow)
//console.log(estudiante)
//console.log(estudiante.apellido.bgRed.red)
//console.log(estudiante.nombre.bgBlue.blue)
//console.log(estudiante.edad.bgBlue.red.rainbow)
// console.log(estudiante.nombre.rainbow)
// console.log(estudiante.edad.rainbow)


