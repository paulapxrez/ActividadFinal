
//Primeramente se definirán todas las variables que intervienen en js:

const nombreInput = document.getElementById("nombre");
const emailInput = document.getElementById("email");
const claveInput = document.getElementById("clave");
const confirmacionInput = document.getElementById("confirmacion");
const buttonInput = document.getElementById("button");

const errorNombreMessage = document.getElementById("errorNombre");
const errorEmailMessage = document.getElementById("errorEmail");
const errorClaveMessage = document.getElementById("errorClave");
const errorConfirmacionMessage = document.getElementById("errorConfirmacion");

const nombreSpan = document.getElementById("iconNombre");
const emailSpan = document.getElementById("iconEmail");
const claveSpan = document.getElementById("iconClave");
const confirmacionSpan = document.getElementById("iconConfirmacion");

const form = document.getElementById('form');


//Una vez se pulse el botón de enviar, todos los campos deberán ser 
//rellenados y se ejecutará la función checkLength:

buttonInput.addEventListener('click', () => {
   //Solo se ejecutará si la longitud es >=1
   //Se priorizará antes "Rellene este campo" a los demás .innerText

    if(checkLength(nombreInput, errorNombreMessage, nombreSpan)){
        nombreValidation()
    } 
    if(checkLength(emailInput, errorEmailMessage, emailSpan)){
        emailValidation()
    }
    if(checkLength(claveInput, errorClaveMessage, claveSpan)){
        claveValidation()
    }
    if(checkLength(confirmacionInput, errorConfirmacionMessage, confirmacionSpan)){
        confirmacionClave()
    }
})

function checkLength(input, errorMessage, span){
    if(input.value.length >= 1){
        return true;
    }
    else{
        errorMessage.innerText = 'Rellene este campo';
        errorMessage.classList.add("error");
        input.classList.add("errorInput");
        span.style.backgroundImage="url('./ima_genes/error-icon.svg')";
        return false;
    }
}


//El campo Nombre es de tipo “Texto”. Para la validación de éste 
//se utiliza un nuevo regex o expresion regular. Si el formato del 
//nombre no es válido saldrá un mensaje con el correspondiente fallo:

function nombreValidation(){
    const regexNombre = new RegExp("^[a-zA-Z]+$");
    const nombre = nombreInput.value;

    if(regexNombre.test(nombre)){
        //Se añaden las clases de success y se eliminan las de error para 
        //evitar interferencias entre clases.
        nombreInput.classList.add("successInput");
        errorNombreMessage.innerText = "";
        errorNombreMessage.classList.remove("error");
        nombreInput.classList.remove("errorInput");
        nombreSpan.style.backgroundImage="url('./ima_genes/success-icon.svg')";
    }
    else{
        nombreInput.classList.remove("successInput");
        errorNombreMessage.classList.add("error");
        nombreInput.classList.add("errorInput");
        errorNombreMessage.innerText = "Nombre inválido";
        nombreSpan.style.backgroundImage="url('./ima_genes/error-icon.svg')";
    }
}


//Por otro lado, el campo Email es de tipo “email”. Para la validación de 
//éste también se utiliza un nuevo regex o expresion regular. Si el formato 
//del email no es válido saldrá un mensaje con el correspondiente fallo:

function emailValidation(){
    const regexEmail = new RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z.-]+\.[a-zA-Z]{2,4}$");
    const email = emailInput.value;

    if(regexEmail.test(email)){
        emailInput.classList.add("successInput");
        errorEmailMessage.innerText = "";
        errorEmailMessage.classList.remove("error");
        emailInput.classList.remove("errorInput");
        emailSpan.style.backgroundImage="url('./ima_genes/success-icon.svg')";
    }
    else{
        emailInput.classList.remove("successInput");
        errorEmailMessage.classList.add("error");
        emailInput.classList.add("errorInput");
        errorEmailMessage.innerText = "Email inválido";
        emailSpan.style.backgroundImage="url('./ima_genes/error-icon.svg')";
    }
}


//El campo Clave deberá tener al menos 8 caracteres:

function claveValidation(){
    if(claveInput.value.length >= 8){
        claveInput.classList.add("successInput");
        errorClaveMessage.innerText = "";
        errorClaveMessage.classList.remove("error");
        claveInput.classList.remove("errorInput");
        claveSpan.style.backgroundImage="url('./ima_genes/success-icon.svg')";
    }
    else{
        claveInput.classList.remove("successInput");
        errorClaveMessage.classList.add("error");
        claveInput.classList.add("errorInput");
        errorClaveMessage.innerText = "Debe tener más de ocho caracteres";
        claveSpan.style.backgroundImage="url('./ima_genes/error-icon.svg')";
    }
}


//El valor introducido en los campos Clave y Confirme su clave serán
//idénticos o se obtendrá un error:

function confirmacionClave(){
    if(claveInput.value == confirmacionInput.value){
        confirmacionInput.classList.add("successInput");
        errorConfirmacionMessage.innerText = "";
        errorConfirmacionMessage.classList.remove("error");
        confirmacionInput.classList.remove("errorInput");
        confirmacionSpan.style.backgroundImage="url('./ima_genes/success-icon.svg')";
    }
    else{
        confirmacionInput.classList.remove("successInput");
        errorConfirmacionMessage.classList.add("error");
        confirmacionInput.classList.add("errorInput");
        errorConfirmacionMessage.innerText = "Las contraseñas no coinciden";
        confirmacionSpan.style.backgroundImage="url('./ima_genes/error-icon.svg')";
    }
}

//Si todos los campos están correctamente validados, al pulsar el botón ENVIAR
//saldrá un alert en pantalla informando que la inscripción ha sido correcta.

form.addEventListener('submit', () => {
    alert("La inscripción ha sido correcta")
})