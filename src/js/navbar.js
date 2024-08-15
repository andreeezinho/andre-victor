var fechar = document.getElementById("fechar").addEventListener("click", fecharMenu);
var menuMobile = document.getElementById("menuMobile");
var barras = document.getElementById("barras").addEventListener("click", abrirMenu);

//resolver bug da linha aparecendo
var linha = document.getElementById("linha");

function abrirMenu(){
    //abrir a barra lateral mobile
    menuMobile.style.display = "flex";
    menuMobile.style.animationName = "animacao";
    linha.style.display = "none";
}

function fecharMenu(){
    //fechar a barra lateral mobile
    menuMobile.style.animationName = "voltar";
    linha.style.display = "inline";
}

//para o menu lateral nao ficar aparecendo quando muda o tamanho da janela
document.body.onresize = function() {
    if (document.body.clientWidth > 600) {
        fecharMenu();
    }
}

//mudar variável do CSS (fazer depois)
//document.documentElement.style.setProperty('--cor-principal', "#f6f4ff")