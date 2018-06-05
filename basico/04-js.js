const nombre = 'Daniel'

const dias= [
    "lunes", "martes", "miercoles", "jueves", "viernes","sabado","domingo"
]

function correr(){
    const min = 5
    const max = 15
    return Math.round(Math.random()*(max - min) + min)
}
let totalKms = 0
const length = dias.length 
for(let i = 0; i < length; i++){
    const kms = correr()
    totalKms += kms
    console.log(`el dia ${dias[i]} ${i} se corrio ${kms}`)
}

const promedioKms = totalKms / length
console.log(`total recorrido por ${nombre} fueron ${promedioKms.toFixed(2)}`)