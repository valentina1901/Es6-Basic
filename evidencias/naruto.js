//axios depedencia 
//traer axios
const axios = require('axios')

let config = {
    method:'get',
    url: 'https://animechan.vercel.app/api/quotes/anime?title=naruto'
}

const f = async()=>{
    try {
        //creando la promesa 
       let response=await axios(config)
       response.data.forEach(element => {
        console.log(`Tipo: ${element.anime}`) 
        console.log('0//////////////0') 
       });
    } catch (error) {
        console.error(error)
    }
}
f()
