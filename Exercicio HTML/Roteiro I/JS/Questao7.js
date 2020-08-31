function somaImpares() {
    let numeros = document.getElementById("numeros").value;

    numeros = numeros.split(",");

    let somaNumerosImparesMult3 = 0;

    for(let i = 0; i < numeros.length; i++){
        if((numeros[i] % 3 == 0) && (numeros[i] % 2 == 1)){
            somaNumerosImparesMult3 += parseInt(numeros[i]);
        }
    }

    resultado.innerHTML = `<br/>Valor total da soma de números ímpares, múltiplos de 3: ${somaNumerosImparesMult3}`;   
}