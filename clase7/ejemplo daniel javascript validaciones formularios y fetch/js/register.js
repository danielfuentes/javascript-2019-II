window.onload=function(){
  //Aquí guardo el formulario con sus elementos
  //var registerForm = document.forms[0]
  let fomulario = document.querySelector('.form');
  formulario.elements.email.focus();
  console.log(formulario);
  //console.log(formulario.elements.email.value);

  //Aquí armo mi función para que se ejecute una vez que el usuario envie ó de enter en cada input
  formulario.onsubmit = function(evento) {
    //Aquí evito que por defecto se envie el formulario
    //Si el formulario pasa las validaciones doy el ingreso al usuario
    if (!validateRegisterForm()) {
      evento.preventDefault()
    }else{
      fomulario.submit()
    }
  }
  //Esta es la función que valida todos los campos del formulario
  function validateRegisterForm() {
    //Esta manera de programarlo en ECMA6, se llama destructuración de código.
    let { email, password, passwordRepeat,
    userName, termsCondition , provincia, municipio} = formulario.elements
    //De esta forma se programaba antes del 2015
    //email = registerForm.elements.email
    //password = registerForm.elements.password
    //Y así con cada una de las variables
    //Esta es una forma mas corta de hacer un if simple  
    
    console.log('validacion provincia', validateProvincia(provincia))

    if (!validateEmail(email)) return false;
    if (!validatePassword(password)) return false;
    if (!validatePasswordRepeat(password, passwordRepeat)) return false;
    if (!validateUsername(userName)) return false;
    if (!validateProvincia(provincia)) return false;
    if (!validateMunicipio(municipio)) return false;
    if (!validateTermsCondition(termsCondition)) return false;
    return true;
    }
    
    function validateEmail(email) {
      let re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      let error = document.getElementById('errorEmail');


      if (!re.test(email.value)){ 
        
        email.classList.add('is-invalid'); 
        console.log(errorEmail);
        error.innerHTML= "Debe colocar un email válido";
        error.classList.add('alert-danger');
        //errorEmail.classList.add('alert-danger');
       // email.addEventListener('change',cambioNombre);
      return false
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



    function validateProvincia(provincia){
      //console.log(provincia.value);
      console.log('Entre en provincia');
      let errorProvincia = document.getElementById('errorProvincia');
      if (provincia.value == "") {
        errorProvincia.innerHTML = "Debe seleccionar una provincia";
        errorProvincia.classList.add('alert-danger');
        provincia.classList.add('is-invalid');
        return false;
      }else{
        errorProvincia.innerHTML = "";
        errorProvincia.classList.remove('alert-danger');
        provincia.classList.remove('is-valid');
        provincia.classList.add('is-valid');
        formulario.elements.municipio.focus();
        console.log("Se va a salir de provincia");
        return true;

      }
    }

    function validateMunicipio(municipio){
      let errorMunicipio = document.getElementById('errorMunicipio');
      console.log(municipio);
      if (municipio.value == "") {
        console.log('Entre en el  municipio');
        console.log(errorMunicipio);
        console.log(municipio.value == null);
        errorMunicipio.innerHTML = "Debe seleccionar un municipio";
        errorMunicipio.classList.add('alert-danger');
        municipio.classList.add('is-invalid');
        return false;
      }else{
        errorMunicipio.innerHTML = "";
        errorMunicipio.classList.remove('alert-danger');
        municipio.classList.remove('is-valid');
        municipio.classList.add('is-valid');
        console.log("Se va a salir de municipio");
        formulario.elements.termsCondition.focus();
        return true;

      }
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
      //Esto es por si quieren enviar mensaje al usuario via ventana pop
     // swal('Error', 'Debe aceptar los términos y condiciones', 'error')
    }

    let selectProvincia = document.querySelector('#provincia');
    let selectMunicipio = document.querySelector('#municipio');
    let seleccion = "";

    //Aquí llamo a la función que cargaría las provincias de forma dinámica 
    cargarProvincias();

    function cargarProvincias(){

      fetch('https://apis.datos.gob.ar/georef/api/provincias?campos=id,nombre')
      .then(function(respuesta){
        //console.log(respuesta.json())
        return respuesta.json()
      })
      .then(function(datosProvincias){
        //console.log(datosProvincias.provincias)
        //Aquí le incorporo elementos html desde javascript
        selectProvincia.innerHTML = "<option value = ''>Seleccione provincia... </option>"
        for (let dato of datosProvincias.provincias){
          //console.log(dato)
          let opcionProvincia = document.createElement('option')
          opcionProvincia.setAttribute('value',dato.id)
          opcionProvincia.innerHTML = dato.nombre
          selectProvincia.append(opcionProvincia)
        }
      })
    }

    selectProvincia.addEventListener('change',function(){
      //console.log(selectProvincia.value)
      //console.log(selectProvincia.options[selectProvincia.selectedIndex].value)
      seleccion = selectProvincia.value
      cargarMunicipios(seleccion)
    })

    function cargarMunicipios(seleccion){
      fetch(' https://apis.datos.gob.ar/georef/api/municipios?provincia='+seleccion+'&campos=id,nombre&max=100')
      .then(respuesta => respuesta.json())
      .then(function(datosMunicipios){
        //console.log(datosMunicipios.municipios)
        //Aquí le incorporo elementos html desde javascript
        selectMunicipio.innerHTML = "<option value = ''>Seleccione municipio... </option>"
        for (let data of datosMunicipios.municipios){
          //console.log(data)
          let opcionMunicipio = document.createElement('option')
          opcionMunicipio.setAttribute('value',data.id)
          opcionMunicipio.innerHTML = data.nombre
          selectMunicipio.append(opcionMunicipio)
        }
      })
    }

    

} //Cierre de mi JS

    
   

