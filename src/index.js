// Inserte el código aquí
function MhoraActual() {
 let horaHtml= document.getElementById("horaActual");

    
    let hora=new Date();

    let horaH= document.createElement('p')
    horaH.id="horaH"
     horaH=hora.getHours()
    // horaH.id= "caa"
    let horaM=hora.getMinutes()
    let horaS=hora.getSeconds()

    horaHtml.innerHTML=horaH+": "+horaM+": "+horaS
}    
  MhoraActual()  








setInterval(MhoraActual, 1000)

  fetch("http://localhost:3000/users")
    .then(data=>data.json())
    .then(users=>{
      console.log(users);
    })

//    .catch((error)=>{
//     alert("Error en la petición")
// })    

  

    
    /*usuarios.map(function (user, i) {
      let nombre = document.createElement("h2");
      nombre.innerHTML=i+" "+ user.name+" "+user.birth;
      divUsers.appendChild(nombre);


    })*/
    


/*var datos={
  "mohademago": {
    "id": 4294825,
    "name": "mohademago",
    "profileIconId": 1594,
    "revisionDate": 1491930966000,
    "summonerLevel": 30
  }
};



[
  {"id":1,"name":"Maria",
  "birth":1990
},
  {"id":2,
  "name":"Luis",
  "birth":1980
}]*/