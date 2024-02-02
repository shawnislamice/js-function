function tenTimes(number) {
  let result = number * 10;
  return result;
}

function cutHalf(number) {
  let result = number / 2;
  return result; // After return no code will be execute.
}
a = 45;
let output = tenTimes(a);
console.log(output);
//Half of the previous function
let output2 = cutHalf(output);
console.log(output2);
