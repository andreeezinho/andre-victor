//elementos DOM
var nome = document.getElementById("nome");
var email = document.getElementById("email");
var texto = document.getElementById("texto");
var mensagem = document.getElementById("mensagem");
var erro = document.getElementById("erro");
var btn = document.getElementById("btn");
var cardMsg = document.getElementById("cardMsg");

//quando clicar no botao
btn.addEventListener('click', enviarMsg);

//valida se há algo escrito nos inputs
function enviarMsg(e) {
    if(nome.value != "" && email.value != "" && mensagem.value != ""){
        console.log("MENSAGEM ENVIADA COM SUCESSO!");
        cardMsg.style.display = "flex";
        cardMsg.style.animationName = "subir";
    }else{
        if(nome.value != ""){
            console.log("Nome ok")
        }else{
            nome.style.border = "1px solid red";
            erro.style.display = "block";
        }
    
        if(email.value != ""){
            console.log("Email ok")
        }else{
            email.style.border = "1px solid red";
            erro.style.display = "block";
        }
    
        if(mensagem.value != ""){
            console.log("Mensagem ok")
        }else{
            texto.style.border = "1px solid red";
            erro.style.display = "block";
        }
    }

    //evitar que a página recarregue quando aperta o botao
    e.preventDefault();

    //timer para chamar funcao voltarPadrao
    setTimeout(voltarPadrao, 3000);
}

//retorna às cores anteriores
function voltarPadrao() {
    nome.style.border = "none";
    nome.style.borderBottom = "1px solid var(--cor-detalhes)";
   
    email.style.border = "none";
    email.style.borderBottom = "1px solid var(--cor-detalhes)";
   
    texto.style.border = "1px solid var(--cor-detalhes)";

    erro.style.display = "none"

    cardMsg.style.animationName = "descer";
}
