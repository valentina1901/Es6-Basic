//needle es una funcion 

const needle= require('needle')

const url= 'https://pokeapi.co/api/v2/type'

needle ('GET', url)
        .then((response)=>{
            data.forEach(element=>{
            console.log(response)
            console.log(`Tipo: ${element.name}`) 
            console.log('-*-**-*-*-*--***-*-*') 
        })
        })
        .catch((error)=>{
            console.error(error)
        })