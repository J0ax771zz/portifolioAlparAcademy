const numeros = [1,5,10,15];

Array.prototype.meuMap = function(callback) {
    const novoArray = [];

    for(let i = 0; i < this.length; i++){
        novoArray.push(callback(this[i]))
        
    }
    return novoArray;
}

const numerosDobrados = numeros.meuMap(function(numero) {
    return numero * 2;
});


console.log(numerosDobrados);


Array.prototype.meuFilter = function(callback) {
    const novoArray = [];
    for(let i = 0; i < this.length; i++){
        if(callback(this[i])){
            novoArray.push(this[i]);
            
        }
    }
    return novoArray;
}


const maioresQueCinco = numeros.meuFilter(function(numero) {
    return numero > 5;
});

console.log(maioresQueCinco);

Array.prototype.meuReduce = function(callback, valorInicial) {
    let acumulador = valorInicial;
    let indice = 0;
    if(valorInicial === undefined){
        if(this.length === 0){
            throw new Error('O array deve conter pelo menos dois elementos');
        }
        acumulador = this[0];
        indice = 1;
    }
    for(; indice < this.length; indice++){
        acumulador = callback(acumulador, this[indice], indice, this);
    }
    return acumulador;
}

const soma = numeros.meuReduce(function(acumulador, valorAtual) {
    return acumulador + valorAtual;
}, 0);

console.log(soma);


Array.prototype.meuForEach = function(callback) {
    for(let i =0; i < this.length; i++){
        callback(this[i]);
    }
}

numeros.meuForEach(e => {
    console.log(e);
})


Array.prototype.meuFind = function(callback) {
    for(let i = 0; i <this.length; i++){
        if(callback(this[i], i, this)){
            return this[i];
        }
        return undefined;
    }
}

const maiorQueCem = numeros.meuFind(e => {
    return e > 100;
})

console.log(maiorQueCem);