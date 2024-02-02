function make_avg(numbers) {
  let sum = 0;
  let avg = 0;
  for (let x of numbers) {
    sum += x;
    avg = sum / numbers.length;
  }
  return { sum, avg };
}
const nums = [1, 2, 3, 4, 5];
const output = make_avg(nums);
console.log(`The sum of the array's elements is: ${output.sum}`);
console.log(`The average of the array is: ${output.avg}`);
