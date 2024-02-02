function isEven(number) {
  if (number % 2 === 0) {
    return "This is a even number";
  } else {
    return "This is not a even number";
  }
}
console.log(isEven(5));

function isOdd(number) {
  if (number % 2 === 1) {
    return "This is an odd number";
  }
  return "This is not an odd number";
}
console.log(isOdd(10));

//Condition with ternary
function isOdd(number) {
  return number % 2 === 1 ? "This is a odd number" : "This is not a odd number";
}
console.log(isOdd(10));
