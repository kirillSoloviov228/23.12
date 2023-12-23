function delayOneSecond() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("выводимые данные через 1 сек");
        }, 1000);
    });
}

delayOneSecond().then(result => {
    console.log(result);
});