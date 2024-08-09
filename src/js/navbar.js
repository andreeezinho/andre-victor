var fechar = document.getElementById("fechar").addEventListener("click", fecharMenu);
var menuMobile = document.getElementById("menuMobile");
var barras = document.getElementById("barras").addEventListener("click", abrirMenu);

function abrirMenu(){
    menuMobile.style.display = "flex";
}

function fecharMenu(){
    menuMobile.style.display = "none";
}