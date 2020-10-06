const entrada = 576.73;

const dinheiro = [200, 100, 50, 20, 10, 5, 2];
const moedas = [1.0, 0.50, 0.25, 0.10, 0.05, 0.01];

function leituraValor(valor){
    let valorTotal = valor.toFixed(2);

    console.log("Cédulas: ");
    dinheiro.forEach(nota => {
        console.log(`${parseInt(valorTotal / nota)} nota(s) de R$ ${nota.toFixed(2)}`);

        valorTotal = (valorTotal % nota).toFixed(2); 
    });

    console.log("Moedas: ");
    moedas.forEach(moeda => {
        console.log(`${parseInt(valorTotal / moeda)} moeda(s) de R$ ${moeda.toFixed(2)}`);

        valorTotal = (valorTotal % moeda).toFixed(2);
    })
}   

leituraValor(entrada);