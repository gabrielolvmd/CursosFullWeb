function quantoFaltaPara(m, d) {
  const currentDate = new Date();
  let anoAtual = currentDate.getFullYear();

  const birthDate = new Date(anoAtual, m - 1, d);
  const umDiaEmMilissegundos = 24 * 60 * 60 * 1000;

  const currentMili = currentDate.getTime();
  let birthMili = birthDate.getTime();

  if (birthMili < currentMili) {
    birthDate.setFullYear(++anoAtual);
    birthMili = birthDate.getTime();
  }

  const diffMili = birthMili - currentMili;
  const diffDias = Math.ceil(diffMili / umDiaEmMilissegundos);

  return diffDias;
}
