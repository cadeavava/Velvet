const showButton = document.getElementById('showCatalogText');
const catalogTexts = document.querySelectorAll('.catalogText');

showButton.addEventListener('click', () => {
  catalogTexts.forEach(text => {
    if (text.style.display === 'none') {
      text.style.display = 'block';
    } else {
      text.style.display = 'none';
    }
  });
});