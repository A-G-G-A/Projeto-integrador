function existeRolagem() {
  var scrollPosOnePagFam;
  var headerText = document.querySelector('.header');
  scrollPosOnePagFam = window.scrollY;//captura o valor da posição da rolagem, caso ocorra, scrollPosOnePagFam recebe valor para verificação do if

  if (scrollPosOnePagFam <= 600) {// SE o valor de scrollsPos for menor que a altura do header executa o códg. abaixo
      headerText.style.transform =  "translateY(" + (-scrollPosOnePagFam/3) +"px" + ")";//sobe um pouco o titulo
      headerText.style.opacity = 1 - (scrollPosOnePagFam/600);// diminui a transparencia
  }
}
window.addEventListener('scroll', existeRolagem);// verifica se tem o evento de scroll na página
//======================= slides
function setaImagem(){
    var settings = {
        primeiraImg: function(){
            elemento = document.querySelector("#slider a:first-child");
            elemento.classList.add("ativo");
            this.legenda(elemento);
        },

        slide: function(){
            elemento = document.querySelector(".ativo");

            if(elemento.nextElementSibling){
                elemento.nextElementSibling.classList.add("ativo");
                settings.legenda(elemento.nextElementSibling);
                elemento.classList.remove("ativo");
            }else{
                elemento.classList.remove("ativo");
                settings.primeiraImg();
            }

        },

        proximo: function(){
            clearInterval(intervalo);
            elemento = document.querySelector(".ativo");

            if(elemento.nextElementSibling){
                elemento.nextElementSibling.classList.add("ativo");
                settings.legenda(elemento.nextElementSibling);
                elemento.classList.remove("ativo");
            }else{
                elemento.classList.remove("ativo");
                settings.primeiraImg();
            }
            intervalo = setInterval(settings.slide,4000);
        },

        anterior: function(){
            clearInterval(intervalo);
            elemento = document.querySelector(".ativo");

            if(elemento.previousElementSibling){
                elemento.previousElementSibling.classList.add("ativo");
                settings.legenda(elemento.previousElementSibling);
                elemento.classList.remove("ativo");
            }else{
                elemento.classList.remove("ativo");                     
                elemento = document.querySelector("a:last-child");
                elemento.classList.add("ativo");
                this.legenda(elemento);
            }
            intervalo = setInterval(settings.slide,4000);
        },

        legenda: function(obj){
            var legenda = obj.querySelector("img").getAttribute("alt");
            document.querySelector("figcaption").innerHTML = legenda;
        }

    }

    //chama o slide
    settings.primeiraImg();

    //chama a legenda
    settings.legenda(elemento);

    //chama o slide à um determinado tempo
    var intervalo = setInterval(settings.slide,4000);
    document.querySelector(".next").addEventListener("click",settings.proximo,false);
    document.querySelector(".prev").addEventListener("click",settings.anterior,false);
}

window.addEventListener("load",setaImagem,false);