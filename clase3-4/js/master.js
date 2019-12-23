//let body = document.body;
//let miH1 = document.createElement('h1');
//console.log(miH1);
//miH1.innerHTML = "<strong>Hola como estan</strong>";
//body.append(miH1);
//let color = prompt('Indique un color base :');
//miH1.setAttribute('class',color);

//miH1.style.color = color;
//miH1.innerHTML = "<strong>Hola como estan</strong>";
//body.append(miH1);

//miH1.innerText = "<p>Hola como estan</p>";
//body.append(miH1);


//Debo capturar los elementos
//let miH1 = document.querySelector('h1');
//let boton = document.querySelector('#boton');
//boton.onclick = function(){
//    miH1.style.color = "red";
//}

//boton.addEventListener('click',function(){
//    miH1.classList.add('text-center', 'text-primary');
//});

//boton.addEventListener('click',doyClick);
//boton.addEventListener('mouseover',pasoPorAqui);
//boton.addEventListener('mouseout',salio);


//function doyClick(){
//    miH1.classList.add('text-center','text-danger');
//}

//function pasoPorAqui(){
//    miH1.classList.toggle('text-success');
//}
//function salio(){
//    miH1.classList.remove('text-success');
//}

//Otro ejemplo trabajando con eventos
//Atrapar el elemento
let body = document.body;
let circulo = document.querySelector('.circulo');
let velocidad = 50;
let margenIzquierdo = 0;
let margenAbajo = 0;
let margenArriba = 0;

body.addEventListener('keydown',function(evento){
    console.log(evento);
    if(evento.keyCode==39 && margenIzquierdo<=1150){
        movimientoDerecha();
    }
    if(evento.keyCode==37 && margenIzquierdo>=50){
        movimientoIzquierda();
    }
    if(evento.keyCode==40){
        movimientoAbajo();
    }
    if (evento.keyCode==38){
        movimientoArriba();
    }
});

function movimientoDerecha(){
    margenIzquierdo = margenIzquierdo + velocidad;
    circulo.style.marginLeft = margenIzquierdo+'px';
}

function movimientoIzquierda(){
    margenIzquierdo = margenIzquierdo - velocidad;
    circulo.style.marginLeft = margenIzquierdo +'px';
}

function movimientoAbajo()
{
    margenAbajo = margenAbajo + velocidad;
    circulo.style.marginTop = margenAbajo + 'px';
}

function movimientoArriba()
{
    margenAbajo = margenAbajo - velocidad;
    circulo.style.marginTop = margenAbajo + 'px';
}











