const words = require("./words.json") 
/** 
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

*/

//BONUS

// function lettersMatch(letters) {
// // Check if the input is valid.
//     if (letters.length > 5) {
//         console.log ("The input list of letters must be at most 5 letters long.");
//   }

//  // Create a map to store the number of occurrences of each letter in the input.
//     const letterCounts = {};
//     for (const letter of letters) {
//         letterCounts[letter] = (letterCounts[letter] || 0) + 1;
//  }
   
//  // Filter the list of words to only include words that contain all of the input letters.
//     const matchingWords = words.filter((word) => {
//         for (const letter of letters) {
//         if (!letterCounts[letter] || !word.includes(letter)) {
//             return false;
//      }
//    }

//     return true;
//  });

//     return matchingWords;
//     }


// const letters = process.argv[2];
// const conclusion = lettersMatch(letters);
// console.log(conclusion);

/**
  Write a function `letttersExactMatch` that lets you input a five-character string. Put letters with the exact placement in their place, and put a placeholder like `.` or `_` for unknown letters.
 */

function lettersExactMatch(letters, words){
    // Check if the input is valid.
    if (letters.length > 5) {
        console.log ("The input list of letters must be at most 5 letters long.");
  }
    const exactMatch = [];
    for (let i = 0; i <letters.length; i++){
        if (letters[i] !== words[i]){
            exactMatch.push('❌')
        }else{
            exactMatch.push(letters[i])
        }
    }
    return exactMatch.join("");
}

console.log(lettersExactMatch("adorn", "acorn"))

/** STILL NEED TO WORK ON THIS
function lettersPosition(letters, words, exactMatch = false){

    // Check if the input is valid.
    if (letters.length > 5) {
        console.log ("The input list of letters must be at most 5 letters long.");
  }
    // Create a set of the input letters.
    const lettersSet = new Set(letters);

    // Filter the list of words to only include words that contain all of the input letters.
    const matchingWords = words.filter((word) => {
        if (exactMatch) {
        return word === letters.join("");
  } else {
        return lettersSet.every((letter) => word.includes(letter));
  }
});

return matchingWords;
}

/*





