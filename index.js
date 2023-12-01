const words = required("./words.json");

function allWords() {
    console.log(words);
}

allWords();

function firstTenWords() {
    const firstIndex  = 10;
    const wordLog = words.slice(0, );
    console.log(wordLog);
}


function nextTenWords(){
    const firstIndex = 10;
    const wordLog = 10;
    const lastIndex = Math.min(firstIndex + wordLog , words.length);
    const listOfWords = words.slice(firstIndex, lastIndex );
    console.log(wordLog);
}

function firstXWords(x) {
    const wordLog = words.slice(0, x);
    console.log(wordLog);
}

function subsetOfWords(x, y) {
    const wordLog = words.slice(x, y);
    console.log(wordLog);
}

function sortWords() {
    const organizedWords = [...words].sort();
    console.log(organizedWords);
}

allWords();
firstTenWords();
nextTenWords();
firstXWords(10);
subsetOfWords(10, 20);
sortWords();

const wordList = [
    "pear",
    "queen anne cherry",
    "cherry",
    "grape",
    "kiwi",
    "orange",
    "lime",
    "apple",
    "lemon",
    "banana",
  ];
  
  
  function wordsWithQ(wordArray) {
    return wordArray.filter((word) => word.includes("q"));
  }
  
  
  let letter = "";
  
  
  function findWordsWithLetter(wordArray, letter) {
    return wordArray.filter((word) => word.includes(letter));
  }
  
  
  if (process.argv.length < 3) {
    console.log("p");
  } else {
    const matchingWords = findWordsWithLetter(wordList, letter);
    letter = process.argv[2];
    console.log(`Words with ${letter}:`, matchingWords);
  }
  
  console.log(`Words with q:`, wordsWithQ(wordList));
  console.log(`Words with p:`, findWordsWithLetter(wordList, "p"));
  console.log("Words with 'e':", findWordsWithLetter(wordList, 'e'));
  console.log("Words with 'a':", findWordsWithLetter(wordList, 'a'));
  console.log("Words with 'z':", findWordsWithLetter(wordList, 'z'));