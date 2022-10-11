const request = require('request')

let endpoint='https://rickandmortyapi.com/api/character'

const r= request(endpoint, {json:true}, function(error,/*exito*/response,/*donde va a llegar*/data){
   data.results.forEach(element => {
    console.log(`Tipo: ${element.name}`)
    //cadena divisoria
    console.log('*********************')
   });

})