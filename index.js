const words = require("./words.json")
function allWords(){
    console.log(words)
}
allWords()

function firstTenWords(){
   const newArr = words.slice(0,10)
   console.log(newArr)
}
firstTenWords()

function nextTenWords() {
newArrTwo = []
for(let i = 10; i < 20; i ++){
    newArrTwo.push(words[i])
}
    console.log(newArrTwo)
}
nextTenWords()

function firstXWords(x) {
    newArrThree = []
     
    for(let i = 0; i < x && i < words.length; i++){
        
        newArrThree.push(words[i])
    }
    console.log(newArrThree)
}

firstXWords()

function subsetOfWords(x, y)  {
    newArr4 = []
    for(let i = x; i < y && i < words.length; i++){
        
        newArr4.push(words[i])
    }
    console.log(newArr4)
}

subsetOfWords()

function wordsWithQ(word) {
   let newArr5 =[]
    for(let i = 0; i < words.length; i++){
        let word = words[i]
        for(let j = 0; j < word.length; j++){
            if(word[j] === "q"){
              newArr5.push(word)
            }
        }
    }
    console.log(newArr5)
}

wordsWithQ()

function findWordsWithLetter(word, letter) {
   let newArr6 =[]
    for(let i = 0; i < words.length; i++){
        let word = words[i]
        for(let j = 0; j < word.length; j++){
            if(word[j] === letter){
              newArr6.push(word)
            }
        }
    }
    console.log(newArr6)
}

findWordsWithLetter()


function sortWords() {

    words.sort((a,b) => a.toLowerCase().localeCompare(b.toLowerCase()))
    console.log(words)
}


sortWords()