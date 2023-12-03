const words = require("./words.json");
console.log(words);

function allWords() {
    console.log(words);
}
allWords();

function firstTenWords() {
    const wordHBucket = []
    for (let i = 0; i < 10; i++) {
        wordHBucket.push(words[i])
    }
    console.log(words.slice(0, 10))
}
firstTenWords();

function nextTenWords() {
    const wordPail = []
    for (let i = 10; i < 20; i++) {
        wordPail.push(words[i])
    }
    console.log(words.slice(10, 20))
}
nextTenWords();

function firstXWords() {
    const wordBin = []
    let x = words.length;
    for (let i = 0; i < x; i++) {
        wordBin.push(words[i])
    }
    console.log(words.slice(0, x))
}
firstXWords();

function subsetOfWords(x, y, words) {
    if (x >= 0 && y < words.length && x <= y) {
        const newSub = words.slice(x, y)
        console.log(newSub)
    }
}
subsetOfWords(5, 10, words);

function sortWords() {
    const alpha = words.sort() 
    console.log(alpha)
}
sortWords();


function wordsWithQ() {
    const qBox = [];
    for (let word of words) {
        if (word.includes("q")) {
            qBox.push(word)
        }
    }
    console.log(qBox)
}
wordsWithQ();

function findWordsWithLetter(letter, words) {
    
    const wordsWithMultipleLetter = [];
    const wordsWithoutLetter = [];
    const wordsWithLetter = []; 

    for (let word of words) {
        if (word.includes(letter)) {
            wordsWithLetter.push(word);
         
            if (words.split('').filter(char => char === letter).length > 1) {
                wordsWithMultipleLetter.push(word);
            }    
        } else { 
            wordsWithoutLetter.push(word);
        }   
     console.log(wordsWithLetter);
     console.log(wordsWithoutLetter);
     console.log(wordsWithMultipleLetter);
    }
}
findWordsWithLetter(letter, words);    
