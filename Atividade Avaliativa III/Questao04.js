function colocarTodasPalavrasEmMaiusculo(array){

    function verificaString(palavra){
        if(typeof palavra != "string"){
            return false;            
        }
        return true;
    }

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(array.map(verificaString)){
                resolve(array.map((palavra) => {
                    return palavra.toUpperCase();
                }));
            }else{
                reject(new Error("Os elementos do Array precisam ser do tipo String"));
            }
        },2000);
    });

}

const arrayTeste = ['olá', 'oi', 'hellou', 'tempo']
const arrayTeste2 = [10,'principe', 'rainha', 'rei']

colocarTodasPalavrasEmMaiusculo(arrayTeste)
    .then(console.log)
    .catch(console.log);

colocarTodasPalavrasEmMaiusculo(arrayTeste2)
    .then(console.log)
    .catch(console.log);

