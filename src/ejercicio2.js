class Contador {
  valor=0
  siguiente(){
    this.valor++
    return this.valor
  }
}

const instancia= new Contador()
//const instancia=Contador.siguiente()

export { instancia }
instancia.siguiente()

