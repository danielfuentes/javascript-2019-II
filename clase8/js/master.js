$(document).ready(function () {
   //alert("Hola");
   //let miH1 = $('#miH1');
   //console.log(miH1);
   $('.miH1').html('Hola <strong>como</strong> les va')
   $('.miH1').css('color','red')
   $('.miH1').css({color:'blue',backgroundColor:'salmon'})     
   $('#imagen').attr('src','https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-512.png'); 

   let password = $('#password')
   $('#ojito').click(function () { 
       if(password.attr('type')=='text'){
           password.attr('type','password')
           $('#ojito').attr('name','eye');
       }else{
            password.attr('type','text')
            $('#ojito').attr('name','eye-off');
       }
       
   });
   //Animacion con Jquery
   $('#boton1').click(function(){
    $('#miH1').addClass('text-center text-primary');   
    $('#imagen').show(3000);
    
    })

   $('#boton2').click(function(){
       $('#imagen').hide(3000);
       $('#miH1').removeClass('text-center text-primary');
   })

   $('#boton1').mouseover(function () { 
       $('#boton1').addClass('animated fadeIn')

   });

   $('#boton1').mouseout(function () { 
    $('#boton1').removeClass('animated fadeIn')
});

});