function highValue() {
    let valores = document.getElementById("numeros").value;

    valores = valores.split(",");

    let maiorValor = valores[0];
    console.log(valores);
    console.log(maiorValor);

    for(let i = 0; i < valores.length; i++){
        if(parseInt(valores[i]) > maiorValor) {
            console.log("oi =", maiorValor);
            maiorValor = valores[i];
        }
    }
    resultado.innerHTML = `<br/>Maior valor encontrado: ${maiorValor} `;
}
