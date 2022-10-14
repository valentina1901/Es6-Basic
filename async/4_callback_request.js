const request = require('request')

let endpoint='https://rickandmortyapi.com/api/character'

const r= request(endpoint, {json:true}, function(error,/*exito*/response,/*donde va a llegar*/data){
   data.results.forEach(element => {
      //llamar url
    console.log(`Url: ${element.url}`)
     //llamar tipo 
    console.log(`Tipo: ${element.name}`)
    
    //cadena divisoria
    console.log('*********************')
   });

})
//objetos tiene atributos y operaciones 
//promesa tiene un estado pendiente(state)
//do funciones a ejecutar 
//TRIBUTO Q ES indefinido (RESULTS)
//fullfilled todo bien 
/*
let promise =new
//definir condicion si es exitosa o no  if 
*/
