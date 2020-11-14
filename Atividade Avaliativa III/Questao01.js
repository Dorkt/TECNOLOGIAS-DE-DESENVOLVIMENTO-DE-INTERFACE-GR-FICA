function map(callback, arrayAnterior) {
    const arrayModificado = [];

    arrayAnterior.reduce((accumulator, currentValue) => {
        if(typeof accumulator == 'number'){
            arrayModificado.push(callback(accumulator));
        }
        arrayModificado.push(callback(currentValue));        
    });

    return arrayModificado;
};

function isEqual(array1, array2){
    for(i = 0; i < array1.length; i++){
        if(array1[i] != array2[i]){
            return false;
        }
    }
    return true;
}

function executaTeste() {
    const array = [1, 2, 3, 4, 5];
    const arrayTriplicado = map((num) => num * 3, array);

    if (isEqual(arrayTriplicado, [3, 6, 9, 12, 15])) {
        console.log('✓ Passou no teste!')
    } else {
        console.error('O teste falhou :(')
        console.error('Resultado atual:');
        console.error(arrayTriplicado);
        console.error('Resultado esperado:');
        console.error([3, 6, 9, 12, 15]);
    }
}

executaTeste();