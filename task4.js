function count_zero(binaryNumber) {
  let count = 0;
  for (let x of binaryNumber) {
    if (x == "0") {
      count++;
    }
  }
  return count;
}
const binarynum = "10001101";
const result = count_zero(binarynum);
console.log(`The number of 0 is: ${result}`);
