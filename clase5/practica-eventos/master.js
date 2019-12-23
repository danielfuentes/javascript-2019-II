//window.onload = function(){
//Aqui va todo nuestro código
//}

//Esto es otra forma de hacer lo anterior
window.addEventListener('load',function(){
    //Declaro mi variable que de una u otra forma debo almacenar el color incial o debo guardar el color actual del recuadro pequeño arriba ubicado
    var colorActual  

    //Las funciones las coloque aquí ya que son funciones expresivas y no declarativas, de ser declarativas, las puedo colocarl al final de mi código
    //Esta función lo que hace es permitir al usuario almacenar el color luego de haber sido seleccionado
    var cargarColor = function(){
        //otra forma de hacerlo es
        //colorActual = this.getAttribute("id")
        colorActual = this.id
        //console.log(colorActual)
    }
    //Esta es la función que dispone el color luego de haber sido seleccionado por el usuario
    var cambiarColor= function(){
        this.style.background = colorActual
    }
    //Aquí capturo a los elememntos y de una vez los pongo en escuha
    var rojo = document.getElementById("red")
    rojo.addEventListener("click",cargarColor)
    //Otra forma de hacer esto mismo es:
    document.getElementById("lightblue").addEventListener("click",cargarColor)
    document.getElementById("green").addEventListener("click",cargarColor)
    document.getElementById("white").addEventListener("click",cargarColor)
    document.getElementById("yellow").addEventListener("click",cargarColor)
    document.getElementById("blue").addEventListener("click",cargarColor)
    document.getElementById("black").addEventListener("click",cargarColor)
    //Estos son los cuadros de abajo que aparecen en el html, que al usuario pulsar sobre ellos se deben teñir del color seleccionado
    linea1 = document.getElementById("linea1")
    linea1.addEventListener("click", cambiarColor)   
    document.getElementById("linea2").addEventListener("click",cambiarColor)
    document.getElementById("linea3").addEventListener("click",cambiarColor)

//Aqu´i se muestra la fecha de una forma directa
//let date = document.querySelector('h1');
//let fecha = new Date();
//fecha = fecha.getDate() + "/" + (fecha.getMonth() +1)+"/"+ fecha.getFullYear();
//date.innerHTML = fecha;
//Aquí se trabaja con los arrays para entonces hacer la fecha mas completa con sus respectivas descripciones
let arrayDias = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado']
let arrayMeses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];

//Aquí se indica que fechaActual es un objeto de tipo fecha
let fechaActual = new Date();
//Aca se atrapa del objeto cada valor por separado
let dia = fechaActual.getDate();
let diaSemana = fechaActual.getDay();
let mes = fechaActual.getMonth();
let ano = fechaActual.getFullYear();
//Aquí se arma la fecha
let fechaCompleta = arrayDias[diaSemana]+" "+dia+" de "+arrayMeses[mes]+ " de "+ano+".";
//Aquí se muestra en nuestro HTML
let fechaHTML = document.getElementById('fecha');
fechaHTML.innerHTML=fechaCompleta;
});
