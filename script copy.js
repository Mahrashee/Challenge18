const h2 = document.querySelector('.container h2');
const words = h2.textContent.split(' ');

h2.innerHTML = words
  .map((word) => `<span class="highlight">${word}</span>`)
  .join(' ');
