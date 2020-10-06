const valoresParaProgressao = {
    id: 1,
    nome: 'valores',
    n: 15,
    a1: 3,
    e: 5,
}

function progressaoAritmetica(objeto){
    let [n, a1, r] = [objeto.n, objeto.a1, objeto.e];

    let somaDosTermos = 0;
    let nTermos = [a1];

    console.log("Progressão Aritmética termos:");
    for(var i = 1; i <= n; i++){
        nTermos[i] = a1 + (i - 1) * r; 
        console.log(`Termo[${i}] = ${nTermos[i]}`);
    }

    somaDosElementos = n * (a1 + nTermos[n]) / 2;

    console.log(`Soma dos termos da PA = ${somaDosElementos}`);
    console.log("");
}

function progressaoGeometrica(objeto){
    let [n, a1, r] = [objeto.n, objeto.a1, objeto.e];
    let somaDosTermos = 0;
    const nTermos = [a1];

    console.log("Progressão Geómetrica termos:");
    for(var i = 1; i <= n; i++){
        nTermos[i] = a1 * Math.pow(r, (i-1)); 
        console.log(`Termo[${i}] = ${nTermos[i]}`);
    }

    somaDosElementos = a1 * (1 - Math.pow(r, n)) / (1-r);
    console.log(`Soma dos termos da PG = ${somaDosElementos}`);
}

progressaoAritmetica(valoresParaProgressao);
progressaoGeometrica(valoresParaProgressao);