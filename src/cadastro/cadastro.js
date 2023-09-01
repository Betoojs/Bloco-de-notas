
const userEmail = document.getElementById('email');
const emailErro = document.getElementById('erroEmail')
const nomeUsuario = document.getElementById('nome');
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



function correcaoNome(nome) {
  nome = nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase();
  return nome;
}



const btn = document.getElementById('btn-enviar');
btn.addEventListener('click', () => {
  if (validarEmail()) {
    const code = generateCode();
    const nomeCorrigido = correcaoNome(nomeUsuario.value);
    showNotification("Clique na mensagem para preencher", `${nomeCorrigido} Seu código:  ${code}`, () => {
      codigoVerificacao.value = code;
    });
  }
});



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



function validarEmail() {
  if (userEmail.value === "") {
    let validarEmail = document.createElement('p');
    emailErro.innerHTML = `<span style="color: red;"> Digite seu email </span>`;
    emailErro.appendChild(validarEmail);
    return false
  }
  return true
}










