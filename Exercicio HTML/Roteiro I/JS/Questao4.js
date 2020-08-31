function quebraData() {
    let data = document.getElementById("data").value;

    data = data.split("/");
    let dia = data[0];
    let mes = data[1];
    let ano = data[2];

    resultado.innerHTML = `<br/>Data separada, abaixo:<br/>Dia: ${dia} <br/>Mês: ${mes} <br/>Ano: ${ano}`;   
}