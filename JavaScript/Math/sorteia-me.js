function getRandomNumber(inicio = 0, fim = 1, integer = true) {
  let resultado = integer
    ? Math.floor(Math.random() * (fim - inicio + 1) + inicio)
    : Math.random() * (fim - inicio + 1) + inicio;
  console.log(resultado);
}

getRandomNumber(20, 40);

/* Explicação
  - Nesse exemplo ele irá calcular um número entre 0 e quase 1.
  - Multiplicará por 21. Isso faz com que o número aleatório esteja entre 0 e 20.
  - Soma mais 20 (inicio). Fazendo com que o valor fique entre 20 e 40 (inclusos), pois, se der 0 o resultado + inicio será 20. Se der 20 o resultado + inicio será 40.
*/
