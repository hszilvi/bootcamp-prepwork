const myName = "Szilvia"; // SET YOUR NAME

const visitors = ["Alex", "Mike", "Sam", "Bob", "Alice"]; // Add at least 5 names

function greetVisitors() {
    for (let i = 0; i < visitors.length; i++) {
        console.log("Hi " + visitors[i] + " my name is " + myName +"!");
    }
}

/**
 * Exercise 1
 *
 * create a function {greetVisitors} and inside it write for loop which
 * will greet all people from "visitors" for each person you should
 * console.log "Hi {name}, my name is {myName}!"
 */

// ========================
const numbers = [2, 123, 13, 1, 6, 84, 23, 12, 45]; // DON'T TOUCH THIS LINE :)

function getElementIndex(value) {
    for (i = 0; i < numbers.length; i++) {
        if (numbers[i] === value) {
            return i;
        }
    }
    return "Item not found";
}

function total() {
    let summa = 0;
    for (i = 0; i < numbers.length; i++) {
        summa += numbers[i];
    }
    return summa;
}

/**
 * Exercise 2
 * Create a function {getElementIndex} that uses a for loop to find the index of a
 * given item in {numbers}.
 * If the item is not present, return a string "Item not found"
 */

// ========================

/**
 * Exercise 3
 * Create a function {total} that will return sum of all numbers
 * from {numbers} array
 */

// ========================

const numbersForIndexes = [6, 2, 16, 23, 84, 21, 9, 3]; // DON'T TOUCH THIS LINE :)

function addIndex()
{
    let retval = []
    for (i = 0; i < numbersForIndexes.length; i++) {
        retval.push(numbersForIndexes[i] + i);
    }
    return retval;
}

/**
 * Exercise 4
 * Create a function {addIndex} that takes {numbersForIndexes} array,
 * and returns a new array which includes each number + it's index
 */

const forLowestNumber = [5, 234, 96, 34, -34, 0, 23]; // DON'T TOUCH THIS LINE :)

function lowestNumber() {
    if (forLowestNumber.length == 0) {
        throw "empty array";
    }
    let minval = forLowestNumber[0];
    for (i = 1; i < forLowestNumber.length; i++) {
        if (forLowestNumber[i] < minval) {
            minval = forLowestNumber[i];
        }
    }
    return minval;
}
/**
 * Exercise 5
 *  create function {lowestNumber} which will return the lowest integer
 * from {forLowestNumber}
 */
