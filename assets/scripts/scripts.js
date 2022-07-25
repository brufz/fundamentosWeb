let nome = document.querySelector('#nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector('#mapa')

nome.style.width = '100%'
email.style.width = '100%'

function validaNome() {
  let txtNome = document.querySelector('#txtNome')
  if (nome.value.length < 3) {
    txtNome.innerHTML = 'Nome inválido'
    txtNome.style.color = 'red'
  } else {
    txtNome.innerHTML = 'Nome válido'
    txtNome.style.color = 'green'
    nomeOk = true
  }
}

function validaEmail() {
  let txtEmail = document.querySelector('#txtEmail')
  if (
    email.value.indexOf('@') == -1 ||
    email.value.indexOf('.') == -1 ||
    email.value.length < 2
  ) {
    txtEmail.innerHTML = 'E-mail invalido'
    txtEmail.style.color = 'red'
  } else {
    txtEmail.innerHTML = 'E-mail válido'
    txtEmail.style.color = 'green'
    emailOk = true
  }
}

function validaAssunto() {
  let txtAssunto = document.querySelector('#txtAssunto')
  if (assunto.value.length > 100 || assunto.value.length < 5) {
    txtAssunto.innerHTML =
      'O texto deve conter no mínimo 5 e no máximo 100 caracteres'
    txtAssunto.style.color = 'red'
    txtAssunto.style.display = 'block'
  } else {
    txtAssunto.style.display = 'none'
    assuntoOk = true
  }
}

function enviar() {
  if (nomeOk == false || emailOk == false || assuntoOk == false) {
    alert('Confira os campos e tente novamente')
  } else {
    alert('Seu feedback foi enviado')
  }
}

function mapaZoom() {
  mapa.style.width = '800px'
  mapa.style.height = '600px'
}

function mapaNormal() {
  mapa.style.width = '400px'
  mapa.style.height = '250px'
}
