"use strict";

function isDivisible(dividend, divisor) {
    if (divisor === 0) {
        return false;
    }
    return dividend % divisor === 0;
}