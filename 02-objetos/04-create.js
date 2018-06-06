const Punto = {
    init: function(x,y){
        this.x = x
        this.y = y
    },
    moverEnX:function moverEnX(offset){
        this.x += offset
    },
    moverEnY:function moverEnX(offset){
        this.y += offset
    },
    distancia: function distancia(p){
        const x = this.x - p.x
        const y = this.y - p.y
        return Math.sqrt(x*x + y*y)
    }
}

const p1 = Object.create(Punto)
const p2 = Object.create(Punto)

p1.init(2,4) //crea un objeto de tipo p
p2.init(3,5) //crea un objeto de tipo p
