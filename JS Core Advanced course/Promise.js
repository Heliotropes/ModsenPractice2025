// Первый промис: возвращает число
const firstPromise = new Promise((resolve) => {
    resolve(2); // Начальное число
});

// Цепочка промисов
firstPromise
    .then((result) => {
        console.log("Начальное число:", result);
        return new Promise((resolve) => {
            setTimeout(() => {
                const squared = result * result;
                console.log("Результат после первого промиса:", squared);
                resolve(squared);
            }, 3000); // Задержка 3 секунды
        });
    })
    .then((result) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const squared = result * result;
                console.log("Результат после второго промиса:", squared);
                resolve(squared);
            }, 3000); // Задержка 3 секунды
        });
    })
    .then((result) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const squared = result * result;
                console.log("Результат после третьего промиса:", squared);
                resolve(squared);
            }, 3000); // Задержка 3 секунды
        });
    })
    .then((finalResult) => {
        console.log("Финальный результат:", finalResult);
    })
    .catch((error) => {
        console.error("Произошла ошибка:", error);
    });