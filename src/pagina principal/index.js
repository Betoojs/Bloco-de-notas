const carrinhoCompras = document.getElementById('menu');
const btnAdd = document.getElementById('adicionar');
const btnRem = document.getElementById('remover');
const inputItem = document.getElementById('inputLista');


// adicionar item a lista

btnAdd.addEventListener('click', () => {
    if (inputItem.value === "") {
        return alert("não tem nada para ser adicionado")
    }

    var verificar = document.createElement('img');
    verificar.src = './assets/verificar.png';
    var verificado = document.createElement('img');
    verificado.src = './assets/verificado.png';

    var item = document.createElement('li');
    item.innerHTML = `
        <img id="img-verificar" src="${verificar.src}"/>
        <img id="img-verificado" style="display: none;" src="${verificado.src}" />
        ${inputItem.value}`;
    carrinhoCompras.appendChild(item);
    inputItem.value = '';

    const imgVerificar = item.querySelector('#img-verificar');
    const imgVerificado = item.querySelector('#img-verificado');

    imgVerificar.addEventListener('click', () => {
        imgVerificar.style.display = 'none';
        imgVerificado.style.display = 'inline';
    });

    imgVerificado.addEventListener('click', () => {
        imgVerificado.style.display = 'none';
        imgVerificar.style.display = 'inline';
    });
});


// remover item da lista

btnRem.addEventListener('click', () => {
    if (carrinhoCompras.lastChild) {
        carrinhoCompras.removeChild(carrinhoCompras.lastChild);
    } else if (inputItem.value === "") {
        alert("não tem nada para ser removido")
    }
});


// limpar tudo da lista

const btnLimpar = document.getElementById('btn-limpar');
btnLimpar.addEventListener('click', () => {
    if (carrinhoCompras.lastElementChild) {
        const respostaConfirm = confirm("Tem certeza que deseja limpar sua lista?");
        if (respostaConfirm) {
            while (carrinhoCompras.firstChild) {
                carrinhoCompras.removeChild(carrinhoCompras.firstChild);
            }
        }
    } else if (carrinhoCompras.childElementCount === 0) {
        alert("Não tem nada na lista.");
    }
});


//voltar para pagina de login

const botaoSair = document.getElementById('btn-sair')
botaoSair.addEventListener("click", () => {
    location.href = "http://127.0.0.1:5500/src/login/login.html"
})





//abrir / edit cadastro
const botaoEditar = document.getElementById('btn-editar')
botaoEditar.addEventListener('click', () => {
    document.getElementById('edit').style.display = "inline"
    location.href = "#edit"
    editarDados()
})

const editarDados = () => {
    const itemLocal = JSON.parse(localStorage.getItem('db_client'));
    itemLocal.forEach(item => {
        if (item.validar === true) {
            document.getElementById('nome').value = item.nome;
            document.getElementById('usuario').value = item.usuario;
            document.getElementById('email').value = item.email;
            document.getElementById('data').value = item.data;
            document.getElementById('senha').value = item.senha;
        }
    });
}


//fechar  edit cadastro
const fecharCadastro = document.getElementById("btn-fechar")
fecharCadastro.addEventListener('click', () => {
    location.href = "#dados"
    document.getElementById('edit').style.display = "none"
})



// salvar oque editou

const salvarCadastro = document.getElementById('btn-salvar')
salvarCadastro.addEventListener('click', () => {
    const itemLocal = JSON.parse(localStorage.getItem('db_client'));
    itemLocal.forEach(item => {
        if (item.validar === true) {
            item.nome = document.getElementById('nome').value
            item.usuario = document.getElementById('usuario').value;
            item.email = document.getElementById('email').value;
            item.data = document.getElementById('data').value;
            item.senha = document.getElementById('senha').value;
            localStorage.setItem('db_client', JSON.stringify(itemLocal));
        }
    });
})



// fechar pagina de usuario 

const fecharLogin = document.getElementById('btn-sair')
fecharLogin.addEventListener('click', () => {
    const itemLocal = JSON.parse(localStorage.getItem('db_client'));
    itemLocal.forEach(item => {
        if (item.validar === true) {
            item.validar = false
            localStorage.setItem('db_client', JSON.stringify(itemLocal));
        }

    });
})



// mostrar senha
const olhoMostrar = document.getElementById('olhoSenha');
const btnSenha = document.getElementById('senha')


olhoSenha.addEventListener('click', () => {
    toggleSenha(btnSenha);
})


function toggleSenha(senha) {
    if (senha.type === 'password') {
        senha.type = 'text';
        olhoMostrar.src = './assets/esconder-senha.png';
    } else {
        senha.type = 'password';
        olhoMostrar.src = './assets/mostrar-senha.png';
    }
}



