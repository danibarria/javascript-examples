//sintaxis sugar
class Punto{
    //dice clase pero funciona como prototipo
    constructor(x,y){
        this.x = x
        this.y = y
    }
    moverEnX(offset){
        this.x += offset
    }
    moverEnY(offset){
        this.y += offset
    }
    distancia(p){
        const x = this.x - p.x
        const y = this.y - p.y
        return Math.sqrt(x*x + y*y)
    }
}

const p1 = new Punto(0,4)
const p2 = new Punto(3,0)

