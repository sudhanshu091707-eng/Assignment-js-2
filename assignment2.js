// Answer of Question 1
//---------------------------

function reverseString(str) {
    let result = ""; //empty string to store reversed characters

    for (let i = str.length - 1; i >= 0; i--) {
        result = result + str[i]; // add each character to new string
    }

    return result; //return reversed string
}

console.log(reverseString("hello")); // calling function and printing the result

//*********************************************************************

// answer of question 2
//--------------------------

function isPalindrome(str) {
    let reverse = ""; //created empty string to store reversed word

    for (let i = str.length - 1; i >= 0; i--) {
        reverse = reverse + str[i]; //add each character to reverse string
    }

    if (str === reverse) { //compare original string with the reversed string
        return true; //return true if both strings are equal
    } else {
        return false; //return false if both strings are different
    }
}

console.log(isPalindrome("madam")); //check if madam is palindrome

//****************************************************************/

//  answer of question 3
//--------------------------

function countVowelsConsonants(str) {
    let vowels = 0; // creating a variable to count vowels
    let consonants = 0; // creating a variable to count consonants

    for (let i = 0; i < str.length; i++) { //loop through every character of string

        let ch = str[i].toLowerCase(); // convert current character into lowecase

        if (ch >= 'a' && ch <= 'z') {

            if ("aeiou".includes(ch)) { // check if the character is a vowel
                vowels++;
            } else {
                consonants++;
            }
        }
    }

    console.log("Vowels:", vowels); // print total number of vowel
    console.log("Consonants:", consonants); // print total number of consonants
}

countVowelsConsonants("hello"); //call the function with hello

//******************************************************************

//  answer of question 4
//---------------------------

function secondLargest(arr) {

    let largest = -infinity;
    let second = -infinity;

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] > largest) { //check if current number is largest

            second = largest; // move the previous largest number to second
            largest = arr[i]; //update the largest number

        } else if (arr[i] > second && arr[i] !== largest) { //check if the current number is second largest

            second = arr[i]; // update the second largest number
        } 
    }

    if (second === -Infinity) { //check if second distinct number exist
        return null; // return null if no second largest number exist
    }

    return second; // returnthe second largest number
}

console.log(secondLargest([10, 5, 20, 8, 20])); //find and print the second largest

//********************************************************

//  answer of question 5
//---------------------------

function removeDuplicates(arr) {

    let result = []; //create an empty array

    for (let i = 0; i < arr.length; i++) { //check every element ofthe original array

        if (!result.includes(arr[i])) { //check if current element is not already present
            result.push(arr[i]); //add new element to result
        }
    }

    return result; //return the array without duplicates
}

console.log(removeDuplicates([1, 2, 2, 3, 1])); // print array after removing duplicates

//****************************************************************

//  answer of question 6
//----------------------------

function sumEven(arr) {
    let sum = 0; //create a variable to store the total sum

    for (let i = 0; i < arr.length; i++) { //check every number in array

        if (arr[i] % 2 === 0) { // check number is even
            sum = sum + arr[i]; // add even number to tolal sum
        }
    }

    return sum; //return the final sum
}

console.log(sumEven([1, 2, 3, 4, 5, 6])); // print sum of all even number

//***************************************************************


// Answer of question 7
//----------------------------

function frequency(arr, num) {
    let count = 0; //create variable to count occurrences

    for (let i = 0; i < arr.length; i++) { //check every element of array

        if (arr[i] === num) { // check current number match the given num
            count++; //increase the count if match
        }
    }

    return count; // return total frequency
}

console.log(frequency([1, 2, 2, 3, 2, 4], 2)); // count how many times the number 2 appears

//***************************************************************


// answer of question 8
//--------------------------------

function areAnagrams(str1, str2) {

    if (str1.length !== str2.length) { //check both strings have equal length
        return false; // return false if their length are different
    }

    let a = str1.toLowerCase().split("").sort().join(""); //convert to lowercase,split,sort and join first string
    let b = str2.toLowerCase().split("").sort().join(""); //convert to lowercase,split,sort and join second string

    if (a === b) { //compare both sorted string
        return true; // return true if both strings are equal
    } 
    else {
        return false; //return false if both strings are different
    }
}

console.log(areAnagrams("listen", "silent")); // check if listen and silent are anagram

//*****************************************************************


// Answer of question 9
//--------------------------------

function moveZeros(arr) {
    let result = []; // create an empty array to store non-zero numbers

    for (let i = 0; i < arr.length; i++) { //check every element of original array

        if (arr[i] !== 0) { //check whether the current number is not zero
            result.push(arr[i]); // add the non-zero number to the result array
        }
    }

    while (result.length < arr.length) { //continue until both array have equal length
        result.push(0); //add zeros at the end of result arrray
    }

    return result; //retirn the final array with zeros at end
}

console.log(moveZeros([0, 1, 0, 3, 12])); // print array after moving all zeros

