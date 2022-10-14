//axios depedencia 
//traer axios
const axios = require('axios')

let config = {
    method:'get',
    url: 'https://animechan.vercel.app/api/random'

}

const f = async()=>{
    try {
        //creando la promesa 
       let response=await axios(config)
       console.log(response.data.anime)
    } catch (error) {
        console.error(error)
    }
}
f()
