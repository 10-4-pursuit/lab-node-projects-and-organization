const words = require("./words.json") 

function allWords(words) {
// logs all the words
    console.log(words);

} 
// allWords(words)


function firstTenWords(words) {
 // logs the first ten words
    return  words.slice(0, 10);

} 


function nextTenWords(words) {
//logs the next 10 words
    return words.slice(11, 20);

}



function firstXWords(x) {
//logs from 0 to x words
    return words.slice(0, x);
}



function subsetOfWords(x,y) {
//logs from x to y words
    return words.slice(x, y);
}

function sortWords(words) {
//logs all the words, sorted alphabetically
    return words.sort();

}

function wordsWithQ(words){
//returns all the words that contain the letter q
    return (words.filter((word => word.includes("q"))))
}

// console.log(wordsWithQ(words))

function findWordsWithLetter(letter){
    return words.filter(word => word.includes(letter));  
}

const letter = process.argv[2];
const result = findWordsWithLetter(letter);
console.log(result);





