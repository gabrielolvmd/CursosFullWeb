(function () {
  const nomeUsuario = 'Daniel';

  if (nomeUsuario) {
    const topBarElemento = document.createElement('div');
    topBarElemento.className = 'top-bar';
    topBarElemento.innerHTML = `<p> Olá, <b> ${nomeUsuario} </b></p>`;

    // elementoPai.insertBefore(novoElemento, elementoReferencia)
    const elementoPai = document.querySelector('.hero');
    elementoPai.insertBefore(topBarElemento, elementoPai.firstElementChild);
    //A partir do elementoPai eu vou inserir um elemento (topBarElemento) antes do elementoPai.firstElementChild
  }
})();
