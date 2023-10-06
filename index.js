const words = require("./words.json");
// -allWords logs all the words.
function allWords() {
  console.log(words);
}

// -firstTenWords logs the first ten words
function firstTenWords() {
  const numWordsToLog = 10;
  const wordsToLog = words.slice(0, numWordsToLog);
  console.log(wordsToLog);
}
firstTenWords();
// - nextTenWords logs the next 10 words.
function nextTenWords() {
  const startIndex = 10;
  const numWordsToLog = 10;
  const endIndex = Math.min(startIndex + numWordsToLog, words.length);
  const wordsToLog = words.slice(startIndex, endIndex);
  console.log(wordsToLog);
}

//- firstXWords logs from 0 to x words.
function firstXWords(x) {
  const wordsToLog = words.slice(0, x);
  console.log(wordsToLog);
}

//- subsetOfWords logs from x to y words.

function subsetOfWords(x, y) {
  const wordsToLog = words.slice(x, y);
  console.log(wordsToLog);
}
//- sortWords logs all the words, sorted alphabetically.
function sortWords() {
  const sortedWords = [...words].sort();
  console.log(sortedWords);
}

// Call functions
allWords();
firstTenWords();
nextTenWords();
firstXWords(10);
subsetOfWords(10, 20);
sortWords();


// wordle solver functions

//Sample set of words
const wordList =['pear', 'queen anne cherry', 'cherry', 'grape', 'kiwi', 'orange', 'lime', 'apple', 'lemon', 'banana' ]

//Function to return all words containing the letter q
function wordsWithQ(wordArray) {
    return wordArray.filter(word => word.includes('q'))
}

// Initializes  letter to an empty string
let letter = ''

//Function to find with matching letter
function findWordsWithLetter(wordArray, letter) {
    return wordArray.filter(word => word.includes(letter))
}

//Checks if a letter arg was provided
if (process.argv.length < 3) {
    console.log('P');
}else {
    const matchingWords = findWordsWithLetter(wordList, letter)
    letter = process.argv
    console.log(`Words with ${letter}:`, matchingWords );
}
//Test Cases
console.log(`Words with q:`, wordsWithQ(wordList));
console.log(`Words with p:`, findWordsWithLetter(wordList, 'p'));