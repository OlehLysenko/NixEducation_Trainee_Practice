function solve(str) {
    let upNum = 0, lowNum = 0;
    for (const char of str) {
        char == char.toUpperCase() ? upNum++ : lowNum++
    }
    return lowNum >= upNum ? str.toLowerCase() : str.toUpperCase()
}