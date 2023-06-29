function sum() {
  let soma = 0;
  for (let num of arguments) {
    soma += num;
  }
  return soma;
}

function average(...arguments) {
  return sum(...arguments) / arguments.length;
}

const soma = sum(10, 5, 10, 8);
const media = average(10, 5, 10, 8);
console.log(soma);
console.log(media);
