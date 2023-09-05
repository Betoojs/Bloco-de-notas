const nomeUsuario = document.getElementById('nome');
const nomeErro = document.getElementById('erroNome');
const usuario = document.getElementById('usuario');
const userEmail = document.getElementById('email');
const emailErro = document.getElementById('erroEmail')
const codigoVerificacao = document.getElementById('codigo');
const aniversario = document.getElementById('data');
const pass = document.getElementById('senha');
const confirmepass = document.getElementById('confirmeSenha');


function voltar() {
  location.href = "http://127.0.0.1:5500/src/login/login.html"

}



// gerar codigo aleatorio 
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
const btn = document.getElementById('btn-codigo');
btn.addEventListener('click', () => {
  if (validarEmail()) {
    botaoCadastro.style.display = "inline"
    const code = generateCode();
    emailErro.remove(validarEmail);
    document.getElementById('span-olho').style.top = "73.3%"
    document.getElementById('email').style.border = "none"
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


const botaoCadastro = document.getElementById("btn-cadastrar");
botaoCadastro.addEventListener('click', () => {
  const nomeUsuario = document.getElementById("usuario").value;
  if (nomeUsuario.value == "" || usuario.value == "" || userEmail.value == "" || aniversario.value == "") {
    alert("você precisa preencher todos os dados")
  } else {
    if (pass.value !== confirmepass.value) {
      alert('As senhas não coincidem');
      pass.style.border = "2px solid red"
      confirmepass.style.border = "2px solid red"
      pass.value = ""
      confirmepass.value = ""
    } else if (usuarioJaExiste(nomeUsuario)) {
      alert("Já existe uma conta com esse nome de usuário");
      usuario.style.border = "2px solid red"
      usuario.value = "";
    } else {
      logar()
      nome.value = ""
      usuario.value = ""
      userEmail.value = ""
      pass.value = ""
      confirmepass.value = ""
      aniversario.value = ""
      codigoVerificacao.value = ""
      document.getElementById('cadastrando').style.display = "block"
      document.getElementById('carregarFormulario').style.display = "none"
      setTimeout(() => {
        location.href = "http://127.0.0.1:5500/src/login/login.html";
      }, 1000);
    }
  }
});


usuario.addEventListener('keyup', () => { usuario.style.border = "none" })
pass.addEventListener('keyup', () => { pass.style.border = "none"; confirmepass.style.border = "none" })



const logar = () => {
  const nomeUsuario = document.getElementById("nome").value;
  const usuario = document.getElementById("usuario").value;
  const userEmail = document.getElementById("email").value;
  const aniversario = document.getElementById('data').value;
  const pass = document.getElementById('senha').value;
  const confirmepass = document.getElementById('confirmeSenha').value;

  const client = {
    nome: nomeUsuario,
    usuario: usuario,
    senha: pass,
    confirmarPass: confirmepass,
    email: userEmail,
    data: aniversario,
  };

  createClient(client);
};


// LOCALSTORAGE 

const getLocalStorage = () => JSON.parse(localStorage.getItem('db_client')) || [];

const setLocalStorage = (dbClient) => localStorage.setItem("db_client", JSON.stringify(dbClient));

const deleteClient = (index) => {
  const dbClient = readClient();
  dbClient.splice(index, 1);
  setLocalStorage(dbClient);
};

const updateClient = (index, client) => {
  const dbClient = readClient();
  dbClient[index] = client;
  setLocalStorage(dbClient);
};

const readClient = () => getLocalStorage();

const createClient = (client) => {
  const dbClient = getLocalStorage();
  dbClient.push(client);
  setLocalStorage(dbClient);
};

function usuarioJaExiste(nomeUsuario) {
  const dbClient = readClient();
  return dbClient.some(client => client.usuario === nomeUsuario);
}

// LOCALSTORAGE 



//validações



function validarEmail() {
  if (userEmail.value === "") {
    document.getElementById('email').style.border = "2px solid red"
    let validarEmail = document.createElement('p');
    emailErro.innerHTML = `<span style="color: red;"> Digite seu Email </span>`;
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


// auto correção para so a primeira letra maiuscula
nomeUsuario.addEventListener('blur', function () {
  nomeUsuario.value = correcaoNome(nomeUsuario.value)
})





// Função para alternar a exibição da senha

const olhoMostrar = document.getElementById('olhoSenha');
const senha = document.getElementById('senha');
const confirmeSenha = document.getElementById('confirmeSenha');

olhoSenha.addEventListener('click', () => {
  toggleSenha(senha, confirmeSenha);
})

function toggleSenha(senha, confirm) {
  if (senha.type === 'password') {
    senha.type = 'text';
    confirm.type = 'text';
    olhoMostrar.src = '../login/assets/esconder-senha.png';
  } else {
    senha.type = 'password';
    confirm.type = 'password';
    olhoMostrar.src = '../login/assets/mostrar-senha.png';
  }
}


