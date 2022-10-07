

function llamar(alumno, callback) {
    let llamar= `LLamar alumno ${alumno}`
    //ejecutar la funcion callback
    callback(llamar)
}
//definir funcion callback
// function imprimir(texto) {
//     console.log(texto)
// }
//convertir 
const imprimir=(texto) =>{
    console.log(texto)
}
//invocar la funcion principa de llamar 
llamar("Valentina Gaviria Torres", imprimir)
