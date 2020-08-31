function fatorial() {
    let numeros = document.getElementById("numeros").value;

    numeros = numeros.split(",");

    let somaNumerosImparesMult3 = 0;

    let fatorial = 0;

    document.write("<p>Resultados abaixo: </p>");    
    for(let i = 0; i < numeros.length; i++){
        fatorial = numeros[i];
        for(let j = numeros[i] - 1; j > 0; j--){
            fatorial *= j;
        }
        document.write(`${numeros[i]}! = ${fatorial} <br/>`);
    }

    resultado.innerHTML = `<br/>Valor total da soma de números ímpares, múltiplos de 3: ${somaNumerosImparesMult3}`;   
}