var textoCopiar = document.getElementById('p-respuesta');
function botonCopiar(){
  var btnCopy = document.createElement('input');
  btnCopy.setAttribute("type", "button");
  btnCopy.setAttribute("onclick", "accionCopiar();");
  btnCopy.value = 'Copiar';
  btnCopy.classList.add('boton-copiar');
  contenedorRespuesta.appendChild(btnCopy);
  // var btnCopiar = document.getElementsByClassName('boton-copiar');
  // btnCopiar.addEventListener('click',accionCopiar);
}

function accionCopiar(){
    //respuestaP.select();
    //
    navigator.clipboard.writeText(textoCopiar.textContent)
    .then(() => {
    console.log("Text copied to clipboard...");
    abrirVentanaAviso();
})
    .catch(err => {
    console.log('Something went wrong', err);
})
  }
  