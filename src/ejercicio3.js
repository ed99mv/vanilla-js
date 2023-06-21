// Inserte el código aquí
//// 1 ////
let arreglo=[1, 2, 3]
let clonarArreglo =function () {
    let arregloClone=arreglo
    console.log(arregloClone);
    return arregloClone
}

clonarArreglo()
// NO MODIFICAR
// export { clonarArreglo, clonarObjeto, sumar, saludar };

//// 2 ////

let pelicula={
    titulo: "Batman Regresa", 
    año: 2017,
    pais: "USA"
}
let clonarObjeto =function () {
   let peliculaClone=pelicula
    console.log(peliculaClone);
    return peliculaClone;
}
clonarObjeto()


//////// 3 ///////////

function sumaTotal(valor1, valor2) {
    let suma=valor1+valor2;
    return suma
}
let sumaActual=[1, 2, 3].reduce(sumaTotal,0)
console.log(sumaActual);


///// 4 //////

 function saludar (nombre) {
    nombre="desconocido";
    return "Hola "+(nombre)
}
console.log(saludar());