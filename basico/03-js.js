function platzom(str){
    let translation = str

    //si la palabra es palindromo
    //ninguna otra regla cuenta
    //se devuelve la misma palabra intercalando mayusculas
    const reverse = (str) => str.split('').reverse().join('')
    function minMay(str) {
        const length = str.length
        let translation = ''
        let capitalize = true
        for(let i=0; i < length; i++){
            const char = str.charAt(i)
            translation += capitalize ? char.toUpperCase() : char.toLowerCase()
            capitalize = !capitalize
        }
        return translation
    }
    if(str == reverse(str)){
        return minMay(str)
    }
    
    //si la palabra termina en "ar", se le quitan esos dos caracteres
    if(str.toLowerCase().endsWith("ar")){
        //sllice permite cortar caracteres
        translation = str.slice(0,-2); //desde el final saca dos caracteres
    }
    // si la palabra inicia con Z, se le aniade "pe al final"
    if(str.toLowerCase().startsWith('z')){
        translation += 'pe'
    }
    //si la palabra tiene 10 o mas letras, se debe partir a la mitad y unir con guion del medio
    const length = translation.length
    if(length >= 10){
        const firstHalf = translation.slice(0, Math.round(length /2))
        //si no se especifica el segundo parametro es hasta el final
        const secondHalf = translation.slice(Math.round(length/2))
        translation = `${firstHalf}-${secondHalf}`
    }

    return translation
}

console.log(platzom("programar")) //program
console.log(platzom("zorro")) //zorrope
console.log(platzom("zarpar")) //zarppe
console.log(platzom("abecedarioxd")) //abece-dario
console.log(platzom("sometemos")) //abece-dario
console.log(platzom("neuquen")) //abece-dario
