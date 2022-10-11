let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

let endpoint='https://rickandmortyapi.com/api/character'

const exito=(response)=>{
    //se convierte a json
    const tipos= JSON.parse(response).results
    tipos.forEach((tipo)=>{
        console.log(`Tipo: ${tipo.name}`)  
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