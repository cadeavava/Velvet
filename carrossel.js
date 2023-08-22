let count = 1;
document.getElementById("radio1").checked = true;

setInterval( function(){
nextImage();
}, 5000)

function nextImage(){
  count++;
  if(count>4){
    count = 1;
  }

 // Remove a classe 'active' de todas as imagens
  document.querySelectorAll('.slide').forEach(slide => {
    slide.classList.remove('active');
  });

  // Adiciona a classe 'active' à imagem atual
  document.querySelector(".slide:nth-child(" + count + ")").classList.add("active");

  // Atualiza o botão de navegação (se necessário)
  document.getElementById("radio" + count).checked = true;
}
