function ordena() {
    let numeros = document.getElementById("numeros").value;

    numeros = numeros.split(",");

    numeros.sort((a, b) => a-b); 

    resultado.innerHTML = `<br/>Números ordenados: ${numeros}`;   
}