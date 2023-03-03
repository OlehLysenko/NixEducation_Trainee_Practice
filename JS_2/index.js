function mispelled(string1, string2) {
  if (Math.abs(string1.length - string2.length) > 1) {
    return false;
  }
  if (string1.includes(string2) || string2.includes(string1)) {
    return true;
  }
  if (Math.abs(string1.length - string2.length) <= 1) {
    let counter = 0;
    for (let i = 0; i < string1.length; i++) {
      if (string1[i] != string2[i]) {
        counter++;
      }
    }
    return counter <= 1 ? true : false;
  }
}