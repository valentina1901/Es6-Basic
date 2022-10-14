//axios depedencia 
//traer axios
const axios = require('axios')

let config = {
    method:'get',
    url: "https://rickandmortyapi.com/api/character"

}
//creando la promesa 
axios(config)
.then((response)=>{
    //return va a la data linea 16
    return response.data.results
})
.then((data)=>{
data.forEach(element=>{
    console.log(`Tipo: ${element.name}`) 
    console.log('-*-**-*-*-*--***-*-*') 
})
})
.catch((error)=>{
    console.error(error)
})