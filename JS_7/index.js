function solve(testStr, num) {
    for (let i = 0; i < num; num--) {
        if (testStr.includes("a")) {
            testStr = testStr.replace("a", "");
        } else if (testStr.includes("b")) {
            testStr = testStr.replace("b", "");
        } else if (testStr.includes("c")) {
            testStr = testStr.replace("c", "");
        } else testStr = testStr.slice(i+1);
    }
    return testStr;
}