function validarInput(texto) {
  if (texto.length > 0 && isNaN(texto)) { return true; }
  else { return false; }
}
function rechazarEntrada() {
  respuestaH2.textContent = 'El texto ingresado es incorrecto';
  respuestaH2.classList.add('incorrecto');
}