// la razon para escribir modulo
//     encapsulamiento - desacoplamiento
//     dependencias - requerir modulos desde otros modulos
//paquete de codigo con dependencias$()

//tipos de moodulos
//  function scope
//      sirve para codigo pero no para dependencias

//  CommonJS
//      con module.export podemos exportar
//      con require(archivo) podemos llamar un archivo
//      mejor manejo de depedencias, dependencias circulares (resuelve)
//      se puede llamar a require.   Es sincrono (desventaja)
//      necesita libreria para ensamblar todo
//      se arma bandle a los componentes unidos de un modulo

//  AMD
//      nos permite escribir modulos asincronos
//      definimos con define(nombre, callback)
//      con require(nombre,callback) lo llamamos

// modulos de ES 2015
//      con import from
//      export function
//      es asincrono, tiene import, then, catch


// System.js
//  implementa  commonJS, AMD, scope
//