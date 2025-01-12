/**
 * Exercise 1
 *
 * create a global variable "myFavoriteAnimal" and
 * assign your favorite animal
 */

/**
 * Exercise 2
 *
 * create a function "myAnimalWithLog", which will have
 * console.log with the message "My favorite animal is `myFavoriteAnimal`"
 * Check developer tools in your browser for the message
 */

/**
 * Exercise 3
 *
 * create a function "myAnimalWithWarn", which will have
 * console.warn with the message "My favorite animal is `myFavoriteAnimal`"
 * Check developer tools in your browser for the message
 * and see the difference with console.log
 */

/**
 * Exercise 4
 *
 * create a function "myAnimalWithError", which will have
 * console.error with the message "My favorite animal is `myFavoriteAnimal`"
 * Check developer tools in your browser for the message
 * and see the difference with console.log
 */

/**
 * Exercise 5
 * create a function "myCity", which will have
 * alert(read about it) with the message "My favorite city is YOUR_CITY"
 *
 */
var myFavoriteAnimal = "kakapo";

function myAnimalWithLog() {
    console.log("My favorite animal is " + myFavoriteAnimal);
};

function myAnimalWithWarn() {
    console.warn("My favorite animal is " + myFavoriteAnimal);
};

function myAnimalWithError(f) {
    console.error("My favorite animal is " + myFavoriteAnimal);
};

function myCity(yourCity) {
    alert("My favorite city is" + yourCity);
};