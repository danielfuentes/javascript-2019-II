window.addEventListener('load',function(){
    //Atrapo los elementos
    let cuadro = document.querySelector('.cuadro');
    let iniciar = document.querySelector('.iniciar');
    let detener = document.querySelector('.detener');
    let fecha = document.querySelector('.fecha');
    //Declaro mis variables
    let segundos = 60;
    let fechaActual = new Date();
    console.log(fechaActual);
    
    let diaDeLaSemana = fechaActual.getDay();
    let numeroDia = fechaActual.getDate();
    let mes = fechaActual.getMonth();
    let anio = fechaActual.getFullYear();
    console.log(fechaActual);
    
    console.log(diaDeLaSemana);
    console.log(numeroDia);
    console.log(mes);
    console.log(anio);

    let dias = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sábado','Domingo'];
    let meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
    
    fecha.innerHTML = dias[diaDeLaSemana] + " "+numeroDia+ " de "+meses[mes]+ " de "+anio ;

    //Aquí hago que la funcíón inicie su trabajo de contar de forma regresiva
    
    arranca();
    
  
    detener.onclick = function(){
        clearInterval(valor);
        //Aquí hago que el boton continuar aparezca
        iniciar.style.display = "inline";
        //segundos=60;
    }
    function arranca(){
        //Aquí hago que al entrar el boton de continuar no apareza
        iniciar.style.display = 'none';

        valor = setInterval(function(){
            segundos--
            console.log(segundos);
            cuadro.innerHTML = segundos;
            if(segundos<=0){
                alert('Se le acabo el tiempo');
                segundos=60;
                document.location.href = "gracias.html";
            }
        },1000);

    }
    iniciar.onclick= function(){

        arranca();
    }

    //Trabajando con los metodos de los string
    let palabra = "Hola como estan todos ahorita";
    //Me devuelve la longitud del string
    console.log("La longitud del string es:"+ palabra.length);
    //Me devuelve la posición de donde esta la primera coincicendia ojo, lo trabaja como si fuera un array, inicando en cero (0), si no lo encuntra devuelve -1
    console.log(palabra.indexOf('como'));
    //slice es como extraer un pedazo de una cadena
    console.log(palabra.slice(5,9));
    //Trim elimina los espacios en blanco a la derecha y a la izquierda de un string
    console.log(palabra.trim().length);
    //split - nos permite dividir un strng en un array
    console.log(palabra.split(' '));
    // 

});



