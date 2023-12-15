let botao = document.querySelector("#botao");
botao.style.background = "blue";
let estaQuebrado = false;
let contador = 0;


botao.addEventListener("mouseover", e => {
    if (!estaQuebrado)
        botao.style.background = "green";
})
botao.addEventListener("mouseout", e => {
    if (!estaQuebrado)
        botao.style.background = "blue";
})
botao.addEventListener("click", e => {
    contador++

    if (contador >= 10) {
        botao.style.background = "red";
        botao.innerHTML = "quebrei";
        estaQuebrado = true;
    }
})