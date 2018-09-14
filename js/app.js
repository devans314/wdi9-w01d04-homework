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

const calculateSide = (sideA, sideB) => {
    return(Math.sqrt((sideA * sideA) + (sideB * sideB)));
}
calculateSide(8,6);
console.log(calculateSide(8, 6));
