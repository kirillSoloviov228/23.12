function delayOneSecond() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("выводимые данные через 1 сек");
        }, 1000);
    });
}




async function main() {
    try {
        const result = await delayOneSecond();
        console.log(result);
    } catch (error) {
        console.error("Произошла ошибка:", error);
    }
}

main();