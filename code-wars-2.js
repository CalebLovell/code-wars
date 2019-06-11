function divisors(integer) {
  let divisorsArr = [];
  for (let i = 2; i <= integer; i++) {
    if (integer % i === 0 && integer !== i) {
      divisorsArr.push(i);
    }
  }
  if (divisorsArr.length === 0) {
    return `${integer} is prime`;
  } else {
    return divisorsArr;
  }
}

console.log(divisors(15));
console.log(divisors(12));
console.log(divisors(13));