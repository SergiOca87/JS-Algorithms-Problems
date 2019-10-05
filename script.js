/* Eloquent Javascript */

//Ch2
//Looping a triangle
for(let dash = '#'; dash.length < 7; dash += '#') {
	console.log( dash )
}

//FizzBuzz
for(let i = 0; i <= 100; i++) {
	if( i % 3 && i % 5 === 0 ) {
		console.log('Fizzbuzz');
	} else if(  i % 3 === 0 ) {
		console.log('Fizz');
	} else if( i % 5 === 0 ) {
		console.log('Buzz');
	} else {
		console.log(i);
	}
}

//Chessboard
//TODO

//CH.3
//Minimum, without Math.min()
const min = ( a, b ) => a < b ? a : b;

//Recursion
//Given that 0 is even
//1 is odd
//For the rest, test it's evenness with N - 2 using a recursive function;
const isEven = num => {
  if(num === 0) {
    return true
  } else if(num < 0) {
    return isEven(-num)
  } else {
    return num === 1 ? false : isEven(num - 2)
  }
}

//Count X in String
const countInString = (str, el) => {
	const strArr = [...str];
	let count = 0;

	for( let letter of strArr ){
		letter === el ? count++ : '';
	}

	return count;
}

//Ch4
//Sum of a range
const sumRange = ( start, end ) => {
  const range = [];

  let i = start;

  while ( i <= end ) {
    range.push( i );
    i++
  }

  return range.reduce( (a, b) => a + b );
}


//ReverseArray, without using reverse method
const reverseArray = ( arr ) => {
	const reversedArray = [];
	for(var i = arr.length; i > 0; i--) {
		reversedArray.push(i)
	}
	return reversedArray;
} 





/* Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.*/

const fiboArr = [1, 2, 3];

const fibonacci = (arr) =>{
  const calc1 = arr[arr.length-1];
  const calc2 = arr[arr.length-2];
  return fiboArr.push( calc1 + calc2 );
}

while ( fiboArr[fiboArr.length-1] <= 4000000 ){
  fibonacci( fiboArr );
}

//Reduce the Array to only even numbers
const filteredArr = fiboArr.filter( (num) => num % 2 === 0);

const reduceArray = filteredArr.reduce((a, b) => a + b, 0); //This 0 is the accumulator initial value

console.log(reduceArray);


/***************** ***********************/
/* Return the prime numbers in the entered number */

//So prime nembers

const primeFactor = ( numb ) =>{

  const numArr = [];
  //count upwards to the number and store every number in the Array
  for( var i = 2; i <= numb; i++){
     numArr.push(i);
  }

 const primeArr = numArr.filter((number) => {
    for (var i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) return false;
    }
    return true;
  });
  console.log(primeArr);
 }

primeFactor(10);

/*********************** ********************* */
/* Closest floor elevator */
/* Given 2 elevators (named "left" and "right") in a building with 3 floors (numbered 0 to 2), write a function elevator accepting 3 arguments (in order): */
/* It should return the name of the elevator closest to the called floor ("left"/"right").

In the case where both elevators are equidistant from the called floor, choose the elevator to the right. */

const closestElevator = (left, right, call) =>{
  if( Math.abs(call - left) < Math.abs(call - right)  ) {
    return "left";
  } 
  return "right";
}

console.log(closestElevator(1, 1, 1));


//Compare two Arrays and find the difference and store it in a new Array
/********************** **********************/
function diffArray(arr1, arr2) {
  var newArr = [];
  //arr1
  //grab Array[i], loop throught Arra
  const compareArr = ( firstArr, secondArr ) => {
      firstArr.map(item =>{
          if(secondArr.includes(item)){
              //nothing
          } else{
              newArr.push(item)
          }
      });
  }
  
  compareArr(arr1, arr2);
  compareArr(arr2, arr1);

  console.log(newArr)
}
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);


/* FREECODECAMP */
//Basic Algorithms
//Convert Celsius to Fahrenheit
function convertToF(celsius) {
  let fahrenheit = celsius * (9/5) + 32
  return fahrenheit;
}

convertToF(30);



//Reverse a String
function reverseString(str) {
  return [...str].reverse().join("");
}

reverseString("hello");


//Factorialize a number
function factorialize(num) {

  const store = [];

  for( let i = 1; i <= num; i++) {
    store.push( i );
  }

  const reducedStore = store.reduce( (a, b) =>{
	  return a * b
  }, 1); 

  return reducedStore;

}

factorialize(5);


//Largest word in a string sentence
function findLongestWordLength(str) {

  const wordsArray = str.split(" ");
  let largestWord = wordsArray[0];

  for( let word of wordsArray) {
    word.length > largestWord.length ? largestWord = word : "";
  }

  return largestWord.length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");


//Largest num from each sub-Array inside of a main Array
function largestOfFour(arr) {

  const largestNumsArray = [];

  for( let subArray of arr ) {
    largestNumsArray.push( Math.max( ...subArray ) );
  }

  return largestNumsArray;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


//Confirm the String ending
function confirmEnding(str, target) {

  return str.slice(str.length - target.length) === target;
}

confirmEnding("Bastian", "ian");

//Repeat a String
//Not using str.repeat
function repeatStringNumTimes(str, num) {

  let string = '';
  // repeat after me
  if(num === 0) {
    return '';
  } else {
    for(let i = 1; i <= num; i++) {
      string += str;
    }
  }

  return string;
}

repeatStringNumTimes("abc", 3);


//Truncate a str if it's longer than the given argument
function truncateString(str, num) {
  // Clear out that junk in your trunk

  return str.length > num ? `${str.slice(0, num)}...` : str;
  
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);