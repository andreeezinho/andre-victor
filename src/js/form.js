var nome = document.getElementById("nome");
var email = document.getElementById("email");
var texto = document.getElementById("texto");
var mensagem = document.getElementById("mensagem");
var btn = document.getElementById("btn");

btn.addEventListener('click', enviarMsg);

function enviarMsg(e) {
    if(nome.value != ""){
        console.log("nome enviada")
    }else{
        nome.style.border = "1px solid red";
    }

    if(email.value != ""){
        console.log("email enviada")
    }else{
        email.style.border = "1px solid red";
    }

    if(mensagem.value != ""){
        console.log("mensagem enviada")
    }else{
        texto.style.border = "1px solid red";
    }

    //evitar que a página recarregue quando aperta o botao
    e.preventDefault();

    setTimeout(voltarPadrao, 1000);
}

function voltarPadrao() {
    console.log("voltou")
    nome.style.border = "1px solid red";
    email.style.border = "1px solid red";
    texto.style.border = "1px solid red";
}
