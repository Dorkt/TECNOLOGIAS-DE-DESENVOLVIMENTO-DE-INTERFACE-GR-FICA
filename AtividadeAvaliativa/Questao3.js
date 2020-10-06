const notas = [1.1, 2.3, 4.4, 5.0, 7.5, 8.9, 10.0];

notas.filter((notas) => {
    if(notas >= 0.0 && notas <= 4.9){
        console.log(`Notas ${notas} = conceito D`);
    }else if(notas >= 5.0 && notas <= 6.9){
        console.log(`Notas ${notas} = conceito C`);
    }else if(notas >= 7.0 && notas <= 8.9){
        console.log(`Notas ${notas} = conceito B`);
    }else if(notas >= 9.0 && notas <= 10.0){
        console.log(`Notas ${notas} = conceito A`);
    }else{
        console.log("Nota fora do parâmetro");
    }
});