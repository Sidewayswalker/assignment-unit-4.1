console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  return 'Hello, ' + name + '!';
}
// Remember to callthe function to test
let greeting = helloName('Steve');
console.log(greeting);

// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}
let sum = addNumbers(2, 5);
console.log(sum);


// 4. Function to multiply three numbers & return the result
function multiplyThree(num1, num2, num3) {
  return num1 * num2 * num3;
}
let product = multiplyThree(5, 8, 10);
console.log(product);






// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0) {
    return true;
  } else 
  return false;
}
let numNegative = isPositive(-7);
console.log('This should be FALSE:', numNegative);

// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
let numPositive = isPositive(10);
console.log('This should be TRUE:', numPositive);


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast(array) {
  if (array.length > 0){
    return 'The last item in the array is:', array[array.length - 1];
  }else{
    return 'undefined';
  }
}
let arraySample = [1,2,3,4,5];
let lastInArray = getLast(arraySample);
console.log('Display last value of array or undefined',lastInArray);




// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find(value, array) {
  for (let i=0; i < array.length; i++) {
    if (value === array[i]) {
      return true;
    }
  }
  return false; // OMG THIS TOOK ME FOREVER TO FINALLY FIGURE OUT. I had it inside the for loop and it was only being accepted for a value of 1.
}
let valuInArray = find(5,arraySample);
console.log('The value is in this array: ', valuInArray);


// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
let myString = "This is my string";
console.log(myString.charAt(0)); //Display "T" to make sure this works

function isFirstLetter(letter, string) {
  // let success = `${letter} is at the start of this string. Good Job!`;
  // let failure = `${letter} is NOT at the start of this string. Try Again!`;
    if(letter === string.charAt(0)) {
      //console.log(success);
      return true
    }else if (letter !== string.charAt(0)) { 
      //onsole.log(failure);
      return false
    }
}
guessT = isFirstLetter('T', myString);
console.log(guessT);


// 9. Function to return the sum of all numbers in an array
//let arraySample = [1,2,3,4,5]; // ALREADY ESTABLISHED

function sumAll(array) {
  let sum = 0;
  for(i=0; i<array.length; i++) {
    sum = sum + array[i];
  }
  return sum
}
console.log('SUM OF ALL NUMBERS: ', sumAll(arraySample));






// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.

function allPositive(array) {
  let positiveArray = [];
  for (let i=0; i<array.length; i++){
    if(array[i] > 0) {
      positiveArray.push(array[i])
    }
  }
  return positiveArray //RETURN MEANS THE END OF ThE LOOP/FUNCTION. RETURN MEANS DONE!
}

let mixedArray = [-3, 4, -7, 12, -18, 5];
let positiveArray = allPositive(mixedArray);
console.log('LOOK AT ME',positiveArray);


//RECAP FOR Q.10
//created function with 1 array parameter
//inside of the function created variable positiveArrays
//establish loop with i;
//if the array value of i is greater than 0.....
//you have the new array "positiveArray" to push in the value of array[i]
//Establish the array we are going to talk about. 
//Establish a variable with the function
//Conosle.log the variable w/ the function. 






// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!


// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    hello,
    helloName,
    addNumbers,
    multiplyThree,
    isPositive,
    getLast,
    find,
    isFirstLetter,
    sumAll,
    allPositive,
  };
} catch (e) {
  // Do nothing
}
