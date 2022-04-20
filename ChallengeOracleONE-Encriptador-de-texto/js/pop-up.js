function abrirVentanaAviso(){
  var popUp = window.open('./pop-up.html','Aviso','toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=0,width=500,height=100,top=center,left=center');
  setTimeout(popUp.close(),1000);
}