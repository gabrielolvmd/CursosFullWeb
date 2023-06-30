let nome = 'Gabriel';

let blank = nome.indexOf(' ');

if (blank < 0) {
  return console.log(nome);
} else {
  let primeiroNome = nome.slice(0, blank);
  let ultimoNome = nome.slice(blank);

  console.log(`${ultimoNome.trim()}, ${primeiroNome}`);
}
