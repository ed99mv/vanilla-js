// Inserte el código aquí
function MhoraActual() {
 let horaHtml= document.getElementById("horaActual");

    
    let hora=new Date();
    let horaH=hora.getHours()
    let horaM=hora.getMinutes()
    let horaS=hora.getSeconds()

    horaHtml.innerHTML=horaH+": "+horaM+": "+horaS
}    
  MhoraActual()  

setInterval(MhoraActual, 1000)
