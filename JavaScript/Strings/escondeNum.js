(function () {
  let telefone = '91234-2345';
  function mascararTelefone(telefone) {
    let indexBarra = telefone.indexOf('-'); //5
    let inicioNum = telefone.slice(0, indexBarra); //91234
    let finalNum = telefone.slice(indexBarra + 1); //2345
    let doisUltimosNumeros = finalNum.slice(-2); //45

    return `
    ${inicioNum[0].padEnd(5, '*')} - ${doisUltimosNumeros.padStart(4, '*')}
    `;
  }
  console.log(mascararTelefone(telefone).trim());
})();

//retornar "9****-**45"
