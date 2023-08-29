const inputUser = document.getElementById('usuario')
const inputPass = document.getElementById('senha')
const btnLogin = document.getElementById('btn-entrar')

const erroUser = document.getElementById('usuario-empty')
const erroPass = document.getElementById('senha-empty')

btnLogin.addEventListener('click', () => {
    if (inputUser.value === "" && inputPass.value !== "") {
        erroUser.removeChild(erroUser.lastChild);
        let userVazio = document.createElement('p');
        userVazio.innerHTML = `<span style="color: red;"> Digite um usuário </span>`;
        erroUser.appendChild(userVazio);
        erroPass.removeChild(erroPass.lastChild);
    } else if (inputPass.value === "" && inputUser.value !== "") {
    // mechemdo aqui erroPass.removeChild(erroPass.lastChild);
        let senhaVazio = document.createElement('p');
        senhaVazio.innerHTML = `<span style="color: red;"> Digite uma senha</span>`;
        erroPass.appendChild(senhaVazio);
        erroUser.removeChild(erroUser.lastChild);
    } else if (inputUser.value === "" && inputPass.value === "") {
        let senhaVazio = document.createElement('p');
        let userVazio = document.createElement('p');
        senhaVazio.innerHTML = `<span style="color: red;"> Digite uma senha</span>`;
        userVazio.innerHTML = `<span style="color: red;"> Digite um usuário </span>`;
        erroPass.appendChild(senhaVazio);
        erroUser.appendChild(userVazio);
    } else {
        validarDados()
    }
})

const validarDados = () => {
    //parei aqui
    location.href = "http://127.0.0.1:5500/src/pagina%20principal/index.html"
}