const min = (val1, val2) => {
    if (val1 <= val2) return val1;
    if (val1 > val2) return val2;
}

console.log(min(0, 10));
console.log(min(0, -10));