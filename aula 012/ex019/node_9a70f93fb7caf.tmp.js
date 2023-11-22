const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let numbers = [];
let lastResult = null;

function isValidNumber(number) {
    return number !== '' && !isNaN(number) && number >= 1 && number <= 100;
}

function isDuplicate(number) {
    return numbers.includes(Number(number));
}

function calculateStatistics() {
    const totalNumbers = numbers.length;
    const minValue = Math.min(...numbers);
    const sumValue = numbers.reduce((acc, curr) => acc + curr, 0);
    const averageValue = sumValue / totalNumbers;
    return {
        totalNumbers,
        minValue,
        sumValue,
        averageValue
    };
}

function startPrompt() {
    rl.question('Digite um número entre 1 e 100: ', (input) => {
        if (isValidNumber(input)) {
            const number = Number(input);
            if (!isDuplicate(number)) {
                numbers.push(number);
                console.log(`Número ${number} adicionado.`);
            } else {
                console.log('Número já existe. Por favor, tente novamente.');
            }
        } else {
            console.log('Número inválido. Por favor, tente novamente.');
        }
        startPrompt();
    });
}

function handleFinalize() {
    if (numbers.length === 0) {
        console.log('Precisa digitar algum valor.');
        return;
    }
    const statistics = calculateStatistics();
    lastResult = statistics;
    console.log(`Número total de números cadastrados: ${statistics.totalNumbers}`);
    console.log(`O valor do menor número: ${statistics.minValue}`);
    console.log(`Soma de todos os valores: ${statistics.sumValue}`);
    console.log(`Média de todos os valores: ${statistics.averageValue.toFixed(2)}`);
    numbers = [];
    startPrompt();
}

function handleReset() {
    numbers = [];
    lastResult = null;
    console.log('Valores resetados. Por favor, adicione novos números.');
    startPrompt();
}

console.log('Por favor, adicione números. Quando terminar, digite "finalizar" para ver os resultados ou "resetar" para limpar os números.');

startPrompt();

rl.on('line', (input) => {
    if (input.toLowerCase() === 'finalizar') {
        handleFinalize();
    } else if (input.toLowerCase() === 'resetar') {
        handleReset();
    }
});
