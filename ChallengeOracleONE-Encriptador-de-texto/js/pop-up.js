function abrirVentanaAviso(){
  var popUp = window.open('./pop-up.html','Aviso','toolbar=0,scrollbars=0,location=1,statusbar=0,menubar=0,resizable=0,width=600,height=100,top=center,left=center');
  setTimeout(function(){popUp.close()},2000);
}