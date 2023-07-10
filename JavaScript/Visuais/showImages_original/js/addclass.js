(function () {
  const images = document.querySelectorAll('[data-addclass-on-scroll="show"]');
  let allElementsShown = false; // Variável para controlar se todos os elementos já têm a classe "show"

  function addClass() {
    images.forEach((e) => {
      let distancia = e.getBoundingClientRect().top;
      let alturaViewPort = innerHeight;

      if (distancia <= alturaViewPort) {
        e.classList.add('show');
      }
    });

    // Verifica se todos os elementos têm a classe "show"
    allElementsShown = Array.from(images).every((e) =>
      e.classList.contains('show'),
    );

    // Se todos os elementos têm a classe "show", remove o listener de scroll
    if (allElementsShown) {
      document.removeEventListener('scroll', addClass);
      console.log('evento removido');
    }
  }

  function addAttribute() {
    images.forEach((e) => {
      let hasAttribute = e.getAttribute('data-addclass-on-scroll-delay');

      if (hasAttribute) {
        console.log(hasAttribute);
        e.style.setProperty('transition-delay', `${hasAttribute}ms`);
      }
    });
  }

  addAttribute();
  addClass();

  document.addEventListener('scroll', addClass);
})();
