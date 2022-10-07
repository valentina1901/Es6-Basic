
//importar bajo commonjs
//const suma = require(componenteaimportar)
//./raiz del proyecto
//dependencias
//const suma = require(`./operaciones`)
import {suma, resta, multiplica} from './operaciones.js'

const a = 10 
const b = 40

//sin parametros
/*function suma() {
    console.log(`la suma es ${a+b}`) 
}
suma (a + b)*/

//con parametos
/*function suma(a,b) {
    console.log(`la suma es ${a+b}`) 
}
suma (a , b)*/

//funcion delegada
 /*function (a,b) {
    console.log(`la suma es ${a+b}`) 
}
suma (a , b)*/

//con identificador
/*
const suma = function(a,b) {
    console.log(`la suma es ${a+b}`) 
}
suma (a , b)*/

//con flecha
/*const suma = (a,b)=> {
    console.log(`la suma es ${a+b}`) 
}
suma (a , b)*/
/*
const suma = (a,b)=>console.log(`la suma es ${a+b}`) 
suma (a , b)*/
/*
const suma = (a,b)=>{
    return a+b
}
console.log(`la suma es ${suma(a,b)}`) */

console.log(`la multiplcacion es ${multiplica(a,b)}`)
