const userInput = prompt('Enter something:');

if (!isNaN(userInput)) {
console.log(`${userInput} is a number.`);
} else {
console.log(`${userInput} is not a number.`);
}
