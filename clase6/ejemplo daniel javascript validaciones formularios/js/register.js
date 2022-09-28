window.addEventListener('load',function(){

  //Amigas y amigos, esta es una forma de programar la validación de formularios, existen diversas maneras de hacer lo mismo, cada uno de nosotros programamos de forma diferente, lo importante es que ustedes desarrollen su propia lógica y hagan uso de este ejemplo, sólo como para tomar ideas.

  //Esta es otra forma que tenemos para porder iniciar nuestro código JS.
  //window.onload=function(){

  //Aquí capturo el formulario con sus elementos - Esta es una forma de hacerlo
  //var formulario = document.forms[0]
  //Esta es otra forma de capturar el formulario
  
  let formulario = document.querySelector('.form');
  //Con esta línea hago que el al cargar el formulario, el cursor se posicione en el campo email
  formulario.elements.email.focus();
  //Esto lo coloque para que lo puedan ver en la consola
  console.log(formulario);
  //Aquí les dispongo este console.log, para que vean como puedo obtener el valor colocado por el usuario
  console.log(formulario.elements.email.value);

  //También puedo capturar elemento por elemento, es decir cada input
  //let campoEmail = document.querySelector('input[name=email]');
  //console.log(campoEmail);
  //Aquí armo mi función para que se ejecute una vez que el usuario envie ó de enter en cada input
  
  formulario.onsubmit = function(evento) {  
    //Aquí evito que por defecto se envie el formulario
    //Si el formulario pasa las validaciones doy el ingreso al usuario
    //Este console.log, se los coloque, para que vean el evento que se dispara
    console.log("Hola evento"+evento );
    //Si los campos no pasan las validaciones, entonces no envio el formulario, que es la acción por defecto del submit, en el caso contrario este se envía.
    if (!validateRegisterForm()) {
      evento.preventDefault()
    }else{
      formulario.submit()
    }
  }
  //Esta es la función que valida todos los campos del formulario
  function validateRegisterForm() {
    //Esta manera de programarlo en ECMA6, se llama destructuración de código.
    let { email, password, passwordRepeat,
    userName, termsCondition } = formulario.elements

    //De esta forma se programaba antes del 2015, es decir almacenaba cada campo por separado
    //var email = formulario.elements.email
    //var password = formulario.elements.password
    //Y así con cada una de las variables
    //Esta es una forma mas corta de hacer un if simple, en ECMA6
  
    if (!validateEmail(email)) return false;
    if (!validatePassword(password)) return false;
    if (!validatePasswordRepeat(password, passwordRepeat)) return false;
    if (!validateUsername(userName)) return false;
    if (!validateTermsCondition(termsCondition)) return false;
    return true;
    }
    //Aquí comoenzo a realizar cada una de las funciones encgadas de hacer las validaciones.
    function validateEmail(email) {
      //Esta es una expresión regular que tome de stack overflow, para validar el email por esta vía.
      let re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      let error = document.getElementById('errorEmail');
      //Aquí hago uso del método test() de javascript, encargado de validar una expresión regular, esta retorna un booleano
      if (!re.test(email.value)){ 
        //Aquí hago uso de las clases de bootstrap, para hacer el efceto visual de los colores por si hay un error o no.        
        email.classList.add('is-invalid'); 
        console.log(errorEmail);
        error.innerHTML= "Debe colocar un email válido";
        error.classList.add('alert-danger');
        //errorEmail.classList.add('alert-danger');
       // email.addEventListener('change',cambioNombre);
      return false;
    }else{
      error.innerHTML= "";
      error.classList.remove('alert-danger');
      email.classList.remove('is-invalid'); 
      email.classList.add('is-valid');
      formulario.elements.password.focus()
      return true;
    }
    
    }
  
    function validatePassword(password) {
      //Atrape esta regex desde stack overflow
      let re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/
      let errorPassword = document.getElementById('errorPassword');

      if (!re.test(password.value)) {
        errorPassword.innerHTML = "Debe especificar una contraseña válida";
        errorPassword.classList.add('alert-danger');
        password.classList.add('is-invalid');
        return false;  

      }else{
        errorPassword.innerHTML = "";
        errorPassword.classList.remove('alert-danger');
        password.classList.remove('is-invalid');
        password.classList.add('is-valid');
        formulario.elements.passwordRepeat.focus();
        //Esto se los coloque para que vean que de igual forma pueden enviar una pantalla de alert al usuario, pero usando la libreria sweetalert
        // swal('Error', 'Ingrese una contraseña válida', 'error')
        return true;
      }
  
     
    }
  
    function validatePasswordRepeat(password,repeat){
      console.log(password.value);
      console.log(repeat.value);
      if (password.value != repeat.value) {
        errorPasswordRepeat.innerHTML = "Las conraseñas no coinciden";
        errorPasswordRepeat .classList.add('alert-danger');
        repeat.classList.add('is-invalid');
        return false;  

      }else{
        errorPasswordRepeat .innerHTML = "";
        errorPasswordRepeat.classList.remove('alert-danger');
        repeat.classList.remove('is-invalid');
        repeat.classList.add('is-valid');
        formulario.elements.userName.focus();
        // swal('Error', 'Ingrese una contraseña válida', 'error')
        return true;
      }  
      //swal('Error', 'Las contraseñas no son iguales', 'error')
      
    }
  
    function validateUsername(username) {
      let errorUserName = document.getElementById('errorNombreUsuario');
      if (username.value.length < 6){
        errorUserName.innerHTML = "Nombre de usuario no puede tener menos de 6 digitos";
        errorUserName.classList.add('alert-danger');
        username.classList.add('is-invalid');
        return false;
      } else{
        errorUserName.innerHTML = "";
        errorUserName.classList.remove('alert-danger');
        username.classList.remove('is-invalid');
        username.classList.add('is-valid');
        formulario.elements.termsCondition.focus();
        return true;
      }
  
     // swal('Error', 'Ingrese un nombre de usuario válido', 'error')
      
    }
  
    function validateTermsCondition(termsConditionChecked) {
      let errorTerminos = document.getElementById('errorTerminos');
      if (!termsConditionChecked.checked) {
        console.log('Entro terminos');
        console.log(termsConditionChecked);
        console.log(termsConditionChecked.checked);
        errorTerminos.innerHTML = "Debe aceptar los terminos y condiciones";
        errorTerminos.classList.add('alert-danger');
        termsConditionChecked.classList.add('is-invalid');
        return false;
      }else{
        errorTerminos.innerHTML = "";
        errorTerminos.classList.remove('alert-danger');
        termsConditionChecked.classList.remove('is-invalid');
        termsConditionChecked.classList.add('is-valid');
        console.log("Se va a salir de terminos");
        return true;
      }
    }
   

    
});
