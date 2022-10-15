//https://techy-api.vercel.app/api/json  

const request = require('request')


let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

let endpoint='https://api.disneyapi.dev/characters'

const exito=(response)=>{
    //se convierte a json
    const tipos= JSON.parse(response).data
    tipos.forEach((disney)=>{
        console.log(`Nombre: ${disney.name}`)  
        console.log(`TvShows: ${disney.tvShows}`)  
        console.log('............................................') 
    })
}

const fallo=(status)=>{
  console.log(status)
}

const get_data=(endpoint,exito, fallo)=>{
    //2.se crea el objeto de conexion
    let http= new XMLHttpRequest()
    //3. abrir conexion
    http.open('get', endpoint)
    //4.enviar la solicitud (request) al API 
    http.send()
    //5. hacer el tratamiento de response sea de error o de falla 
    http.onload= ()=>{
        if(http.status === 200){
            exito(http.responseText)
        }else{
            fallo(http.status)
        } 
    }
}
//invocar la funcion get_data
get_data(endpoint, exito, fallo)