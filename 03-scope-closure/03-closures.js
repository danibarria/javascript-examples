//funciones que recuerdan el scope que fueron creadas y pueden acceder a las funciones y variables de dicho scope
function saludarFamilia(lastName){
    return function saludarMiembro(name){ //funcion interna puede acceder a las variables de la funcion externa
        console.log(`Hola ${name} ${lastName}`)
    }
}

const saludarGomez = saludarFamilia("Gomez")
const saludarPerez = saludarFamilia("Perez")
const saludarRomero = saludarFamilia("Romero")


function makePrefixer(prefix){
    return function addPrefix(word){
        console.log(`${prefix}${word}`)
    }
}

saludarGomez("Jose")
saludarPerez("Daniel")
saludarRomero("Monico")

const prefijoNo = makePrefixer("No")

prefijoNo("asd")
