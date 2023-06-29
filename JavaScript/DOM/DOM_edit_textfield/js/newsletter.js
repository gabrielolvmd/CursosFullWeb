const txtEmail = document.getElementById('txtEmail');

function editarEmail() {
  txtEmail.disabled = false;
  txtEmail.focus(); //dá o foco no campo
}

function disableEmail() {
  txtEmail.disabled = true;
}
