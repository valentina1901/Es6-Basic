

//let:variables e indicadores simples:
//number
//booleans
//strings
// let lenguaje = "JAVA"

//const:constantes
//funciones
//arreglos
//objetos
// console.log(`I hate ${lenguaje}`)
// import {materias} from "./materias.js"
// console.log(materias)


import materias from "./materias.js"
import pkg from 'colors'

//forech recorre un arreglo
// materias.forEach(function(/*variable q recorre*/materia) {
//     console.log(`materia: ${materia.nombre}`.blue)    
// })

//otra operaion
materias.forEach((materia)=>{ 
if(materia.tipo=== 'tecnica'){ 
    console.log(`materia: ${materia.nombre}`.blue)    
    console.log(`profesor: ${materia.instructor}`.blue) 
 }
})

//map construye un arreglo con base en otro 
const profesores = materias.map((materia)=>{
    return materia.instructor
})

//find encontrr la primera ocurrencia solo una
const PHP = materias.find((materia)=>{
    return materia.instructor=== "Cristian Buitrago"
})

//push :agrega un elemento a un arreglo

//nueva materia
materias.push({
     id:4,
        nombre: "Ambiente",
        instructor:"Yaneth",
        tipo:"tecnica",
        notas:[
            4.4,
            3,
            3
     ]
    }
)

console.log(materias)

//actuaizar investigar :findindex
const actualizar = materias.splice(2,"Cultura Fisíca","Luis Baquero12","Tranversal",[
    100,
    90,
    100])
console.log(materias)

//splice investigar: delete
materias.splice(materia.id,1)

console.log(materias)

