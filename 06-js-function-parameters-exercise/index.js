/**
 * Exercise 1
 *
 * create a function "myName" which takes param(string)
 * of your name and console.log "My name is YOUR_NAME"
 */

/**
 * Exercise 2
 *
 * create a function "myAge" which takes param(string)
 * of your age and console.log "I'm YOUR_AGE years old"
 */

/**
 * Exercise 3
 *
 * create a function "aboutMe" which takes 2 params
 * your original city and country and console.log
 * "I'm from YOUR_CITY, YOUR_COUNTRY"
 */

/**
 * Exercise 4
 * create a function "logSum" which will take any 2 numbers
 * as params and log sum.
 */

function myName(param) {
    console.log(typeof param);
    console.log("My name is " + param); 
};

function myAge(param) {
    console.log(typeof param);
    console.log("I'm " + param + " years old");
};

function aboutMe(param1, param2) {
    console.log("I'm from " + param1 + ", " + param2);
};

function logSum(number1, number2) {
    console.log(number1 + number2);
};