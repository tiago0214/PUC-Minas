let para = document.querySelector("p");

para.addEventListener("mouseover", mudaVerde);
para.addEventListener("mouseout", mudaVermelho);

function mudaVerde() {
    para.style.background = "green";
}
function mudaVermelho() {
    para.style.background = "red";
}