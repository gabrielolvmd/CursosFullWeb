const calculaIMC = (peso, altura) => {
  if (peso === undefined || altura === undefined) {
    throw new Error('Digite um valor válido');
  }
  return console.log((peso / altura ** 2).toFixed(2));
};

try {
  calculaIMC(60, 1.65);
} catch (e) {
  console.log(e.message);
}
