const words = require("./words.json");

function allWords() {
    console.log(words);
}
allWords();

function firstTenWords() {
    const wordHolder = [];
    for (let i = 0; i < 10; i++) {
        wordHolder.push(words[i]); 
    }
    console.log(wordHolder);
}
firstTenWords();

function nextTenWords() {
    console.log(words.slice(10, 20));
}
nextTenWords();

function firstXWords(x) {
    console.log(words.slice(0, x));
}
firstXWords(25);

function subsetOfWords(x, y) {
    console.log(words.slice(x, y));
}
subsetOfWords(0, 100);

function sortWords() {
    console.log(words.sort());
}
sortWords();

function wordsWithQ() {
    let specificWords = [];
    for (const word of words) {
        if (word.includes("q")) {
            specificWords.push(word)
        }
    }
    console.log(specificWords);
}
wordsWithQ();

console.log(process.argv);

const letter = process.argv[2];

const halvedWords = words.slice(0,5)

function findWordsWithLetter() {
    let specificLetter = [];

    for (const word of halvedWords) {
        if (word.includes(letter)) {
            specificLetter.push(word)
        }
    }
    console.log(specificLetter);    
}
findWordsWithLetter();



function lettersMatch() {
    
}
lettersMatch();