function nbYear(p0, percent, aug, p) {
  const percentAsDecimal = percent * 0.01;
  let n = 0;
  let currentPop = p0;
  for (let i = 1; currentPop <= p; i++) {
    currentPop = currentPop + currentPop * percentAsDecimal + aug;
    n = i;
    console.log(currentPop, n);
  }
  return n;
}

console.log(nbYear(1500, 5, 100, 5000));
console.log(nbYear(1500000, 2.5, 10000, 2000000));
console.log(nbYear(1500000, 0.25, 1000, 2000000));