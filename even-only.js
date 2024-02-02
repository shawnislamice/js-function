function evenFinder(numbers) {
  const even = [];
  let sum = 0;
  for (let x of numbers) {
    if (x % 2 === 0) {
      even.push(x);
      sum += x;
    } else {
      console.log("There are no even numbers");
    }
  }
  return { even, sum };
}

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const output = evenFinder(nums);
console.log("The even numbers are: " + output.even);
console.log("The sum of even numbers are: " + output.sum);
