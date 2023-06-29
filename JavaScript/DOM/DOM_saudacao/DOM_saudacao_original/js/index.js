(function () {
  const nomeUser = prompt('Olá, qual seu nome? ');
  document.querySelector('.top-bar p').textContent += ` ${nomeUser}`;
})();
