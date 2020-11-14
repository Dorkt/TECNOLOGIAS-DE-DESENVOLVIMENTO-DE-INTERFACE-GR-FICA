function verificaApresentacao(E, D){
    if((E <= 0 || E >= 25) && (D <= 0 || D >= 25)){
        console.log("Data fora do paramêtro estipulado");
    }else if(E > D){
        console.log("O professor Florovsky não pode voltar no tempo para corrigir esse TCC!");
    }else{
        if(D - E >= 3) {
            console.log("Muito bem! O aluno está apto a apresentar até o natal!\n");
        }else if(D - E < 3){
            console.log("O trabalho está muito ruim!");
            if(E + 2 < 24){
                console.log("TCC Apresentado!\n");
            }else{
                console.log("Não deu! Só no próximo ano agora.\n");
            }
        }
    }
}

verificaApresentacao(13, 19);
verificaApresentacao(22, 23);
verificaApresentacao(21, 22);