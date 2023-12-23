// Подключаем модуль 
const readline = require('readline');

//  ввод/вывод
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// массив
let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//  вставкf элемента в середину 
function insertElementInMiddle(element) {
    // Вычислtybt середины массива
    const middleIndex = Math.floor(myArray.length / 2);
    // Используем метод splice для вставки элемента в середину
    myArray.splice(middleIndex, 0, element);
}

// Функция для вывода 
function printArray() {
    console.log('Массив после вставки в середину:', myArray);
    // Закрываем интерфейс 
    rl.close();
}

//  ввод элемента для вставки в середину массива
rl.question('Введите элемент для вставки в середину массива: ', (element) => {
    // Вызываем функцию для вставки элемента
    insertElementInMiddle(parseInt(element));
    //  вывод массива в консоль
    printArray();
});