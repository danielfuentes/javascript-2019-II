window.onload = function(){
    //Este es el clásico mensaje de alerta de JS
    alert('Clásico mensaje de alerta de JS');
    //Este es el hoy por hoy usado, pero valiendonos de la libreria SweeAleet2
    Swal.fire(
        'Nueva forma de enviar mensajes',
        'Usando SweetAlert2',
        'success'
      )
    let nombre = "Daniel";
    let apellido = "Fuentes";
    let cursadatt07 = ['Sol','Agustina','Tomas','Horacio','Maxi','Juan'];
    let jugar = true;
    console.log(nombre,apellido,cursadatt07);
    console.log("Mi nombre es: "+nombre+" "+apellido);

    //document.write("Mi nombre es: "+nombre+" "+apellido);

    function Auto(marca,modelo,patente){
        this.marca = marca,
        this.modelo = modelo,
        this.patente = patente
    }

    let miCarro = new Auto('ford','Explorer','AA342531');
    let carroAdrian = new Auto('BMW','325','AR1111');

    console.log(miCarro.marca);
    console.log("El carro de adrian es "+carroAdrian.marca)

    //Practica 2
    let ironMan = {
        nombre: "Iron Man",
        equipo: "Avengers",
        poderes: ["volar","lanzar misiles","disparar laser"],
        energia: 100,
        getPoder: function (valor){
            return this.poderes[valor];
        } 
    }
    while( ironMan.energia > 0){
        let poderIronMan = Math.floor(Math.random() * 3);
        if(poderIronMan == 0){
            ironMan.energia = ironMan.energia - 10;
            console.log(ironMan.nombre+ " después de "+ironMan.getPoder(poderIronMan)+ " su energía actual es: "+ironMan.energia);
           
        }else if(poderIronMan == 1){
            ironMan.energia = ironMan.energia - 15;
            console.log(ironMan.nombre+ " después de "+ironMan.getPoder(poderIronMan)+ " su energía actual es: "+ironMan.energia);
        }else{
            ironMan.energia = ironMan.energia - 25;
            console.log(ironMan.nombre+ " después de "+ironMan.getPoder(poderIronMan)+ " su energía actual es: "+ironMan.energia);
        }
    }


    //Atrapando elementos de nuestro DOM
    //let miH1 = document.getElementById('miH1');
    let miH1 = document.querySelector('.miH1');
    let datos = document.querySelector('.datos');
    console.log(miH1);
    //Luego tal como indico Tomas, lo que hacemos es disponer CSS a nuestro elemento HTML capturado, por medio de style
    miH1.style.color = 'red';
    miH1.style.backgroundColor = 'blue';
    //De esta forma puedo escribir HTML sobre algún elemento capturado
    //Usando el acento invertido como indicó Lisandro.
    //Para ello apuntamos al elemento seleccionado y luego ejecutamos el innerHTML
    datos.innerHTML = `<h2>Esto es una prueba de HTML desde JS </h2>`;
    


}
