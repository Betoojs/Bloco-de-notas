
const emailSender = "kong121205@gmail.com";
const userEmail = document.getElementById('email');
const nomeUsuario = document.getElementById('nome')

function generateCode(){
  const characters = "0123456789";
  let length = 6;
  let code = "";
  
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    code += characters.charAt(randomIndex);
  }

  return code; 
}

const btn = document.getElementById('btn-enviar');
btn.addEventListener('click', () => {
    const code = generateCode();
    alert(`Ola ${nome.value} seu código é:  ${code}`)
});












