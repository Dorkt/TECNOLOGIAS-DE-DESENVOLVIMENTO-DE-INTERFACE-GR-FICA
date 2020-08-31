function calculaValores() {
    let numeros = document.getElementById("numeros").value;

    numeros = numeros.split(",");

    let somaDosValores = 0;

    let quantPositivo = 0;
    let quantNegativo = 0;

    for(let i = 0; i < numeros.length; i++){
        somaDosValores += parseInt(numeros[i]);
        if(numeros[i] >= 0){
            quantPositivo++;
        }else{
            quantNegativo++;
        }
    }    
    let media = somaDosValores / numeros.length;

    let percetPositivos = (quantPositivo / numeros.length) * 100;
    let percetNegativos = (quantNegativo / numeros.length) * 100;


    resultado.innerHTML = `<br/>média aritmética = ${media}<br/>Total de números negativos = ${quantNegativo}<br/>Total de números positivos = ${quantPositivo}<br/>Percentual de positivos: ${percetPositivos}%<br/>Percentual de negativos: ${percetNegativos}%`;    
    
}