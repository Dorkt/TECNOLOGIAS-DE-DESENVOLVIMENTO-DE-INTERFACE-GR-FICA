function quadrado() {
    let valores = document.getElementById("numeros").value;

    valores = valores.split(",");

    document.write("<p>Resultados abaixo: </p>");    
    for(let i = 0; i < valores.length; i++){
        let resultadosFinais = Math.pow(valores[i], 2);
        document.write(`${valores[i]}<sup>2</sup> = ${resultadosFinais} <br/>`);
    }
}
