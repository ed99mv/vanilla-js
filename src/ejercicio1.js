let contador = {
  valor: 0,
  siguiente: function () {
    this.valor++;
    return this.valor
  },
};
contador.siguiente()
// console.log(contador.siguiente());
  export { contador }




