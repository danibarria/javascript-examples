const p1 = {
    x:0,
    y:4,
    // moverEnX: function (x) { this.x += x } //funcion de this
    moverEnX: function (offset) { this.x += offset },
    moverEnY: function (offset) { this.y += offset }    
}
const p2 = {
    x:3,
    y:0,
    moverEnX(offset) { 
        this.x += offset 
    },
    moverEnY: function (offset) { this.y += offset }
}

function distancia(p1,p2){
    const x = p1.x - p2.x
    const y = p1.y - p2.y

    return Math.sqrt(x*x + y*y)
}

console.log(distancia(p1,p2))
console.log(distancia(p1,{x:30 , y:80})) //si no se llama y o x no funciona