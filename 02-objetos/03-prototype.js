function Punto(x,y){
  this.x = x
  this.y = y
}

const p1 = new Punto(0,4) //nos crea un nuevo objeto

Punto.prototype.moverEnX = function moverEnX(offset) {
  this.x += offset
}
Punto.prototype.moverEnY = function moverEnX(offset) {
  this.y += offset
}
Punto.prototype.calcularDistancia = function calcularDistancia(p){
  const x = this.x - p.x
  const y = this.y - p.y
  return Math.sqrt(x*x + y*y)
}

console.log(p1.calcularDistancia({x:1,y:3}))

//se puede modificar el prototipo