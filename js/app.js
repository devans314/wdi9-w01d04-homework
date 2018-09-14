// ## 1. Verbal questions</hr>

// Write answers to the following questions as comments. 

// 1. What is the difference between a **parameter** and an **argument**?
// 2. Within a function, what is the difference between **return** and **console.log**?
// 3. What are the implications of the ability of a function to return a value?

// <hr>
// &#x1F534; **Commit your work.** <br>
// The commit message should read: <br>
// "Commit 1 - Verbal questions".
// <hr>

// 1. parameters are given to a function declaration, definition, or prototype.  Arguments are 
// passed when calling a function
// 2. Return actually returns a value and ends the function.  Console.log just logs something to 
// console.
// 3. The function will exit upon returning

// 2. Palindrome again.
// Write a function checkPalindrome that accepts a single argument, a string. 
//Yes, you've done it before, but do it again. Later in this assignment 
//we're gonna beef up our palindrome function some. 
//See if you can do it without looking back at your previous answer. 
//The function should return true if the string is a palindrome, false if not. 
//Make sure your function will give the correct answer for words with capital letters.

// console.log(checkPalindrome("Radar"));
//  => true
// console.log(checkPalindrome("Borscht"));
// => false

// const checkPalindrome = (string) => {
//     const reverse = string.split(" ").reverse(" ").join(" ");
//     if(reverse === string){
//         return true
//     } else {
//         return false
//     };
// }
// console.log(checkPalindrome("Borscht"));

// ## 3. Digit Sum</hr>
// Write a function `sumDigits` that accepts a number and returns the sum of its digits.
// ```
// console.log(sumDigits(42));
// => 6;
// ```

// <hr>
// &#x1F534; **Commit your work.** <br>
// The commit message should read: <br>
// "Commit 3 - Digit Sum".
// <hr>


// const sumDigits = (num) => {
//     const createArray = num.toString().split("");
//     console.log(createArray);
//     const num1 = parseInt(createArray[0]);
//     const num2 = parseInt(createArray[1]);
//    const sumOfArray = num1 + num2;
//    return sumOfArray;
// } 
// sumDigits(42);
// console.log(sumDigits(42));

// 4. Pythagoras
// Write a function calculateSide that takes two arguments: sideA and sideB, 
// and returns the solution for sideC using the Pythagorean theorem.

// hint: discover the Pythagorean Theorem on a website called google.com
// hint: checkout the Math methods in javascript

// console.log(calculateSide(8, 6));
// => 10

// const calculateSide = (sideA, sideB) => {
//     return(Math.sqrt((sideA * sideA) + (sideB * sideB)));
// }
// calculateSide(8,6);
// console.log(calculateSide(8, 6));

// 5. Sum Array
// Write a function sumArray that takes an array as an argument. 
// The array should contain numbers. 
// The function should return the sum of the numbers in the array.

// Expected result:

// console.log(sumArray([1, 2, 3, 4, 5, 6]));
// => 21

// const sumArray = (arr) => {
//     let sum = 0;
//     for(i = 0; i < arr.length; i++){
//         sum += arr[i];
//     }
//     console.log(sum);
// }
//     sumArray([5, 10, 10, 5]);

// 6. Prime Numbers
// A Prime number is a number that is not evenly divisible by another number except 
// 1 and itself. If you want to read more deeply about it, go here. 
//To test whether a number is Prime, you only need to test as far as 
//the square root of that number. 
//This is advisable for optimization and testing large numbers.

// Step One
// Write a function called checkPrime that will test whether a number is Prime. 
//The function will return true (Boolean) if Prime, false if not. 
//Hint: Check every number up to the square root. To do this, try a for loop.

// Step Two
// Write another function called printPrimes that will print (console log) all the 
// Primes up to an arbitrary limit. For example, if you invoke your function 
// with printPrimes(97), it will print all the Prime numbers up to and including 97. 
// This function can call on the previous checkPrime function.

const checkPrime = (num) => {
    let prime = true;
    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i === 0) {
            prime = false;
            break;}
        
    }
    return prime && (num > 1);
}

const printPrimes = (num) => {
    let newPrime = checkPrime(num);
    console.log(newPrime);
    let primeArray = [];
    if(newPrime === true){
        for(i = 1; i <= num; i++){
            if(i % 1 === 0){
                primeArray.push(i);
            } 
        } 
    } else {
        console.log("not prime");
    }
  console.log(primeArray); 
}
printPrimes(97);


