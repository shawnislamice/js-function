function myFunction(str) {
  console.log(str);
  let lenth = str.length;
  console.log(lenth);
  return lenth % 2 === 0 ? "Even size" : "Odd Size";
}

console.log(myFunction("Hello"));

function doDouble(number, doDouble) {
  if (doDouble === true) {
    const result = number * 2;
    return result;
  } else {
    const result = number * 3;
    return result;
  }
}
console.log(doDouble(5, true));
console.log(doDouble(5, false));
// doDouble(5, false);

function numberOfElements(numbers) {
  const len = numbers.length;
  return len;
}
console.log(numberOfElements([1, 2, 3, 4, 5]))
