var fechar = document.getElementById("fechar").addEventListener("click", fecharMenu);
var menuMobile = document.getElementById("menuMobile");
var barras = document.getElementById("barras").addEventListener("click", abrirMenu);

//resolver bug da linha aparecendo
var linha = document.getElementById("linha");

function abrirMenu(){
    //abrir a barra lateral mobile
    menuMobile.style.display = "flex";
    linha.style.display = "none";
}

function fecharMenu(){
    //fechar a barra lateral mobile
    menuMobile.style.display = "none";
    linha.style.display = "inline";
}