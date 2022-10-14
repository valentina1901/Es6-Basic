//axios depedencia 
//traer axios
const axios = require('axios')

let config = {
    method:'get',
    url: 'https://restcountries.com/v3.1/all'

}

const f = async()=>{
    try {
        //creando la promesa 
       let response=await axios(config)
       response.data.forEach(pais=>{
        console.log(`Tipo: ${pais.name.common }`) 
        console.log('7////////////7') 
    })
    } catch (error) {
        console.error(error)
    }
}
f()
