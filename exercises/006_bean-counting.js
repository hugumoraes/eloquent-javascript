function countChar(string, letter) {
    let count = 0;

    for (let i = 0; i < string.length; i++) {
        if (string[i] == letter) {
            count++;
        }
    }
    return count;
}

console.log(countChar("BBC", "B"));
console.log(countChar("kakkerlak", "k"));