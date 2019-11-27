// SELECTING ALL TEXT ELEMENTS
var username = document.forms['vform']['username'];
var email = document.forms['vform']['email'];
var state = document.forms['vform']['state'];
var password = document.forms['vform']['password'];
var password_confirm = document.forms['vform']['password_confirm'];
// SELECTING ALL ERROR DISPLAY ELEMENTS
var name_error = document.getElementById('name_error');
var email_error = document.getElementById('email_error');
var state_error = document.getElementById('state_error');
var password_error = document.getElementById('password_error');
// SETTING ALL EVENT LISTENERS
//username.addEventListener('blur', nameVerify, true);
//email.addEventListener('blur', emailVerify, true);
//state.addEventListener('blur', stateVerify, true);
//password.addEventListener('blur', passwordVerify, true);
window.onload = iniciar; 
function iniciar() {
    document.getElementById("enviar").addEventListener('click', validate, false);
}

function nameVerify() {
  if (username.value.length < 3) {
    username.style.border = "1px solid red";
    document.getElementById('username_div').style.color = "red";
    name_error.textContent = "El Nombre de usuario debe tener 3 letras mínimo";
    username.focus();
    return false;
  }
  return true;
}
function emailVerify() {
  if (email.value == "") {
    email.style.border = "1px solid red";
    document.getElementById('email_div').style.color = "red";
    email_error.textContent = "Email es requerido";
    email.focus();
    return false;
  }
  return true;
}
function stateVerify() {
  if (state.value == "Escoja Provincia") {
    state.style.border = "1px solid red";
    document.getElementById('state_div').style.color = "red";
    state_error.textContent = "Provincia es requerido";
    state.focus();
    return false;
  }
  return true;
}
function passwordVerify() {
  if (password.value == "") {
    password.style.border = "1px solid red";
    document.getElementById('password_div').style.color = "red";
    password_confirm.style.border = "1px solid red";
    password_error.textContent = "Password es requerido";
    password.focus();
    return false;
  }
  return true;
}  
function passwordConfirm() {
  if (password.value != password_confirm.value) {
    password.style.border = "1px solid red";
    document.getElementById('pass_confirm_div').style.color = "red";
    password_confirm.style.border = "1px solid red";
    password_error.innerHTML = "Las dos contraseñas no coinciden";
    return false;
  }
  return true;
}

// validation function
function validate(e) {
  if (nameVerify() && emailVerify() && stateVerify() && passwordVerify() && passwordConfirm()) {
    return true;
    } else {
        e.preventDefault();
        return false;
    }
}
/*function validate() {
  if (nameVerify() || emailVerify() || stateVerify() || passwordVerify() || passwordConfirm()) {
    return false;
    } 
}*/


