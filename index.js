const words = require("./words.json");

function allWords(){

    console.log(words);
}
    allWords();

function firstTenWords(){
    const wordHolder = [];
    for( let i = 0; i < 10; i++ ){
        wordHolder.push(words[i]);
        
    }
    console.log(wordHolder);
} 
    firstTenWords();
function nextTenWords(){
    const wordHolder = [];
    for( let i = 10; i < 20; i++ ){
        wordHolder.push(words[i]);
        
    }
     console.log(wordHolder); 
}
nextTenWords();

function firstXWords( x ){
    const wordHolder = []; 
    for (let i = 0 ; i < x ; i++ ){
        wordHolder.push(words[i]);
    }
    console.log(wordHolder);
}
firstXWords(4);


function subsetOfWord( x, y ){

    const wordHolder = [];
    for (let i = x ; i < y ; i ++ ) {
        wordHolder.push(words[i]);
}
    console.log(wordHolder)
}
subsetOfWord( 3, 32);

function sortWords(){

    console.log( words.sort() );
}
    sortWords();


function wordsWithQ (words) {

    const qWords = [];
    for ( let i = 0 ; i < words.length ; i++) {
            if(
                words[i].includes("q")
            ){
            qWords.push(words[i]);
            }
     }
     return qWords;
}
console.log(wordsWithQ(words));

function findWordsWithLetter( words, letter){
   const wordWithLetter = [];
   letter = process.argv[2]
   for ( let i = 0 ; i < words.length ; i++) {
    if(
        words[i].includes(letter)
    ){
   wordWithLetter.push(words[i])
    }
}
     return wordWithLetter;
}
console.log(findWordsWithLetter(words , "o"))
