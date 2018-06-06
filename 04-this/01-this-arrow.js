//la funcion bind podemos decir el scope de this
//pero podemos solucionarlo con las arrow functions
//la propiedad de las arrow functions es hacer bind automaticamente

class Persona {
    constructor(nombre, amigos = []) {
      this.nombre = nombre
      this.amigos = amigos
    }
  
    listarAmigos() {
      const _this = this
  
      this.amigos.forEach((amigo) => {
        // console.log(`Hola, mi nombre es ${_this.nombre} y soy amigo de ${amigo}`)
        console.log(`Hola, mi nombre es ${this.nombre} y soy amigo de ${amigo}`)
      }/* .bind(this) */)
    }
  }
  
  const sacha = new Persona("Sacha", [ "Pedro", "Juan", "Pepe" ])