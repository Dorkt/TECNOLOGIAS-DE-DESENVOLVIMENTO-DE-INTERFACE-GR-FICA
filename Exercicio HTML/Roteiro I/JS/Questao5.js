function inverteString() {
    let palavra = document.getElementById("palavra").value;

    palavra = palavra.split('').reverse().join('');    

    resultado.innerHTML = `<br/>String invertida: ${palavra}`;   
}