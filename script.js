const formulario = document.getElementById("form-login");
const usuario = document.getElementById("usuario");
const clave = document.getElementById("clave");
const mensaje = document.getElementById("mensaje");

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  usuario.classList.remove("error");
  clave.classList.remove("error");
  mensaje.classList.remove("ok");

  if (usuario.value.trim() === "" || clave.value.trim() === "") {
    if (usuario.value.trim() === "") usuario.classList.add("error");
    if (clave.value.trim() === "") clave.classList.add("error");
    mensaje.textContent = "Por favor completa el usuario y la contraseña.";
    return;
  }

  mensaje.classList.add("ok");
  mensaje.textContent = "Datos completos. Ingreso enviado.";
});