//Genera los mensajes de Error
function alertaError(id_asterisco, id_element) {
    const asterisco = document.querySelector(id_asterisco);
    
    if (asterisco.classList.contains("form-text-error") == false) {
    
      // console.log(asterisco.classList.contains("form-text-error"));
        asterisco.classList.add("form-text-error");
  
        const element_padre = document.querySelector(id_element);
        element_padre.classList.add("form-control-error");
  
      // console.log(etiqueta_padre_rfc.parentElement);
        const contenedor_element = element_padre.parentElement;
        const item_small = document.createElement("SMALL");//todo en mayuscula
        const textDelItem = document.createTextNode("Este campo es obligatorio");
        item_small.appendChild(textDelItem);
        item_small.classList.add("form-text");
        item_small.classList.add("form-text-error");
        contenedor_element.appendChild(item_small);
      //console.log(item);
    }
  
  
    }
  
  //Elimina el mensaje de Error
    function limpiarError(id_asterisco, id_elemento) {
  
    const asterisco = document.querySelector(id_asterisco);
  
    if (asterisco.classList.contains("form-text-error") == true) {
        asterisco.classList.remove("form-text-error");
        const element_hijo = document.querySelector(id_elemento);
        element_hijo.classList.remove("form-control-error");
  
        const contenedor = element_hijo.parentElement;
        const small = contenedor.querySelector("small");
        contenedor.removeChild(small);
    
    }
    
    
    }
    
  //Genera mensaje principal Error
    function mensajeError(id_alerta,mensaje){
    const alerta = document.querySelector(id_alerta);
    if (alerta.classList.contains("alert-danger") == false) {
        alerta.classList.add("alert-danger");
        $(id_alerta).html(mensaje);
        
    }else{
        $(id_alerta).html(mensaje);
    }
    
    }
    
  //Elimina el mensaje de Error principal
    function limpiaMensajeError(id_alerta){
    const alerta = document.querySelector(id_alerta);
    if (alerta.classList.contains("alert-danger") == true) {
        alerta.classList.remove("alert-danger");
        alerta.innerHTML="";
    }
    
    }
    
  //Evento teclado, solamente mayusculas
    function eventoTeclado(id_elemento) {
    const entradaInput = document.getElementById(id_elemento);
    entradaInput.addEventListener('keyup', cambiarMayusculas);
    }
    function cambiarMayusculas(elemento) {
    let texto = elemento.target.value;
    elemento.target.value = texto.toUpperCase();
    // console.log(texto);
    // console.log(`TIPO DE EVENTO: ${elemento.type}` );
    }

$gmx(document).ready(function (){
        
    $('#registrar').click(function () {
        let texto_error="";
        if ($('#nombre').val() == "") {
            alertaError('#asterisco_nombre', '#nombre');
            texto_error = texto_error + 'El campo del Nombre esta vacio <br>';
            }else{
                limpiarError('#asterisco_nombre', '#nombre');
                texto_error = "";
                 if ($('#primerApellido').val() == "") {
            alertaError('#asterisco_primerApellido', '#primerApellido');
            texto_error = texto_error + 'El campo del Primer Apellido esta vacio <br>';
            }else{
                limpiarError('#asterisco_primerApellido', '#primerApellido');
                texto_error = "";
                 if ($('#segundoApellido').val() == "") {
            alertaError('#asterisco_segundoApellido', '#segundoApellido');
            texto_error = texto_error + 'El campo del Segundo Apellido esta vacio <br>';
            }else{
                limpiarError('#asterisco_segundoApellido', '#segundoApellido');
                texto_error = "";
                 if ($('#email').val() == "") {
            alertaError('#asterisco_email', 'email');
            texto_error = texto_error + 'El campo del Email esta vacio <br>';
            }else{
                limpiarError('#asterisco_email', '#email');
                texto_error = "";
            }if($('#password').val() == ""){
                alertaError('#asterisco_password', '#password');
                texto_error = texto_error + 'El campo Password esta vacio <br>';
            }else{
                limpiarError('#asterisco_password', '#password');
                texto_error = "";
            }if(texto_error!=""){
                mensajeError('#alerta',texto_error);
                return false;
                }else{
                limpiaMensajeError('#alerta');
                }
    });
});