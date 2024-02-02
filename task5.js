function odd_even(number) {
  let convNum = parseInt(number);
  if (convNum % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}
const num = 10;
const result = odd_even(num);
console.log(`The number is: ${result}`);
