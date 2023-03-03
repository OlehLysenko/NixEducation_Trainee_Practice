function findVowels(testStr) {
    const vowels = ["а", "є", "и", "і", "ї", "о", "у", "ю", "я" ]
    const testArr = testStr.toLowerCase().split("")
    let rep = 0;
    testArr.forEach(char=> {
        if (vowels.includes(char)) {
            rep++
        }
    })
    return rep
}

function findVowels(testStr) {
    const regEx = /[аєиіїоуюя]/g
    return testStr.toLowerCase().match(regEx).length
}

function findVowels(testStr) {
    let rep = 0;
    const vowels = ["а", "є", "и", "і", "ї", "о", "у", "ю", "я"];
    for (const char of testStr) {
        if (vowels.includes(char.toLowerCase())) {
            rep++;
        }
    }
    return rep
}