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
//var password_confirm_error = document.getElementById('pass_confirm_div');

// SETTING ALL EVENT LISTENERS
//username.addEventListener('input',validate,true);
//email.addEventListener('blur', validate, true);
//state.addEventListener('blur', validate, true);
//password.addEventListener('blur', validate, true);

document.getElementById("#enviar").addEventListener("click", function(event) {
         event.preventDefault();
}, false);


function comprobar() { 
  var x = 0; 
  console.log(x);
  if (username.value.length < 3) {
    username.style.border = "1px solid red";
    document.getElementById('username_div').style.color = "red";
    name_error.textContent = "El Nombre de usuario debe tener 3 letras mínimo";
    //username.focus();
    x ++;
    console.log(x);
  }
  if (email.value == "") {
    email.style.border = "1px solid red";
    document.getElementById('email_div').style.color = "red";
    email_error.textContent = "Email es requerido";
    //email.focus();
    x ++;
    console.log(x);
  }

  if (state.value == "Escoja Provincia") {
    state.style.border = "1px solid red";
    document.getElementById('state_div').style.color = "red";
    state_error.textContent = "Provincia es requerido";
    //state.focus();
    x ++;
    console.log(x);
  }
  if (password.value == "") {
    password.style.border = "1px solid red";
    document.getElementById('password_div').style.color = "red";
    password_error.textContent = "Password es requerido";
    //password.focus();
    x ++;
    console.log(x);
  }
  if (password.value != password_confirm.value) {
    password_confirm.style.border = "1px solid red";
    document.getElementById('pass_confirm_div').style.color = "red";
    password_confirm_error.innerHTML = "Las dos contraseñas no coinciden";
    x ++;
    console.log(x);
  }
  return x;
}
function validate() {
  limpiar();
  var x = comprobar();
  if (x == 0) {
    console.log(x);
    return true;
    } else {
    return false;
    }
  }
// validation function
/*function validate(e) {
  if (nameVerify() && emailVerify() && stateVerify() && passwordVerify() && passwordConfirm()) {
    return true;
    } else {
        e.preventDefault();
        return false;
    }
}*/
/*function validate() {
  if (nameVerify() || emailVerify() || stateVerify() || passwordVerify() || passwordConfirm()) {
    return false;
    } 
}*/
// Limpiar
function limpiar(){
  if (username.value != "") {
   username.style.border = "1px solid #5e6e66";
   document.getElementById('username_div').style.color = "#5e6e66";
   name_error.innerHTML = "";
  }
  if (email.value != "") {
    email.style.border = "1px solid #5e6e66";
    document.getElementById('email_div').style.color = "#5e6e66";
    email_error.innerHTML = "";
  }
  if (state.value != "") {
    state.style.border = "1px solid #5e6e66";
    document.getElementById('state_div').style.color = "#5e6e66";
    state_error.innerHTML = "";
}
  if (password.value != "") {
    password.style.border = "1px solid #5e6e66";
    //document.getElementById('pass_confirm_div').style.color = "#5e6e66";
    document.getElementById('password_div').style.color = "#5e6e66";
    password_error.innerHTML = "";
  }
  if (password.value === password_confirm.value) {
    password_confirm.style.border = "1px solid #5e6e66";
    document.getElementById('pass_confirm_div').style.color = "#5e6e66";
    password_confirm_error.innerHTML = "";
  }

}

