const request = require('request')
 
let endpoint = 'https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations';

const r = request(endpoint , { json: true } , function(error , response, data){
    
    data.civilizations.forEach(element =>{
        console.log(`Nombre: ${element.name}`)
        console.log(`Expansion: ${element.expansion}`)
        console.log(`Tipo: ${element.army_type}`)
        console.log('.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.--.-..-')
    })
} )