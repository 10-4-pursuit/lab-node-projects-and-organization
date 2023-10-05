const words = require("./words.json");

function allwords() {
    console.log(words)
}
allwords()

function firstTenWords() {
    // const wordHolder = []
    // for(let i = 0; i < 10; i++ ) {
    // wordHolder.push(words[i])
    // }
    // console.log(wordHolder)
    console.log(words.slice(0, 10))
}
firstTenWords()

function nextTenWords() {
    console.log(words.slice(10, 20))
}
nextTenWords()

function firstXWords(x) {
    console.log(words.slice(0, x))
}
firstXWords(30)

function subsetOfWords(x, y) {
    console.log(words.slice(x, y))
}
subsetOfWords(40, 50)

function sortWords() {
    console.log(words.sort())
}
sortWords()

function wordsWithQ() {
    let newArray = []
    for (let word of words) {
        if (word.includes("q")) {
            newArray.push(word)
        }
    }
    console.log(newArray)
}
wordsWithQ()



console.log(process.argv)
const letter = process.argv[2] 

function findWordsWithLetter() {
    let newArray= [];

    for (let word of words) {
        if (word.includes(letter)) {
            newArray.push(word);
        }
    }
    console.log(newArray)
}
findWordsWithLetter()

