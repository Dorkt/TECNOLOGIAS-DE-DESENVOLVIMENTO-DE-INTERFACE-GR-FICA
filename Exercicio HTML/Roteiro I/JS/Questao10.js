function inverteValores() {
    let numeros = document.getElementById("numeros").value;

    numeros = numeros.split(",");

    numeros.reverse();

    resultado.innerHTML = `<br/>Inversão dos valores: ${numeros}`;   
}