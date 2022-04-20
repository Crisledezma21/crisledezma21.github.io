var input = document.getElementById('ingrese-texto');
var btnCode = document.getElementById('encriptar');
var contenedorRespuesta = document.getElementById('contenedor-respuesta');
var respuestaH2 = document.getElementById('h2-respuesta');
var respuestaP = document.getElementById('p-respuesta');
var muneco = document.getElementById('muneco');
var encriptar = true;

btnCode.addEventListener('click', ifEncriptar);

function ifEncriptar(){
  if(encriptar){
    code();
  }else{reset();}
}

function code() {
  var texto = input.value;
  var textoArr = texto.split('');
  var textoCodificado = [];
  var salida = '';
  
  if (validarInput(texto) && encriptar) {
    for (i = 0; i < textoArr.length; i++) {
      if (textoArr[i] === 'a') { textoCodificado[i] = textoArr[i].replace('a', 'ai'); }
      else if (textoArr[i] === 'e') { textoCodificado[i] = textoArr[i].replace('e', 'enter'); }
      else if (textoArr[i] === 'i') { textoCodificado[i] = textoArr[i].replace('i', 'imes'); }
      else if (textoArr[i] === 'o') { textoCodificado[i] = textoArr[i].replace('o', 'ober'); }
      else if (textoArr[i] === 'u') {
        textoCodificado[i] = textoArr[i].replace('u', 'ufat');
      } else { textoCodificado[i] = textoArr[i]; }
    }
    salida = textoCodificado.join('');
    respuestaH2.textContent = 'Mensaje codificado';
    respuestaH2.classList.add('correcto');
    muneco.style.backgroundImage = 'none';
    respuestaP.textContent = salida;
    contenedorRespuesta.classList.add('posicion-relativa');
    btnCode.value = 'Reset';
    encriptar = false;
    botonCopiar();
  } else { 
    rechazarEntrada();
    encriptar = false; 
    btnCode.value = 'Reset';
  }
}
