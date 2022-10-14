//dependencia http
let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

let endpoint='https://pokeapi.co/api/v2/type'

const exito=(response)=>{
    //se convierte a json
    const tipos= JSON.parse(response).results
    tipos.forEach((tipo)=>{
        console.log(`Tipo: ${tipo.name}`) 
        console.log('------------------') 
    })
}

const fallo=(status)=>{
  console.log(status)
}

const get_data=(endpoint)=>{
    //promesa para la conexion API
    let promise =new Promise(/*definir un callback*/(resolve, reject)=>{
          //2.se crea el objeto de conexion e llama igusl que la dependencia
    let http= new XMLHttpRequest()
    //3. abrir conexion
    http.open('GET', endpoint)
    //4.enviar la solicitud (request) al API 
    http.send()
    //5. hacer el tratamiento de response sea de error o de falla 
    http.onload= ()=>{
        if(http.status === 200){
            //resolve = exito
            resolve(http.responseText)
        }else{
            //reject = fallo
            reject(http.status)
        }
    }
})
//VERIFICAR
//console.log(promise)
//RETORNAR
return promise
}

//invocar la funcion get_data
get_data(endpoint)
//exito
.then((response)=>{
   exito(response)
})
//error
.catch((status)=>{
   fallo(status)
})

