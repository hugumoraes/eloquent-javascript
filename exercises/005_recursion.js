function isEven(positiveNumber) {
    if (positiveNumber == 0) return true;
    else if (positiveNumber == 1) return false;
    else return isEven(positiveNumber - 2);
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));

/* To properly fix the issue with negative numbers, we could test to see if the input is a negativeNumber
    then we would return isEven(negativeNumber + 2) instead */