let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

let endpoint='https://pokeapi.co/api/v2/type'

function exito(response){
  console.log(JSON.parse(response))
}

function fallo(status){
  console.log(status)
}

function get_data(endpoint,exito, fallo){
    //2.se crea el objeto de conexion
    let http= new XMLHttpRequest()
    //3. abrir conexion
    http.open('get', endpoint)
    //4.enviar la solicitud (request) al API 
    http.send()
    //5. hacer el tratamiento de response sea de error o de falla 
    http.onload= function(){
        if(http.status === 200){
            exito(http.responseText)
        }else{
            fallo(http.status)
        }
        
    }
}

//invocar la funcion get_data
get_data(endpoint, exito, fallo)

