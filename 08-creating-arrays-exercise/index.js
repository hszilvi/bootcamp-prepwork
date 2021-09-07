/**
 * Exercise 1
 *
 * Create an array "wildAnimals" and add 'tiger', 'rabbit',
 * 'panda' and 'giraffe' into it as strings
 */

/**
 * Exercise 2
 *
 * Create an array "pets" and add 'cat', 'dog' and 'hamster'
 * into it as strings(must contains dog)
 */

/**
 * Exercise 3
 *
 * Create a variable "animals". It should include all wildAnimals
 * and all pets. Find the way to concatenate your arrays with JS
 */

/**
 * Exercise 4
 *
 * create a dogIndex variable and by using "findIndex" JS method
 * find dog index in "animals" array
 */

/**
 * Exercise 5
 *
 * create a pandaIndex variable and by using "indexOf" JS method
 * find panda index in "animals" array
 */

/**
 * create a variable with name "numbers"  which will be an array
 * and contain numbers from 1 to 9(ascending) and from 9 to 1(descending)
 * (each number should be twice in this array).
 */

/**
 * Exercise 6
 *
 * Create variable "first4DigitIndex" and from "numbers"
 * find index of first instance of digit 4
 */

/**
 * Exercise 7
 *
 * Create variable "last4DigitIndex" and from "numbers"
 * find index of last instance of digit 4
 */

/**
 * Exercise 8
 *
 * Create variable "hasSeven" check does "numbers"
 * contains 7
 */

/**
 * Exercise 9
 *
 * Create variable "hasTwenty" check does "numbers"
 * contains 20
 */

/**
 * Exercise 10
 *
 * Create variable "moreThanFour" returns first number
 * from "numbers" that is more than 4
 */

/**
 * Exercise 11
 *
 * Create variable "moreThanSevenIndex" returns first number
 * from "numbers" that are more or equal 7
 */


 const wildAnimals = ["tiger", "rabbit", "panda", "giraffe"];
 wildAnimals.length > 3;

 const pets = ["cat", "dog", "hamster"];
 pets.length >= 3;

 const animals = wildAnimals.concat(pets);

 var dogIndex = animals.findIndex(x => x === "dog");

 var pandaIndex = animals.findIndex(x => x === "panda");

 var numbers = [];
 for (var i=1; i <= 9; i++) {
     numbers.push(i);
 }
 for (var i=9; i > 0; i--) {
    numbers.push(i);
}

var first4DigitIndex = numbers.indexOf(4);
var last4DigitIndex = numbers.lastIndexOf(4);

var hasSeven = numbers.includes(7);

var hasTwenty = numbers.includes(20);

var moreThanFour = numbers.find(element => element > 4);

var moreThanSevenIndex = numbers.find(element => element >= 7);