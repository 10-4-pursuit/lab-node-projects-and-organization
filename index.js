const words = require("./words.json");

function allWords() {
    console.log(words);
    }
    allWords();

 

function firstTenWords() {
    const tenWords = [];
    for (let i = 0; i < 10; i ++) {
        tenWords.push(words[i])
    }
    console.log(tenWords);
}
firstTenWords()




function nextTenWords() {
    const nextTen = [];
    for (let i = 10; i < 20; i ++) {
        nextTen.push(words[i]);
    } 
    console.log(nextTen)
 }
 nextTenWords()



function firstXWords(x) {
    console.log(words.slice(0, x))
 }
 firstXWords(30)




function subsetOfWords(x, y) {
    console.log(words.slice(x, y))
 }
 subsetOfWords(20, 40)



function sortWords() {
console.log(words.sort())
}
sortWords()
