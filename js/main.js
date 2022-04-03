var btn = document.getElementById('btn');
var cerrar = document.getElementById('btn-cerrar-pop-up');
var overlay = document.getElementById('overlay');
var popup = document.getElementById('popup');

btn.addEventListener('click',abrirVentana);
cerrar.addEventListener('click',cerrarVentana)

function abrirVentana() {
    overlay.classList.add('active');
    popup.classList.add('active');
}
function cerrarVentana() {
    overlay.classList.remove('active');
    popup.classList.remove('active');
}