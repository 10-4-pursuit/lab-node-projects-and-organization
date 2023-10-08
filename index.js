const words = require("./words.json");

// console.log(words);

function allWords() {
    console.log(words);
}
allWords();

function firstTenWords() {
    console.log(words.slice(0, 10));
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
subsetOfWords(0,100);


function sortWords() {
    words.sort();
    console.log(words);
}
sortWords();


                                     //Bonus of my own (backwards alphabetical)
// function sortWordsBackwards() {      
//     words.sort(function (a, b){
//         if (a > b) {
//             return -1;
//         }
//         if (b > a) {
//             return 1;
//         }
//         return 0;
//     });
//     console.log(words);
// }
// sortWordsBackwords();



function wordsWithQ() {
    return words.filter(word => word.includes('q'));
}
console.log(wordsWithQ());

function findWordsWithLetter(letter) {
    return words.filter(word => word.includes(letter));
}
console.log(findWordsWithLetter('b'));

//BONUS
function lettersMatch(guess) {
    if (guess.length !== 5) {
        return 'please enter 5 letter word'
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
console.log(lettersMatch('adept'));


function letttersExactMatch(guess, target) {
    if (guess.length !== 5) {
        return 'please enter 5 letter word'
    }
    const aStack = [];

    for (let i = 0; i < guess.length; i++) {
        if (target[i] !== guess[i]) {
            aStack.push('_');
        } else {
            aStack.push(target[i]);
        }
    }
    return aStack;
}
console.log(letttersExactMatch('acorn', 'adorn'));