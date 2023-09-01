
const userEmail = document.getElementById('email');
const emailErro = document.getElementById('erroEmail')
const nomeUsuario = document.getElementById('nome');
const nomeErro = document.getElementById('erroNome')
const aniversario = document.getElementById('data');
const codigoVerificacao = document.getElementById('codigo');

function generateCode() {
  const characters = "0123456789";
  let length = 6;
  let code = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    code += characters.charAt(randomIndex);
  }

  return code;
}


// botao para enviar o codigo 
const btn = document.getElementById('btn-enviar');
btn.addEventListener('click', () => {
  if (validarEmail()) {
    const code = generateCode();
    emailErro.remove(validarEmail);
    document.getElementById('codigo').style.display = "inline";
    showNotification("Clique na mensagem para preencher", `Seu código:  ${code}`, () => {
    codigoVerificacao.value = code;
    });
  }
});

// deixar o nome do usuario corrigido
function correcaoNome(nome) {
  nome = nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase();
  return nome;
}


// gerar o codigo de verificação

function showNotification(titulo, mensagem, callback) {
  if (Notification.permission !== 'granted') {
    Notification.requestPermission();
  } else {
    const options = {
      body: mensagem,
      dir: 'ltr',
    };
    const notification = new Notification(titulo, options);

    notification.onclick = callback;
  }
}


// validações 
function validarEmail() {
  if (userEmail.value === "") {
    let validarEmail = document.createElement('p');
    emailErro.innerHTML = `<span style="color: red;"> Digite seu email </span>`;
    emailErro.appendChild(validarEmail);
    return false
  }
  return true
}

function validarNome() {
  if (nomeUsuario.value === "") {
    let validarNome = document.createElement('p');
    nomeErro.innerHTML = `<span style="color: red;"> Digite um nome</span>`;
    nomeErro.appendChild(validarNome);
    return false
  }
  return true
}









