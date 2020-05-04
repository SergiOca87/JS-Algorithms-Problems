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



//Where art thou
function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line

const sourceKeys = Object.keys(source);

for ( let item of collection ) {
    if( item[Object.keys(source)] === source[sourceKeys] ){
      arr.push(item)
    }
}

return arr;

}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });



// Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased.

// The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

//Try a map or a double map, map inside a map, first separate word, then go letter by letter

//But this is not a bad way to do it..
function toWeirdCase(string){

  const split = [...string];
  
  let count = 0;
  
  const result = [];
  
  split.forEach((letter) => {
    if(letter !== ' ') {
    count % 2 === 0 || count === 0 ? result.push(letter.toUpperCase()) : result.push(letter.toLowerCase());
    count += 1
   } else {
     count = 0;
     result.push(' ');
   }
  }) 
  
  return result.join('');
  
  }


  // Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

  // If a word begins with a vowel you just add "way" to the end.

  // If a word does not contain a vowel, just add "ay" to the end.
  //Needs a lot of refactoring

  function translatePigLatin(str) {
 
    const vowels = ["a", "e", "i", "o", "u"];
    const splits = str.split("");
  
      for (let i = 0; i < vowels.length; i++){
          if(str[0] === vowels[i]) {
            return str + "way"
          } 
      }
      
    for(var i = 0; i < splits.length; i++) {
          for(var j = 0; j < vowels.length; j++) {
            if(splits[i] === vowels[j]) {
              var consonant = splits.splice(0, i);
              console.log(consonant, splits.join(""));
              
              return splits.join("") + consonant.join("") + "ay";
            }
          }
       }
       return splits.join("") + "ay"
    }  
   
  translatePigLatin("schwartz");



  // Search and Replace, preserves case sensitive of the replaced word

  function myReplace(str, before, after) {

    let arrayFromStr = str.split(' ');
  
    let newArrayFromStr = arrayFromStr.map( (word) => {
      if( word === before && after[0] === after[0].toUpperCase() ) {
          return word = after.charAt(0).toUpperCase() + after.substring(1);
      } else if ( word === before && word[0] === word[0].toUpperCase() ) {
          return word = after.charAt(0).toUpperCase() + after.substring(1);
      } else if ( word === before ){
          return word = after;
      } else {
          return word = word;
      }
      
    });
  
    return newArrayFromStr.join(' ');
    
  }
  
  myReplace("He is Sleeping on the couch", "Sleeping", "sitting")

  // DNA Pairing 
  // The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

  // Base pairs are a pair of AT and CG. Match the missing element to the provided character.
  
  // Return the provided character as the first element in each array.
  
  // For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]
  function pairElement(str) {

    return str.split('').map(letter => letter === "A" ? ["A", "T"] 
      : letter === "T" ? ["T", "A"] 
      : letter === "C" ? ["C", "G"] : ["G", "C"]);
    
  }
  
  pairElement("GCG");



// Find the missing letter in the passed letter range and return it.

// If all letters are present in the range, return undefined.
  function fearNotLetter(str) {

    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const strLen = str.length;
    const chunk = alphabet.indexOf(str[0]);
    
      for(let i = chunk; i < chunk + strLen; i++){
        if(!str.includes(alphabet[i])){
          return alphabet[i];
        }
      }
      return undefined;
    }
    
    fearNotLetter("abce");
  


    // Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
    function uniteUnique(arr) {

      const args = [...arguments];
    
      const unifiedArr = [].concat(...args);
    
      //for loop could work too
      //Sets can only contain one of each element
      return [...new Set(unifiedArr)]
    
      
    }
    
    uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);


    // Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
    // if passed in 1, should return a number

    function sumFibs(num) {

      //Create a Fibonnaci sequence with the passed in num
      if( num <= 1 ) {
        return 1;
      } else {
        const startingArr = [1, 1];
        let counter = 1;
        while (counter < num) {
          startingArr.push( startingArr[startingArr.length - 1] + startingArr[startingArr.length - 2] );
          counter++
      }
      // Filter the sequence to include only odd numbers, smaller or equal than the given num.
      // Finally return a sum of all those nums
        return startingArr.filter( currentNum => currentNum % 2 !== 0 && currentNum <= num ).reduce((acc, num) => {
          return acc + num
        }, 0); 
      }
    }
    
    sumFibs(1000);


    // Sum all prime numbers smaller or equal than a given number
    function sumPrimes(num) {

      const numsArray = [];
      
        // Add each num smaller or equal than num in an initial Array
        for(let i = 1; i <= num; i++) {
          numsArray.push(i);
        }
      
        // Filter the Array to only include primes and then reduce it with a sum
        const primes = numsArray.filter( num => {
          for(let i = 2; i < num; i++)
            if(num % i === 0) return false;
          return num > 1;
        }).reduce( (accumulator, currentValue) => accumulator + currentValue );
        console.log(numsArray, primes)
        return primes;
      }
      
      sumPrimes(10);



      // Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.
      // Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.
      function dropElements(arr, func) {
  
        const cases = [...arr];
        let i = 0;
        while (!func(cases[i])) {
          arr.shift();
          i = i + 1;
        }
      
        return arr;
      }

      dropElements([0, 1, 0, 1], function(n) {return n === 1; });

    //  Also, a cleaner solution would be, figured out later:
      function dropElements(arr, func) {
        
        while (!func(arr[0])) {
          arr.shift();
        }

        return arr;
      }

    dropElements([1, 2, 3], function(n) {return n < 3; });


    //Translate Binary
    function binaryAgent(str) {

      const splitMessage = str.split(" ");
      const result = [];
    
    for ( let chunk of splitMessage ) {
          result.push( parseInt(chunk, 2) );
        }
    
        return result.map( char => String.fromCharCode( char ) ).join('');
    
    }
    
    binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
    
    

    // Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

    function truthCheck(collection, pre) {

      const isTruthy = (currentValue) => pre in currentValue && currentValue[pre];
      return collection.every(isTruthy);
    
  }
    
    truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");

    //Another solution with a loop
    function truthCheck(collection, pre) {

      let result;
    
      for(let i = 0; i < collection.length; i++) {
        if(pre in collection[i] && collection[i][pre]) {
          result = true
        } else {
          result = false
          break;
        }
      }
    
      return result;
    }
    
    truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");

  
      
//Convert to Roman
function convertToRoman(num) {

  const numbers = [1000, 500, 100, 50, 10, 5, 1];
  const romanNumerals = ['M', 'D', 'C', 'L', 'X', 'V', 'I'];

  let romanAccumulation = [];
  let regularAccumulation = num;

  const accumulate = () => {
      for(let i = 0; i < numbers.length; i++) {
          if( regularAccumulation >= numbers[i] ) {
              
              romanAccumulation.push(romanNumerals[i]);
              regularAccumulation -= parseInt(numbers[i]);
              console.log(`${regularAccumulation} is bigger than ${numbers[i]}, omanAccumulation is ${romanAccumulation}`)
              console.log(regularAccumulation)
                break;
          }
      
          //After this first loop check the amount that we have in romanNumerals
      }
  }

  while(regularAccumulation > 0) {
      accumulate()
  }

   //First check if romanAccumulation has repeated values
    const s = new Set(romanAccumulation);
    const hasRepeatedValue = romanAccumulation.length >= 4 && s.length !== romanAccumulation;
    console.log('hasrepeatedvalue', hasRepeatedValue);

    const repeatedValues = [];
   

    if(hasRepeatedValue) {
        
        for(let i = 0; i < romanAccumulation.length; i++) {
           if( romanAccumulation[i] === romanAccumulation [i + 1]) {
              repeatedValues.push(romanAccumulation[i]);
           
              if( repeatedValues.length === 3 ) {
                //replace the 3 repeated values by a single numeral, ina previous position in the romanNumerals Array:
                const romanNumeralIndex = romanNumerals.indexOf(repeatedValues[0]);
                
                const romanAccumulationIndex = romanAccumulation.indexOf(repeatedValues[0]);
                //months.splice(4, 1, 'May');
                // replaces 1 element at index 4
                romanAccumulation.splice(romanAccumulationIndex + 1, 3, romanNumerals[romanNumeralIndex - 1]);
                // romanAccumulation.push(romanNumerals[romanNumeralIndex - 1])
              }
            }
        };
        //Clean up the romanAccumulation Arr from repeated values
        romanAccumulation = [...new Set(romanAccumulation)]

    }
  
console.log('repeatedValues', repeatedValues, 'romanAccumulation', romanAccumulation)
  

return romanAccumulation.join("");
}

convertToRoman(4);