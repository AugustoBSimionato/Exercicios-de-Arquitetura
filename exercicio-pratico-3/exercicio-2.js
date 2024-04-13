// Métodos usados:
// Método de extração: criação do método calcularSoma(), separando do método calcularMedia() o que ajuda no entendimento do código,
// Extração de variável: foram extraídas as variáveis soma e media e utilizadas nos seus métodos correspondentes,
// Divisão de variável temporária: juntamente com a extração de variável, foram atribuídos os métodos correspondentes para as variáveis soma e media
// nos métodos calcularMedia() e calcularDesvioPadrao(), porque ajuda no entendimento do que cada variável faz.

function calcularMedia(valores) {
    const soma = calcularSoma(valores);
    return (soma / valores.length).toFixed(2);
}

function calcularSoma(valores) {
    let soma = 0;
    for (let i = 0; i < valores.length; i++) {
        soma += valores[i];
    }
    return soma;
}

function calcularDesvioPadrao(valores) {
    const media = calcularMedia(valores);
    let somaDiferencasQuadradas = 0;
    for (let i = 0; i < valores.length; i++) {
        const diferenca = valores[i] - media;
        somaDiferencasQuadradas += diferenca ** 2;
    }
    return (Math.sqrt(somaDiferencasQuadradas / valores.length)).toFixed(2);
}

// Teste
const valores = [12, 15, 18, 20, 22];
console.log("Média: " + calcularMedia(valores));
console.log("Desvio Padrão: " + calcularDesvioPadrao(valores));