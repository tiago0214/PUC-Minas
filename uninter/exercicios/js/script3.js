const valor1 = document.querySelector("#campo1");
const valor2 = document.querySelector("#campo2");
const operacao = document.querySelector("#operacao")
let resposta = document.querySelector("#resposta")

operacao.addEventListener("change", somar);
valor1.addEventListener("keyup", somar)
valor2.addEventListener("keyup", somar)


function somar() {
    if (valor1.value != "" && valor2.value != "") {
        let item1 = parseInt(valor1.value);
        let item2 = parseInt(valor2.value);
        let operar = operacao.value;

        if (operar === "somar")
            resposta.innerHTML = item1 + item2;
        if (operar === "subtrair")
            resposta.innerHTML = item1 - item2;
        if (operar === "multiplicar")
            resposta.innerHTML = item1 * item2;
        if (operar === "dividir")
            resposta.innerHTML = item1 / item2;
    }
}