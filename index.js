const words = require('./words.json');

function allWords() {
    console.log(words);
    // return data;
}

allWords();

function firstTenWords() {
    console.log(words.slice(0,10));
}

firstTenWords();

function nextTenWords(){
    console.log(words.slice(10,20));
}

nextTenWords();

function firstXWords(x) {
    console.log(words.slice(0,x));
}

firstXWords(2);

function subsetOfWords(x,y) {
    console.log(words.slice(x,y));
}

function sortWords() {
    console.log(words.sort());
}

sortWords()

/////////////////////////////////////////////