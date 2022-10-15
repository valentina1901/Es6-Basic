
const axios = require('axios')

let config = {
    method:'get',
    url: 'https://lookup.binlist.net/45717360'

}
const f = async()=>{
    try {
        //creando la promesa 
       let response=await axios(config)
       console.log(response.data.scheme)
    } catch (error) {
        console.error(error)
    }
}
f()