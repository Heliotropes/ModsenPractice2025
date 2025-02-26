"use strict";

function findMinNumber(arr) {
    if (arr.length === 0) {
        return undefined;
    }
    return Math.min(...arr);
}