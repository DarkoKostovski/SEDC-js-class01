const userInput = prompt('Enter a year:');
const year = parseInt(userInput);

if (!isNaN(year)) {
  const zodiacIndex = (year - 4) % 12;
  const chineseZodiacs = [
    'Rat', 'Ox', 'Tiger', 'Rabbit',
    'Dragon', 'Snake', 'Horse', 'Goat',
    'Monkey', 'Rooster', 'Dog', 'Pig'
  ];

const zodiacSign = chineseZodiacs[zodiacIndex];
console.log(`The Chinese Zodiac sign for the year ${year} is: ${zodiacSign}`);
} else {
console.log('Invalid input. Please enter a valid year.');
}