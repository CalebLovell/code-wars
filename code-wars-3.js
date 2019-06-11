function isIsogram(str) {
  const strArr = str.split("");
  let lettersArr = [];
  let doublesArr = [];
  for (let i = 0; i < strArr.length; i++) {
    if (!lettersArr.includes(strArr[i].toLowerCase())) {
      lettersArr.push(strArr[i]);
    } else {
      doublesArr.push(strArr[i]);
    }
  }
  if (doublesArr.length === 0) {
    return true;
  } else {
    return false;
  }
}
