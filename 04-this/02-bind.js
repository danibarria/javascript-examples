//call y apply
class Toggable{
    constructor (element){
        //inicializar estado interno
        this.element = element
        this.element.innerHTML = 'Off'
        this.activated = false
        this.onClick = this.onClick.bind(this)
        this.element.addEventListener('click', this.onClick)
    }
    onClick(event){
        console.log('esto es this' + this)
        //cambiar estado interno
        this.activated = !this.activated
        //llamar a toggleTet
        this.toggleText()
    }

    toggleText(){
        //cambiar texto
        this.element.innerHTML = this.activated? 'On' : 'Off'
    }
}

const button = document.getElementById('boton')

const miBoton = new Toggable(button)

