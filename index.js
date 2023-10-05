const words = require("./words.json")

function allWords(){
    console.log(words)
}
allWords()

function firstTenWords() {
    console.log(words.slice(0, 10))
}
firstTenWords()

function nextTenWords() {
    console.log(words.slice(10, 21))
}
nextTenWords()

function firstXWords(x) {
    console.log(words.slice(0, x))
}
firstXWords(13)

function subsetOfWords(x,y) {
    console.log(words.slice(x-1, y))
}
subsetOfWords(10,20)

function sortWords() {
    console.log(words.sort())
}
sortWords()

function wordsWithQ() {
    return words.filter(word => word.includes("q"))
}
wordsWithQ()


function findWordsWithLetter(letter1) {
    let output= []
   for (let word of words.slice(0,10)) {
    for (let letter of word) {
        if (letter === letter1) {
            output.push(word)
        }
    }
   } 
//    output.join(", ")
   console.log(output)
}
console.log(process.argv)
const variable = process.argv[2]
findWordsWithLetter(variable)


