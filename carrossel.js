let count = 1;
document.getElementById("radio1").checked = true;

// Adicione a classe 'active' à primeira imagem
document.querySelector(".slide:nth-child(1)").classList.add("active");

setInterval(function () {
  nextImage();
}, 5000);

function nextImage() {
  count++;
  if (count > 4) {
    count = 1;
  }

  // Remova a classe 'active' de todas as imagens
  document.querySelectorAll('.slide').forEach(slide => {
    slide.classList.remove('active');
  });

  // Adicione a classe 'active' à imagem atual
  document.querySelector(".slide:nth-child(" + count + ")").classList.add("active");

  // Atualize o botão de navegação (se necessário)
  document.getElementById("radio" + count).checked = true;
}
