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

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("SlidesNintendo");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}