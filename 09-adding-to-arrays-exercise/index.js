/**
 * create an array "animals" with "cat"
 */

/**
 * Exercise 1
 *
 * add a "dog" to the end of your 'animals'
 *
 * NOTE: console.log() the result to see the difference
 */


/**
 * Exercise 2
 *
 * add a "rabbit" to the very beginning of your 'animals'
 *
 * PS: console.log() the result to see the difference
 */


/**
 * Exercise 3
 *
 * add a "puma" to position 2 in "animals"
 *
 * PS: console.log() the result to see the difference
 */




/**
 * create an array "wildAnimals" with "lion"
 */

/**
 * create an array "moreWildAnimals" with "giraffe" and "elephant"
 */

/**
 * Exercise 4
 *
 * combine wildAnimals and moreWildAnimals into one array
 * and save it into variable combinedWildAnimals
 *
 * PS: console.log() the result to see the difference
 */

var animals = ["cat"];
animals.push("dog");
console.log(animals);
animals.unshift("rabbit");
console.log(animals);

animals.splice(1, 0, "puma");
console.log(animals);

var wildAnimals = ["lion"];
var moreWildAnimals = ["giraffe", "elephant"];

var combinedWildAnimals = wildAnimals.concat(moreWildAnimals);
console.log(wildAnimals);
console.log(moreWildAnimals);
console.log(combinedWildAnimals);


