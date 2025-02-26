"use strict";

function splitIntoWords(str) {
    const wordsArray = str.split(" ");
    const filteredWords = wordsArray.filter(word => word.length > 0);

    return filteredWords;
}