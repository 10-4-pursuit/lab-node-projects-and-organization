const data = require("./words.json");
// console.log(process.argv);
function allWords() {
    console.log(data)
}

allWords();

function firstTenWords() {
    for(let i = 0; i < 10;i++){
        console.log(data[i])
    }
}

firstTenWords();

function nextTenWords() {
 console.log(data.slice(10,20))
}

nextTenWords();

function firstXWords(x) {
    console.log(data.slice(0,x))
}

firstXWords(25)

function subsetOfWords(x,y){
    console.log(data.slice(x,y))
}

subsetOfWords(40,50)

function sortWords(){
    console.log(data.sort())
}

sortWords()

function wordsWithQ() {
    let specialWords = []
    for(let word of data){
        if(word.includes("q")){
            specialWords.push(word)
        }
    }
    console.log(specialWords)
}

wordsWithQ()

function findWordsWithLetter(letter) {
  for (let i = 2; i < process.argv.length; i++) {
    const letter = process.argv[i];
    const matchingLetter = data.filter((word) => {
      const letterCount = word.split(letter).length - 1;
      return letterCount === 1;
    });

    const moreThanOneLetter = data.filter((word) => {
      const letterCount = word.split(letter).length - 1;
      return letterCount > 1;
    });

    const noLetterFound = data.filter((word) => {
      const letterCount = word.split(letter).length - 1;
      return letterCount === 0;
    });

    if (noLetterFound.length > 0) {
      console.log(noLetterFound,`This is an array of words with no "${letter}" found`
      );
    }
    if (matchingLetter.length > 0) {
      console.log(
        matchingLetter,
        `This is an array of words that contain the letter "${letter}"`
      );
    }
    if (moreThanOneLetter.length > 0) {
      console.log(
        moreThanOneLetter,
        `This is an array of words with more than one "${letter}"`
      );
    }
  }
}

findWordsWithLetter();
