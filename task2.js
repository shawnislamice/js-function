function verify(number) {
  return number % 2 === 0 ? number * 2 : number / 2;
}
const result = verify(10);
console.log(`The output is: ${result}`);
