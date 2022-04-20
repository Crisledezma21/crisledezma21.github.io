var input = document.getElementById('ingrese-texto');
var btnDecode = document.getElementById('desencriptar');
var contenedorRespuesta = document.getElementById('contenedor-respuesta');
var respuestaH2 = document.getElementById('h2-respuesta');
var respuestaP = document.getElementById('p-respuesta');
var muneco = document.getElementById('muneco');
var desencriptar = true;

btnDecode.addEventListener('click',ifDecode);

function ifDecode(){
  if(desencriptar){
    decode();
  }else{reset();}
}

function decode(){
  var texto = input.value;
  
  var textoA = texto.replaceAll('ai','a');
  var textoE = textoA.replaceAll('enter','e');
  var textoI = textoE.replaceAll('imes','i');
  var textoO = textoI.replaceAll('ober','o');
  var textoU = textoO.replaceAll('ufat','u');
  var salida = textoU;

  if (validarInput(texto) && encriptar){
  respuestaH2.textContent = 'Mensaje decodificado';
  respuestaH2.classList.add('correcto');
  muneco.style.backgroundImage = 'none';
  respuestaP.textContent = salida;
  contenedorRespuesta.classList.add('posicion-relativa');
  btnDecode.value = 'Reset';
  botonCopiar();
  desencriptar = false;
}else{
  rechazarEntrada();
  desencriptar = false; 
  btnDecode.value = 'Reset';
}
}