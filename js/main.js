//import Banner from './banner';

//var styleAntigoareaHover  = null; 

var areaHover = document.querySelector('.banner-hover-area');
var image = document.querySelector('#img-banner');    
var close = document.querySelector('#close-banner');

var srcAntigo = image.src;
var styleImageAntigo  = image.style;
var closeImageAntigo  = close.style;
var areaHoverStyleAntigo = areaHover.style;

console.log(areaHover)

atribuirNovoHover();

close.onclick = function(){

   areaHover.onmouseover = null;
   areaHover.style = areaHoverStyleAntigo;
   image.src = srcAntigo;
   image.style = styleImageAntigo;
   close.style = closeImageAntigo;
    
    setTimeout(atribuirNovoHover, 1000);
}

function atribuirNovoHover(){
    
       areaHover.onmouseover = function(){

       areaHover.style = 'width:100%';
       image.src  = "./image/billboard_pucrs.gif";
       image.style = 'margin-right: 0;'
       close.style = "display:flex;"
    };
}