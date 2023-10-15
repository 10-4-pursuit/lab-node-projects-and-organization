const words = require("./words.json");

function allWords(){
    console.log(words);
}

allWords();


function firstTenWords() {
    const wordHolder = [];
    for(let i = 0; i < 10; i ++) {
        wordHolder.push(words[i])
    }
    console.log(wordHolder);
}

firstTenWords();


function nextTenWords() {
newArr2 = [];
for(let i = 10; i < 20; i++){
    newArr2.push(words[i]);
}
    console.log(newArr2)
}

nextTenWords()


function firstXWords(words, x) {
    newArr3 = []
    for(let i = 0; i < x && i < words.length; i++){
        newArr3.push(words[i])
    }
    console.log(newArr3)
}
firstXWords()


function subsetOfWords(x, y) {
    newArr4 = []
    for(let i = x; i < y && i < words.length; i++){

        newArr4.push(words[i])
    }
    console.log(newArr4)
}

subsetOfWords()


function sortWords() {
    words.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
    console.log(words)
}

sortWords()


function wordsWithQ(word) {
    let newArr5 = []
    for(let i = 0; i < words.length; i++){
        let word = words[i]
        for(let j = 0; j < word.length; j++){
            if(word[j] ===  "q"){
                newArr5.push(word)
            }
        }
    }
    console.log(newArr5)
}

wordsWithQ()


function findWordsWithLetter(word, letter) {
    let newArr6 = []
    for( i = 0; i < words.length; i++){
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


function lettersMatch(guess) {
    if (guess.length !== 5) {
        reurn `please enter 5 letter word`
    }
    const filteredWords = words.filter(word => {
        for(let letter of guess) {
            if (word.includes(letter)) {
                return true
            }
        }
        return false
    }) 
    return filteredWords
}
console.log(lettersMatch(`lodge`));


function lettersExactMatch(guess, target) {

    if (guess.length !== 5) {
        return `please enter 5 letter word`
    }
    const aStack = [];
        for(let i = 0; i < guess.length; i++) {
            if(target[i] !== guess [i]) {
               aStack.push('_')
            } else {
                aStack.push(target[i])
            }
        }
    return aStack
}
console.log(lettersExactMatch('acorn', 'adorn'));