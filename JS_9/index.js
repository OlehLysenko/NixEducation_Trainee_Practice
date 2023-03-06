function daysRepresented(array) {
    let daysNum = 0;
    array.forEach((arr) => {
        daysNum += arr[1] - arr[0] + 1;
    });
    return daysNum;
}
