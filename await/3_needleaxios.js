//axios depedencia 
//traer axios
const needle = require('needle')

let endpoint= 'https://rickandmortyapi.com/api/character'


const f = async()=>{
    try {
        //creando la promesa 
       let response=await needle('get', endpoint)
       response.body.results.forEach((tipo)=>{
        console.log(`Tipo: ${tipo.name}`) 
        console.log('0-0-0-0-0--0-00-0-0-') 
    })
    } catch (error) {
        console.error(error)
    }
}
f()
