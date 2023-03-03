function solution(testStr, num) {
    if (testStr.length >= num) {
        return testStr.slice(0, -testStr.length+num) + "...";
    } else return testStr 
}