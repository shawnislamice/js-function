function add(price1, price2) {
  let total = price1 + price2;
  return total;
}
const output = add(10, 10);
console.log(`Total: ${output}`);

function add2(price1, price2) {
  return price1 + price2;
}
const output2 = add2(50, 50);
console.log("Output 2: " + output2);

function doMath(num1, num2) {
  let sum = num1 + num2;
  let difference = num1 - num2;
  let multiplication = num1 * num2;
  let division = num1 / num2;
  return {
    Sum: sum,
    Difference: difference,
    Multiplication: multiplication,
    Division: division,
  }; //Return multiple variebles
}
const domath = doMath(8, 4);
console.log(domath);
