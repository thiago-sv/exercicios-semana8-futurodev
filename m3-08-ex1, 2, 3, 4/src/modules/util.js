
//2 - Em util.js é necessário a criação de quatro funções

//conversorReais: converte um número em um valor em reais , ou seja se ela receber 4 dever á converter para R$ 4,00

function converteReais(valor) {
    return valor.toFixed(2).replace(".", ",");
}

//adicionandoZeros: modifica um número para que este não tenha menos de onze digitos de tamanho, ou seja se for passado 89 ele deverá retornar 00000000089, colocando o número zero na frente do mesmo até alcançar o tamanho mínimo

function adicionaZeros(valor) {
    return valor.toString().padStart(11, "0");
}

//conversorCPF: crie um algoritmo que altere uma string para o formato de CPF

function converteCPF(valor) {
    return valor.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
}

//ordenadorArray: função que realiza a organização dos números dentro de um array

function ordenaArray(array) {
    return array.sort((a, b) => a - b);
}

//Todas as funções devem ser exportadas utilizando o export

export { converteReais, adicionaZeros, converteCPF, ordenaArray };



