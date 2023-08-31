const inputUser = document.getElementById('usuario')
const inputPass = document.getElementById('senha')
const btnLogin = document.getElementById('btn-entrar')

const erroUser = document.getElementById('usuario-empty')
const erroPass = document.getElementById('senha-empty')
var usuario = false
var senha = false



btnLogin.addEventListener('click', () => {
    verificarSenhaUsuario()
    if (inputUser.value === "" && inputPass.value !== "" && usuario === false) {
        execultarUsuario()
    }
    else if (inputPass.value === "" && inputUser.value !== "" && senha === false) {
        execultarSenha()
    }
    else if (inputUser.value === "" && inputPass.value === "") {
        execultarSenhaUsuario()
    }
    else {
        console.log('sucesso ao logar')
    }
})


const validarDados = () => {
    // fazer validação dos dados
    location.href = "http://127.0.0.1:5500/src/pagina%20principal/index.html"
}




const verificarSenhaUsuario = () => {
    if (usuario === true) {
        erroUser.removeChild(erroUser.firstChild);
        usuario = false
    }
    if (senha === true) {
        erroPass.removeChild(erroPass.firstChild);
        senha = false
    }
}
const execultarSenhaUsuario = () => {
    if (senha === true && usuario === false) {
        execultarUsuario()
        usuario === true
    }

    if (senha === false && usuario === true) {
        execultarSenha()
        senha = true
    }
    else {
        execultarSenha()
        execultarUsuario()
    }
}
const execultarSenha = () => {
    let senhaVazio = document.createElement('p');
    senha = true
    senhaVazio.id = "senhaID"
    erroPass.innerHTML = `<span style="color: red;"> Digite uma senha </span>`;
    erroPass.appendChild(senhaVazio);
}
const execultarUsuario = () => {
    let userVazio = document.createElement('p');
    usuario = true
    userVazio.innerHTML = `<span style="color: red;"> Digite um usuário </span>`;
    userVazio.id = "userID"
    erroUser.appendChild(userVazio);
}