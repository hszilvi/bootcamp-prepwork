const target = 15;
const userValue = "15";

const password = "JSisKool888";
const passwordConfirmation = "JSisCool888";

const sortOrder = "ALPHABETICAL";

// ADD YOUR CODE BELOW

let targetMatchesCoercedUserValue = target == 15;

let targetMatchesUserValue = userValue === 15;

let passwordMatchesConfirmation = password === passwordConfirmation;


let passwordMessage;
if (password !== passwordConfirmation) {
    passwordMessage = "Oops, your password and confirmation do not match!";
};


let fruits = "banana, cherry, watermelon";
if (sortOrder == "ALPHABETICAL") {
    fruits = "banana, cherry, watermelon"
};
