function esNumero(valor) {
    return !isNaN(parseFloat(valor)) && isFinite(valor);
}

function obtenerNumero() {
    let numero;

    do {
        let input = prompt("Ingrese un número para la serie de Fibonacci:");

        if (esNumero(input)) {
            numero = parseInt(input);
        } else {
            alert("Por favor, ingrese un número válido.");
        }
    } while (!esNumero(numero));

    return numero;
}

function calcularFibonacci(n) {
    let fibonacciSeries = [0, 1];

    for (let i = 2; i < n; i++) {
        fibonacciSeries[i] = fibonacciSeries[i - 1] + fibonacciSeries[i - 2];
    }

    return fibonacciSeries;
}

function imprimirResultado(fibonacciSeries) {
    const resultadoDiv = document.createElement('div');
    resultadoDiv.textContent = 'Serie de Fibonacci: ' + fibonacciSeries.join(', ');

    document.body.appendChild(resultadoDiv);
}

const numero = obtenerNumero();
const resultado = calcularFibonacci(numero);
imprimirResultado(resultado);
