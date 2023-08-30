const inputUser = document.getElementById('usuario')
const inputPass = document.getElementById('senha')
const btnLogin = document.getElementById('btn-entrar')

const erroUser = document.getElementById('usuario-empty')
const erroPass = document.getElementById('senha-empty')
var usuario = false
var senha = false

btnLogin.addEventListener('click', () => {
    // var verificarUsuario = document.getElementById('mensagemErro');
    // console.log(verificarUsuario)
   
    // const erroUsuarioExistente = verificar(verificarUsuario)
    // erroUsuarioExistente;
    verificar()
    if (inputUser.value === "" && inputPass.value !== "" && usuario === false) {
        let userVazio = document.createElement('p');
        usuario = true
        userVazio.innerHTML = `<span style="color: red;"> Digite um usuário </span>`;
        userVazio.id = "userID"
        erroUser.appendChild(userVazio);
    } else if (inputPass.value === "" && inputUser.value !== "" && senha === false) {
        let senhaVazio = document.createElement('p');
        senha = true
        senhaVazio.id = "senhaID"
        erroPass.innerHTML = `<span style="color: red;"> Digite uma senha </span>`;
        erroPass.appendChild(senhaVazio);
    } else if (inputUser.value === "" && inputPass.value === "") {

        // estou mexendo aqui
        let senhaVazio = document.createElement('p');
        let userVazio = document.createElement('p');
        senhaVazio.innerHTML = `<span style="color: red;"> Digite uma senha</span>`;
        userVazio.innerHTML = `<span style="color: red;"> Digite um usuário </span>`;
        erroPass.appendChild(senhaVazio);
        erroUser.appendChild(userVazio);
    } else {
        console.log('sucesso ao logar')
    }
})

const verificar = () =>{
    if(usuario === true){
        erroUser.removeChild(erroUser.firstChild);
        usuario = false
    }
    if(senha === true){
        erroPass.removeChild(erroPass.firstChild);
        senha = false
    }
}


const validarDados = () => {
    //parei aqui
    location.href = "http://127.0.0.1:5500/src/pagina%20principal/index.html"
}