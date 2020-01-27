// Display in the console the numbers from 1 to 20
// created 2 options: column vs row

// option 1 - column
Array.from(Array(20), (_,i) => console.log(i + 1));

// option 2 - row
const n = 20;
const stringOfNumbers = [...Array(n+1).keys()].splice(1).join(' ');
console.log(stringOfNumbers);

// Display in the console the odd numbers from 1 to 20

console.log(Array(10).fill(2).map((x, i) => i * x + 1).join(', '));

// Compute the sum of the elements of an array and display it in the 
// console (add all numbers in the array together)

function sum(input) {
      if(toString.call(input) !== "[object Array]")
        return false;
          let total = 0;
          for(let i = 0; i < input.length; i++) {
            if(isNaN(input[i])) {
              continue;
            }
              total += Number(input[i]);
          }
      return total;
    }
    
    console.log(sum([1,2,3,4,5,6,7,8,9]));
    console.log(sum([2,4,6,8,2,4,6,8]));

// Compute the maximum of the elements of an array and display it in the console

    function largest(arr) {
      let large = arr[0];
      for(let i = 1; i < arr.length; i++) {
        if(large < arr[i]) {
          large = arr[i];
        }
      }
        return large;
    }
    
    let input = [10, 20, 30, 85, 40, 22];
    let output = largest(input);
    
    console.log(output);

// Compute how many times a certain element appears in an array

    let arr = [2, 5, 6, 2, 8, 2, 10, 2, 5, 12, 5, 25, 5];

      function getRepeatedNumber(Array, value) {
      let count = 0;
      Array.forEach((a) => (a === value && count++));
      return count;
      }

      console.log(getRepeatedNumber(arr, 2));
      console.log(getRepeatedNumber(arr, 5));