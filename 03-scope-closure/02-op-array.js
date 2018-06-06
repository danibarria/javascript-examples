//forma de recibir numero variable de parametros

//spread operation
// function suma(...sumandos){
//     console.log(sumandos)
// }
// forma 1
// function suma(...sumandos){
//     let acum = 0
//     for(let i = 0; i<sumandos.length; i++){
//         acum += sumandos[i]
//     }
//     console.log(sumandos)
//     return acum
// }

//bien pero con arrow function
// function dobles(...numeros){
//     numeros.map(function(numero){
//         return numero*2
//     })
// }

const dobles = (...numeros) => numeros.map(numero => numero*2)

function suma(...sumandos){
    return  sumandos.reduce(function (acum, numero){
        acum += numero
        return acum        
    }, 0)
}

//filter para pares
const pares = (...numeros) => numeros.filter(numero => numero % 2 == 0)

suma(3,4,5)