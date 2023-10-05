const words = require('./words.json');

console.log(words);

function allWords() {
    console.log(words);
}

allWords();

function firstTenWords(words) {
    let firstTen = [];
    for (let i = 0; i < 10; i++) {
        firstTen.push(words[i]);
    }
    console.log(firstTen);
}

firstTenWords(words);

function nextTenWords(words) {
    const nextTen = words.slice(10, 20);
    console.log(nextTen);
}

nextTenWords(words);

function firstXWords(words, x) {
    let xWords = [];
    for (let i = 0; i < Math.min(x, words.length); i++) {
        xWords.push(words[i]);
    }
    console.log(xWords);
}

firstXWords(words, 15);

function subsetOfWords(words, x, y) {
    let xYWords = [];
    for (let i = x; i < y; i++) {
        if (i < words.length) {
            xYWords.push(words[i]);
        }
    }
    console.log(xYWords);
}

subsetOfWords(words, 20, 50);

function sortWords(words) {
    const sortedWords = [...words];
    console.log(sortedWords.sort());
}

sortWords(words);

function wordsWithQ(words) {
    let letterQWords = [];
    for (let i = 0; i < words.length; i++) {
        if (words[i].includes("q")) {
            letterQWords.push(words[i]);
        }
    }
    console.log(letterQWords);
}

wordsWithQ(words);

const sampleWords = ["apple", "banana", "cherry", "date", "fig", "grape", "kiwi", "lemon", "mango", "orange"];

function findWordsWithLetter(letter) {
    let matchingWords = [];

    for (let i = 0; i < sampleWords.length; i++) {
        if (sampleWords[i].includes(letter)) {
            matchingWords.push(sampleWords[i]);
        }
    }

    return matchingWords;
}

const argument = process.argv[2];

if (argument) {
    const letterToFind = argument.toLowerCase();
    const foundWords = findWordsWithLetter(letterToFind);

    if (foundWords.length > 0) {
        console.log(`Words containing the letter '${letterToFind}':`);
        console.log(foundWords);
    } else {
        console.log(`No words found containing the letter '${letterToFind}'.`);
    }
} else {
    console.log("Please provide a letter as an argument.");
}