let arr = [1, 2, 3, 4];
// arr.reverse()

let j = 0;
let soma = arr.reduce(function (acumulador, atual, i, _arr) {
  console.log('i: ', i);
  console.log('j: ', j++);
  console.log('acumulador: ', acumulador, ' --- atual: ', atual);
  return acumulador + atual;
}, ' -- ');
console.log(soma);
console.log(arr);

const nomes = ['Daniel', 'Maria', 'Joana', 'João'];
let nomesPorOrdem = nomes.reduce(function (nomes, nomeAtual) {
  //Na primeira iteração nomes vai receber um objeto e nomeAtual vai receber 'Maria'. Caso não tivesse '{}' ao final da função, nomes receberia 'Daniel' e nomeAtual 'Maria'

  //     /*  1-
  //         nomes = {}
  //         nomeAtual = "Daniel" -> primeiraLetra = nomeAtual[0] = "D"
  //         return {D: 1}

  //         2-
  //         nomes = {D: 1}
  //         nomeAtual = "Maria" -> primeiraLetra = "M"
  //         return {D: 1, M: 1}

  //         2-
  //         nomes = {D: 1, M: 1}
  //         nomeAtual = "Joana" -> primeiraLetra = "J"
  //         return {D: 1, M: 1, J: 1}

  //         3-
  //         nomes = {D: 1, M: 1, J: 1}
  //         nomeAtual = "João" -> primeiraLetra = "J"
  //         return {D: 1, M: 1, J: 2}
  //     */

  let primeiraLetra = nomeAtual[0];
  if (nomes[primeiraLetra]) {
    //se existir uma propriedade nomes.D...
    nomes[primeiraLetra]++;
  } else {
    nomes[primeiraLetra] = 1;
  }
  return nomes;
}, {});

console.log(nomesPorOrdem);
