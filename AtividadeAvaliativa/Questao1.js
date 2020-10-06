const array = [1, 60, 232, 7, 25, 76, 29,74, 92];

const lista = [];
let somatorio = 0;

array.filter((value) => {
    if(value > 60 && value < 300){
        lista.push(value);
    }
});

lista.forEach((value) => {
    somatorio += value;
})


console.log(`A lista dos valores maiores que 60 é: ${lista}. A soma dos elementos da lista é: ${somatorio}`);