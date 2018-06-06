const starWars7 = 'Star wars: el despertar de la fuerza'
const pgStarWars7 = 13

const nameDoni = `Dani`
const ageDoni = 23

const nameAriel = `Ariel`
const ageAriel = 12

// function canWatchStarWars7(name,age,isWithAdult=false){
//     if(age >= pgStarWars7){
//         alert(`${name} puede pasar a ver ${starWars7}`)
//         return true
//     }else if(isWithAdult){
//         alert(`${name} puede pasar a ver ${starWars7}, esta acompaniado`)
//         return true
//     }else{
//         alert(`${name} no puede pasar a ver ${starWars7}. Tiene ${age} anios y necesita tener ${pgStarWars7}.`)
//         return false
//     }
// }

let canWatchStarWars7 = (name,age,isWithAdult=false) => {
    (age>=pgStarWars7? alert("si puede, edad"):(isWithAdult ?  alert("si puede, acompaniado"):  alert("no puede, menor y no acompaniado")))
}

console.log(canWatchStarWars7(nameDoni,ageDoni))
console.log(canWatchStarWars7(nameAriel,ageAriel, true))