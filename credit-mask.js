function maskify(cc) {
  let split = cc.split("");
  let masked = [];
  for (let i = 0; i < cc.length; i++) {
    if (i < cc.length - 4) {
      masked.push("#");
    } else {
      masked.push(split[i]);
    }
  }
  return masked.join("");
}

maskify("123456789");
