// 06 04 1995
//12  08 1990

// const nacimiento = new Date(anio, mes-1, dia)
const nacimiento = new Date(1995, 3, 6)

const hoy = new Date()

const tiempo = hoy - nacimiento // en milisegundos
const tiempoSegundos = tiempo / 1000 //tiempo en segundos
const tiempoMinutos = tiempoSegundos / 60 //tiempo en minutos
const tiempoHoras = tiempoMinutos / 60 //tiempo en horas
const tiempoDias = tiempoHoras / 24 //tiempo en dias
const tiempoMeses = tiempoDias / 30 // en meses aprox
const tiempoAnios = tiempoDias / 365 //anios en dias

const proximo = new Date(hoy.getFullYear(), nacimiento.getMonth(),nacimiento.getDate())

const diasSemana = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado"
]

console.log(diasSemana[0])
i=3 
console.log(diasSemana[i])
console.log(diasSemana[proximo.getDay()])