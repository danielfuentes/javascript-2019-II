//Código ejercitado y explicado en nuestra clase.circulo
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



//Ejemplo para que puedan ver lo que podemos hacer en Javascript con el uso de pocos comandos y controlando los eventos que el usuario ejecuta.

// window.addEventListener('load',cargar); // es lo mismo que el window.onload = function(){}

/*function cargar(){
    alert("Hola hermano querido");
}*/
//este es el codigo de movimento de un circulo con topes en los bordes y con la condicion que no se puede utilizar otras teclas que no sean las flechas
window.onload = function(){
    //Aquí capturo de mi HTML el elemento que contiene el circulo
   let miDiv = document.querySelector('.circulo');
   //Aquí declaro mis variables que controlaran la velocidad de desplazamiento del circulo, así como sus margenes de arranque de visualización en la pantalla
   let movimiento=50; 
   let margenIzquierdo=0;
   let margenArriba=0;
   // Aquí es donde controlo los eventos ejecutados por el usuario (Luego que suelte las teclas de flechas) Además también se controla que cuando se trata de revasar de las dimensiones de la página, no es permitido. 
   document.onkeydown = function(evento){
        if(evento.keyCode!=39&&evento.keyCode!=37&&evento.keyCode!=38&&evento.keyCode!=40){
            Swal.fire(
                'Atento!',
                'Sólo debes usar las teclas de fechas!',
                'success'
              )
            //Este es el alert sencillo que trae por defecto Javascript
            //alert("Hermano Querido. Tienes que accionar las teclas de flechas!!!!!");
        }else{
            //Aquí controlo que no se pase de mi pantalla 1200px
            if(evento.keyCode==39&&margenIzquierdo!=1200){
                moverDerecha();
            }
            //Aquí controlo que no se traslade menos de lo indicado de mi margen izquierdo
            if(evento.keyCode==37&&margenIzquierdo!=0){
                    moverIzquierda();
            }
            if (evento.keyCode==38&&margenArriba!=0) {
                moverArriba();
            }
            if (evento.keyCode==40) {
                moverAbajo();
            }
        }
            
    }
//Aquí desarrollo las funciones que controlan los movimientos del circulo, valiendome de la propiedad style y controlando los margenes.
    function moverDerecha(){
        margenIzquierdo=margenIzquierdo+movimiento;
        miDiv.style.marginLeft=margenIzquierdo+"px";
    }
    function moverIzquierda(){
     margenIzquierdo=margenIzquierdo-movimiento;
     miDiv.style.marginLeft=margenIzquierdo+"px";
     }
    function moverArriba(){
        margenArriba=margenArriba-movimiento;
        miDiv.style.marginTop=margenArriba+"px";
    }
    function moverAbajo(){
        margenArriba=margenArriba+movimiento;
        miDiv.style.marginTop=margenArriba+"px";
    }

}