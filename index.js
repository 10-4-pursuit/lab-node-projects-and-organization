const words = require("./words.json");

function allWords() {
    console.log(words);
}

allWords();

function firstTenWords() {
    const wordHolder = [];
    for(let i = 0; i < 10; i++) {
        wordHolder.push(words[i])
    }
    console.log(wordHolder);
}

firstTenWords(words);

function nextTenWords() {
    const wordHolder = words.slice(10, 20);
    console.log(wordHolder);
}
nextTenWords();

function firstXWords(words, x) {
    if (x < 0 || x > words.length) {
        console.log("Invalid value of x.");
        return;
    }
    const firstXWordsArray = words.slice(0,x);
    console.log(firstXWordsArray);
}
firstXWords(words, 26);

function subsetOfWords(words, x, y) {

    if (x < 0 || y >= words.length || x > y) {
        console.log("Invalid values of x and y.");
        return;
    }
    const subsetWordsArray = words.slice(x, y + 1);
    console.log(subsetWordsArray);
}
subsetOfWords(words, 33, 88);

function sortWords(words) {
    const sortedWords = [...words];

    sortedWords.sort();
    console.log(sortedWords)
}
sortWords(words);

function wordsWithQ(words) {
    const wordsWithQArray = words.filter(word => word.includes('q'));
    return wordsWithQArray;
}
const qWords = wordsWithQ(words);
console.log(qWords);


function findWordsWithLetter(words, letter) {
    const wordsWithLetterArray = words.filter(word => word.includes(letter));
    return wordsWithLetterArray;
}

const exampleWords = ["tread", "brith", "yogin", "yobby", "konks", "sayid"];

if(process.argv.length !== 4) {
    console.log("Please provide one letter as a command-line argument. ");
} else {
    const letterToFind = process.argv[3].toLowerCase();
    const matchingWords = findWordsWithLetter(exampleWords, letterToFind);

    if (matchingWords.length === 0) {
    console.log(`No words containing the letter '${letterToFind}' were found.`);

} else {
    console.log(`Words containng the letter '${letterToFind}' : `);
    console.log(matchingWords);

  }
}
findWordsWithLetter(words, `letter: s`);

function lettersMatch(guess) {
    if (guess.length !== 5) {
        return `Please enter a 5 letter word`;
    }
    const filteredWords = words.filter(word => {
        for (let letter of guess) {
            if (word.includes(letter)) {
                return true;
            }
        }
        return false;
    })
    return filteredWords;
}

console.log(lettersMatch(`lodge`));


function letttersExactMatch(guess, target) {

    if (guess.length !== 5) {
        return `Please enter a 5 letter word`
    }
    const aStack = [];
        for (let i = 0; i < guess.length; i++) {
            if (target[i] !== guess[i]) {
                aStack.push(`_`)
            } else {
                aStack.push(target[i])
            }
        }
        return aStack
}

console.log(letttersExactMatch(`match`, `adorn`));