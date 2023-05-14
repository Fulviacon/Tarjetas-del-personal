import data from "./data.js";//Importamos los array guardados en data.
//window.addEventListener("load",())= >{///Luego del mét escuchar al usuario, se dispara el evento al finalizar la carga del documento.(load)
const listaPersonal = JSON.parse (data);//Este codigo indica que se convierte un Json a objeto Js
const tarjeta =document.getElementById("tarjeta");//la variable relaciona a través del mét con el html, denominado"tarjeta"
//console.log (usuarios [0]);//Este muestra el arreglo de data.
for (let trabajador of listaPersonal){//Estoy creando un bucle para recorrer la lista de trabajadores.
const personal=document.createElement("div");// un archivo donde guardamos la info que traemos de la lista.
personal.innerHTML= `
<h2>${trabajador.name.first} ${trabajador.name.last} ${trabajador.name.title}</h2>  
<img src=${trabajador.picture.medium} alt= ${trabajador.name.first} ${trabajador.name.last}/>
<h3>${trabajador.location.street.name} ${trabajador.location.street.number}</h3>

`
tarjeta.appendChild(personal)//este método traslada la caja tarjeta a pantalla.

}
