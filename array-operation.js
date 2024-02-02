function sumOfNumbers(numbers) {
  let sum = 0;
  for (let x of numbers) {
    sum += x;
  }
  return sum;
}
const nums = [1, 2, 3, 4, 5];
const output = sumOfNumbers(nums);
 console.log(`Output: ${output}`);
