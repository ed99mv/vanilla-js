// Inserte el código aquí
import { calculadora } from "./calculadora.js";
console.log(calculadora);





function calcular(operacion, numero1, numero2) {
    if (operacion=="suma") {
        
        console.log(calculadora.sumar(numero1,numero2))
    }else{
        if (operacion=="resta") {
            console.log(calculadora.restar(numero1,numero2))
        }else{
            if (operacion=="multiplicar") {
                console.log(calculadora.multiplicar(numero1,numero2));
            }else{
                if (operacion=="dividir") {
                    console.log(calculadora.dividir(numero1,numero2));
                }
            }
        }
    }   
    

}
calcular("suma",2,2)
calcular("resta",2,2)
calcular("multiplicar",2,2)
calcular("dividir",2,2)

