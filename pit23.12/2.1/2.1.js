const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function sum(a, b) {
    return a + b;
}

rl.question('Введите первое число: ', (num1) => {
    rl.question('Введите второе число: ', (num2) => {
        const result = sum(parseInt(num1), parseInt(num2));
        console.log(`Сумма ${num1} и ${num2} равна ${result}`);
        rl.close();
    });
});