
function verificaNumerosPrimos(inicio = 0, fim = 100){
    if(inicio > fim){
        let temp = inicio;
        inicio = fim;
        fim = temp;
    }

    for(let i = inicio; i <= fim; i++){
        let j = 1;
        verifica = 0;

        while(j <= fim){
            if(i % j == 0){
                verifica++;
            }else if(i == 1){
                verifica = 3;
                break;                
            }
            j++;
        }

        if(verifica > 2){
            console.log(`O número ${i} não é primo!`);
        }else{
            console.log(`O número ${i} é primo`);
        }
    }
}

verificaNumerosPrimos(102, 0);