// JavaScript Document
(function($){
  $.fn.scrollvertical=function(){
    var video=$(this);
    var alto=video.height();
    var ancho=$(this).width();
   $(window).scroll(function(){
     var posicion=$(window).scrollTop();
    var ventanaAncho=$(window).width();
    var ventanaAlto=$(window).height();
      var  mitadVetnanaAchano = ventanaAncho / 2;
      var  mitadVetnanaAlto = ventanaAlto / 2;
     //console.log(posicion);
     console.log(ventanaAncho);
     if(posicion>=500){
        tamaño = video.innerWidth()/2;
        tamañoH = video.innerHeight()/2;
         mitadHorizontal = mitadVetnanaAchano - tamaño;
         mitadVertical = mitadVetnanaAlto - tamañoH;
       video.css({position:"fixed",width:"500px", height:"300px",bottom:mitadVertical,left:mitadHorizontal})
       
     }else{
       video.css({position:"relative",width:ancho,height:alto,bottom:0,left:0})
     }
   }); 
    
  };  
}(jQuery))



