function calcularMedia() {
  let soma = 0;
  if (arguments.length === 0) {
    return console.log(0);
  } else {
    for (let i = 0; i < arguments.length; i++) {
      if (typeof arguments[i] != 'number') {
        throw new Error('Digite um valor válido');
      }
      soma += arguments[i];
    }
  }
  let media = soma / arguments.length;
  console.log(media.toFixed(2));
}

try {
  calcularMedia(1, 2, 9, '');
} catch (error) {
  console.log(error.message);
}
