// console.log("el area de un triangulo de base 5 y altura 7 es: " + (5*7)/2)
// con estas comillas `` podemos aniadir evaluaciones con ${}
// console.log(`El area de un triangulo de base 5 y altura 7 es: ${5*7/2}`)
// let base =5
// let height = 7
// console.log(`El area de un triangulo de base ${base} y altura ${height} es: ${base*height/2}`)
//las funciones tipo function(){} son anonimas
// function triangleArea(base, height){
//     return base*height/2
// }
// let base =5
// let height = 7
// console.log(`El area de un triangulo de base ${base} y altura ${height} es: ${triangleArea(base, height)}`)
//arrow functions
// let triangleArea = (base, height) => base*height/2
// // const triangleArea = (base, height) => base*height/2
// // let triangleArea = (base, height) => { // dos tipos
// //     base*height/2
// // }
// let base =5
// let height = 7
// console.log(`El area de un triangulo de base ${base} y altura ${height} es: ${triangleArea(base, height)}`)
let radio = 7
const circleArea = radio => Math.PI * (radio*radio)
console.log(`${circleArea(radio)}`)