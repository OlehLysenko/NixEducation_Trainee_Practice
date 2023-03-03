function timeCorrect(time) {
    const timeArr = time.split(":").map((el) => parseInt(el, 10));
    if (timeArr[2] >= 60) {
        timeArr[2] = timeArr[2] - 60;
        timeArr[1]++;
    }
    if (timeArr[1] >= 60) {
        timeArr[1] = timeArr[1] - 60;
        timeArr[0]++;
    }
    if (timeArr[0] >= 24) {
        timeArr[0] = timeArr[0] % 24;
    }

    return timeArr.map((el) => (el < 10 ? `0${el}` : el)).join(":");
}
