var CriadorDeBanner = (function(){

    var $ = (seletor) => document.querySelector(seletor)

    var limparEstilos = function(objEstilos) {
        for(var seletor in objEstilos){
            if(objEstilos.hasOwnProperty(seletor)) {
                $(seletor).style = objEstilos[seletor]
            }
        }
    }

  return function(params) {

        var template = `
            <div class="banner-hover-area">
              <div class="banner-hover-content">
                <div class="banner-hover-img">
                  <img id="img-banner" src="${params.imgMenor}" alt="" />
                   <img id="close-banner" src="image/close.png" alt=""/>
                </div>
              </div>
            </div>
        `

        var elementoRaiz = document.createElement('div')
        elementoRaiz.innerHTML = template

        document.body.appendChild(elementoRaiz)

        const estilosAntigos = {
            '.banner-hover-area': $('.banner-hover-area').style,
            '#img-banner': $('#img-banner').style,
            '#close-banner': $('#close-banner').style,
        }

        var srcAntigo = $('#img-banner').src

        var onHover = function(){
            $('.banner-hover-area').style = 'width:100%'
            $('#img-banner').src  = params.imgMaior
            $('#img-banner').style = 'margin-right: 0;'
            $('#close-banner').style = "display:flex;"
        }

        $('#close-banner').onclick = function() {
            $('.banner-hover-area').onmouseover = null;
            limparEstilos(estilosAntigos)
            $('#img-banner').src = srcAntigo;

             setTimeout(() => $('.banner-hover-area').onmouseover = onHover, 1000)
        }

        $('.banner-hover-area').onmouseover = onHover
  }

})();
