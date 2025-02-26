"use strict";

for (let i = 0; i < 3; i++) {
    var varVariable = "var"; // Видна вне цикла
    let letVariable = "let"; // Видна только внутри цикла
    const constVariable = "const"; // Видна только внутри цикла
}

console.log(varVariable); // "var"
console.log(letVariable); // Ошибка: ReferenceError: letVariable is not defined
console.log(constVariable); // Ошибка: ReferenceError: constVariable is not defined
