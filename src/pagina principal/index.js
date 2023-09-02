const carrinhoCompras = document.getElementById('menu');
const btnAdd = document.getElementById('adicionar');
const btnRem = document.getElementById('remover');
const inputItem = document.getElementById('input');



// adicionar item a lista

btnAdd.addEventListener('click', () => {
   if(inputItem.value === ""){
    return alert("não tem nada para ser adicionado")
    } 

    var verificar = document.createElement('img');
    verificar.src = './assets/verificar.png'; // Defina o caminho correto da imagem
    var verificado = document.createElement('img');
    verificado.src = './assets/verificado.png'; // Defina o caminho correto da imagem

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
    } else if(inputItem.value === ""){
        alert("não tem nada para ser removido")
    }
});


// editar item da lista 









// editar cadastro