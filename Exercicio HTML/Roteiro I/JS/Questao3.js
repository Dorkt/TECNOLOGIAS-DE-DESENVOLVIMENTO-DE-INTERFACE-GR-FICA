function maiorIdade() {
    let idades = document.getElementById("idade").value;

    idades = idades.split(",");

    let maiorQueDezoito = [];
    let menorQueDezoito = [];

    for(let i = 0; i < idades.length; i++){
        if(parseInt(idades[i]) > 18) {
            maiorQueDezoito.push(idades[i]);
        }else if(parseInt(idades[i]) < 18){
            menorQueDezoito.push(idades[i]);
        }
    }
    resultado.innerHTML = `<br/>Idades maiores que 18: ${maiorQueDezoito} <br/>Idades menores que 18: ${menorQueDezoito}`;
}
