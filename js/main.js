var h2 = document.getElementById("form-signin-heading");
h2.innerHTML="Por favor inicia sesión";

var email = document.getElementById("inputEmail");
email.placeholder="Correo Electrónico";

var password = document.getElementById("inputPassword");
password.placeholder="Contraseña";

var recordar = document.getElementsByTagName("span")[0];
recordar.innerHTML="Recordar Datos";

var boton = document.getElementsByTagName("button")[0];
boton.innerHTML="Iniciar Sesión";