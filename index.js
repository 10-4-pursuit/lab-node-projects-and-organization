const words = require("./words.json");

// `allWords` logs all the words.
function allWords() {
    console.log(words);
}
allWords();

// `firstTenWords` logs the first ten words.
function firsTenWords() {
    console.log(words.slice(0, 10));
}
firsTenWords();

// `nextTenWords` logs the next 10 words.
function nextTenWords() {
    console.log(words.slice(10, 20));
}
nextTenWords();

// `firstXWords` logs from 0 to x words. Should use x as a parameter.
function firstXWords(x) {
    console.log(words.slice(0, x));
}
firstXWords(6);

// `subsetOfWords` logs from x to y words. Should use x and y as a parameter to show were to start and end.
function subsetOfWords(x, y) {
    console.log(words.slice(x, y));
}
subsetOfWords(8, 16);

// `sortWords` logs all the words, sorted alphabetically.
function sortWords() {
    console.log(words.sort());
}
sortWords();

// `wordsWithQ` returns all the words that contain the letter q.
function wordsWithQ() {
    let qWords = [];

    for (let word of words) {
        if (word.includes("q")) {
            qWords.push(word);
        }
    }
    console.log(qWords);
}
wordsWithQ();

const letter = process.argv[2];
const halfWord = words.slice(0, 5);

// `findWordsWithLetter` takes an argument `letter` and returns all the words with that matching letter.
function findWordsWithLetter() {
    let wordWithLetter = [];

    for (let word of halfWord) {
        if(word.includes(letter)) {
            wordWithLetter.push(word);
        }
    }
    console.log(wordWithLetter);
}
findWordsWithLetter();

// Write a function `lettersMatch` that lets you input up to 5 letters in any order and returns the words that match the criteria (don't worry about solving for duplicate letters).
function lettersMatch(match) {
    if (match.length !== 5) {
        return `Enter a 5 letter word.`;
    }

    let matchedWords = words.filter(word => {
        for (let letter of match) {
            if (!word.includes(letter)) {
                return false;
            }
        }
        return true;
    })
    return matchedWords;
}
console.log(lettersMatch('coqui'));

// Write a function `letttersExactMatch` that lets you input a five-character string. Put letters with the exact placement in their place, and put a placeholder like `.` or `_` for unknown letters.
function letttersExactMatch(match, target) {
    if (match.length !== 5) {
        return `Enter a 5 letter word.`;
    }

    let exactWord = [];

    for (let i = 0; i < match.length; i++) {
        if (target[i] !== match[i]) {
            exactWord.push('.');
        } else {
            exactWord.push(target[i]);
        }
    }
    return exactWord.join("")
}
console.log(letttersExactMatch('cobui', 'coqui'));